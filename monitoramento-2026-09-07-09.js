(() => {
  const node = document.querySelector('#monitoramento-dados');
  if (!node) return;
  let data;
  try { data = JSON.parse(node.textContent); } catch (error) { console.error('Base histórica inválida.', error); return; }

  const ig = path => `https://www.instagram.com/kieldamasceno/${path}`;
  const fb = path => `https://www.facebook.com/reel/${path}`;
  const tt = id => `https://www.tiktok.com/@ezequieldesouzadamasceno/video/${id}`;
  const comment = (texto, valencia, url, date, curtidas = null) => ({ texto, valencia, url, data: date, curtidas });
  const blank = { publicacoes: 0, curtidas: 0, comentarios_exibidos: 0, comentarios_revisados: 0, favoraveis: 0, neutros: 0, desfavoraveis: 0, nao_classificados: 0, repostagens: 0, favoritos: 0, curtidas_comentarios: 0, visualizacoes: 0 };

  const records = [
    {
      data: '2026-09-07', rotulo: '07/09', titulo: 'Interior, independência, água e fiscalização', tipo: 'publicações oficiais', status: 'verificado',
      visualizacoes_verificadas: 371, visualizacoes_redes_proprias: 371, visualizacoes_minimas: true,
      comentarios_unicos: 21, comentarios_revisados_unicos: 21,
      resumo: 'Publicações datadas de 07/09 somaram 371 visualizações confirmadas no TikTok. Foram preservadas 21 unidades de comentário sem duplicar a integração Meta: 13 manifestações externas favoráveis, uma contextual sobre perdas de água e sete intervenções operacionais.',
      sentimento: { favoraveis: 13, neutros: 1, desfavoraveis: 0 },
      redes: {
        instagram: { publicacoes: 2, curtidas: 49, comentarios_exibidos: 19, comentarios_revisados: 19, favoraveis: 8, neutros: 1, desfavoraveis: 0, nao_classificados: 10, repostagens: 9, favoritos: 0, curtidas_comentarios: 0, visualizacoes: null },
        facebook: { publicacoes: 2, curtidas: 10, comentarios_exibidos: 6, comentarios_revisados: 6, favoraveis: 4, neutros: 0, desfavoraveis: 0, nao_classificados: 2, repostagens: null, favoritos: 0, curtidas_comentarios: 0, visualizacoes: null },
        tiktok: { publicacoes: 2, curtidas: 9, comentarios_exibidos: 2, comentarios_revisados: 2, favoraveis: 1, neutros: 0, desfavoraveis: 0, nao_classificados: 1, repostagens: 0, favoritos: 1, curtidas_comentarios: 0, visualizacoes: 371 },
        threads: { ...blank }, youtube: { ...blank }, x: { ...blank }
      },
      comentarios: [
        comment('33.999', 'favorável', ig('reel/Dc-9b5cNNnW/'), '07/09'),
        comment('Esse é meu deputado!', 'favorável', ig('reel/Dc-9b5cNNnW/'), '07/09'),
        comment('Criou leis e incentivos para crianças c/ câncer, surdos e doenças metais. Além de ajudar o lar Frederico Ozanam na pandemia. Todos prometeram, porém ele já fez.', 'favorável', ig('reel/Dc-9b5cNNnW/'), '07/09'),
        comment('👏👏👏👏', 'favorável', ig('reel/Dc-9b5cNNnW/'), '07/09'),
        comment('O Interior é onde esta a força do nosso País e num é possivel q uma cidade como Salto não enxergue a necessidade de ter um representante pra chamar de seu na assembleia. Vamos la pessoal se num der certo na outra a gente tira. Mas vamos apostar Kiel 33.999', 'favorável', ig('reel/Dc-9b5cNNnW/'), '07/09'),
        comment('Foi responsável por leis que ajudaram criança com câncer, pessoas com doenças mentais e lar dos idosos.', 'favorável', ig('reel/Dc_61RxvCOz/'), '07/09'),
        comment('33999', 'favorável', ig('reel/Dc_61RxvCOz/'), '07/09'),
        comment('33999', 'favorável', ig('reel/Dc_61RxvCOz/'), '07/09'),
        comment('Aqui na cidade de salto o grande problema às vezes não é nem a falta de água, e sim, o que se perde por conta da rede antiga que acaba tendo um desperdício enorme!', 'neutro/contextual', ig('reel/Dc_61RxvCOz/'), '07/09'),
        comment('33999', 'favorável', `${fb('3267458806774542/')}?comment_id=2063263041226457`, '07/09'),
        comment('👏👏👏', 'favorável', `${fb('985089901290676/')}?comment_id=1311966365334541`, '07/09'),
        comment('33999', 'favorável', `${fb('985089901290676/')}?comment_id=1798652297828672`, '07/09'),
        comment('Exatamente!!', 'favorável', `${fb('985089901290676/')}?comment_id=869857272760737`, '07/09'),
        comment('o número é facil a escolha mais ainda', 'favorável', tt('7682836626724097297'), '07/09')
      ],
      fontes: [
        { label: 'Independência e interior · Instagram', url: ig('reel/Dc-9b5cNNnW/') }, { label: 'Água e fiscalização · Instagram', url: ig('reel/Dc_61RxvCOz/') },
        { label: 'Independência e interior · Facebook', url: fb('3267458806774542/') }, { label: 'Água e fiscalização · Facebook', url: fb('985089901290676/') },
        { label: 'Independência e interior · TikTok', url: tt('7682836626724097297') }, { label: 'Água e fiscalização · TikTok', url: tt('7682891447867067665') }
      ]
    },
    {
      data: '2026-09-08', rotulo: '08/09', titulo: 'Recuperação da gata e prevenção no Free Flow', tipo: 'publicações oficiais', status: 'verificado',
      visualizacoes_verificadas: 310, visualizacoes_redes_proprias: 310, visualizacoes_minimas: true,
      comentarios_unicos: 22, comentarios_revisados_unicos: 22,
      resumo: 'Publicações datadas de 08/09 somaram 310 visualizações confirmadas no TikTok. Foram preservadas 22 unidades sem duplicidade Meta: 15 manifestações externas favoráveis e sete intervenções operacionais.',
      sentimento: { favoraveis: 15, neutros: 0, desfavoraveis: 0 },
      redes: {
        instagram: { publicacoes: 2, curtidas: 65, comentarios_exibidos: 22, comentarios_revisados: 22, favoraveis: 11, neutros: 0, desfavoraveis: 0, nao_classificados: 11, repostagens: 17, favoritos: 0, curtidas_comentarios: 0, visualizacoes: null },
        facebook: { publicacoes: 2, curtidas: 15, comentarios_exibidos: 8, comentarios_revisados: 8, favoraveis: 4, neutros: 0, desfavoraveis: 0, nao_classificados: 4, repostagens: 2, favoritos: 0, curtidas_comentarios: 0, visualizacoes: null },
        tiktok: { publicacoes: 2, curtidas: 10, comentarios_exibidos: 0, comentarios_revisados: 0, favoraveis: 0, neutros: 0, desfavoraveis: 0, nao_classificados: 0, repostagens: 0, favoritos: 0, curtidas_comentarios: 0, visualizacoes: 310 },
        threads: { ...blank }, youtube: { ...blank }, x: { ...blank }
      },
      comentarios: [
        comment('Preta é guerreira e com esses cuidados logo estara bem ...❤️', 'favorável', 'https://www.instagram.com/p/DdB8wVhtp8e/c/18074922563424944/', '08/09'),
        comment('Guerreira! 🙏🏾', 'favorável', 'https://www.instagram.com/p/DdB8wVhtp8e/c/18281516587293723/', '08/09'),
        comment('Guerreira 🐾', 'favorável', 'https://www.instagram.com/p/DdB8wVhtp8e/c/18103816640615169/', '08/09'),
        comment('Parabéns Kiel pelos cuidados com os animais e com povo que precisa de ajuda...', 'favorável', 'https://www.instagram.com/p/DdB8wVhtp8e/c/18101128811023119/', '08/09'),
        comment('Nossa guerreira', 'favorável', 'https://www.instagram.com/p/DdB8wVhtp8e/c/18143391388598821/', '08/09'),
        comment('Guerreira Preta, que Deus abençoe imensamente por amar tanto ela e os animais @kieldamasceno', 'favorável', 'https://www.instagram.com/p/DdB8wVhtp8e/c/17905293666474968/', '08/09'),
        comment('33999', 'favorável', ig('reel/DdCYN1UPSvI/'), '08/09'),
        comment('Meu deputado! 3️⃣3️⃣9️⃣9️⃣9️⃣', 'favorável', ig('reel/DdCYN1UPSvI/'), '08/09'),
        comment('To contigo ate o fim. Acredito gosto e admiro 33999', 'favorável', ig('reel/DdCYN1UPSvI/'), '08/09'),
        comment('Meu deputado33999', 'favorável', ig('reel/DdCYN1UPSvI/'), '08/09'),
        comment('33999 Estou com vc até o fim', 'favorável', ig('reel/DdCYN1UPSvI/'), '08/09'),
        comment('Kiel 33999', 'favorável', `${fb('2062545381292239/')}?comment_id=2069924080320672`, '08/09'),
        comment('Kiel33999', 'favorável', `${fb('2062545381292239/')}?comment_id=1372727144947212`, '08/09'),
        comment('33999', 'favorável', `${fb('2062545381292239/')}?comment_id=1354446590010283`, '08/09'),
        comment('3️⃣3️⃣9️⃣9️⃣9️⃣', 'favorável', `${fb('2062545381292239/')}?comment_id=1045460211447118`, '08/09')
      ],
      fontes: [
        { label: 'Recuperação da gata · Instagram', url: ig('p/DdB8wVhtp8e/') }, { label: 'Free Flow · Instagram', url: ig('reel/DdCYN1UPSvI/') },
        { label: 'Recuperação da gata · Facebook', url: fb('1553306695998454/') }, { label: 'Free Flow · Facebook', url: fb('2062545381292239/') },
        { label: 'Recuperação da gata · TikTok', url: tt('7683208689158786322') }, { label: 'Free Flow · TikTok', url: tt('7683243009118407943') }
      ]
    },
    {
      data: '2026-09-09', rotulo: '09/09', titulo: 'Saúde, fiscalização e comentário novo em publicação anterior', tipo: 'publicações oficiais e revisão retroativa', status: 'verificado',
      visualizacoes_verificadas: 201, visualizacoes_redes_proprias: 201, visualizacoes_minimas: true,
      comentarios_unicos: 9, comentarios_revisados_unicos: 9,
      resumo: 'Publicações datadas de 09/09 somaram 201 visualizações confirmadas no TikTok. Foram preservadas nove manifestações externas: oito favoráveis e uma contextual de pesar pelo incêndio em publicação anterior. O comentário de 10/09 ficou fora do corte.',
      sentimento: { favoraveis: 8, neutros: 1, desfavoraveis: 0 },
      redes: {
        instagram: { publicacoes: 2, curtidas: 40, comentarios_exibidos: 9, comentarios_revisados: 9, favoraveis: 4, neutros: 0, desfavoraveis: 0, nao_classificados: 5, repostagens: 8, favoritos: 0, curtidas_comentarios: 0, visualizacoes: null },
        facebook: { publicacoes: 2, curtidas: 8, comentarios_exibidos: 4, comentarios_revisados: 4, favoraveis: 4, neutros: 0, desfavoraveis: 0, nao_classificados: 0, repostagens: null, favoritos: 0, curtidas_comentarios: 0, visualizacoes: null },
        tiktok: { publicacoes: 1, curtidas: 11, comentarios_exibidos: 1, comentarios_revisados: 1, favoraveis: 0, neutros: 1, desfavoraveis: 0, nao_classificados: 0, repostagens: 0, favoritos: 0, curtidas_comentarios: 0, visualizacoes: 201 },
        threads: { ...blank }, youtube: { ...blank }, x: { ...blank }
      },
      comentarios: [
        comment('Muito bom!! 3️⃣3️⃣9️⃣9️⃣9️⃣', 'favorável', ig('reel/DdEixIHtvr3/'), '09/09'),
        comment('Otimo👏👏33.999', 'favorável', ig('reel/DdEixIHtvr3/'), '09/09'),
        comment('Sempre em frente guerreiro', 'favorável', ig('reel/DdE3UVBNQ6G/'), '09/09'),
        comment('👏', 'favorável', ig('reel/DdE3UVBNQ6G/'), '09/09'),
        comment('Pode e deve. Vai pra cima', 'favorável', `${fb('1393578795546981/')}?comment_id=1115547927495319`, '09/09'),
        comment('33999', 'favorável', `${fb('1393578795546981/')}?comment_id=1612068240510468`, '09/09'),
        comment('GIF “Well Done/Applause”', 'favorável', `${fb('1393578795546981/')}?comment_id=988077337643345`, '09/09'),
        comment('33999', 'favorável', `${fb('1393578795546981/')}?comment_id=1348144197391734`, '09/09'),
        comment('Lamentável 🥲', 'neutro/contextual', tt('7680309941743176978'), '09/09 · publicação anterior')
      ],
      fontes: [
        { label: 'Saúde e fiscalização · Instagram', url: ig('reel/DdEixIHtvr3/') }, { label: 'Cobrança ao Governo do Estado · Instagram', url: ig('reel/DdE3UVBNQ6G/') },
        { label: 'Saúde e fiscalização · Facebook', url: fb('1393578795546981/') }, { label: 'Cobrança ao Governo do Estado · Facebook', url: fb('1505321011359309/') },
        { label: 'Saúde e fiscalização · TikTok', url: tt('7683554078768598273') }, { label: 'Comentário novo no vídeo do incêndio · TikTok', url: tt('7680309941743176978') }
      ]
    }
  ];

  const replaced = new Set(records.map(item => item.data));
  data.historico = [...(data.historico || []).filter(item => !replaced.has(item.data)), ...records].sort((a, b) => a.data.localeCompare(b.data));
  data.schema_version = 9;
  data.periodo = { ...(data.periodo || {}), fim: '2026-09-09T23:59:00-03:00' };
  data.coleta = '2026-09-10T12:00:00-03:00';
  data.contadores_observados_em = '2026-09-10';
  data.ultimo_periodo = {
    inicio: '2026-09-07T00:00:00-03:00', fim: '2026-09-09T23:59:00-03:00', status: 'verificado',
    publicacoes_plataforma: 17, publicacoes_examinadas: 18, comentarios_unicos: 52, comentarios_externos: 38,
    favoraveis: 36, neutros: 2, desfavoraveis: 0, operacionais: 14,
    curtidas: 217, comentarios: 52, repostagens_minimas: 36, visualizacoes_minimas: 882,
    redes: {
      instagram: { publicacoes: 6, curtidas: 154, comentarios_exibidos: 50, comentarios_revisados: 50, favoraveis: 23, neutros: 1, desfavoraveis: 0, nao_classificados: 26, repostagens: 34, visualizacoes: null },
      facebook: { publicacoes: 6, curtidas: 33, comentarios_exibidos: 18, comentarios_revisados: 18, favoraveis: 12, neutros: 0, desfavoraveis: 0, nao_classificados: 6, repostagens: 2, visualizacoes: null },
      tiktok: { publicacoes: 5, curtidas: 30, comentarios_exibidos: 3, comentarios_revisados: 3, favoraveis: 1, neutros: 1, desfavoraveis: 0, nao_classificados: 1, repostagens: 0, favoritos: 1, visualizacoes: 882 },
      threads: { ...blank }, youtube: { ...blank }
    }
  };
  data.seguidores_observados = { data: '2026-09-10', instagram: 4575, facebook_pagina: 420, tiktok: 911, tiktok_curtidas_perfil: 6740, threads: 123, youtube: null, soma_contadores: 6029, pessoas_unicas: false };
  node.textContent = JSON.stringify(data);
})();
