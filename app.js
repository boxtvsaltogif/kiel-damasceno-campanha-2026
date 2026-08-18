const sources={tse2026:{label:'Eleições 2026 — TSE',url:'https://www.tse.jus.br/eleicoes/eleicoes-2026'},propaganda:{label:'Resolução sobre propaganda — TSE',url:'https://www.tse.jus.br/eleicoes/eleicoes-2026-content/normas-e-documentacoes/arquivos-2026/resolucao-e-voto-propaganda/@@display-file/file/Resolucao-e-voto-propaganda.pdf'},lgpd:{label:'Lei nº 13.709/2018 (LGPD) — Planalto',url:'https://www.planalto.gov.br/ccivil_03/_ato2015-2018/2018/lei/l13709compilado.htm'},eleicoes:{label:'Lei nº 9.504/1997 — Planalto',url:'https://www.planalto.gov.br/ccivil_03/leis/l9504.htm'},anpd:{label:'Guia de segurança da informação — ANPD',url:'https://www.gov.br/anpd/pt-br/documentos-e-publicacoes/guia_seguranca_da_informacao_para_atpps___defeso_eleitoral.pdf'},resultados:{label:'Resultados eleitorais — TSE',url:'https://resultados.tse.jus.br/'},ibge:{label:'Cidades e Estados — IBGE',url:'https://www.ibge.gov.br/cidades-e-estados'},gerber:{label:'Field Experiments and the Study of Voter Turnout — APSR',url:'https://doi.org/10.1017/S0003055400227882'},kreiss:{label:'Prototype Politics — Oxford University Press',url:'https://global.oup.com/academic/product/prototype-politics-9780199350254'},ico:{label:'Caso Cambridge Analytica — ICO do Reino Unido',url:'https://ico.org.uk/action-weve-taken/investigation-into-data-analytics-for-political-purposes/'}};
const phases=[
{days:'Dias 1–5',title:'Governança e conformidade',objective:'Definir quem decide, quem executa e quais controles protegem a campanha desde o primeiro dia.',tasks:['Nomear coordenação geral, jurídico-eleitoral, financeiro e responsável por dados.','Criar matriz de responsabilidades com titular e substituto.','Abrir inventário de dados, riscos e fornecedores.','Validar calendário eleitoral de 2026 e rotina semanal de aprovação.'],questions:['Quem aprova gastos, peças e uso de dados?','Qual é o canal oficial para incidentes e urgências?','Quais bases de dados já existem, de onde vieram e para qual finalidade?'],ideal:'Uma página com organograma, responsáveis, prazos de resposta e registro de decisões; nenhum dado entra sem origem e finalidade.',cases:[['Sucesso · Obama 2008','A integração entre campo, tecnologia e gestão é estudada como exemplo de infraestrutura organizacional. A lição transferível é coordenação — não copiar técnicas de perfilamento.'],['Sucesso · campanhas com experimentos de campo','Estudos de Gerber e Green mostram que rotinas mensuráveis de mobilização podem ser avaliadas com método e transparência.'],['Insucesso · Cambridge Analytica','Uso de dados em contexto político gerou investigação e sanções. Falharam transparência, finalidade e controle sobre dados pessoais.']],refs:['tse2026','lgpd','ico'],explain:'Governança (regras de decisão) e accountability (responsabilização) evitam tarefas sem dono e permitem provar por que um dado foi usado.',law:'LGPD, arts. 6º, 37 e 46: aplique finalidade, registro das operações e segurança desde a concepção.'},
{days:'Dias 6–11',title:'Diagnóstico e território',objective:'Construir uma fotografia verificável do território usando somente dados públicos e agregados.',tasks:['Definir municípios e regiões prioritárias com critério explícito.','Baixar eleitorado e resultados apenas de fontes oficiais.','Registrar data, fonte e nível de confiança de cada número.','Separar população, eleitorado, votos válidos e comparecimento.'],questions:['Quais municípios formam a área de atuação real?','Qual dado está confirmado, estimado ou ainda não encontrado?','Onde a equipe já possui presença física verificável?'],ideal:'Mapa operacional por município com fonte, data de referência, presença da equipe e lacunas; nenhuma inferência sobre indivíduo.',cases:[['Sucesso · mapas de cobertura','Campanhas territoriais usam unidades geográficas para organizar agenda e equipe; o ganho vem da logística clara.'],['Sucesso · resultados oficiais abertos','O TSE permite comparar votação passada por território sem criar perfis pessoais.'],['Insucesso · população tratada como eleitorado','Misturar população do IBGE com cadastro eleitoral produz metas, orçamento e cobertura errados.']],refs:['resultados','ibge','tse2026'],explain:'Dado agregado (total de um grupo) reduz o risco de identificar pessoas. Correlação (duas medidas que variam juntas) não prova causa nem intenção de voto.',law:'LGPD, art. 6º, III, e Resolução TSE nº 23.610/2019: use o mínimo necessário e respeite a finalidade original.'},
{days:'Dias 12–17',title:'Público, estratégia e metas',objective:'Definir onde atuar, com quem dialogar e qual resultado operacional buscar, usando somente critérios públicos, agregados e revisáveis.',tasks:['Registrar a meta como cenário administrativo, não promessa.','Distribuir metas de presença, conversas e voluntariado por semana.','Criar cenários conservador, base e expansão.','Definir critérios objetivos para revisar o plano.'],questions:['Que capacidade semanal a equipe realmente possui?','Quais premissas sustentam cada cenário?','Qual sinal fará aumentar, manter ou reduzir uma ação?'],ideal:'Mapa estratégico com públicos territoriais, problemas prioritários, objetivo de cada diálogo, canais permitidos, cenários e critérios de revisão; nenhuma pessoa é classificada por dado sensível.',cases:[['Sucesso · gestão por cenários','Equipes resilientes trabalham com faixas e gatilhos, reduzindo decisões baseadas em entusiasmo.'],['Sucesso · metas de processo','Acompanhar portas, reuniões e cobertura permite corrigir execução antes do resultado final.'],['Insucesso · precisão falsa','Projetar votos exatos com amostra fraca cria segurança indevida e desvia recursos.']],refs:['resultados','gerber','kreiss'],explain:'Público territorial (grupo definido por local e contexto público) orienta logística sem criar perfil individual. Indicador antecedente (medida que muda antes do resultado) ajuda a gerir esforço. Cenário (hipótese condicionada) não é previsão.',law:'LGPD, arts. 6º e 11, Lei nº 9.504/1997 e normas de pesquisa eleitoral: use dados mínimos, não explore dados sensíveis e não publique simulações internas como pesquisa.'},
{days:'Dias 18–24',title:'Direcionamento, tom e propostas',objective:'Definir como a campanha deseja ser reconhecida, como falar e quais propostas sustentar com evidências.',tasks:['Definir três prioridades estaduais compatíveis com o cargo.','Criar ficha de evidências para cada afirmação.','Aprovar guia de tom, resposta e correção de erro.','Registrar uso de IA e revisão humana em toda peça sintética.'],questions:['Qual problema estadual cada proposta resolve?','Que evidência pública sustenta a afirmação?','O que a candidatura não pode prometer por falta de competência legal?'],ideal:'Guia de posicionamento com frase central, três características de tom, palavras recomendadas e evitadas, exemplos por canal, respostas de crise e fichas verificáveis das propostas.',cases:[['Sucesso · mensagem disciplinada','Campanhas reconhecíveis repetem prioridades verificáveis e adaptam formato, não os fatos.'],['Sucesso · checagem prévia','Biblioteca de afirmações aprovadas reduz contradições e acelera resposta.'],['Insucesso · conteúdo manipulado','Peças falsas ou descontextualizadas criam risco jurídico, reputacional e de retirada.']],refs:['propaganda','tse2026','eleicoes'],explain:'Posicionamento (ideia principal pela qual a candidatura quer ser reconhecida) e tom de voz (jeito constante de falar) devem manter os mesmos fatos em todos os canais. Framing (enquadramento) não autoriza omitir fato essencial.',law:'Resolução TSE nº 23.610/2019, com alterações de 2026, disciplina conteúdo fabricado ou manipulado, inteligência artificial e propaganda na internet.'},
{days:'Dias 25–32',title:'Campo e mobilização',objective:'Executar presença territorial mensurável com abordagem respeitosa e adesão voluntária.',tasks:['Montar agenda territorial com responsáveis e capacidade.','Treinar equipe sobre abordagem, consentimento e descadastro.','Criar ficha de evento apenas com totais agregados.','Realizar lote-piloto antes de ampliar a operação.'],questions:['Quantas pessoas e horas estão disponíveis por território?','Como será registrado um pedido para não receber contato?','Qual foi o resultado do piloto e o que deve mudar?'],ideal:'Agenda semanal, roteiro de abordagem, checklist do evento e registro de totais; contatos individuais só entram com informação e base legal.',cases:[['Sucesso · contato pessoal testado','Experimentos de campo encontraram efeitos diferentes por método; medir o processo é melhor que presumir impacto.'],['Sucesso · piloto pequeno','Testes limitados revelam falhas de roteiro e capacidade antes de escalar.'],['Insucesso · lista sem origem','Bases compradas ou reaproveitadas sem finalidade compatível expõem a campanha a descadastro, denúncia e sanção.']],refs:['gerber','lgpd','propaganda'],explain:'Piloto (teste controlado em pequena escala) reduz risco. Taxa de conversão operacional (adesões consentidas divididas por conversas) mede o fluxo, não intenção de voto.',law:'LGPD, arts. 7º, 8º e 18: documente a base legal, torne o consentimento demonstrável quando usado e facilite revogação e direitos.'},
{days:'Dias 33–40',title:'Conteúdo e distribuição',objective:'Manter uma cadência de conteúdo legal, acessível e mensurável em canais oficiais.',tasks:['Criar calendário editorial por tema, formato e responsável.','Aplicar checklist jurídico e factual antes de publicar.','Registrar impulsionamento, contratação e biblioteca de peças.','Garantir legendas, contraste e texto alternativo.'],questions:['Qual é o objetivo operacional de cada peça?','Quem verificou fatos, direitos autorais e regra eleitoral?','A peça é compreensível sem áudio e por leitores de tela?'],ideal:'Calendário enxuto com uma ação principal por peça, aprovação registrada e versões acessíveis.',cases:[['Sucesso · operação multicanal integrada','A literatura sobre campanhas digitais destaca integração entre equipe e canais, não volume isolado.'],['Sucesso · biblioteca de peças','Versionamento e aprovação reduzem erro e permitem auditoria.'],['Insucesso · impulsionamento informal','Contratação fora das formas permitidas ou sem identificação pode gerar retirada e responsabilização.']],refs:['propaganda','kreiss','tse2026'],explain:'Cadência (ritmo planejado) e atribuição (relação documentada entre ação e resposta) ajudam gestão, mas métricas de plataforma não equivalem a votos.',law:'Lei nº 9.504/1997, arts. 57-B e 57-C, e Resolução TSE nº 23.610/2019: confira responsáveis, identificação e contratação do impulsionamento.'},
{days:'Dias 41–48',title:'Monitoramento e correção',objective:'Comparar execução com o plano e corrigir gargalos com evidência, sem vigiar indivíduos.',tasks:['Atualizar painel agregado ao fim de cada dia.','Realizar reunião curta de revisão a cada 48 horas.','Registrar decisão, motivo e prazo de reavaliação.','Auditar acessos e pedidos de titulares.'],questions:['Qual gargalo concreto apareceu nos últimos dois dias?','Que mudança pequena será testada agora?','Existe dado sem fonte, finalidade ou prazo de retenção?'],ideal:'Painel com alcance, conversas, adesões consentidas e cobertura; ata curta explica toda mudança relevante.',cases:[['Sucesso · ciclo medir-aprender','Equipes que registram hipótese e resultado conseguem distinguir mudança útil de improviso.'],['Sucesso · indicadores de capacidade','Filas, atrasos e cobertura orientam reforço operacional sem conhecer perfil pessoal.'],['Insucesso · métrica de vaidade','Curtidas e visualizações isoladas podem crescer sem melhorar organização ou presença.']],refs:['anpd','lgpd','resultados'],explain:'Métrica de vaidade (número chamativo sem vínculo claro com objetivo) não deve comandar recursos. Auditoria (verificação documentada) mantém rastreabilidade.',law:'LGPD, arts. 18, 37 e 46: mantenha registro, atenda direitos e proteja os dados durante todo o ciclo.'},
{days:'Dias 49–55',title:'Reta final e encerramento',objective:'Concluir mobilização, votação e transição documental com controle jurídico e financeiro.',tasks:['Validar plano do dia da eleição com jurídico.','Congelar versões finais e contatos de emergência.','Conferir proibições, fiscais, logística e contingências.','Encerrar acessos, exportar registros e executar retenção ou descarte.'],questions:['Quem decide diante de incidente no dia da eleição?','Qual é a versão final aprovada de cada material?','Que dados devem ser eliminados, preservados ou entregues e por qual fundamento?'],ideal:'Sala de situação com contatos, checklists e versão única; depois, termo de encerramento com acessos revogados e dados destinados.',cases:[['Sucesso · comando e contingência','Papéis e versões claras reduzem ruído quando o tempo de resposta é curto.'],['Sucesso · fechamento documentado','Inventário final facilita prestação de contas e resposta a titulares.'],['Insucesso · acesso aberto após a campanha','Contas e planilhas esquecidas ampliam risco de incidente e uso incompatível.']],refs:['tse2026','eleicoes','lgpd'],explain:'Runbook (roteiro operacional para situação crítica) define quem faz o quê. Retenção (manutenção por prazo justificado) não significa guardar tudo indefinidamente.',law:'Lei nº 9.504/1997, LGPD e resoluções TSE de 2026: o jurídico deve validar condutas do dia da eleição, prestação de contas e destino dos dados.'}
];

