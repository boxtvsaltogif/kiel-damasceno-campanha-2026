class CampaignBackend {
  constructor(config) {
    this.url = config?.url || '';
    this.key = config?.publishableKey || '';
    this.siteUrl = config?.siteUrl || `${location.origin}${location.pathname}`;
    this.storageKey = 'kiel-campaign-session';
    this.preview = location.protocol === 'file:' || ['localhost', '127.0.0.1'].includes(location.hostname);
    this.session = null;
    this.profile = null;
    this.users = [];
  }

  isRemote() { return !this.preview; }
  isAdmin() { return this.profile?.role === 'admin'; }
  canWrite() { return this.preview || ['admin', 'operador'].includes(this.profile?.role); }
  displayName() { return this.profile?.display_name || this.session?.user?.email || 'Prévia local'; }
  email() { return this.profile?.email || this.session?.user?.email || ''; }

  authRedirectPath(path) {
    const separator = path.includes('?') ? '&' : '?';
    return `${path}${separator}redirect_to=${encodeURIComponent(this.siteUrl)}`;
  }

  showApp() {
    document.querySelector('#login-screen').hidden = true;
    document.querySelector('#app-shell').hidden = false;
    const label = document.querySelector('#current-user-display');
    if (label) label.textContent = this.displayName();
  }

  message(text, kind = '') {
    const element = document.querySelector('#auth-message');
    element.textContent = text;
    element.dataset.kind = kind;
  }

  async request(path, options = {}, authenticated = false) {
    const headers = {
      apikey: this.key,
      'Content-Type': 'application/json',
      ...options.headers
    };
    if (authenticated) {
      await this.ensureSession();
      headers.Authorization = `Bearer ${this.session.access_token}`;
    }
    const response = await fetch(`${this.url}${path}`, { ...options, headers });
    const text = await response.text();
    let data = null;
    try { data = text ? JSON.parse(text) : null; } catch { data = text; }
    if (!response.ok) {
      const error = new Error(data?.msg || data?.message || data?.error_description || 'Não foi possível concluir a operação.');
      error.status = response.status;
      throw error;
    }
    return data;
  }

  saveSession(data) {
    const expiresAt = data.expires_at || Math.floor(Date.now() / 1000) + Number(data.expires_in || 3600);
    this.session = { ...data, expires_at: expiresAt };
    localStorage.setItem(this.storageKey, JSON.stringify(this.session));
  }

  loadStoredSession() {
    try { this.session = JSON.parse(localStorage.getItem(this.storageKey) || 'null'); }
    catch { this.session = null; }
    return this.session;
  }

  async ensureSession() {
    if (!this.session) this.loadStoredSession();
    if (!this.session?.refresh_token) throw new Error('Sessão encerrada. Entre novamente.');
    if (Number(this.session.expires_at || 0) > Math.floor(Date.now() / 1000) + 90) return this.session;
    const fresh = await this.request('/auth/v1/token?grant_type=refresh_token', {
      method: 'POST', body: JSON.stringify({ refresh_token: this.session.refresh_token })
    });
    this.saveSession(fresh);
    return this.session;
  }

  async verifyAccess() {
    const email = this.session?.user?.email;
    if (!email) throw new Error('A conta não possui um e-mail válido.');
    const rows = await this.request(`/rest/v1/allowed_users?select=email,display_name,role,active&email=eq.${encodeURIComponent(email.toLowerCase())}`, {}, true);
    const profile = rows?.[0];
    if (!profile?.active) throw new Error('Este e-mail ainda não foi autorizado pelo administrador.');
    this.profile = profile;
    this.users = await this.listUsers();
    return profile;
  }

  async signIn(email, password) {
    const data = await this.request('/auth/v1/token?grant_type=password', {
      method: 'POST', body: JSON.stringify({ email, password })
    });
    this.saveSession(data);
    try { await this.verifyAccess(); }
    catch (error) { await this.logout(false); throw error; }
  }

  async signUp(email, password) {
    const data = await this.request(this.authRedirectPath('/auth/v1/signup'), {
      method: 'POST',
      body: JSON.stringify({ email, password, data: { application: 'campanha-kiel-2026' } })
    });
    if (data?.access_token) {
      this.saveSession(data);
      await this.verifyAccess();
      return true;
    }
    return false;
  }

  async recover(email) {
    await this.request(this.authRedirectPath('/auth/v1/recover'), { method: 'POST', body: JSON.stringify({ email }) });
  }

  async consumeAuthCallback() {
    const params = new URLSearchParams(location.hash.replace(/^#/, ''));
    const accessToken = params.get('access_token');
    const refreshToken = params.get('refresh_token');
    if (!accessToken || !refreshToken) return null;

    this.saveSession({
      access_token: accessToken,
      refresh_token: refreshToken,
      expires_in: Number(params.get('expires_in') || 3600),
      token_type: params.get('token_type') || 'bearer'
    });
    const user = await this.request('/auth/v1/user', {}, true);
    this.session.user = user;
    this.saveSession(this.session);
    history.replaceState(null, '', `${location.pathname}${location.search}`);
    return params.get('type') || 'confirmation';
  }

  preparePasswordReset(form, signup, recover, resolve) {
    document.querySelector('#login-title').textContent = 'Criar nova senha';
    document.querySelector('#login-email').closest('label').hidden = true;
    const password = document.querySelector('#login-password');
    password.value = '';
    password.autocomplete = 'new-password';
    password.closest('label').firstChild.textContent = 'Nova senha';
    form.querySelector('button[type="submit"]').hidden = true;
    signup.hidden = true;
    recover.hidden = true;

    const button = document.createElement('button');
    button.type = 'button';
    button.className = 'primary';
    button.textContent = 'Salvar nova senha';
    form.append(button);
    this.message('Digite uma nova senha com pelo menos 8 caracteres.');

    button.addEventListener('click', async () => {
      if (password.value.length < 8) {
        this.message('A nova senha precisa ter pelo menos 8 caracteres.', 'error');
        return;
      }
      button.disabled = true;
      this.message('Salvando sua nova senha...');
      try {
        const user = await this.request('/auth/v1/user', {
          method: 'PUT', body: JSON.stringify({ password: password.value })
        }, true);
        this.session.user = user;
        this.saveSession(this.session);
        await this.verifyAccess();
        this.showApp();
        resolve(this.profile);
      } catch (error) {
        button.disabled = false;
        this.message(error.message, 'error');
      }
    });
  }

  async initialize() {
    if (this.preview) {
      this.profile = { email: 'preview@local', display_name: 'Prévia local', role: 'admin', active: true };
      this.users = Array.from({ length: 10 }, (_, index) => ({
        email: index ? `operador${String(index + 1).padStart(2, '0')}@exemplo.com` : 'administrador@exemplo.com',
        display_name: index ? `Operador ${String(index + 1).padStart(2, '0')}` : 'Administrador',
        role: index ? 'operador' : 'admin', active: true
      }));
      this.showApp();
      return this.profile;
    }

    const form = document.querySelector('#login-form');
    const signup = document.querySelector('#signup-button');
    const recover = document.querySelector('#recover-button');

    let callbackType = null;
    try { callbackType = await this.consumeAuthCallback(); }
    catch (error) {
      localStorage.removeItem(this.storageKey);
      this.session = null;
      history.replaceState(null, '', `${location.pathname}${location.search}`);
      this.message(`O link de acesso não pôde ser confirmado: ${error.message}`, 'error');
    }

    let finishLogin;
    const waitForLogin = new Promise(resolve => {
      finishLogin = resolve;
      form.addEventListener('submit', async event => {
        event.preventDefault();
        const email = form.email.value.trim().toLowerCase();
        this.message('Conferindo seu acesso...');
        try {
          await this.signIn(email, form.password.value);
          this.showApp();
          resolve(this.profile);
        } catch (error) { this.message(error.message, 'error'); }
      });

      signup.addEventListener('click', async () => {
        const email = form.email.value.trim().toLowerCase();
        const password = form.password.value;
        if (!email || password.length < 8) {
          this.message('Informe um e-mail cadastrado e uma senha com pelo menos 8 caracteres.', 'error');
          return;
        }
        this.message('Ativando seu primeiro acesso...');
        try {
          const entered = await this.signUp(email, password);
          if (entered) { this.showApp(); resolve(this.profile); }
          else this.message('Confira seu e-mail para confirmar a conta. Depois, volte e clique em Entrar.', 'success');
        } catch (error) { this.message(error.message, 'error'); }
      });

      recover.addEventListener('click', async () => {
        const email = form.email.value.trim().toLowerCase();
        if (!email) { this.message('Digite seu e-mail primeiro.', 'error'); return; }
        try {
          await this.recover(email);
          this.message('Se o e-mail existir, você receberá as instruções para criar outra senha.', 'success');
        } catch (error) { this.message(error.message, 'error'); }
      });
    });

    if (callbackType === 'recovery') {
      this.preparePasswordReset(form, signup, recover, finishLogin);
      document.querySelector('#login-screen').hidden = false;
      return waitForLogin;
    }

    this.loadStoredSession();
    if (this.session) {
      try {
        await this.ensureSession();
        await this.verifyAccess();
        this.showApp();
        return this.profile;
      } catch { await this.logout(false); }
    }
    document.querySelector('#login-screen').hidden = false;
    return waitForLogin;
  }

  async getState() {
    const rows = await this.request('/rest/v1/campaign_state?select=state,updated_at&id=eq.1', {}, true);
    return rows?.[0]?.state || null;
  }

  async saveState(state, action, detail) {
    return this.request('/rest/v1/rpc/save_campaign_state', {
      method: 'POST',
      body: JSON.stringify({ p_state: state, p_action: action, p_detail: detail || '' })
    }, true);
  }

  async getAudit() {
    const rows = await this.request('/rest/v1/campaign_audit?select=created_at,actor_name,action,detail&order=created_at.desc&limit=2000', {}, true);
    return (rows || []).map(item => ({ at: item.created_at, actor: item.actor_name, action: item.action, detail: item.detail }));
  }

  async listUsers() {
    const rows = await this.request('/rest/v1/allowed_users?select=email,display_name,role,active,created_at&order=created_at.asc', {}, true);
    return rows || [];
  }

  async upsertUser(user) {
    const rows = await this.request('/rest/v1/allowed_users?on_conflict=email', {
      method: 'POST',
      headers: { Prefer: 'resolution=merge-duplicates,return=representation' },
      body: JSON.stringify({ ...user, email: user.email.toLowerCase(), created_by: this.session.user.id })
    }, true);
    this.users = await this.listUsers();
    return rows?.[0];
  }

  async removeUser(email) {
    if (email.toLowerCase() === this.email().toLowerCase()) throw new Error('Você não pode remover o próprio acesso enquanto está conectado.');
    await this.request(`/rest/v1/allowed_users?email=eq.${encodeURIComponent(email.toLowerCase())}`, { method: 'DELETE' }, true);
    this.users = await this.listUsers();
  }

  async logout(reload = true) {
    if (this.session?.access_token) {
      try { await this.request('/auth/v1/logout', { method: 'POST', headers: { Authorization: `Bearer ${this.session.access_token}` } }); }
      catch { /* A sessão local será removida mesmo se a rede falhar. */ }
    }
    localStorage.removeItem(this.storageKey);
    this.session = null;
    this.profile = null;
    if (reload) location.reload();
  }
}

window.campaignBackend = new CampaignBackend(window.CAMPAIGN_SUPABASE);
