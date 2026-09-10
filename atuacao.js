(function () {
  const data = window.KIEL_ATUACAO_DATA;
  if (!data) return;

  const state = {
    mode: 'recursos',
    proofs: new Set(['Oficial', 'Informal'])
  };

  const $ = selector => document.querySelector(selector);
  const esc = value => String(value ?? '').replace(/[&<>'"]/g, char => ({'&':'&amp;','<':'&lt;','>':'&gt;',"'":'&#39;','"':'&quot;'}[char]));
  const money = value => Number.isFinite(value) ? value.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' }) : 'Valor não informado';
  const compactMoney = value => {
    if (!Number.isFinite(value)) return 'Não informado';
    if (value >= 1000000) return `R$ ${(value / 1000000).toLocaleString('pt-BR', { maximumFractionDigits: 2 })} mi`;
    if (value >= 1000) return `R$ ${Math.round(value / 1000).toLocaleString('pt-BR')} mil`;
    return money(value);
  };
  const sum = rows => rows.reduce((total, row) => total + (Number.isFinite(row.valor) ? row.valor : 0), 0);
  const unique = values => [...new Set(values)].sort((a, b) => String(a).localeCompare(String(b), 'pt-BR', { numeric: true }));
  const normalized = value => String(value || '').normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase();

  function fillSelect(selector, values) {
    const select = $(selector);
    values.forEach(value => select.insertAdjacentHTML('beforeend', `<option value="${esc(value)}">${esc(value)}</option>`));
  }

  function initializeFilters() {
    fillSelect('#recurso-categoria', unique(data.recursos.map(row => row.categoria)));
    fillSelect('#recurso-ano', unique(data.recursos.map(row => row.ano)));
    fillSelect('#recurso-execucao', unique(data.recursos.map(row => row.execucao)));
    fillSelect('#legislacao-status', unique(data.legislacao.map(row => row.status)));
    fillSelect('#legislacao-ano', unique(data.legislacao.map(row => row.ano)));
  }

  function resourceRows() {
    const category = $('#recurso-categoria').value;
    const year = $('#recurso-ano').value;
    const execution = $('#recurso-execucao').value;
    const query = normalized($('#recurso-busca').value);
    return data.recursos.filter(row => {
      const haystack = normalized([row.destino, row.ficha, row.categoria, row.observacao].join(' '));
      return state.proofs.has(row.comprovacao) && (!category || row.categoria === category) && (!year || row.ano === year) && (!execution || row.execucao === execution) && (!query || haystack.includes(query));
    });
  }

  function kpiCard(label, value, detail, help, kind = '') {
    const tooltip = help ? `<span class="help-wrap"><button class="help-button compact" type="button" aria-label="Explicação de ${esc(label)}" aria-expanded="false" aria-describedby="kpi-help-${normalized(label).replace(/\s+/g, '-')}" data-help-button>?</button><span class="question-help" id="kpi-help-${normalized(label).replace(/\s+/g, '-')}" role="tooltip">${esc(help)}</span></span>` : '';
    return `<article class="card atuacao-kpi ${kind}"><div><span>${esc(label)}</span>${tooltip}</div><strong>${esc(value)}</strong><small>${esc(detail)}</small></article>`;
  }

  function renderYearChart(rows) {
    const totals = new Map();
    rows.forEach(row => { if (Number.isFinite(row.valor)) totals.set(row.ano, (totals.get(row.ano) || 0) + row.valor); });
    const entries = [...totals.entries()].sort((a, b) => a[0] === 'não informado' ? 1 : b[0] === 'não informado' ? -1 : a[0].localeCompare(b[0], 'pt-BR', { numeric: true }));
    const max = Math.max(1, ...entries.map(([, value]) => value));
    $('#recursos-chart-ano').innerHTML = entries.length ? entries.map(([year, value]) => `<div class="atuacao-bar-item"><strong>${esc(compactMoney(value))}</strong><span class="atuacao-bar-track"><i style="height:${Math.max(7, value / max * 100)}%"></i></span><small>${esc(year === 'não informado' ? 'Sem ano' : year)}</small></div>`).join('') : '<p class="atuacao-empty">Nenhum valor disponível para os filtros selecionados.</p>';
  }

  function renderProofChart(rows) {
    const official = sum(rows.filter(row => row.comprovacao === 'Oficial'));
    const informal = sum(rows.filter(row => row.comprovacao === 'Informal'));
    const max = Math.max(1, official, informal);
    const bars = [['Oficial', official, 'official'], ['Informal', informal, 'informal']];
    $('#recursos-chart-proof').innerHTML = bars.map(([label, value, kind]) => `<div><span>${label}</span><i><b class="${kind}" style="width:${value ? Math.max(3, value / max * 100) : 0}%"></b></i><strong>${esc(money(value))}</strong></div>`).join('');
  }

  function resourceRecord(row) {
    const source = row.link ? `<a href="${esc(row.link)}" target="_blank" rel="noopener noreferrer">Abrir fonte oficial ↗</a>` : '<span>Fonte sem link direto</span>';
    const proofClass = row.comprovacao === 'Oficial' ? 'official' : 'informal';
    const executionClass = normalized(row.execucao).includes('pago') ? 'done' : normalized(row.execucao).includes('iniciada') ? 'started' : 'unconfirmed';
    return `<article class="atuacao-record">
      <div class="atuacao-record-main"><span class="record-year">${esc(row.ano)}</span><div><strong>${esc(row.destino)}</strong><small>${esc(row.categoria)} · ficha ${esc(row.ficha)}</small></div><strong class="record-value ${Number.isFinite(row.valor) ? '' : 'unknown'}">${esc(money(row.valor))}</strong><span class="record-badge ${proofClass}">${esc(row.comprovacao)}</span><span class="record-badge ${executionClass}">${esc(row.execucao)}</span></div>
      <details><summary>Ver detalhes e fonte</summary><dl><div><dt>Responsável informado</dt><dd>${esc(row.responsavel)}</dd></div><div><dt>Ano de execução</dt><dd>${esc(row.anoExecucao)}</dd></div><div><dt>Observação</dt><dd>${esc(row.observacao || 'Sem observação adicional.')}</dd></div>${row.verificar ? `<div><dt>O que falta verificar</dt><dd>${esc(row.verificar)}</dd></div>` : ''}<div class="record-source"><dt>Fonte registrada</dt><dd>${esc(row.fonte)} · ${source}</dd></div></dl></details>
    </article>`;
  }

  function renderResources() {
    const rows = resourceRows();
    const officialRows = rows.filter(row => row.comprovacao === 'Oficial');
    const informalRows = rows.filter(row => row.comprovacao === 'Informal');
    const years = rows.map(row => row.ano).filter(year => /^\d{4}$/.test(year)).map(Number);
    const period = years.length ? `${Math.min(...years)}–${Math.max(...years)}` : 'Não informado';
    $('#recursos-kpis').innerHTML = [
      kpiCard('Verba oficial', money(sum(officialRows)), `${officialRows.length} registros`, 'Valor localizado em documento público. A execução deve ser lida separadamente.', 'official'),
      kpiCard('Verba informal', money(sum(informalRows)), `${informalRows.length} registros; ${informalRows.filter(row => !Number.isFinite(row.valor)).length} sem valor`, 'Valor ou ação atribuída a Kiel em material de campanha, sem comprovação financeira direta.', 'informal'),
      kpiCard('Registros encontrados', rows.length.toLocaleString('pt-BR'), 'Conforme os filtros atuais', 'Cada registro é uma destinação ou ação individual da base.'),
      kpiCard('Período dos registros', period, `${rows.filter(row => !/^\d{4}$/.test(row.ano)).length} sem ano informado`, 'Mostra apenas os anos presentes nos resultados filtrados.')
    ].join('');
    $('#recursos-count').textContent = `${rows.length} ${rows.length === 1 ? 'registro encontrado' : 'registros encontrados'}`;
    $('#recursos-table').innerHTML = rows.length ? rows.map(resourceRecord).join('') : '<p class="atuacao-empty">Nenhum recurso corresponde a esta combinação de filtros.</p>';
    renderYearChart(rows);
    renderProofChart(rows);
  }

  function legislationRows() {
    const type = $('#legislacao-tipo').value;
    const status = $('#legislacao-status').value;
    const year = $('#legislacao-ano').value;
    const query = normalized($('#legislacao-busca').value);
    return data.legislacao.filter(row => {
      const haystack = normalized([row.numero, row.plOrigem, row.descricao, row.responsaveis].join(' '));
      return (!type || row.tipo === type) && (!status || row.status === status) && (!year || row.ano === year) && (!query || haystack.includes(query));
    });
  }

  function legislationRecord(row) {
    const statusClass = normalized(row.status);
    const source = row.link ? `<a href="${esc(row.link)}" target="_blank" rel="noopener noreferrer">Abrir consulta ↗</a>` : '<span>Fonte registrada na auditoria</span>';
    return `<article class="atuacao-record legislation-record"><div class="atuacao-record-main"><span class="record-year">${esc(row.ano)}</span><div><strong>${esc(row.numero)} · ${esc(row.descricao)}</strong><small>${esc(row.tipo)} · ${esc(row.responsaveis)}</small></div><span class="record-badge type">${esc(row.tipo)}</span><span class="record-badge ${esc(statusClass)}">${esc(row.status)}</span></div><details><summary>Ver datas, mandato e fonte</summary><dl><div><dt>Data registrada</dt><dd>${esc(row.data)}</dd></div><div><dt>PL de origem</dt><dd>${esc(row.plOrigem)}</dd></div><div><dt>Mandato</dt><dd>${esc(row.mandato)}</dd></div>${row.desfecho ? `<div><dt>Desfecho</dt><dd>${esc(row.desfecho)}${row.dataDesfecho ? ` · ${esc(row.dataDesfecho)}` : ''}</dd></div>` : ''}<div class="record-source"><dt>Fonte registrada</dt><dd>${esc(row.fonte)} · ${source}</dd></div></dl></details></article>`;
  }

  function renderLegislation() {
    const rows = legislationRows();
    const laws = rows.filter(row => row.tipo === 'Lei ordinária');
    const projects = rows.filter(row => row.tipo === 'Projeto de lei');
    $('#legislacao-kpis').innerHTML = [
      kpiCard('Leis ordinárias', laws.length.toLocaleString('pt-BR'), `${laws.filter(row => row.status === 'Vigente').length} vigentes`, 'Leis aprovadas cuja autoria ou coautoria está atribuída a Kiel na auditoria.'),
      kpiCard('Leis vigentes', laws.filter(row => row.status === 'Vigente').length.toLocaleString('pt-BR'), `${laws.filter(row => row.status === 'Revogada').length} revogadas`, 'Vigente significa que a lei continua em vigor na situação registrada pela auditoria.'),
      kpiCard('Projetos não aprovados', projects.length.toLocaleString('pt-BR'), `${projects.filter(row => row.status === 'Retirado').length} retirados`, 'Projetos que não viraram lei: foram retirados pelos autores ou arquivados.'),
      kpiCard('Projetos arquivados', projects.filter(row => row.status === 'Arquivado').length.toLocaleString('pt-BR'), 'Registro histórico', 'Arquivado significa que a tramitação foi encerrada sem o projeto virar lei.')
    ].join('');
    $('#legislacao-count').textContent = `${rows.length} ${rows.length === 1 ? 'registro encontrado' : 'registros encontrados'}`;
    $('#legislacao-table').innerHTML = rows.length ? rows.map(legislationRecord).join('') : '<p class="atuacao-empty">Nenhuma lei ou projeto corresponde a esta combinação de filtros.</p>';
  }

  function setMode(mode) {
    state.mode = mode;
    document.querySelectorAll('[data-atuacao-mode]').forEach(button => {
      const active = button.dataset.atuacaoMode === mode;
      button.classList.toggle('active', active);
      button.setAttribute('aria-pressed', String(active));
    });
    $('#atuacao-recursos-panel').hidden = mode !== 'recursos';
    $('#atuacao-legislacao-panel').hidden = mode !== 'legislacao';
    if (mode === 'recursos') renderResources(); else renderLegislation();
  }

  document.addEventListener('click', event => {
    const modeButton = event.target.closest('[data-atuacao-mode]');
    if (modeButton) { setMode(modeButton.dataset.atuacaoMode); return; }
    const proofButton = event.target.closest('[data-proof]');
    if (proofButton) {
      const proof = proofButton.dataset.proof;
      if (state.proofs.has(proof) && state.proofs.size === 1) return;
      if (state.proofs.has(proof)) state.proofs.delete(proof); else state.proofs.add(proof);
      document.querySelectorAll('[data-proof]').forEach(button => { const active = state.proofs.has(button.dataset.proof); button.classList.toggle('active', active); button.setAttribute('aria-pressed', String(active)); button.querySelector('span').textContent = active ? '✓' : '+'; });
      renderResources();
    }
    if (event.target.id === 'recursos-limpar') {
      ['#recurso-categoria', '#recurso-ano', '#recurso-execucao', '#recurso-busca'].forEach(selector => $(selector).value = '');
      state.proofs = new Set(['Oficial', 'Informal']);
      document.querySelectorAll('[data-proof]').forEach(button => { button.classList.add('active'); button.setAttribute('aria-pressed', 'true'); button.querySelector('span').textContent = '✓'; });
      renderResources();
    }
    if (event.target.id === 'legislacao-limpar') {
      ['#legislacao-tipo', '#legislacao-status', '#legislacao-ano', '#legislacao-busca'].forEach(selector => $(selector).value = '');
      renderLegislation();
    }
  });

  ['#recurso-categoria', '#recurso-ano', '#recurso-execucao'].forEach(selector => $(selector).addEventListener('change', renderResources));
  $('#recurso-busca').addEventListener('input', renderResources);
  ['#legislacao-tipo', '#legislacao-status', '#legislacao-ano'].forEach(selector => $(selector).addEventListener('change', renderLegislation));
  $('#legislacao-busca').addEventListener('input', renderLegislation);

  initializeFilters();
  renderResources();
  renderLegislation();
})();