const expandedTasks={
  0:['Aprovar orçamento inicial e limite de decisão de cada responsável.','Cadastrar fornecedores somente depois da conferência jurídica e financeira.','Criar plano simples para incidente com dados, conta digital ou material irregular.'],
  1:['Listar problemas públicos com fonte e ano, sem completar lacunas por opinião.','Mapear equipamentos, entidades e lideranças usando somente informações públicas.','Criar ficha dos concorrentes baseada em fatos públicos, sem ataque pessoal.'],
  2:['Separar orçamento planejado, contratado e pago.','Definir metas semanais de alcance, eventos, conversas e voluntários.','Marcar toda projeção como cenário (hipótese), nunca como resultado garantido.','Definir o público primário, secundário e não prioritário por território e problema público.','Explicar por que cada público é prioridade usando fonte pública ou registro agregado.','Escolher o objetivo de cada diálogo: escutar, apresentar, mobilizar ou prestar contas.','Definir canais adequados e base legal para contato, sem dados sensíveis.','Criar um direcionamento por cidade com responsável, capacidade e critério de revisão.'],
  3:['Confirmar biografia, partido, número, slogan e identidade visual.','Montar narrativa central (história curta que liga trajetória, problema e proposta).','Preparar respostas simples para entrevistas e perguntas difíceis.','Definir uma frase de posicionamento que ligue trajetória, problema e entrega possível.','Escolher três características do tom de voz e explicar cada uma.','Listar palavras que a campanha deve usar e palavras que deve evitar.','Criar exemplos do mesmo tom para rua, redes sociais, entrevista e crise.','Testar a mensagem com jovens e adultos e registrar o que não ficou claro.'],
  4:['Criar cadastro e treinamento de voluntários com consentimento.','Montar calendário de eventos com local, responsável, capacidade e risco.','Definir roteiro de visita, escuta e retorno para cada cidade.'],
  5:['Montar lista de imprensa e canais regionais usando contatos profissionais públicos.','Criar plano de crise (quem verifica, decide, responde e registra).','Revisar toda mídia feita ou alterada por inteligência artificial antes de publicar.'],
  6:['Comparar orçamento planejado com o gasto realizado.','Medir cada evento por presença, alcance, conversas e custo, sem contar votos.','Registrar correções decididas na reunião de feedback e nas revisões seguintes.'],
  7:['Confirmar fiscais, locais, contatos e plano de emergência do dia da eleição.','Fechar documentos para prestação de contas com a equipe financeira e jurídica.','Revogar acessos de quem não precisa mais entrar no sistema.']
};
const expandedQuestions={
  0:['Quanto pode ser gasto e quem autoriza cada faixa de valor?','Quem deve ser avisado primeiro quando houver um problema?'],
  1:['Quais problemas têm fonte oficial e quais ainda precisam ser confirmados?','Quais informações públicas ajudam a planejar presença sem criar perfil de pessoas?'],
  2:['Qual é o orçamento mínimo, base e máximo?','Que número mostra execução e qual é apenas estimativa?','Em quais cidades ou regiões a campanha precisa estar presente primeiro?','Que problema público aproxima cada território da proposta, segundo fonte verificável?','Qual público é prioridade, qual é secundário e qual não será priorizado agora?','O objetivo com cada público é escutar, informar, mobilizar ou prestar contas?','Quais canais podem ser usados legalmente e quais exigem consentimento?','Que resultado operacional fará a equipe manter, corrigir ou interromper a estratégia?'],
  3:['Qual frase simples explica quem é Kiel, o que defende e por que é candidato?','Que promessa precisa ser retirada por não ser competência de deputado estadual?','Como a campanha quer ser lembrada em uma frase curta?','Quais três palavras definem o tom da campanha?','Que palavras, expressões ou atitudes combinam com esse tom?','Que palavras, expressões ou atitudes devem ser evitadas?','Como o tom muda em uma explicação, uma crítica, uma crise e um pedido de apoio?','Um jovem e um adulto entenderiam a mensagem da mesma forma? O que precisa ser simplificado?'],
  4:['Quantos voluntários foram treinados e quem coordena cada cidade?','Como a equipe contará presença sem duplicar pessoas?'],
  5:['Quem pode falar oficialmente em nome da campanha?','Qual é o prazo máximo para confirmar um fato antes de responder?'],
  6:['Qual ação trouxe cobertura com custo e esforço aceitáveis?','Que decisão foi mantida, corrigida ou interrompida e por quê?'],
  7:['Quem comanda cada turno no dia da votação?','Quais contas, arquivos e acessos precisam ser encerrados depois da eleição?']
};
Object.entries(expandedTasks).forEach(([i,items])=>phases[Number(i)].tasks.push(...items));
Object.entries(expandedQuestions).forEach(([i,items])=>phases[Number(i)].questions.push(...items));

const questionHelp=[
  [
    'Diga o nome ou o cargo de quem dá a palavra final para dinheiro, comunicação e dados.',
    'Informe onde a equipe avisa rapidamente quando acontece um problema sério.',
    'Liste cada planilha ou sistema, quem forneceu e para que ele pode ser usado.',
    'Defina limites de gasto e quem precisa autorizar cada valor.',
    'Crie uma ordem simples de aviso para que ninguém fique sem saber o que fazer.'
  ],
  [
    'Liste somente as cidades em que a campanha realmente pretende trabalhar.',
    'Marque o que veio de fonte oficial, o que é estimativa e o que ainda falta descobrir.',
    'Registre onde já existe equipe, agenda ou apoio organizado, sem classificar moradores.',
    'Separe fatos com fonte de opiniões da equipe. Um problema sem fonte continua pendente.',
    'Use mapas, serviços e informações públicas para planejar deslocamento e presença.'
  ],
  [
    'Some quantas pessoas, horas, veículos e recursos a equipe consegue usar por semana.',
    'Explique de onde veio cada hipótese usada nos cenários da campanha.',
    'Escolha um sinal mensurável que indique quando continuar, corrigir ou parar uma ação.',
    'Informe três faixas de orçamento: a mínima, a provável e o limite máximo.',
    'Separe o que já aconteceu do que é apenas uma conta ou expectativa.',
    'Ordene as cidades pela necessidade de presença, capacidade da equipe e dados confirmados.',
    'Ligue cada território a um problema público comprovado, como transporte ou saúde pública.',
    'Prioridade não significa rotular pessoas: significa decidir onde usar tempo e equipe primeiro.',
    'Escolha uma finalidade clara para a conversa. Não misture todos os objetivos na mesma ação.',
    'Indique o canal adequado e se o contato depende de autorização ou consentimento.',
    'Defina antes qual número ou fato levará a equipe a manter, mudar ou encerrar a ação.'
  ],
  [
    'Explique o problema, a responsabilidade do Estado e a mudança possível com a proposta.',
    'Cole o link ou registre a fonte pública que confirma a afirmação usada pela campanha.',
    'Retire promessas que um deputado estadual não tem poder legal para cumprir sozinho.',
    'Escreva uma frase que apresente trajetória, prioridade e motivo da candidatura.',
    'Revise se existe promessa fora das funções de legislar, fiscalizar e representar.',
    'Complete: “Kiel deve ser lembrado como alguém que...”. Use uma única ideia principal.',
    'Escolha três características claras, como próximo, firme e responsável.',
    'Liste exemplos de palavras e atitudes que tornam as três características visíveis.',
    'Registre exageros, ataques, jargões e promessas que não combinam com a campanha.',
    'Mantenha os mesmos valores, mas adapte a intensidade e o formato a cada situação.',
    'Peça para duas pessoas explicarem a mensagem com as próprias palavras e corrija o que confundiu.'
  ],
  [
    'Some pessoas disponíveis e horas reais de trabalho em cada cidade.',
    'Explique onde será anotado o pedido de parar contatos e quem executará o bloqueio.',
    'Compare o planejado com o teste pequeno e registre uma mudança prática.',
    'Conte somente voluntários treinados e identifique um responsável por cidade.',
    'Use uma regra única de contagem para evitar registrar a mesma pessoa duas vezes.'
  ],
  [
    'Escolha uma ação principal para a peça, como informar, convidar ou prestar contas.',
    'Registre quem conferiu fatos, imagens, direitos e regras antes da publicação.',
    'Confirme legenda, contraste, texto alternativo e compreensão sem som.',
    'Defina quem está autorizado a dar entrevistas ou emitir posicionamentos oficiais.',
    'Estabeleça um tempo para confirmar o fato. Se não houver confirmação, não improvise.'
  ],
  [
    'Descreva um problema visível, como atraso, baixa cobertura ou falta de equipe.',
    'Escolha uma correção pequena que possa ser medida na próxima revisão.',
    'Procure registros sem origem, finalidade ou data para descarte e corrija antes de usar.',
    'Compare alcance com custo, tempo e capacidade, sem transformar alcance em previsão de voto.',
    'Registre a decisão, o motivo, o responsável e quando ela será revista novamente.'
  ],
  [
    'Defina uma pessoa por turno com autoridade e contatos de emergência.',
    'Identifique o arquivo final aprovado para impedir o uso de versão antiga.',
    'Liste o que será guardado, entregue ou apagado e o motivo jurídico de cada decisão.',
    'Monte a escala completa do dia da votação com substitutos.',
    'Relacione contas e arquivos que precisam ser fechados ou ter o acesso removido.'
  ]
];

