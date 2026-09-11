(() => {
  const node = document.querySelector('#monitoramento-dados');
  if (!node) return;
  let data;
  try { data = JSON.parse(node.textContent); } catch (error) { console.error('Base histórica inválida.', error); return; }

  const ig = path => `https://www.instagram.com/kieldamasceno/${path}`;
  const fb = id => `https://www.facebook.com/reel/${id}/`;
  const tt = id => `https://www.tiktok.com/@ezequieldesouzadamasceno/video/${id}`;
  const comment = (texto, valencia, url, date, curtidas = null) => ({ texto, valencia, url, data: date, curtidas });
  const blank = { publicacoes: 0, curtidas: 0, comentarios_exibidos: 0, comentarios_revisados: 0, favoraveis: 0, neutros: 0, desfavoraveis: 0, nao_classificados: 0, repostagens: 0, favoritos: 0, curtidas_comentarios: 0, visualizacoes: 0 };

  const record = {
    data: '2026-09-10', rotulo: '10/09', titulo: 'Acolhimento na saúde e crise da água', tipo: 'publicações oficiais e revisão retroativa', status: 'verificado',
    visualizacoes_verificadas: 888, visualizacoes_redes_proprias: 888, visualizacoes_minimas: true,
    comentarios_unicos: 9, comentarios_revisados_unicos: 9,
    resumo: 'Cinco publicações oficiais datadas de 10/09 somaram pelo menos 888 visualizações verificáveis: 473 no Facebook e 415 no TikTok; o Instagram não mostrou visualizações. A leitura por data confirmou seis manifestações externas — cinco favoráveis e uma contextual sobre falta de água — e três intervenções operacionais, incluindo comentários novos em publicações antigas. Um comentário do TikTok não carregou texto nem data e ficou fora do total confirmado, como NÃO VERIFICÁVEL. Não houve comentário negativo confirmado.',
    sentimento: { favoraveis: 5, neutros: 1, desfavoraveis: 0 },
    redes: {
      instagram: { publicacoes: 2, curtidas: 25, comentarios_exibidos: 7, comentarios_revisados: 7, favoraveis: 4, neutros: 1, desfavoraveis: 0, nao_classificados: 2, repostagens: 5, favoritos: 0, curtidas_comentarios: 0, visualizacoes: null },
      facebook: { publicacoes: 1, curtidas: 3, comentarios_exibidos: 0, comentarios_revisados: 0, favoraveis: 0, neutros: 0, desfavoraveis: 0, nao_classificados: 0, repostagens: null, favoritos: 0, curtidas_comentarios: 0, visualizacoes: 473 },
      tiktok: { publicacoes: 2, curtidas: 14, comentarios_exibidos: 2, comentarios_revisados: 2, favoraveis: 1, neutros: 0, desfavoraveis: 0, nao_classificados: 1, repostagens: 1, favoritos: 3, curtidas_comentarios: 0, visualizacoes: 415 },
      threads: { ...blank }, youtube: { ...blank }, x: { ...blank }
    },
    comentarios: [
      comment('Vamos que vamos 33999', 'favorável', ig('reel/DdHfCS6tCsc/'), '10/09'),
      comment('Bora pra cima irmão!', 'favorável', ig('reel/DdHfCS6tCsc/'), '10/09'),
      comment('Excelente trabalho em Salto', 'favorável', ig('reel/DdHKQL4tkH6/'), '10/09'),
      comment('33999', 'favorável', ig('reel/DdHKQL4tkH6/'), '10/09'),
      comment('A povo de Salto esta abandonado no quesito Água. Precisa de soluções urgente. Pra cima', 'neutro/contextual', ig('reel/DdHKQL4tkH6/'), '10/09'),
      comment('DEUS ABENÇOE', 'favorável', tt('7683933210350292225'), '10/09')
    ],
    fontes: [
      { label: 'Acolhimento na saúde · Instagram', url: ig('reel/DdHfCS6tCsc/') },
      { label: 'Crise da água · Instagram', url: ig('reel/DdHKQL4tkH6/') },
      { label: 'Comentário novo em publicação anterior · Instagram', url: ig('reel/DdEixIHtvr3/') },
      { label: 'Acolhimento na saúde · Facebook', url: fb('1727156189415205') },
      { label: 'Acolhimento na saúde · TikTok', url: tt('7683977598296198407') },
      { label: 'Crise da água · TikTok', url: tt('7683933210350292225') },
      { label: 'Comentário novo em publicação anterior · TikTok', url: tt('7682836626724097297') },
      { label: 'Threads · última publicação em 04/09, sem respostas', url: 'https://www.threads.com/@kieldamasceno/post/Dc4TjJMGBsH' },
      { label: 'YouTube · busca autenticada sem publicação nova no período', url: 'https://www.youtube.com/results?search_query=%22Kiel+Damasceno%22' }
    ]
  };

  data.historico = [...(data.historico || []).filter(item => item.data !== record.data), record].sort((a, b) => a.data.localeCompare(b.data));
  data.schema_version = 10;
  data.periodo = { ...(data.periodo || {}), fim: '2026-09-10T23:59:00-03:00' };
  data.coleta = '2026-09-11T13:45:00-03:00';
  data.contadores_observados_em = '2026-09-11';
  data.ultimo_periodo = {
    inicio: '2026-09-07T00:00:00-03:00', fim: '2026-09-10T23:59:00-03:00', status: 'verificado com limites explícitos',
    publicacoes_plataforma: 22, publicacoes_examinadas: 34, comentarios_unicos: 61, comentarios_externos: 44,
    favoraveis: 41, neutros: 3, desfavoraveis: 0, operacionais: 17,
    curtidas: 259, comentarios: 61, repostagens_minimas: 42, visualizacoes_minimas: 1770,
    redes: {
      instagram: { publicacoes: 8, curtidas: 179, comentarios_exibidos: 57, comentarios_revisados: 57, favoraveis: 27, neutros: 2, desfavoraveis: 0, nao_classificados: 28, repostagens: 39, visualizacoes: null },
      facebook: { publicacoes: 7, curtidas: 36, comentarios_exibidos: 18, comentarios_revisados: 18, favoraveis: 12, neutros: 0, desfavoraveis: 0, nao_classificados: 6, repostagens: 2, visualizacoes: 473 },
      tiktok: { publicacoes: 7, curtidas: 44, comentarios_exibidos: 5, comentarios_revisados: 5, favoraveis: 2, neutros: 1, desfavoraveis: 0, nao_classificados: 2, repostagens: 1, favoritos: 4, visualizacoes: 1297 },
      threads: { ...blank }, youtube: { ...blank }
    }
  };
  data.seguidores_observados = { data: '2026-09-11', instagram: 4574, facebook_pagina: 420, tiktok: 913, tiktok_curtidas_perfil: 6761, threads: 123, youtube: null, soma_contadores: 6030, pessoas_unicas: false };
  data.limites_atuais = [
    'Instagram não exibiu visualizações dos Reels na sessão autenticada.',
    'O Facebook não exibiu o contador de compartilhamentos da publicação de 10/09.',
    'Um dos dois comentários exibidos nos vídeos novos do TikTok não carregou texto nem data; foi marcado como NÃO VERIFICÁVEL e não entrou na classificação.',
    'YouTube não possui canal oficial atual confirmado; a busca autenticada não encontrou publicação nova no período.'
  ];
  node.textContent = JSON.stringify(data);

  const tiktokDetails = document.querySelector('.monitor-tiktok-details');
  const tiktokTable = tiktokDetails?.querySelector('tbody');
  if (tiktokDetails) tiktokDetails.open = true;
  if (tiktokTable && !tiktokTable.querySelector('[data-monitor-update="2026-09-10"]')) {
    tiktokTable.insertAdjacentHTML('beforeend', `
      <tr data-monitor-update="2026-09-10"><td>07/09</td><td>2 vídeos</td><td>371</td><td>9</td><td>2</td><td>1</td><td><a href="${tt('7682836626724097297')}" target="_blank" rel="noopener noreferrer">Abrir</a></td></tr>
      <tr data-monitor-update="2026-09-10"><td>08/09</td><td>2 vídeos</td><td>310</td><td>10</td><td>0</td><td>0</td><td><a href="${tt('7683243009118407943')}" target="_blank" rel="noopener noreferrer">Abrir</a></td></tr>
      <tr data-monitor-update="2026-09-10"><td>09/09</td><td>1 vídeo</td><td>201</td><td>11</td><td>1 em publicação anterior</td><td>0</td><td><a href="${tt('7683554078768598273')}" target="_blank" rel="noopener noreferrer">Abrir</a></td></tr>
      <tr data-monitor-update="2026-09-10"><td>10/09</td><td>2 vídeos</td><td>415</td><td>14</td><td>2 confirmados; 1 adicional NV</td><td>3</td><td><a href="${tt('7683977598296198407')}" target="_blank" rel="noopener noreferrer">Abrir</a></td></tr>
    `);
  }
})();