const guidedSteps={
  2:[
    ['1. Delimitar o território','Escolha as cidades usando presença real, capacidade de deslocamento e dados oficiais.'],
    ['2. Definir o público','Use território, problema público e relação voluntária com a campanha. Não use religião, saúde, raça ou outro dado sensível.'],
    ['3. Escolher o objetivo','Para cada público, escolha uma finalidade: escutar, informar, mobilizar ou prestar contas.'],
    ['4. Escolher o canal','Defina onde a conversa acontecerá e registre quando o contato exige consentimento.'],
    ['5. Definir o resultado','Escolha alcance, presença, conversas ou adesões voluntárias como medida operacional. Não trate isso como voto.'],
    ['6. Criar o gatilho de revisão','Diga qual resultado fará a equipe manter, corrigir ou interromper a ação na reunião de feedback.']
  ],
  3:[
    ['1. Fixar o posicionamento','Complete uma frase curta sobre como Kiel deve ser reconhecido e qual problema estadual pretende enfrentar.'],
    ['2. Escolher três traços','Selecione três características do tom, como próximo, firme e responsável, e explique o comportamento esperado.'],
    ['3. Definir limites','Liste palavras, atitudes e promessas que devem ser usadas ou evitadas.'],
    ['4. Adaptar sem contradizer','Crie exemplos para rua, redes sociais e entrevistas mantendo os mesmos fatos.'],
    ['5. Preparar crise e crítica','Defina um tom calmo, factual e responsável para corrigir erros ou responder pressão.'],
    ['6. Testar a compreensão','Peça para um jovem e um adulto repetirem a mensagem com as próprias palavras e simplifique o que não ficou claro.']
  ]
};

const territoryData=[
  {city:'Salto',group:'core',source:1,url:'https://www.ibge.gov.br/cidades-e-estados/sp/salto.html',census:134319,estimate:141111,area:133.057,density:1009.48,school:97.86,idhm:.780,mortality:18.38,pib:85609.32,electorate:93753,mayorParty:'PP',illiteracy:2.59,populationGrowth:27.30,gdpTotal:11.498959,formalRatio:24.28,industryVab:37.68,activeCompanies:6865,homicideRate:2.16,homicideEstimate:false},
  {city:'Itu',group:'core',source:2,url:'https://www.ibge.gov.br/cidades-e-estados/sp/itu.html',census:168240,estimate:175047,area:640.719,density:262.58,school:96.30,idhm:.773,mortality:10.93,pib:83288.93,electorate:130162,mayorParty:'REPUBLICANOS',illiteracy:3.49,populationGrowth:9.14,gdpTotal:14.012530,formalRatio:36.62,industryVab:32.78,activeCompanies:11357,homicideRate:5.90,homicideEstimate:false},
  {city:'Indaiatuba',group:'core',source:3,url:'https://www.ibge.gov.br/cidades-e-estados/sp/indaiatuba.html',census:255748,estimate:269657,area:311.545,density:820.90,school:98.62,idhm:.788,mortality:7.12,pib:110518.41,electorate:184033,mayorParty:'MDB',illiteracy:2.12,populationGrowth:26.85,gdpTotal:28.264863,formalRatio:34.63,industryVab:38.10,activeCompanies:20836,homicideRate:1.90,homicideEstimate:false},
  {city:'Cabreúva',group:'core',source:4,url:'https://www.ibge.gov.br/cidades-e-estados/sp/cabreuva.html',census:47011,estimate:48654,area:260.234,density:180.65,school:99.97,idhm:.738,mortality:8.22,pib:154027.39,electorate:36598,mayorParty:'PL',illiteracy:3.70,populationGrowth:13.00,gdpTotal:7.240981,formalRatio:41.36,industryVab:38.56,activeCompanies:2565,homicideRate:8.22,homicideEstimate:true},
  {city:'Porto Feliz',group:'core',source:5,url:'https://www.ibge.gov.br/cidades-e-estados/sp/porto-feliz.html',census:56497,estimate:58605,area:556.706,density:101.48,school:99.19,idhm:.758,mortality:14.21,pib:89687.04,electorate:40691,mayorParty:'REPUBLICANOS',illiteracy:3.55,populationGrowth:15.55,gdpTotal:5.067049,formalRatio:29.96,industryVab:30.09,activeCompanies:5119,homicideRate:3.41,homicideEstimate:true},
  {city:'Sorocaba',group:'reference',source:6,url:'https://www.ibge.gov.br/cidades-e-estados/sp/sorocaba.html',census:723682,estimate:762172,area:449.872,density:1608.64,school:98.66,idhm:.798,mortality:10.86,pib:81273.66,electorate:527772,mayorParty:'REPUBLICANOS',illiteracy:2.08,populationGrowth:23.36,gdpTotal:58.816286,formalRatio:31.08,industryVab:32.50,activeCompanies:49885,homicideRate:6.73,homicideEstimate:false},
  {city:'Campinas',group:'reference',source:7,url:'https://www.ibge.gov.br/cidades-e-estados/sp/campinas.html',census:1139047,estimate:1187974,area:794.570,density:1433.54,school:98.17,idhm:.805,mortality:8.65,pib:80741.47,electorate:884726,mayorParty:'REPUBLICANOS',illiteracy:2.41,populationGrowth:5.46,gdpTotal:91.968328,formalRatio:38.36,industryVab:18.84,activeCompanies:93590,homicideRate:6.84,homicideEstimate:false}
];
const territorySources=[
  {id:8,label:'TSE · Eleitorado 2024',url:'https://dadosabertos.tse.jus.br/dataset/eleitorado-2024',detail:'Eleitorado apto na eleição municipal de 2024, somado por município a partir do arquivo de locais de votação.'},
  {id:9,label:'TSE · Candidaturas e resultados 2024',url:'https://dadosabertos.tse.jus.br/dataset/candidatos-2024',detail:'Partido da candidatura eleita para prefeito no primeiro ou segundo turno de 2024.'},
  {id:10,label:'IBGE/SIDRA · Alfabetização, tabela 9543',url:'https://sidra.ibge.gov.br/tabela/9543',detail:'Taxa de alfabetização das pessoas de 15 anos ou mais no Censo 2022. O analfabetismo foi calculado como 100 menos a taxa de alfabetização.'},
  {id:11,label:'IBGE/SIDRA · População, tabela 200',url:'https://sidra.ibge.gov.br/tabela/200',detail:'População dos Censos 2010 e 2022. Crescimento calculado pela diferença percentual entre os dois censos.'},
  {id:12,label:'IBGE/SIDRA · PIB dos Municípios, tabela 5938',url:'https://sidra.ibge.gov.br/tabela/5938',detail:'PIB total e por pessoa em 2023. A participação da indústria no valor adicionado bruto (VAB) usa 2021, último ano disponível desta divisão setorial.'},
  {id:13,label:'IBGE/SIDRA · CEMPRE, tabela 9509',url:'https://sidra.ibge.gov.br/tabela/9509',detail:'Pessoal ocupado assalariado e empresas e organizações atuantes em 2024. São registros formais localizados no município.'},
  {id:14,label:'IBGE · PNAD Contínua',url:'https://sidra.ibge.gov.br/home/pnadct/',detail:'A pesquisa mede desocupação para Brasil, estados e recortes selecionados, mas não produz taxa oficial comparável para cada um destes municípios.'},
  {id:15,label:'SSP-SP · Dados mensais e taxas',url:'https://www.ssp.sp.gov.br/estatistica/dados-mensais',detail:'Taxa de homicídios de 2025. Cabreúva e Porto Feliz foram calculadas com ocorrências anuais da SSP-SP e população estimada do IBGE.'}
];
const demographyIndicators=[
  {key:'estimate',label:'População estimada',year:2025,agency:'IBGE',estimate:true,help:'É uma projeção oficial de quantas pessoas moram no município. Como não é uma contagem feita casa por casa, recebe asterisco (*).'},
  {key:'census',label:'População no Censo',year:2022,agency:'IBGE',help:'É a quantidade de moradores contada pelo Censo Demográfico (levantamento amplo feito pelo IBGE).'},
  {key:'density',label:'Densidade demográfica',year:2022,agency:'IBGE',help:'Mostra quantas pessoas vivem, em média, em cada quilômetro quadrado. Ajuda a entender se a cidade é mais concentrada ou espalhada.'},
  {key:'area',label:'Área territorial',year:2025,agency:'IBGE',help:'É o tamanho oficial do território do município, medido em quilômetros quadrados.'},
  {key:'school',label:'Escolarização de 6 a 14 anos',year:2022,agency:'IBGE',help:'É a porcentagem das crianças e adolescentes de 6 a 14 anos que frequentam o ensino regular.'},
  {key:'idhm',label:'IDHM',year:2010,agency:'PNUD via IBGE',help:'O Índice de Desenvolvimento Humano Municipal (IDHM) resume longevidade, educação e renda. Vai de 0 a 1; quanto maior, melhor. O último valor municipal consolidado é de 2010.'},
  {key:'mortality',label:'Mortalidade infantil',year:2023,agency:'DATASUS via IBGE',lowerBetter:true,help:'É o número de óbitos de crianças menores de 1 ano para cada mil nascidos vivos. Neste indicador, um número menor é melhor.'}
];
const politicalIndicators=[
  {key:'electorate',label:'Eleitores ativos',year:2024,agency:'TSE',sourceId:8,help:'É o total de pessoas aptas a votar no município na eleição de 2024. População e eleitorado são números diferentes.'},
  {key:'mayorParty',label:'Partido eleito para a prefeitura',year:2024,agency:'TSE',sourceId:9,type:'categorical',help:'Mostra o partido da candidatura vencedora para prefeito em 2024. Não significa que todos os moradores apoiem esse partido.'},
  {key:'illiteracy',label:'Analfabetismo (15 anos ou mais)',year:2022,agency:'IBGE',sourceId:10,format:'percent',lowerBetter:true,help:'É a parcela das pessoas de 15 anos ou mais que não consegue ler e escrever um bilhete simples. O valor foi calculado a partir da taxa oficial de alfabetização.'},
  {key:'populationGrowth',label:'Crescimento populacional (2010–2022)',year:'2010–2022',agency:'IBGE',sourceId:11,format:'percent',help:'Compara a população contada no Censo 2010 com a contada no Censo 2022. É crescimento acumulado no período, não crescimento por ano.'},
  {key:'unemployment',label:'Taxa de desocupação estimada',year:'sem dado municipal',agency:'IBGE/PNAD Contínua',sourceId:14,type:'unavailable',help:'Desocupação é a parcela da força de trabalho que procura emprego e não encontra. A PNAD Contínua não divulga uma taxa oficial comparável para cada uma destas cidades; por isso nenhum percentual foi inventado.'},
  {key:'homicideRate',label:'Taxa de homicídios (por 100 mil habitantes)',year:2025,agency:'SSP-SP',sourceId:15,format:'rate100k',lowerBetter:true,estimateKey:'homicideEstimate',help:'Indica quantos homicídios ocorreram para cada 100 mil habitantes. Nas cidades pequenas, poucos casos podem mudar bastante a taxa. Cabreúva e Porto Feliz têm cálculo próprio identificado por asterisco.'}
];
const economyIndicators=[
  {key:'gdpTotal',label:'PIB total',year:2023,agency:'IBGE',sourceId:12,format:'currencyBillions',help:'É o valor total dos bens e serviços produzidos no município no ano. Não representa o dinheiro disponível na prefeitura.'},
  {key:'pib',label:'PIB por pessoa',year:2023,agency:'IBGE',sourceId:12,format:'currency',help:'O PIB per capita (produção econômica dividida pela população) descreve o tamanho médio da economia, mas não é o salário nem a renda de cada morador.'},
  {key:'formalRatio',label:'Emprego formal / população total',year:'2024/2025',agency:'IBGE/CEMPRE',sourceId:13,format:'percent',estimate:true,help:'É uma aproximação: postos assalariados formais registrados nas empresas em 2024 divididos pela população estimada de 2025. Não é taxa de emprego dos moradores, porque uma pessoa pode trabalhar em outra cidade.'},
  {key:'industryVab',label:'Participação da indústria no VAB',year:2021,agency:'IBGE',sourceId:12,format:'percent',help:'Mostra quanto a indústria representa no valor adicionado bruto (VAB), isto é, na riqueza gerada pelas atividades econômicas locais. O recorte setorial municipal mais recente disponível é 2021.'},
  {key:'activeCompanies',label:'CNPJs ativos (aproximado)',year:2024,agency:'IBGE/CEMPRE',sourceId:13,estimate:true,help:'Usa o número de empresas e outras organizações atuantes no CEMPRE como aproximação. Não é uma contagem idêntica ao cadastro de CNPJs ativos da Receita Federal, por isso recebe asterisco.'}
];
const allTerritoryIndicators=[...demographyIndicators,...politicalIndicators,...economyIndicators];
let demographyScope='core';
const prepLabels=['Terça · 11/08','Terça · 11/08','Terça · 11/08','Quarta · 12/08','Quarta · 12/08','Quarta · 12/08','Quinta · 13/08','Quinta · 13/08'];
const defaultUsers=Array.from({length:10},(_,i)=>`Operador ${String(i+1).padStart(2,'0')}`);
const DB_NAME='centralCampanhaKiel',STORE='state';
let state={tasks:{},answers:{},metrics:[],audit:[],users:[...defaultUsers],currentUser:0,settings:{candidateName:'Kiel Damasceno',slogan:'',primaryColor:'#1800ac',accentColor:'#00d100'}};let activePhase=0;
let pendingLog=null;
function openDB(){return new Promise((resolve,reject)=>{const req=indexedDB.open(DB_NAME,1);req.onupgradeneeded=()=>req.result.createObjectStore(STORE);req.onsuccess=()=>resolve(req.result);req.onerror=()=>reject(req.error)})}
async function load(){let saved=null;if(window.campaignBackend.isRemote()){saved=await window.campaignBackend.getState();state.audit=await window.campaignBackend.getAudit()}else{const db=await openDB();saved=await new Promise((res,rej)=>{const r=db.transaction(STORE).objectStore(STORE).get('app');r.onsuccess=()=>res(r.result);r.onerror=()=>rej(r.error)})}if(saved&&Object.keys(saved).length)state={...state,...saved,users:Array.isArray(saved.users)&&saved.users.length===10?saved.users:[...defaultUsers],audit:window.campaignBackend.isRemote()?state.audit:(Array.isArray(saved.audit)?saved.audit:[]),settings:{...state.settings,...saved.settings}};if(state.settings.primaryColor==='#16304a'){state.settings.primaryColor='#1800ac';state.settings.accentColor='#00d100'}applySettings();renderAll()}
function stateForSave(){return {tasks:state.tasks,answers:state.answers,metrics:state.metrics,settings:state.settings}}
async function save(message){try{if(window.campaignBackend.isRemote()){const entry=pendingLog||{action:'Atualizou o sistema',detail:''};await window.campaignBackend.saveState(stateForSave(),entry.action,entry.detail);state.audit=await window.campaignBackend.getAudit()}else{const db=await openDB();await new Promise((res,rej)=>{const r=db.transaction(STORE,'readwrite').objectStore(STORE).put(state,'app');r.onsuccess=res;r.onerror=()=>rej(r.error)})}pendingLog=null;if(message)toast(message);renderAudit()}catch(error){toast(error.message||'Não foi possível salvar.');throw error}}
const esc=s=>String(s??'').replace(/[&<>'"]/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;',"'":'&#39;','"':'&quot;'}[c]));
const actor=()=>window.campaignBackend?.displayName()||state.users[state.currentUser]||defaultUsers[0];
function log(action,detail){if(window.campaignBackend.isRemote())pendingLog={action,detail};else{state.audit.unshift({at:new Date().toISOString(),actor:actor(),action,detail});state.audit=state.audit.slice(0,2000)}}
function renderNav(){document.querySelector('#phase-nav-list').innerHTML=phases.map((p,i)=>`<button type="button" class="${i===activePhase?'active':''}" data-phase="${i}" aria-pressed="${i===activePhase}"><span>${i+1}</span><span>${esc(p.title)}<small>${prepLabels[i]}</small></span><span>${phasePercent(i)}%</span></button>`).join('')}
function phasePercent(i){const done=phases[i].tasks.filter((_,j)=>state.tasks[`${i}-${j}`]).length;return Math.round(done/phases[i].tasks.length*100)}
function renderPhase(){const p=phases[activePhase],steps=guidedSteps[activePhase]||[];const guided=steps.length?`<section class="card phase-section guided-section"><h3>Passo a passo guiado</h3><p class="section-intro">Siga na ordem. Cada passo prepara a resposta do próximo.</p><ol class="guided-steps">${steps.map(step=>`<li><strong>${esc(step[0])}</strong><span>${esc(step[1])}</span></li>`).join('')}</ol></section>`:'';const questions=p.questions.map((q,j)=>{const help=questionHelp[activePhase]?.[j]||'Responda com um fato simples, a fonte usada e quem será responsável pela decisão.';return `<div class="question-item"><div class="question-label-row"><label for="q-${activePhase}-${j}">${esc(q)}</label><span class="help-wrap"><button class="help-button" type="button" aria-label="Explicação simples desta pergunta" aria-expanded="false" aria-describedby="help-${activePhase}-${j}" data-help-button>?</button><span class="question-help" id="help-${activePhase}-${j}" role="tooltip">${esc(help)}</span></span></div><textarea id="q-${activePhase}-${j}" data-answer="${activePhase}-${j}" placeholder="Escreva a resposta da equipe de forma simples...">${esc(state.answers[`${activePhase}-${j}`])}</textarea></div>`}).join('');const mapButton=[2,3].includes(activePhase)?'<button class="secondary" type="button" id="download-strategy">Baixar mapa estratégico (.md)</button>':'';document.querySelector('#phase-detail').innerHTML=`<article class="phase-header"><div class="phase-meta"><span class="badge">Módulo ${activePhase+1} de ${phases.length}</span><span class="badge">Preencher: ${prepLabels[activePhase]}</span><span class="badge">${phasePercent(activePhase)}% concluído</span></div><h2>${esc(p.title)}</h2><p class="objective"><strong>Objetivo:</strong> ${esc(p.objective)}</p><p class="chart-help">A linguagem é simples. Quando aparecer um termo do meio político ou técnico, a explicação vem entre parênteses.</p></article>${guided}<section class="card phase-section"><h3>Tarefas para concluir este módulo</h3><div class="task-list">${p.tasks.map((t,j)=>`<label class="task-item"><input type="checkbox" data-task="${activePhase}-${j}" ${state.tasks[`${activePhase}-${j}`]?'checked':''}><span>${esc(t)}</span></label>`).join('')}</div></section><section class="card phase-section"><h3>Perguntas prontas</h3><p class="section-intro">Passe o mouse ou toque no “?” para ver uma explicação bem simples.</p><div class="question-list">${questions}</div></section><section class="card phase-section"><h3>Como o resultado ideal deve ficar</h3><p>${esc(p.ideal)}</p></section><section class="card phase-section"><h3>Exemplos reais (cases) e lições</h3><div class="case-grid">${p.cases.map((c,j)=>`<article class="case ${j===2?'failure':''}"><h4>${esc(c[0])}</h4><p>${esc(c[1])}</p></article>`).join('')}</div></section><section class="card phase-section"><h3>3 fontes para conferir</h3><ol class="source-list">${p.refs.map(k=>`<li><a href="${sources[k].url}" target="_blank" rel="noopener noreferrer">${sources[k].label}</a></li>`).join('')}</ol></section><section class="card phase-section explanation"><h3>Explicação simples</h3><p>${esc(p.explain)}</p><p><strong>Regra aplicada à campanha:</strong> ${esc(p.law)}</p></section><section class="card phase-section"><h3>Salvar e usar fora do site</h3><p>Salve as respostas ou baixe o roteiro pronto para reunião e trabalho externo.</p><div class="phase-actions"><button class="primary" type="button" id="save-phase">Salvar este módulo</button><button class="secondary" type="button" id="download-phase">Baixar roteiro (.md)</button>${mapButton}</div></section>`}
function updateProgress(){const total=phases.reduce((n,p)=>n+p.tasks.length,0),done=Object.values(state.tasks).filter(Boolean).length,pct=Math.round(done/total*100);document.querySelector('#progress-value').textContent=`${pct}%`;document.querySelector('#progress-label').textContent=`${done} de ${total} tarefas concluídas`;document.querySelector('#progress-bar').style.width=`${pct}%`}
function groupMetrics(key){return state.metrics.reduce((a,m)=>{const k=m[key]||'Não identificado';a[k]=(a[k]||0)+Number(m.reach||0);return a},{})}
function bars(grouped){const max=Math.max(1,...Object.values(grouped));return Object.keys(grouped).length?Object.entries(grouped).sort((a,b)=>b[1]-a[1]).slice(0,10).map(([k,v])=>`<div class="bar-row"><span>${esc(k)}</span><div class="bar-track"><div class="bar-fill" style="width:${v/max*100}%"></div></div><strong>${v.toLocaleString('pt-BR')}</strong></div>`).join(''):'<p class="chart-help">O gráfico aparecerá depois do primeiro registro.</p>'}
function renderMetrics(){const totals=state.metrics.reduce((a,m)=>({reach:a.reach+Number(m.reach||0),conversations:a.conversations+Number(m.conversations||0),supporters:a.supporters+Number(m.supporters||0)}),{reach:0,conversations:0,supporters:0});document.querySelector('#kpi-reach').textContent=totals.reach.toLocaleString('pt-BR');document.querySelector('#kpi-conversations').textContent=totals.conversations.toLocaleString('pt-BR');document.querySelector('#kpi-supporters').textContent=totals.supporters.toLocaleString('pt-BR');document.querySelector('#kpi-rate').textContent=totals.conversations?`${(totals.supporters/totals.conversations*100).toFixed(1).replace('.',',')}%`:'0%';document.querySelector('#metric-table').innerHTML=state.metrics.length?state.metrics.map((m,i)=>`<tr><td>${new Date(m.date+'T12:00:00').toLocaleDateString('pt-BR')}</td><td>${esc(m.city||'Não identificado')}</td><td>${esc(m.territory)}</td><td>${esc(m.channel||'Outro')}</td><td>${esc(m.approach||'Outro')}</td><td>${Number(m.reach||0).toLocaleString('pt-BR')}</td><td>${esc(m.actor||'Sistema')}</td><td><button class="text-button danger" data-delete-metric="${i}" type="button">Excluir</button></td></tr>`).join(''):'<tr><td colspan="8">Nenhum alcance registrado.</td></tr>';document.querySelector('#bar-chart').innerHTML=bars(groupMetrics('city'));document.querySelector('#channel-chart').innerHTML=bars(groupMetrics('channel'));document.querySelector('#approach-chart').innerHTML=bars(groupMetrics('approach'));const matrix={};state.metrics.forEach(m=>{const k=`${m.city||'Não identificado'}|||${m.approach||'Outro'}`;matrix[k]=(matrix[k]||0)+Number(m.reach||0)});document.querySelector('#city-approach-table').innerHTML=Object.keys(matrix).length?Object.entries(matrix).sort((a,b)=>b[1]-a[1]).map(([k,v])=>{const [city,approach]=k.split('|||');return `<tr><td>${esc(city)}</td><td>${esc(approach)}</td><td>${v.toLocaleString('pt-BR')}</td></tr>`}).join(''):'<tr><td colspan="3">Nenhum dado para comparar.</td></tr>'}
function formatDemographyValue(indicator,value){
  if(indicator.type==='unavailable')return 'Não disponível';
  if(indicator.type==='categorical')return esc(value);
  const options={minimumFractionDigits:0,maximumFractionDigits:0};
  if(indicator.key==='estimate'||indicator.key==='census'||indicator.key==='electorate'||indicator.key==='activeCompanies')return value.toLocaleString('pt-BR',options);
  if(indicator.key==='density')return `${value.toLocaleString('pt-BR',{minimumFractionDigits:2,maximumFractionDigits:2})} hab./km²`;
  if(indicator.key==='area')return `${value.toLocaleString('pt-BR',{minimumFractionDigits:3,maximumFractionDigits:3})} km²`;
  if(indicator.key==='school'||indicator.format==='percent')return `${value.toLocaleString('pt-BR',{minimumFractionDigits:2,maximumFractionDigits:2})}%`;
  if(indicator.key==='idhm')return value.toLocaleString('pt-BR',{minimumFractionDigits:3,maximumFractionDigits:3});
  if(indicator.key==='pib'||indicator.format==='currency')return value.toLocaleString('pt-BR',{style:'currency',currency:'BRL',minimumFractionDigits:2});
  if(indicator.format==='currencyBillions')return `R$ ${value.toLocaleString('pt-BR',{minimumFractionDigits:2,maximumFractionDigits:2})} bi`;
  if(indicator.format==='rate100k')return `${value.toLocaleString('pt-BR',{minimumFractionDigits:2,maximumFractionDigits:2})} por 100 mil`;
  if(indicator.key==='mortality')return `${value.toLocaleString('pt-BR',{minimumFractionDigits:2,maximumFractionDigits:2})} por mil`;
  return value.toLocaleString('pt-BR');
}
function demographySourceLink(city,label){return `<a class="source-index" href="${city.url}" target="_blank" rel="noopener noreferrer" aria-label="Fonte ${city.source}: IBGE ${esc(city.city)}">[${city.source}]${label||''}</a>`}
function commonTerritorySource(id){return territorySources.find(source=>source.id===id)}
function territorySourceLink(indicator,city){
  if(!indicator.sourceId)return demographySourceLink(city);
  const source=commonTerritorySource(indicator.sourceId);
  return `<a class="source-index" href="${source.url}" target="_blank" rel="noopener noreferrer" aria-label="Fonte ${source.id}: ${esc(source.label)}">[${source.id}]</a>`;
}
function isTerritoryEstimate(indicator,city){return Boolean(indicator.estimate||(indicator.estimateKey&&city[indicator.estimateKey]))}
function territoryDisplayValue(indicator,city){
  const value=formatDemographyValue(indicator,city[indicator.key]);
  return `${value}${isTerritoryEstimate(indicator,city)?'*':''}`;
}
function renderTerritoryIndicator(indicator,index,cities){
  const sourceRange=indicator.sourceId?String(indicator.sourceId):cities.map(city=>city.source).sort((a,b)=>a-b).join(', ');
  const heading=`<div class="indicator-heading"><div><span class="indicator-year">${indicator.year} · ${esc(indicator.agency)}${indicator.estimate?' · cálculo aproximado':''}</span><h2>${esc(indicator.label)} <span class="help-wrap"><button class="help-button compact" type="button" aria-label="Explicação simples de ${esc(indicator.label)}" aria-expanded="false" aria-describedby="indicator-help-${index}" data-help-button>?</button><span class="question-help" id="indicator-help-${index}" role="tooltip">${esc(indicator.help)}</span></span></h2></div><span class="indicator-sources" aria-label="Fontes usadas">Fonte ${sourceRange}</span></div>`;
  if(indicator.type==='unavailable'){
    const source=commonTerritorySource(indicator.sourceId);
    return `<article class="card indicator-card indicator-unavailable">${heading}<div class="unavailable-message"><strong>Não há taxa municipal oficial comparável.</strong><p>A PNAD Contínua não publica esse indicador para cada uma das sete cidades. Manter o campo como “não disponível” evita uma estimativa sem base.</p><a href="${source.url}" target="_blank" rel="noopener noreferrer">Conferir metodologia [${source.id}]</a></div></article>`;
  }
  if(indicator.type==='categorical'){
    const totals=cities.reduce((acc,city)=>{acc[city[indicator.key]]=(acc[city[indicator.key]]||0)+1;return acc},{});
    const ranked=Object.entries(totals).sort((a,b)=>b[1]-a[1]||a[0].localeCompare(b[0]));
    const max=Math.max(...ranked.map(([,value])=>value),1);
    const bars=ranked.map(([party,value])=>`<div class="indicator-bar-row"><span class="indicator-city">${esc(party)}</span><span class="indicator-track" aria-hidden="true"><span style="width:${value/max*100}%"></span></span><strong>${value} ${value===1?'cidade':'cidades'}</strong></div>`).join('');
    const citiesList=cities.map(city=>`<span><strong>${esc(city.city)}</strong> · ${esc(city[indicator.key])} ${territorySourceLink(indicator,city)}</span>`).join('');
    return `<article class="card indicator-card">${heading}<div class="indicator-bars">${bars}</div><div class="category-city-list">${citiesList}</div></article>`;
  }
  const ranked=[...cities].sort((a,b)=>b[indicator.key]-a[indicator.key]);
  const max=Math.max(...ranked.map(city=>city[indicator.key]),1);
  const rows=ranked.map(city=>`<div class="indicator-bar-row"><span class="indicator-city">${esc(city.city)}</span><span class="indicator-track" aria-hidden="true"><span style="width:${Math.max(4,city[indicator.key]/max*100)}%"></span></span><strong>${territoryDisplayValue(indicator,city)} ${territorySourceLink(indicator,city)}</strong></div>`).join('');
  const calculationNote=indicator.estimateKey?'<p class="indicator-note">* taxa calculada com total da SSP-SP e população estimada do IBGE.</p>':'';
  return `<article class="card indicator-card">${heading}${indicator.lowerBetter?'<p class="indicator-note">Neste indicador, menor é melhor.</p>':''}${calculationNote}<div class="indicator-bars">${rows}</div></article>`;
}
function renderTerritory(){
  const cities=territoryData.filter(city=>demographyScope==='all'||city.group===demographyScope);
  document.querySelector('#demography-charts').innerHTML=demographyIndicators.map((indicator,index)=>renderTerritoryIndicator(indicator,index,cities)).join('');
  document.querySelector('#political-charts').innerHTML=politicalIndicators.map((indicator,index)=>renderTerritoryIndicator(indicator,index+demographyIndicators.length,cities)).join('');
  document.querySelector('#economy-charts').innerHTML=economyIndicators.map((indicator,index)=>renderTerritoryIndicator(indicator,index+demographyIndicators.length+politicalIndicators.length,cities)).join('');
  const header=cities.map(city=>`<span role="columnheader">${esc(city.city)}</span>`).join('');
  const rows=allTerritoryIndicators.map(indicator=>`<div class="demography-table-row" role="row"><strong role="rowheader">${esc(indicator.label)} <small>${indicator.year}</small></strong>${cities.map(city=>`<span role="cell" data-city="${esc(city.city)}">${territoryDisplayValue(indicator,city)} ${territorySourceLink(indicator,city)}</span>`).join('')}</div>`).join('');
  document.querySelector('#demography-table').style.setProperty('--city-count',cities.length);
  document.querySelector('#demography-table').innerHTML=`<div class="demography-table-head" role="row"><span role="columnheader">Indicador</span>${header}</div>${rows}`;
  const citySources=territoryData.map(city=>`<li><a href="${city.url}" target="_blank" rel="noopener noreferrer"><strong>[${city.source}] IBGE · ${esc(city.city)}</strong><span>População e densidade (2022), estimativa e área (2025), escolarização (2022), IDHM (2010), mortalidade infantil e PIB por pessoa (2023). Consulta: 11/08/2026.</span></a></li>`).join('');
  const sharedSources=territorySources.map(source=>`<li><a href="${source.url}" target="_blank" rel="noopener noreferrer"><strong>[${source.id}] ${esc(source.label)}</strong><span>${esc(source.detail)} Consulta: 11/08/2026.</span></a></li>`).join('');
  document.querySelector('#demography-sources').innerHTML=citySources+sharedSources;
}
let monitorDate='all';
let monitorDataCache=null;
const monitorNetworkNames={instagram:'Instagram',facebook:'Facebook',threads:'Threads',tiktok:'TikTok',youtube:'YouTube',x:'X'};
function monitoringData(){
  if(monitorDataCache)return monitorDataCache;
  const node=document.querySelector('#monitoramento-dados');
  if(!node)return null;
  try{monitorDataCache=JSON.parse(node.textContent);return monitorDataCache}catch(error){console.error('Dados de monitoramento inválidos.',error);return null}
}
function monitorNumber(value){return Number.isFinite(value)?Number(value).toLocaleString('pt-BR'):'Não verificável'}
function selectedMonitorRecords(data){return monitorDate==='all'?data.historico:data.historico.filter(item=>item.data===monitorDate)}
function aggregateNetwork(records,key){
  const pieces=records.map(item=>item.redes?.[key]).filter(Boolean);
  const sum=metric=>{const values=pieces.map(item=>item[metric]).filter(Number.isFinite);return values.length?values.reduce((total,value)=>total+value,0):null};
  const reviewedPieces=pieces.filter(item=>Number(item.comentarios_revisados)>0);
  const sentiment=metric=>reviewedPieces.length?reviewedPieces.reduce((total,item)=>total+Number(item[metric]||0),0):null;
  return {
    publicacoes:sum('publicacoes'),curtidas:sum('curtidas'),comentarios_exibidos:sum('comentarios_exibidos'),
    comentarios_revisados:sum('comentarios_revisados'),favoraveis:sentiment('favoraveis'),neutros:sentiment('neutros'),
    desfavoraveis:sentiment('desfavoraveis'),nao_classificados:sum('nao_classificados'),repostagens:sum('repostagens'),
    curtidas_comentarios:sum('curtidas_comentarios'),visualizacoes:sum('visualizacoes')
  };
}
function renderMonitorFilters(data){
  const target=document.querySelector('#monitor-date-filter');
  if(!target)return;
  const buttons=[{data:'all',rotulo:'Todos'},...data.historico.map(item=>({data:item.data,rotulo:item.rotulo}))];
  target.innerHTML=buttons.map(item=>`<button type="button" class="scope-button ${monitorDate===item.data?'active':''}" data-monitor-date="${item.data}" aria-pressed="${monitorDate===item.data}">${esc(item.rotulo)}</button>`).join('');
}
function renderMonitorLineChart(data){
  const target=document.querySelector('#monitor-line-chart');
  if(!target)return;
  const compact=window.matchMedia('(max-width: 620px)').matches;
  const width=compact?600:1000,height=compact?360:420,left=compact?62:78,right=compact?24:38,top=compact?38:42,bottom=compact?66:72,baseline=compact?195:225;
  const chartHistory=compact?[{
    data:'periodo-nao-verificavel',rotulo:'12–14/08',status:'nao_verificavel',sentimento:{favoraveis:null,desfavoraveis:null},grouped:true
  },...data.historico.filter(item=>Number.isFinite(item.sentimento?.favoraveis)&&Number.isFinite(item.sentimento?.desfavoraveis))]:data.historico;
  const maxValue=Math.max(1,...data.historico.flatMap(item=>[item.sentimento?.favoraveis,item.sentimento?.desfavoraveis]).filter(Number.isFinite));
  const xAt=index=>left+(width-left-right)*(chartHistory.length===1?.5:index/(chartHistory.length-1));
  const positiveY=value=>baseline-(Number(value)/maxValue)*(baseline-top-20);
  const negativeY=value=>baseline+(Number(value)/maxValue)*(height-bottom-baseline-20);
  const verified=chartHistory.map((item,index)=>({item,index,x:xAt(index)})).filter(point=>Number.isFinite(point.item.sentimento?.favoraveis)&&Number.isFinite(point.item.sentimento?.desfavoraveis));
  const pathFor=(points,y)=>points.map((point,index)=>`${index?'L':'M'} ${point.x.toFixed(1)} ${y(point.item).toFixed(1)}`).join(' ');
  const positivePath=pathFor(verified,item=>positiveY(item.sentimento.favoraveis));
  const negativePath=pathFor(verified,item=>negativeY(item.sentimento.desfavoraveis));
  const tickValues=[maxValue,Math.ceil(maxValue/2),0,-Math.ceil(maxValue/2),-maxValue];
  const tickY=value=>value>0?positiveY(value):value<0?negativeY(Math.abs(value)):baseline;
  const grid=tickValues.map(value=>`<g><line x1="${left}" x2="${width-right}" y1="${tickY(value)}" y2="${tickY(value)}" class="monitor-grid-line ${value===0?'zero':''}"/><text x="${left-16}" y="${tickY(value)+5}" text-anchor="end" class="monitor-axis-label">${value>0?'+':''}${value}</text></g>`).join('');
  const points=chartHistory.map((item,index)=>{
    const x=xAt(index),available=Number.isFinite(item.sentimento?.favoraveis)&&Number.isFinite(item.sentimento?.desfavoraveis),selected=monitorDate==='all'||monitorDate===item.data;
    if(!available)return `<g ${item.grouped?'':`data-monitor-date="${item.data}" role="button" tabindex="0"`} aria-label="${esc(item.rotulo)}: comentários não verificáveis" class="monitor-svg-point selected"><circle cx="${x}" cy="${baseline}" r="9" class="unavailable"/><text x="${x}" y="${baseline-17}" text-anchor="middle" class="monitor-nv-label">NV</text><text x="${x}" y="${height-35}" text-anchor="middle" class="monitor-date-label">${esc(item.rotulo)}</text></g>`;
    const py=positiveY(item.sentimento.favoraveis),ny=negativeY(item.sentimento.desfavoraveis);
    return `<g data-monitor-date="${item.data}" role="button" tabindex="0" aria-label="${esc(item.rotulo)}: ${item.sentimento.favoraveis} favoráveis e ${item.sentimento.desfavoraveis} desfavoráveis" class="monitor-svg-point ${selected?'selected':''}"><circle cx="${x}" cy="${py}" r="8" class="positive"/><text x="${x}" y="${py-15}" text-anchor="middle" class="monitor-point-value positive">+${item.sentimento.favoraveis}</text><circle cx="${x}" cy="${ny}" r="7" class="negative"/><text x="${x}" y="${ny+24}" text-anchor="middle" class="monitor-point-value negative">${item.sentimento.desfavoraveis?'-'+item.sentimento.desfavoraveis:'0'}</text><text x="${x}" y="${height-35}" text-anchor="middle" class="monitor-date-label">${esc(item.rotulo)}</text></g>`;
  }).join('');
  target.innerHTML=`<svg viewBox="0 0 ${width} ${height}" role="img" aria-labelledby="monitor-chart-title monitor-chart-desc" preserveAspectRatio="xMidYMid meet"><title id="monitor-chart-title">Comentários favoráveis e desfavoráveis por data</title><desc id="monitor-chart-desc">Valores azuis aparecem acima da linha zero e valores vermelhos aparecem abaixo. Dias sem comentários acessíveis são marcados como NV.</desc>${grid}<text x="${left}" y="22" class="monitor-axis-title">comentários classificados</text>${positivePath?`<path d="${positivePath}" class="monitor-line positive"/>`:''}${negativePath?`<path d="${negativePath}" class="monitor-line negative"/>`:''}${points}</svg>`;
}
function monitorDetailStats(records){
  const instagram=aggregateNetwork(records,'instagram');
  return {
    curtidas:instagram.curtidas,
    comentarios_exibidos:instagram.comentarios_exibidos,
    comentarios_revisados:instagram.comentarios_revisados,
    favoraveis:instagram.favoraveis,
    neutros:instagram.neutros,
    desfavoraveis:instagram.desfavoraveis,
    repostagens:instagram.repostagens,
    curtidas_comentarios:instagram.curtidas_comentarios
  };
}
function renderMonitorDayDetail(data){
  const target=document.querySelector('#monitor-day-detail');
  if(!target)return;
  const records=selectedMonitorRecords(data),stats=monitorDetailStats(records),single=records.length===1?records[0]:null;
  const facebook=aggregateNetwork(records,'facebook');
  const comments=records.flatMap(item=>(item.comentarios||[]).map(comment=>({...comment,data:item.rotulo})));
  const sources=[...new Map(records.flatMap(item=>item.fontes||[]).map(source=>[source.url,source])).values()];
  const title=single?`${single.rotulo} · ${single.titulo}`:'Todos os dias registrados';
  const summary=single?single.resumo:`O histórico reúne ${data.historico.length} datas. Há 11 comentários classificados: 8 em 16/08 e 3 em 17/08. Os dias anteriores permanecem marcados como não verificáveis.`;
  const statusText=single?(single.status==='nao_verificavel'?'Não verificável':'Dados confirmados'):'Cobertura parcial';
  const statItems=[['Curtidas nas publicações',stats.curtidas],['Comentários exibidos',stats.comentarios_exibidos],['Comentários revisados',stats.comentarios_revisados],['Favoráveis',stats.favoraveis],['Neutros ou mistos',stats.neutros],['Desfavoráveis',stats.desfavoraveis],['Repostagens',stats.repostagens],['Curtidas nos comentários',stats.curtidas_comentarios]];
  const commentHtml=comments.length?`<details class="monitor-comment-details" ${single?'open':''}><summary>Ver ${comments.length} comentário${comments.length===1?'':'s'} analisado${comments.length===1?'':'s'}</summary><ol>${comments.map(comment=>`<li><blockquote>“${esc(comment.texto)}”</blockquote><span>${esc(comment.data)} · ${esc(comment.valencia)} · Curtidas: ${Number.isFinite(comment.curtidas)?comment.curtidas:'não exibidas'}</span></li>`).join('')}</ol></details>`:'<p class="monitor-no-comments">Nenhum comentário pôde ser classificado nesta data. Isso não deve ser interpretado como zero repercussão.</p>';
  const sourceHtml=sources.length?`<div class="monitor-detail-links">${sources.map(source=>`<a href="${esc(source.url)}" target="_blank" rel="noopener noreferrer">${esc(source.label)}</a>`).join('')}</div>`:'';
  const facebookNote=Number.isFinite(facebook.comentarios_exibidos)&&facebook.comentarios_exibidos>0?` A interface também indicava ${facebook.comentarios_exibidos} comentário${facebook.comentarios_exibidos===1?'':'s'} integrado${facebook.comentarios_exibidos===1?'':'s'} do Facebook; ${facebook.comentarios_exibidos===1?'ele não foi somado':'eles não foram somados'} novamente ao total para evitar possível duplicidade.`:'';
  target.innerHTML=`<div class="monitor-detail-heading"><div><p class="eyebrow">Detalhe selecionado</p><h2>${esc(title)}</h2></div><span class="monitor-status ${single?.status==='verificado'?'':'unavailable'}">${esc(statusText)}</span></div><p>${esc(summary)}</p><div class="monitor-detail-stats">${statItems.map(([label,value])=>`<div><span>${esc(label)}</span><strong>${monitorNumber(value)}</strong></div>`).join('')}</div><p class="source-note">“Comentários exibidos” é o total mostrado pelo Instagram. “Comentários revisados” é somente o que foi efetivamente aberto e classificado.${facebookNote}</p>${commentHtml}${sourceHtml}`;
}
function verifiedDailyInteractions(record){
  if(record.status!=='verificado'||record.tipo!=='publicação oficial')return null;
  const source=record.redes?.instagram;
  const metrics=[source?.curtidas,source?.comentarios_exibidos,source?.repostagens];
  return metrics.every(Number.isFinite)?metrics.reduce((total,value)=>total+value,0):null;
}
function verifiedDailyViews(record){
  return record.status==='verificado'&&record.tipo==='publicação oficial'&&Number.isFinite(record.visualizacoes_verificadas)?record.visualizacoes_verificadas:null;
}
function monitorMetricSeries(data,metric){
  let cumulative=0,hasCumulative=false;
  return data.historico.map(record=>{
    const daily=metric(record);
    if(Number.isFinite(daily)){cumulative+=daily;hasCumulative=true}
    return {data:record.data,rotulo:record.rotulo,daily,cumulative:Number.isFinite(daily)&&hasCumulative?cumulative:null};
  });
}
function renderMonitorPairChart(targetId,series,label){
  const target=document.querySelector(targetId);
  if(!target)return;
  const visible=monitorDate==='all'?series:series.filter(item=>item.data===monitorDate);
  const values=visible.flatMap(item=>[item.daily,item.cumulative]).filter(Number.isFinite);
  const maxValue=Math.max(1,...values);
  const bar=(value,className,title)=>{
    const available=Number.isFinite(value),height=available?Math.max(value===0?2:(value/maxValue*100),4):8;
    return `<span class="monitor-pair-bar ${className} ${available?'':'unavailable'}" style="--bar-height:${height.toFixed(2)}%" title="${esc(title)}: ${available?value.toLocaleString('pt-BR'):'não verificável'}"><b>${available?value.toLocaleString('pt-BR'):'NV'}</b></span>`;
  };
  target.innerHTML=visible.map(item=>`<div class="monitor-pair-column" role="img" aria-label="${esc(item.rotulo)}: ${esc(label)} no dia ${Number.isFinite(item.daily)?item.daily.toLocaleString('pt-BR'):'não verificável'}; acumulado ${Number.isFinite(item.cumulative)?item.cumulative.toLocaleString('pt-BR'):'não verificável'}"><div class="monitor-pair-bars">${bar(item.daily,'daily','No dia')}${bar(item.cumulative,'cumulative','Acumulado')}</div><strong>${esc(item.rotulo)}</strong></div>`).join('');
}
function renderMonitorVerticalMetrics(data){
  const interactions=monitorMetricSeries(data,verifiedDailyInteractions);
  const views=monitorMetricSeries(data,verifiedDailyViews);
  renderMonitorPairChart('#monitor-interactions-bars',interactions,'interações verificadas');
  renderMonitorPairChart('#monitor-views-bars',views,'visualizações verificadas');
  const selectedInteractions=monitorDate==='all'?interactions.at(-1):interactions.find(item=>item.data===monitorDate);
  const selectedViews=monitorDate==='all'?views.at(-1):views.find(item=>item.data===monitorDate);
  const interactionsTotal=document.querySelector('#monitor-interactions-total');
  const viewsTotal=document.querySelector('#monitor-views-total');
  if(interactionsTotal)interactionsTotal.textContent=Number.isFinite(selectedInteractions?.cumulative)?`${selectedInteractions.cumulative.toLocaleString('pt-BR')} acumuladas`:'Não verificável';
  if(viewsTotal)viewsTotal.textContent=Number.isFinite(selectedViews?.cumulative)?`${selectedViews.cumulative.toLocaleString('pt-BR')} acumuladas`:'Não verificável';
}
function monitorNetworkIcon(key){
  const icons={
    instagram:'<svg viewBox="0 0 24 24" aria-hidden="true"><rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4"/><circle class="fill" cx="17.5" cy="6.5" r="1.2"/></svg>',
    facebook:'<svg viewBox="0 0 24 24" aria-hidden="true"><path class="fill" d="M14.2 21v-8h2.7l.4-3.1h-3.1V8c0-.9.3-1.5 1.6-1.5h1.7V3.7c-.3 0-1.3-.1-2.5-.1-2.5 0-4.2 1.5-4.2 4.3v2H8v3.1h2.8v8h3.4z"/></svg>',
    threads:'<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 3c5.7 0 8.6 3.4 8.6 9 0 5.8-3 9-8.2 9-4.7 0-8-2.9-8-7.1 0-3.7 2.5-6.2 6-6.2 3.8 0 6.1 2.3 6.1 5.3 0 2.7-1.8 4.6-4.3 4.6-2 0-3.4-1.1-3.4-2.7 0-1.8 1.5-2.9 3.8-2.9 3.6 0 6.2 1.5 7.7 4.2"/></svg>',
    tiktok:'<svg viewBox="0 0 24 24" aria-hidden="true"><path class="fill" d="M14.2 3h3c.2 1.8 1.2 3 3 3.4v3c-1.2 0-2.3-.3-3.1-.9v6.7a5.8 5.8 0 1 1-5.8-5.8h.9v3.1a2.7 2.7 0 1 0 1.9 2.6V3z"/></svg>',
    youtube:'<svg viewBox="0 0 24 24" aria-hidden="true"><path class="fill" d="M22 12c0-2.2-.3-4.4-.7-5.1-.4-.8-1.1-1.4-2-1.6C17.7 5 14.7 5 12 5s-5.7 0-7.3.3c-.9.2-1.6.8-2 1.6C2.3 7.6 2 9.8 2 12s.3 4.4.7 5.1c.4.8 1.1 1.4 2 1.6 1.6.3 4.6.3 7.3.3s5.7 0 7.3-.3c.9-.2 1.6-.8 2-1.6.4-.7.7-2.9.7-5.1z"/><path class="play" d="m10 9 5 3-5 3z"/></svg>',
    x:'<svg viewBox="0 0 24 24" aria-hidden="true"><path class="fill" d="M4 3h4.8l4.1 5.5L17.5 3H20l-5.9 7.3L20.7 21h-4.8l-4.5-6-5 6H4l6.2-7.8L4 3zm3.4 2 9.8 14h1.1L8.5 5H7.4z"/></svg>'
  };
  return icons[key]||'';
}
function renderMonitorNetworkChart(data){
  const target=document.querySelector('#monitor-network-chart');
  if(!target)return;
  const records=selectedMonitorRecords(data);
  const rows=Object.keys(monitorNetworkNames).map(key=>({key,name:monitorNetworkNames[key],data:aggregateNetwork(records,key)}));
  const categories=[['curtidas','likes','Curtidas'],['favoraveis','positive','Favoráveis'],['neutros','neutral','Neutros'],['desfavoraveis','negative','Desfavoráveis'],['nao_classificados','unclassified','Não classificados'],['repostagens','reposts','Repostagens']];
  const totals=rows.map(row=>categories.reduce((total,[key])=>total+(Number.isFinite(row.data[key])?row.data[key]:0),0));
  const maxTotal=Math.max(1,...totals);
  target.innerHTML=rows.map((row,index)=>{
    const total=totals[index],hasAny=categories.some(([key])=>Number.isFinite(row.data[key])&&row.data[key]>0);
    const segments=categories.map(([key,className,label])=>Number.isFinite(row.data[key])&&row.data[key]>0?`<span class="${className}" style="width:${(row.data[key]/maxTotal*100).toFixed(3)}%" title="${label}: ${row.data[key]}"></span>`:'').join('');
    const metrics=categories.map(([key,,label])=>`<span><b>${esc(label)}:</b> ${monitorNumber(row.data[key])}</span>`).join('');
    const extras=`Publicações monitoradas: ${monitorNumber(row.data.publicacoes)} · Comentários exibidos: ${monitorNumber(row.data.comentarios_exibidos)} · Revisados: ${monitorNumber(row.data.comentarios_revisados)}`;
    return `<section class="monitor-network-row" aria-label="${esc(row.name)}"><span class="monitor-network-icon ${row.key}" aria-hidden="true">${monitorNetworkIcon(row.key)}</span><div class="monitor-network-body"><div class="monitor-network-heading"><h3>${esc(row.name)}</h3><strong>${hasAny?total.toLocaleString('pt-BR')+' interações contáveis':'Aguardando métrica verificável'}</strong></div><div class="monitor-network-track" role="img" aria-label="${esc(row.name)}: ${esc(extras)}">${segments||'<span class="empty">Sem número comparável</span>'}</div><div class="monitor-network-metrics">${metrics}</div><p class="source-note">${esc(extras)}${Number.isFinite(row.data.curtidas_comentarios)?` · Curtidas nos comentários: ${row.data.curtidas_comentarios}`:''}</p></div></section>`;
  }).join('');
}
function renderMonitoring(){
  const data=monitoringData();
  if(!data||!Array.isArray(data.historico))return;
  renderMonitorFilters(data);
  renderMonitorLineChart(data);
  renderMonitorDayDetail(data);
  renderMonitorVerticalMetrics(data);
  renderMonitorNetworkChart(data);
}
function renderUsers(){const remote=window.campaignBackend.isRemote(),users=remote?window.campaignBackend.users:window.campaignBackend.users;document.querySelector('#current-user-display').textContent=window.campaignBackend.displayName();document.querySelector('#user-list').innerHTML=users.map((u,i)=>`<span>${i+1}. ${esc(u.display_name)} <small>(${esc(u.role)})</small></span>`).join('');const canManage=window.campaignBackend.isAdmin();const form=document.querySelector('#users-form');form.querySelectorAll('input,select,button[type="submit"]').forEach(element=>element.disabled=!canManage);form.querySelector('.form-intro').textContent=canManage?'O administrador cadastra o e-mail primeiro. Depois, a pessoa usa “Ativar primeiro acesso” na tela de entrada e cria sua própria senha.':'Somente um administrador pode incluir, alterar ou remover acessos.';document.querySelector('#user-fields').innerHTML=`<div class="access-list" role="list">${users.map(u=>`<div class="access-row" role="listitem"><span><strong>${esc(u.display_name)}</strong><small>${esc(u.email)} · ${esc(u.role)}</small></span>${canManage&&u.email!==window.campaignBackend.email()?`<button class="text-button danger" type="button" data-remove-user="${esc(u.email)}">Remover</button>`:''}</div>`).join('')}</div>`}
function renderAudit(){document.querySelector('#audit-table').innerHTML=state.audit.length?state.audit.map(a=>`<tr><td>${new Date(a.at).toLocaleString('pt-BR')}</td><td>${esc(a.actor)}</td><td>${esc(a.action)}</td><td>${esc(a.detail)}</td></tr>`).join(''):'<tr><td colspan="4">Nenhuma atividade registrada.</td></tr>'}
function applyWriteAccess(){if(window.campaignBackend.canWrite())return;document.querySelectorAll('[data-task],[data-answer],#metric-form input,#metric-form select,#metric-form textarea,#metric-form button[type="submit"],#settings-form input,#settings-form button[type="submit"],#import-json,#clear-metrics,[data-delete-metric],#save-phase').forEach(element=>element.disabled=true)}
function renderAll(){renderNav();renderPhase();updateProgress();renderMetrics();renderTerritory();renderMonitoring();renderUsers();renderAudit();applyWriteAccess()}
function applySettings(){document.documentElement.style.setProperty('--primary',state.settings.primaryColor||'#1800ac');document.documentElement.style.setProperty('--accent',state.settings.accentColor||'#00d100');document.querySelector('#brand-name').textContent=state.settings.candidateName;const f=document.querySelector('#settings-form');Object.entries(state.settings).forEach(([k,v])=>{if(f.elements[k])f.elements[k].value=v})}
function toast(msg){const el=document.querySelector('#toast');el.textContent=msg;el.classList.add('show');clearTimeout(toast.timer);toast.timer=setTimeout(()=>el.classList.remove('show'),2600)}
function download(name,text,type='text/plain'){const a=document.createElement('a');a.href=URL.createObjectURL(new Blob([text],{type}));a.download=name;a.click();setTimeout(()=>URL.revokeObjectURL(a.href),1000)}
function csv(rows){return '\ufeff'+rows.map(r=>r.map(v=>`"${String(v??'').replace(/"/g,'""')}"`).join(';')).join('\n')}
function phaseMarkdown(){const p=phases[activePhase];return `# Módulo ${activePhase+1} — ${p.title}\n\n**Preencher em:** ${prepLabels[activePhase]}\n\n**Objetivo:** ${p.objective}\n\n## Tarefas\n${p.tasks.map((t,j)=>`- [${state.tasks[`${activePhase}-${j}`]?'x':' '}] ${t}`).join('\n')}\n\n## Perguntas e respostas\n${p.questions.map((q,j)=>`### ${q}\n${state.answers[`${activePhase}-${j}`]||'Resposta pendente.'}`).join('\n\n')}\n\n## Resultado ideal\n${p.ideal}\n\n## Explicação simples\n${p.explain}\n\n## Regra aplicada\n${p.law}\n\n## Fontes\n${p.refs.map(k=>`- ${sources[k].label}: ${sources[k].url}`).join('\n')}\n`}
function strategicMapMarkdown(){return `# Mapa Estratégico da Campanha — Kiel Damasceno 2026\n\n> Documento operacional. Não é pesquisa eleitoral nem previsão de votos.\n\n${[1,2,3].map(i=>`## ${phases[i].title}\n\n**Objetivo:** ${phases[i].objective}\n\n${phases[i].questions.map((q,j)=>`### ${q}\n${state.answers[`${i}-${j}`]||'Resposta pendente.'}`).join('\n\n')}\n\n**Resultado esperado:** ${phases[i].ideal}`).join('\n\n---\n\n')}\n\n## Aprovação na reunião de feedback\n\n- Data: ____/____/2026\n- Decisão: ( ) aprovado  ( ) corrigir  ( ) refazer\n- Responsável: ____________________\n- Próxima revisão: ____/____/2026\n`}

document.addEventListener('click',async e=>{
  const monitorFilter=e.target.closest('[data-monitor-date]');
  if(monitorFilter){monitorDate=monitorFilter.dataset.monitorDate;renderMonitoring();return}
  const help=e.target.closest('[data-help-button]');
  if(help){const box=help.parentElement.querySelector('.question-help'),open=!box.classList.contains('open');document.querySelectorAll('.question-help.open').forEach(item=>item.classList.remove('open'));document.querySelectorAll('[data-help-button][aria-expanded="true"]').forEach(item=>item.setAttribute('aria-expanded','false'));box.classList.toggle('open',open);help.setAttribute('aria-expanded',String(open));return}
  const scope=e.target.closest('[data-demography-scope]');
  if(scope){demographyScope=scope.dataset.demographyScope;document.querySelectorAll('[data-demography-scope]').forEach(button=>{const active=button===scope;button.classList.toggle('active',active);button.setAttribute('aria-pressed',String(active))});renderTerritory();return}
  const phase=e.target.closest('[data-phase]');
  if(phase){activePhase=Number(phase.dataset.phase);renderNav();renderPhase();applyWriteAccess();window.scrollTo({top:document.querySelector('.journey-layout').offsetTop-80,behavior:'smooth'})}
  const nav=e.target.closest('[data-view]');
  if(nav){document.querySelectorAll('.view').forEach(v=>v.hidden=v.id!==nav.dataset.view);document.querySelectorAll('[data-view]').forEach(a=>a.classList.toggle('active',a===nav));document.querySelector('#main-nav').classList.remove('open');document.querySelector('.menu-button').setAttribute('aria-expanded','false')}
  if(e.target.id==='save-phase'){if(!window.campaignBackend.canWrite()){toast('Seu acesso permite somente leitura.');return}log('Salvou módulo',phases[activePhase].title);await save('Módulo salvo no banco compartilhado.')}
  if(e.target.id==='download-phase')download(`modulo-${activePhase+1}.md`,phaseMarkdown(),'text/markdown');
  if(e.target.id==='download-strategy')download('mapa-estrategico-kiel-2026.md',strategicMapMarkdown(),'text/markdown');
  if(e.target.matches('[data-delete-metric]')){if(!window.campaignBackend.canWrite()){toast('Seu acesso permite somente leitura.');return}const m=state.metrics[Number(e.target.dataset.deleteMetric)];log('Excluiu alcance',`${m.territory} · ${Number(m.reach||0).toLocaleString('pt-BR')} pessoas`);state.metrics.splice(Number(e.target.dataset.deleteMetric),1);await save('Registro excluído.');renderMetrics()}
  if(e.target.matches('[data-remove-user]')){try{await window.campaignBackend.removeUser(e.target.dataset.removeUser);log('Removeu acesso',e.target.dataset.removeUser);await save('Acesso removido.');renderUsers()}catch(error){toast(error.message)}}
  if(e.target.id==='export-json')download('campanha-kiel-backup.json',JSON.stringify(stateForSave(),null,2),'application/json');
  if(e.target.id==='export-csv')download('alcance-campanha.csv',csv([['Data','Cidade','Ação','Canal','Abordagem','Alcance','Fonte do número','Conversas','Apoiadores','Operador','Observação'],...state.metrics.map(m=>[m.date,m.city,m.territory,m.channel,m.approach,m.reach,m.evidence,m.conversations,m.supporters,m.actor,m.note])]),'text/csv;charset=utf-8');
  if(e.target.id==='export-audit')download('historico-campanha.csv',csv([['Data e hora','Operador','Ação','Detalhe'],...state.audit.map(a=>[a.at,a.actor,a.action,a.detail])]),'text/csv;charset=utf-8');
  if(e.target.id==='clear-metrics'&&state.metrics.length&&confirm('Excluir todos os registros de alcance do banco compartilhado?')){if(!window.campaignBackend.canWrite()){toast('Seu acesso permite somente leitura.');return}log('Limpou painel',`${state.metrics.length} registros excluídos`);state.metrics=[];await save('Registros removidos.');renderMetrics()}
  if(e.target.id==='logout-button')await window.campaignBackend.logout();
});

document.addEventListener('keydown',e=>{const point=e.target.closest?.('.monitor-svg-point[data-monitor-date]');if(point&&(e.key==='Enter'||e.key===' ')){e.preventDefault();monitorDate=point.dataset.monitorDate;renderMonitoring()}});

document.addEventListener('change',async e=>{if(e.target.matches('[data-task]')){if(!window.campaignBackend.canWrite()){e.target.checked=!e.target.checked;toast('Seu acesso permite somente leitura.');return}state.tasks[e.target.dataset.task]=e.target.checked;log(e.target.checked?'Concluiu tarefa':'Reabriu tarefa',phases[activePhase].title);await save();renderNav();renderPhase();updateProgress()}});
document.addEventListener('input',e=>{if(e.target.matches('[data-answer]')&&window.campaignBackend.canWrite())state.answers[e.target.dataset.answer]=e.target.value});
document.querySelector('.menu-button').addEventListener('click',e=>{const open=document.querySelector('#main-nav').classList.toggle('open');e.currentTarget.setAttribute('aria-expanded',String(open))});

document.querySelector('#metric-form').addEventListener('submit',async e=>{e.preventDefault();if(!window.campaignBackend.canWrite()){toast('Seu acesso permite somente leitura.');return}const form=e.currentTarget,d=new FormData(form),m={city:d.get('city'),channel:d.get('channel'),approach:d.get('approach'),territory:d.get('territory').trim(),date:d.get('date'),reach:Number(d.get('reach')),evidence:d.get('evidence'),conversations:Number(d.get('conversations')),supporters:Number(d.get('supporters')),note:d.get('note').trim(),actor:actor(),createdAt:new Date().toISOString()};state.metrics.push(m);log('Inseriu alcance',`${m.city} · ${m.channel} · ${m.reach.toLocaleString('pt-BR')} pessoas`);await save('Alcance salvo.');form.reset();renderMetrics()});
document.querySelector('#settings-form').addEventListener('submit',async e=>{e.preventDefault();if(!window.campaignBackend.canWrite()){toast('Seu acesso permite somente leitura.');return}const d=new FormData(e.currentTarget);state.settings={candidateName:d.get('candidateName').trim()||'Kiel Damasceno',slogan:d.get('slogan').trim(),primaryColor:d.get('primaryColor'),accentColor:d.get('accentColor')};log('Alterou identidade','Nome, slogan ou cores');applySettings();await save('Identidade salva no banco compartilhado.')});
document.querySelector('#users-form').addEventListener('submit',async e=>{e.preventDefault();if(!window.campaignBackend.isAdmin()){toast('Somente o administrador pode gerenciar acessos.');return}const form=e.currentTarget,d=new FormData(form),user={display_name:String(d.get('displayName')).trim(),email:String(d.get('email')).trim().toLowerCase(),role:String(d.get('role')),active:true};try{if(window.campaignBackend.isRemote())await window.campaignBackend.upsertUser(user);else{const current=window.campaignBackend.users.findIndex(item=>item.email===user.email);if(current>=0)window.campaignBackend.users[current]=user;else if(window.campaignBackend.users.length<10)window.campaignBackend.users.push(user);else throw new Error('O limite de 10 acessos foi atingido.')}log('Cadastrou acesso',`${user.display_name} · ${user.role}`);await save('Acesso cadastrado.');form.reset();renderUsers()}catch(error){toast(error.message)}});
document.querySelector('#import-json').addEventListener('change',async e=>{try{if(!window.campaignBackend.canWrite())throw new Error('Seu acesso permite somente leitura.');const incoming=JSON.parse(await e.target.files[0].text());if(!incoming||typeof incoming!=='object'||!Array.isArray(incoming.metrics))throw new Error('Arquivo de cópia inválido.');state={...state,...incoming,audit:state.audit,users:state.users,settings:{...state.settings,...incoming.settings}};log('Restaurou cópia','Arquivo JSON importado');await save('Cópia restaurada.');applySettings();renderAll()}catch(error){toast(error.message||'Arquivo de cópia inválido.')}e.target.value=''});
window.addEventListener('hashchange',()=>{const id=location.hash.slice(1)||'jornada',link=document.querySelector(`[data-view="${id}"]`);if(link)link.click()});

(async()=>{try{await window.campaignBackend.initialize();await load();const id=location.hash.slice(1),link=id&&document.querySelector(`[data-view="${id}"]`);if(link)link.click()}catch(error){toast(error.message||'Não foi possível abrir o banco compartilhado.')}})();
