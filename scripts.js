document.addEventListener('DOMContentLoaded', function () {

    // -------------------------
    // 1) Dados de conteúdo
    // -------------------------
    const conteudos = {
        'novo-ponto': { 
            titulo: "Escala para levar o telefone", 
            data: "07/outubro/2025", 
            tipo: "Notícia", 
            fonte: "RH",
            destaque: true,
            texto: `Segue a escala atualizada para o revezamento do telefone rosinha.<br>
Para visualizar o arquivo completo, <a href="https://file.notion.so/f/f/1fed86c6-e0b7-81fa-8f06-000318a01d88/b21b1192-bee4-4fa8-bcb3-9315602f6caa/Escala_telefone!.pdf?table=block&id=286d86c6-e0b7-8077-a242-c9b2a046d484&spaceId=1fed86c6-e0b7-81fa-8f06-000318a01d88&expirationTimestamp=1765260000000&signature=AWFFiErOgRrq1RH1pzvo0qAmHywQLAEuxEMoruLYtsI&downloadName=Escala+telefone%21.pdf" target="_blank"><strong>acesse aqui</strong></a>.`


        },


        "telefone-rosa":{
            titulo:"Telefone Rosinha",
            data: "02 de outubro de 2025",
            tipo: "Notícia",
            fonte: "RH",
            destaque:true,
            texto: `Pessoal,<br><br>

📢 Temos um comunicado importante sobre o telefone rosinha, utilizado para o atendimento aos nossos clientes.<br><br>

Será organizada uma <strong>escala de revezamento para levar o aparelho para casa</strong> nas quintas-feiras, devido ao home office das sextas-feiras.<br><br>

Porém, nos períodos de <strong>fechamento da folha</strong>, o DP ficará responsável por levar o telefone. Ou seja, a escala será feita pelos integrantes do próprio departamento, sem necessidade de seguir a escala geral, pois nesse período o fluxo de atendimento é maior para o setor.<br><br>

Agradeço desde já a compreensão e colaboração de todos! ✨`,

        },

        'ramais': { 
            titulo: "Contatos e Ramais", 
            data: "01/Setembro/2025", 
            tipo: "Documento", 
            fonte: "Administração",
            destaque: false,
            texto: `A equipe da AndCont é formada por profissionais dedicados que atuam em diferentes áreas essenciais para o atendimento completo às organizações do Terceiro Setor. Cada colaborador contribui com conhecimento técnico, comprometimento e excelência para garantir a qualidade dos serviços prestados.<br>

<strong>Monica Andrade</strong> – monicaandrade@andcont.com.br – CEO<br>
<strong>Amanda Cristão</strong> – amandacristao@andcont.com.br – Contábil<br>
<strong>Ana Julia Curi</strong> – anajulia@andcont.com.br – DP<br>
<strong>Angelica Ferreira</strong> – angelicaferreira@andcont.com.br – Contábil<br>
<strong>Dayana Ribeiro</strong> – dayanaribeiro@andcont.com.br – Contábil<br>
<strong>Iago Santa Santana</strong> – iagosantana@andcont.com – Contábil<br>
<strong>Gabrielle Oliveira</strong> – gabrielleoliveira@andcont.com.br – Societário<br>
<strong>Isabelly Manoela</strong> – isabellymanoela@andcont.com.br – DP<br>
<strong>Jamile Santos</strong> – jamilesantos@andcont.com.br – Fiscal<br>
<strong>Julia Victoria</strong> – juliavictoria@andcont.com.br – DP<br>
<strong>Karoline Borges</strong> – karolineborges@andcont.com.br – Financeiro<br>
<strong>Luciene Pimenta</strong> – lucienepimenta@andcont.com.br – DP<br>
<strong>Vanda Silva</strong> – vandasilva@andcont.com.br – DP<br>
<strong>Raquel Monteiro</strong> – raquelmonteiro@andcont.com.br – Comercial<br>
<strong>Taiane Amaral</strong> – taianeamaral@andcont.com.br – Comercial<br>
<strong>Taissa Arruda</strong> – taissaarruda@andcont.com.br – Contábil<br>
<strong>Tatiane Amaro</strong> – tatianeamaro@andcont.com.br – Contábil<br>
<strong>Vitória Oliveira</strong> – victoriaoliveira@andcont.com.br – RH<br>
<strong>Yves Andrade</strong> – yvesandrade@andcont.com.br – CEO<br>`
        },
        'codigo-conduta': { 
            titulo: "Código de Conduta e Ética", 
            data: "08/Outubro/2025", 
            tipo: "RH", 
            fonte: "Compliance",
            destaque: false,
            texto: 'Para garantir transparência, integridade e boas práticas no ambiente de trabalho, leia o nosso Código de Ética e Conduta. Ele orienta comportamentos, responsabilidades e diretrizes importantes para todos. <br><br>👉 Acesse aqui:  <a href="https://file.notion.so/f/f/1fed86c6-e0b7-81fa-8f06-000318a01d88/52a17aef-a719-475b-8ee8-9cd215805d13/Cdigo_de_tica_e_Conduta_compressed.pdf" target="_blank" rel="noopener noreferrer">Acessar Código de Ética e Conduta</a>'
        },
        'gincana2': { 
            titulo: "Gincana dentro e fora", 
            data: "03/Dezembro/2025", 
            tipo: "Evento", 
            fonte: "Evento",
            destaque: true,
            texto: "" 
        },
        'gincana': { 
            titulo: "Jogo interativo - portal do cliente", 
            data: "03/Dezembro/2025", 
            tipo: "Evento", 
            fonte: "Eventos",
            destaque: true,
            texto: "" 
        },
        'uso-celular': {
            titulo: "Regras para Uso de Celular",
            data: "01/Maio/2025",
            tipo: "RH",
            fonte: "Administração",
            destaque: false,
            texto: `<strong>Uso do celular</strong><br>
<strong>Fala, time!</strong>
Nosso dia a dia é cheio de responsabilidades e manter o foco é essencial para entregarmos um trabalho de qualidade. Trabalhamos diretamente com <strong>guias, documentos e prazos importantes</strong>, e qualquer distração pode gerar erros sérios.

O celular pode ser usado, mas sempre com <strong>consciência e responsabilidade</strong>. Caso ele passe a gerar distrações, isso impacta a qualidade das entregas e também será considerado na <strong>avaliação de desempenho</strong>.

👉 Use com bom senso, priorize suas tarefas e atendimentos, e lembre-se de que o foco de cada um garante produtividade, respeito ao tempo dos colegas e confiança dos nossos clientes.

Contamos com a colaboração de todos para mantermos um <strong>ambiente produtivo, responsável e equilibrado</strong>. Juntos, seguimos transformando! ✨`
        },
        'equipamentos-ti': {
            titulo: "Boas Práticas com Equipamentos!",
            data:"08/Dezembro/2025",
            tipo:"RH",
            fonte:"RH",
            destaque: false,
            texto: `<strong>Boas Práticas com Equipamentos!</strong><br>
Pessoal, para garantirmos a durabilidade e o bom funcionamento dos equipamentos utilizados no dia a dia — como computadores, notebooks, fones, impressoras e demais dispositivos — é importante que todos sigam alguns cuidados:

<strong>1. Manuseio com atenção</strong>
• Evite comer ou beber próximo aos equipamentos.
• Utilize sempre de forma cuidadosa para prevenir quedas ou danos.

<strong>2. Higienização</strong>
• Mantenha o equipamento limpo, usando apenas produtos adequados.
• Evite aplicar líquidos diretamente sobre o equipamento.

<strong>3. Uso responsável</strong>
• Utilize exclusivamente para atividades relacionadas ao trabalho.
• Evite instalar programas, aplicativos ou extensões sem autorização.

<strong>4. Armazenamento e transporte</strong>
• Guarde o equipamento em local seguro.
• Ao transportar, utilize bolsas ou capas de proteção.

<strong>5. Comunicação de problemas</strong>
• Qualquer falha ou dano deve ser comunicado imediatamente ao setor Administrativo/Financeiro.
• Será avaliado se o dano ocorreu por desgaste natural ou mau uso.
• Em caso de mau uso, o colaborador responsável deverá arcar com os custos do conserto.

😉 Nosso cuidado com os equipamentos reflete responsabilidade, respeito ao ambiente de trabalho e aos recursos da empresa. Assim, garantimos melhores condições para todos desempenharem suas funções da melhor forma.`
        },

        'saber': {
            titulo: "O que devo saber?!",
            data:"08/Junho/2025",
            tipo:"RH",
            fonte:"Administração",
            destaque: false,
            texto: `<strong>O que devo saber?!</strong><br>
🌱 <strong>Noções Básicas do Terceiro Setor</strong> — conteúdo preparado para trazer uma visão simples e prática sobre o Terceiro Setor e o universo em que atuamos. O Terceiro Setor atendido pela AndCont é formado por <strong>Associações</strong>, <strong>Fundações</strong> e <strong>Organizações Religiosas</strong>, todas pessoas jurídicas de direito privado conforme o <strong>art. 44 do Código Civil</strong>.

<strong>Tipos de Pessoas Jurídicas (no Código Civil)</strong><br>

<strong>Associações:</strong> união de pessoas com um objetivo comum, estruturadas de forma democrática por assembleias e participação dos associados.

<strong>Fundações:</strong> surgem de um patrimônio destinado a uma causa social. Dependem de aprovação do Ministério Público, não têm fins lucrativos e só podem ser criadas para fins <strong>religiosos, morais, culturais ou de assistência</strong>.

<strong>O que não faz parte do Terceiro Setor</strong><br>
Cooperativas, sociedades empresariais e partidos políticos estão no Código Civil, mas não integram o Terceiro Setor.

<strong>Resumo</strong><br>
O Terceiro Setor é o espaço onde a sociedade civil organizada busca transformar realidades. Associações e fundações existem para gerar <strong>impacto social e coletivo</strong>, e não lucro.`
        },
        // Aqui está o Recap de Setembro, com publicacoes internas
        'setembro': {
            titulo: "Recap - Eventos de Setembro",
            data: "30/Setembro/2025",
            tipo: "Evento",
            fonte: "Comunicação",
            destaque: false,
            texto: "Galeria de fotos e resumo dos eventos que rolaram no mês de Setembro, incluindo o Happy Hour de Primavera!",
            publicacoes: [
                {
                    id: 'setembro-happyhour',
                    titulo: "Happy Hour – Galeria completa",
                    texto: "Veja as fotos do nosso encontro especial que marcou o início da primavera 🎉🌼."
                },
                {
                    id: 'setembro-palestra',
                    titulo: "Palestra – Comunicação Assertiva",
                    texto: "Resumo das principais dinâmicas aplicadas durante a palestra."
                },
                {
                    id: 'setembro-treinamento',
                    titulo: "Treinamento – Atendimento Humanizado",
                    texto: "Conteúdos abordados e práticas demonstradas no treinamento."
                }
            ]
        },
        'politica-antiga': {
            titulo: "Política de Home Office (2024)",
            data: "01/Janeiro/2024",
            tipo: "Política",
            fonte: "RH",
            destaque: false,
            texto: "Regras antigas de Home Office, substituídas em 2025."
        },
        'cursos-acessos': { 
            titulo: "Cursos e Plataformas de Treinamento", 
            data: "01/Agosto/2025", 
            tipo: "RH", 
            fonte: "RH",
            destaque: false,
            texto: `<strong>📘 Cursos, Consultorias e Acessos</strong><br> <br> <strong>AUDISA</strong><br> CNPJ: 47.754.987/0001-01<br> Senha: andcont2023<br> Descrição: Curso / Consultoria<br> <br> <strong>COAD</strong><br> Login: 11K16409<br> Senha: 99039627<br> Descrição: Consultoria e cursos com desconto<br> <br> <strong>FILANTROPIA</strong><br> E-mail: monicaandrade@andcont.com.br <br> Senha: 804616<br> Descrição: Consultoria e cursos com desconto<br> <br> <strong>🎓 Cursos Gratuitos Recomendados</strong><br> <br> • <strong>SEBRAE</strong> — https://www.sebrae.com.br <br> • <strong>CRC</strong> (dependendo do estado) — consulte o CRC da sua região<br> • <strong>Bradesco – Escola Virtual</strong> — https://www.ev.org.br <br> • <strong>FGV</strong> — https://educacao-executiva.fgv.br/cursos/gratuitos <br> • <strong>Aprenda.org</strong> — https://aprenda.org <br> • <strong>Saberes</strong> — https://saberes.senado.leg.br <br> • <strong>SESCON / UNISESCON</strong> — https://www.unisescon.org.br <br> • <strong>SENAI</strong> — https://loja.mundosenai.com.br <br> • <strong>Harvard (edX)</strong> — https://www.edx.org/school/harvardx <br> Criar conta na edX para acessar cursos gratuitos.<br> • <strong>Coursera</strong> — https://www.coursera.org <br> Cursos de universidades do mundo inteiro.<br> • <strong>EGP</strong> (Escola de Gestão Pública) — depende do estado, ex.: https://egp.rj.gov.br <br> • <strong>Escola Aberta do Terceiro Setor (YouTube)</strong> — https://www.youtube.com/@escolaaberta3setor <br> • <strong>LinkedIn Learning</strong> — https://www.linkedin.com/learning <br> • <strong>OSC Legal (YouTube)</strong> — https://www.youtube.com/@osclegal <br> • <strong>Podcast 3º Setor</strong> — disponível no Spotify<br>`
        },
        'banco-horas': { 
            titulo: "Ponto Eletrônico e Banco de Horas", 
            data: "01/Dezembro/2025", 
            tipo: "RH", 
            fonte: "RH",
            destaque: false,
            texto: `<strong>Banco de Horas</strong><br>
📌 A AndCont permite a utilização de <strong>Banco de Horas</strong>. Horas excedentes devem ser previamente autorizadas pelo gestor. Após a autorização, o colaborador deve registrar no formulário — <a href="https://forms.gle/iDkt6NWHFHmxc3Jc7"><strong>Acesse aqui</strong></a>. Realizar horas extras sem autorização pode gerar medidas disciplinares.

<strong>Como funciona a compensação?</strong><br>

Horas trabalhadas em domingos e feriados têm adicional de <strong>100%</strong>.

Horas extras em dias úteis (incluindo sábado) são compensadas pelo banco de horas.

Faltas podem ser compensadas ou descontadas na folha.

<strong>Tenho horas acumuladas, e agora?</strong><br>
O colaborador deve alinhar com o gestor a forma de compensação. Seja saldo positivo ou negativo, os dias ou horas devem ser combinados diretamente com o gestor.

<strong>Ponto Eletrônico</strong><br>
Para registrar corretamente:

<strong>Horário de Entrada:</strong> registrar no início da jornada.

<strong>Horário de Saída:</strong> registrar ao encerrar a jornada.

Pode registrar pelo celular ou computador.
É fundamental registrar corretamente para evitar inconsistências.

<strong>Esqueci de registrar o ponto</strong><br>
Para regularizar, preencha o termo de justificativa — <a href="https://drive.google.com/drive/folders/1HB_1OXo9RaLMeRuZO_eV2YDB_jZF15_6"><strong>Acesse aqui</strong></a>. O documento deve ser assinado por colaborador e gestor e enviado para <strong>rh@andcont.com.br
</strong>.

<strong>Local padrão de registro</strong><br>
O local padrão é o endereço da <strong>AndCont</strong>. Registros fora desse local geram inconsistência. Colaboradores com mais de 50% de home office podem registrar na residência; qualquer outro endereço gera inconsistência.`
        },
        'politica-emprestimo': { 
            titulo: "Política de Empréstimo Consignado", 
            data: "10/Junho/2025", 
            tipo: "RH", 
            fonte: "Financeiro", 
            destaque: false,
            texto: `<strong>📄 Política de Empréstimo</strong><br>
<strong>Objetivo:</strong> Definir diretrizes para empréstimos relacionados à AndCont, garantindo transparência e informação clara aos colaboradores sobre o novo procedimento de obtenção de crédito.<br>
<strong>1. Escopo:</strong> Esta política se aplica a todos os colaboradores da AndCont, independentemente do cargo ou tempo de empresa.<br>
<strong>2. Alteração na Modalidade de Empréstimos:</strong> A partir de Maio/2025, a AndCont não realizará mais concessão ou intermediação de empréstimos a colaboradores sob qualquer modalidade, incluindo empréstimos consignados.<br>
<strong>3. Empréstimos Pessoais via Banco Itaú:</strong> Os colaboradores interessados poderão solicitar empréstimos pessoais diretamente junto ao Banco Itaú. Devido à relação entre a AndCont e o Itaú, poderão existir condições especiais, a serem avaliadas exclusivamente pelo banco, de acordo com as políticas da instituição.<br>
<strong>4. Procedimentos:</strong> O colaborador deve procurar diretamente o Banco Itaú (agências, internet banking, aplicativo ou central de atendimento). Todo o processo de análise, aprovação, contratação, condições e taxas será conduzido e decidido exclusivamente pelo Itaú. A AndCont não se responsabiliza por intermediação, aprovação, condições, taxas ou eventuais negociações.<br>
<strong>5. Suporte e Orientação:</strong> O setor de RH está disponível apenas para esclarecimentos sobre a presente política e a mudança de procedimento. Todas as dúvidas, simulações, informações sobre taxas, condições e contratação deverão ser tratadas diretamente com o Banco Itaú.<br>
<strong>6. Disposições Gerais:</strong> Eventuais alterações nesta política serão comunicadas oficialmente a todos os colaboradores. Esta política entra em vigor na data de sua publicação. A AndCont valoriza a transparência e o bem-estar dos colaboradores, mantendo parcerias que possam oferecer benefícios. A partir desta publicação, não haverá mais concessão ou intermediação de empréstimos pela empresa.`
        },
        'lgpd': { 
            titulo: "LGPD", 
            data: "01/Julho/2025", 
            tipo: "RH", 
            fonte: "Compliance", 
            destaque: false,
            texto: `<strong># LGPD</strong><br>
🔒 <strong>Proteção de Dados</strong><br>
Time,<br>
Gostaríamos de reforçar um tema muito importante para todos nós: a <strong>segurança e proteção dos dados sensíveis de nossos clientes</strong>.<br>
A LGPD (Lei Geral de Proteção de Dados) existe para garantir que informações pessoais e confidenciais sejam tratadas com <strong>sigilo, respeito e responsabilidade</strong>. Isso significa que cada dado que chega até nós é um voto de confiança — e cabe a cada colaborador da AndCont zelar para que essa confiança seja preservada.<br>
👉 <strong>Por isso, lembre-se:</strong><br>

Nunca compartilhe dados sem autorização.<br>

Utilize apenas os canais oficiais e seguros da empresa para envio e armazenamento.<br>

Evite acessos desnecessários e respeite a confidencialidade das informações.<br>

Em caso de dúvida, procure o setor responsável antes de agir.<br>
<strong>Lembre-se:</strong> guardar com segurança os dados de nossos clientes é proteger pessoas, histórias e instituições que confiam em nós.<br>
Juntos, seguimos construindo um ambiente de responsabilidade, ética e transparência.`,
        },
        'gestao-beneficios': { 
            titulo: "Gestão de benefícios e ferramentas", 
            data: "01/Março/2025", 
            tipo: "RH", 
            fonte: "RH",
            destaque: false,
            texto: `A Gestão de Benefícios é essencial para garantir que todos os colaboradores tenham acesso aos recursos que facilitam seu dia a dia, fortalecem o bem-estar e melhoram a experiência dentro da empresa.

Atualmente, ferramentas especializadas permitem organizar e controlar benefícios como vale-transporte, alimentação, saúde, auxílio-educação e outros programas internos, trazendo mais agilidade, transparência e eficiência para o RH.

Para acessar o documento completo sobre Gestão de Benefícios e Ferramentas, <a href="https://docs.google.com/document/d/16X2EuwC07zVEppghT1CHrT18cKW_hSQE/edit?tab=t.0" target="_blank">clique aqui</a>`
        },
     "aconteceu-andcont": {
    titulo: "Aconteceu na AndCont",
    data: "30/Setembro/2025",
    tipo: "Evento",
    fonte: "RH",
    texto: `<strong>A data da nossa confraternização foi alterada para o dia 13/12 🎉</strong><br>
Encontro RH dia 04/09 (trabalho em equipe)<br>
Encontro RH dia 09/09 (trabalho em equipe)<br>
<strong>Vem aí AndCont por Você – dia 11/09</strong><br>
Encontro RH dia 16/09 (comunicação que conecta)<br>
<strong>Nova agência de marketing:</strong> agora estamos com a Mooflag, especializada em escritório de contabilidade — uma parceria de muito sucesso.<br>
<strong>Novidade no Sucesso do Cliente:</strong> a Vitória agora também faz parte do departamento, oferecendo mais apoio para garantir a melhor experiência aos nossos clientes.<br>
Encontro RH dia 23/09 às 08h (Comunicação sem ruído)<br>
<strong>Pegadinha:</strong> “Você tem coragem? Chega na Vitória e fala que ela tem chulé 😒 e ganhe um brinde misterioso 😎” — dia 23/09<br>
<strong>Comunicado importante:</strong> preparem-se para uma boa notícia no encontro com a Vitória — 24/09<br>
<strong>🎉 Eu ouvi… férias coletivas? SIIIM!</strong> Já podem se programar para curtir o final de ano com tranquilidade, descanso e muita energia boa. 😎✨ — 25/09`
},

"plano-de-saude": {
    titulo: "Plano de saúde",
    data: "25/Setembro/2025",
    tipo: "Evento",
    fonte: "RH",
    texto: `📢 <strong>Plano de Saúde – AndCont</strong><br>
Pessoal, como já informado, estamos tentando mais uma vez a alteração do plano de saúde, pois sabemos o quanto esse benefício é importante para todos. Pensando no bem-estar da equipe, estamos em tratativas para implementar o plano da <strong>Amil 💙</strong>.<br>
👉 Pedimos que cada um verifique as informações descritas na planilha e confira a rede credenciada. Avaliem o que faz mais sentido para vocês e, em caso de dúvidas, a <strong>Vitória</strong> estará à disposição para orientar e auxiliar individualmente.<br>
📅 <strong>Prazo para retorno:</strong> até sexta-feira, <strong>26/09/2025, às 15h</strong>.<br>
Contamos com a colaboração de todos para avançarmos juntos nessa conquista! ✨<br>
Segue o link do formulário para vocês incluírem suas respostas: <a href="https://forms.gle/TVkKjqnsfkCSjpWv5" target="_blank">https://forms.gle/TVkKjqnsfkCSjpWv5
</a><br><br>
😉 <strong>Informações adicionais</strong><br>
📢 <strong>Comunicado – Plano de Saúde Amil</strong><br>
Pessoal,<br>
Com o objetivo de oferecer mais segurança e bem-estar, informamos que a AndCont disponibiliza o plano de saúde <strong>Amil Bronze</strong>, no qual a empresa assume <strong>50% do valor da mensalidade</strong>, e o colaborador arca com os <strong>outros 50%</strong>.<br>
➡️ Caso o colaborador opte por adquirir os planos <strong>Amil Prata ou Amil Ouro</strong>, a empresa continuará subsidiando <strong>50% do valor correspondente ao plano Bronze</strong>, e a <strong>diferença será custeada pelo colaborador</strong>, conforme tabela de valores da operadora disponibilizada na planilha.<br>
📌 <strong>Exemplo prático:</strong><br>

<strong>Plano Bronze:</strong> Empresa paga 50% + Colaborador paga 50%.<br>

<strong>Plano Prata/Ouro:</strong> Empresa paga 50% do Bronze + Colaborador paga a diferença do valor total escolhido.<br>
Essa política foi estruturada de forma a garantir que todos tenham acesso ao benefício, ao mesmo tempo em que possibilita a escolha por planos com maior cobertura, caso o colaborador deseje.<br>
Em caso de dúvidas, o RH está à disposição para esclarecer individualmente cada situação.<br>`
},

"guia-stories": {
    titulo: "Guia de Stories ",
    data: "30/Setembro/2025",
    tipo: "Evento",
    fonte: "RH",
    texto: `Pessoal,<br><br>

Como vocês sabem, estamos cada vez mais ativos nas redes sociais e agradecemos a todos que têm participado e contribuído de alguma forma.<br><br>

Mas vamos além, porque <strong>juntos somos mais fortes! 💪</strong><br><br>

A partir de outubro, vamos investir também nos <strong>stories</strong>, que é um canal importante para mostrar ainda mais da nossa cultura, rotina e diferenciais.<br><br>

Para isso, preparamos um <strong>guia rápido de stories</strong>, para que todos estejam cientes de como vamos atuar.<br><br>

A <strong>Vitória</strong> já está conduzindo a parte de gravação dos vídeos, mas todos podem colaborar!<br><br>

Se você identificar uma oportunidade de ajudar nessa frente, procure a <strong>Vitória</strong> e ofereça sua contribuição.<br><br>

Vamos fazer dos stories mais uma vitrine da nossa <strong>energia e excelência</strong>.<br><br>

Segue o link do nosso guia de stories do Instagram:<br>
<a href="https://docs.google.com/spreadsheets/d/1n3JOGNJZW8qi8b3nIrpMaQFY8GHEFTag/edit?gid=2009693675#gid=2009693675" target="_blank">Guia de Stories AndCont</a><br>`
}
   
    };

    // -------------------------
    // 2) Elementos do DOM (checagens)
    // -------------------------
    const intranetHome = document.getElementById('intranet-home');
    const publicacaoPage = document.getElementById('publicacao-page');
    const timelinePage = document.getElementById('timeline-page');

    if (!intranetHome) console.warn('Elemento #intranet-home não encontrado.');
    if (!publicacaoPage) console.warn('Elemento #publicacao-page não encontrado.');
    if (!timelinePage) console.warn('Elemento #timeline-page não encontrado.');

    const voltarBtn = document.getElementById('voltarBtn');
    const voltarTimelineBtn = document.getElementById('voltarTimelineBtn');
    const notificationPopup = document.getElementById('new-post-notification');
    const popupLink = document.getElementById('popup-link');
    const closePopupBtn = document.getElementById('close-popup-btn');

    // -------------------------
    // 3) Utilitários
    // -------------------------
    // Converte datas com nomes de mês (PT) para objeto Date - tolerante
    function parseDatePT(dateStr) {
        // aceita formatos "DD/MM/YYYY" ou "DD/NomeMes/YYYY"
        if (!dateStr) return new Date(0);
        const parts = dateStr.split('/');
        if (parts.length !== 3) return new Date(dateStr);
        const day = parseInt(parts[0], 10);
        const monthPart = parts[1].toLowerCase();
        const year = parseInt(parts[2], 10);

        const meses = {
            'janeiro': 0,'fevereiro': 1,'março': 2,'marco': 2,'abril': 3,'maio': 4,'junho': 5,
            'julho': 6,'agosto': 7,'setembro': 8,'outubro': 9,'novembro': 10,'dezembro': 11,
            '01': 0,'02': 1,'03': 2,'04': 3,'05': 4,'06': 5,'07': 6,'08': 7,'09': 8,'10': 9,'11': 10,'12': 11
        };

        const month = meses[monthPart] !== undefined ? meses[monthPart] : (meses[monthPart.padStart(2,'0')] !== undefined ? meses[monthPart.padStart(2,'0')] : 0);
        return new Date(year, month, day);
    }

    function toHTML(text) {
        return String(text || '').replace(/\n/g, '<br>').replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');
    }

    // -------------------------
    // 4) Acordeões principais da home (fechar todos por padrão)
    // -------------------------
    document.querySelectorAll('.acordeao-content').forEach(content => {
        content.classList.remove('open');
        content.style.display = 'none';
    });

    document.querySelectorAll('.acordeao-header').forEach(header => {
        header.addEventListener('click', function () {
            const content = this.parentElement.querySelector('.acordeao-content');
            if (!content) return;
            // fecha os outros acordeões na mesma coluna (opcional)
            const siblings = this.parentElement.parentElement ? this.parentElement.parentElement.querySelectorAll('.acordeao-content') : [];
            siblings.forEach(s => { if (s !== content) { s.style.display = 'none'; s.classList.remove('open'); } });
            // toggle do atual
            if (content.style.display === 'none' || content.style.display === '') {
                content.style.display = 'block';
                content.classList.add('open');
            } else {
                content.style.display = 'none';
                content.classList.remove('open');
            }
        });
    });

    // -------------------------
    // 5) Renderiza cards de destaque (notícias e eventos)
    // -------------------------
    function renderizarCardsDestaque() {
        const cardNoticias = document.querySelector('.noticias-quentinhas .clean-list');
        const cardEventos = document.querySelector('.eventos .acordeao-content');

        if (!cardNoticias) console.warn('Elemento .noticias-quentinhas .clean-list não encontrado.');
        if (!cardEventos) console.warn('Elemento .eventos .acordeao-content não encontrado.');

        if (cardNoticias) cardNoticias.innerHTML = '';
        if (cardEventos) cardEventos.innerHTML = '';

        // pegar itens com destaque === true
        const destaques = Object.keys(conteudos)
            .map(id => ({ id, ...conteudos[id] }))
            .filter(item => item.destaque === true);

        // ordenar por data quando possível
        destaques.sort((a, b) => parseDatePT(b.data) - parseDatePT(a.data));

        destaques.forEach(item => {
            const li = document.createElement('li');
            const link = document.createElement('a');
            link.href = '#';
            link.classList.add('item-link');
            link.setAttribute('data-id', item.id);

            const prefixo = item.tipo === "Notícia" ? "📢" : (item.tipo === "Evento" ? "🎉" : "");
            link.innerHTML = `${prefixo} ${item.titulo}`;

            li.appendChild(link);

            if (item.tipo === 'Notícia' && cardNoticias && cardNoticias.children.length < 3) {
                cardNoticias.appendChild(li);
            }
            if (item.tipo === 'Evento' && cardEventos && cardEventos.children.length < 2) {
                cardEventos.appendChild(li);
            }
        });

        // garantir listeners
        adicionarListenerAosLinks();
    }

    // -------------------------
    // 6) Listeners para links de item (abre publicacao)
    // -------------------------
    function linkClickHandler(e) {
        e.preventDefault();
        const contentId = this.getAttribute('data-id');
        if (contentId) exibirPublicacao(contentId);
    }

    function adicionarListenerAosLinks() {
        document.querySelectorAll('.item-link').forEach(link => {
            // remove antes para evitar duplicação
            link.removeEventListener('click', linkClickHandler);
            link.addEventListener('click', linkClickHandler);
        });
    }

    // -------------------------
    // 7) Exibir publicação (detalhe)
    // -------------------------
    function exibirPublicacao(id) {
        const comunicado = conteudos[id];
        if (!comunicado) {
            alert("Conteúdo não encontrado.");
            return;
        }

        const tituloEl = document.getElementById('publicacaoTitulo');
        const dataEl = document.getElementById('publicacaoData');
        const textoEl = document.getElementById('publicacaoTexto');

        if (!tituloEl || !dataEl || !textoEl) {
            console.warn('Elementos de visualização de publicação ausentes no HTML.');
            return;
        }

        tituloEl.textContent = comunicado.titulo;
        dataEl.textContent = `Publicado em: ${comunicado.data || ''}`;

        // Monta o HTML do texto principal
        let html = toHTML(comunicado.texto || '');

        // Se houver publicacoes internas (ex: recap setembro), gera acordeão interno
        if (Array.isArray(comunicado.publicacoes) && comunicado.publicacoes.length) {
            html += `<hr><div class="internal-recap">`;
            html += `<h3>Publicações de ${comunicado.titulo}</h3>`;
            comunicado.publicacoes.forEach(pub => {
                // cada item terá header clicável e content oculto
                html += `
                    <div class="internal-acordeao">
                        <div class="internal-header" data-pub-id="${pub.id}" style="cursor:pointer;padding:10px 0;border-bottom:1px solid rgba(0,0,0,0.06)">
                            ▶️ ${pub.titulo}
                        </div>
                        <div class="internal-content" style="display:none;padding:8px 0 16px;">
                            ${toHTML(pub.texto)}
                        </div>
                    </div>
                `;
            });
            html += `</div>`;
        }

        textoEl.innerHTML = html;

        // mostra a página de publicação e esconde home/timeline
        if (intranetHome) intranetHome.style.display = 'none';
        if (timelinePage) timelinePage.classList.remove('active-page');
        if (publicacaoPage) publicacaoPage.classList.add('active-page');

        // ligar listeners dos internal-acordeao
        document.querySelectorAll('.internal-header').forEach(header => {
            header.addEventListener('click', function () {
                const content = this.nextElementSibling;
                if (!content) return;
                // alterna
                content.style.display = (content.style.display === 'none' || content.style.display === '') ? 'block' : 'none';
            });
        });

        // rola ao topo
        window.scrollTo(0, 0);
    }

    // -------------------------
    // 8) Timeline / filtros
    // -------------------------
    function gerarTimeline(filtro) {
        const timelineContent = document.getElementById('timeline-content');
        if (!timelineContent) {
            console.warn('Elemento #timeline-content não encontrado.');
            return;
        }

        let itensArray = Object.keys(conteudos).map(id => ({ id, ...conteudos[id] }));
        itensArray.sort((a, b) => parseDatePT(b.data) - parseDatePT(a.data));

        let htmlContent = `
            <div class="timeline-filtros">
                <label>Filtrar por Tipo:</label>
                <select id="filtroTipo">
                    <option value="">Todos</option>
                    <option value="Notícia">Notícias</option>
                    <option value="RH">RH</option>
                    <option value="Evento">Eventos</option>
                </select>
            </div>
            <ul id="timelineList" class="timeline-list">
        `;

        itensArray.forEach(item => {
            const displayStyle = (filtro === '' || item.tipo === filtro) ? 'flex' : 'none';
            htmlContent += `
                <li class="timeline-item" data-tipo="${item.tipo}" style="display: ${displayStyle};">
                    <span class="timeline-date">${item.data}</span>
                    <span class="timeline-source">[${item.fonte}]</span>
                    <a href="#" class="item-link" data-id="${item.id}">${item.titulo}</a>
                    <span class="timeline-type">${item.tipo}</span>
                </li>
            `;
        });

        htmlContent += `</ul>`;
        timelineContent.innerHTML = htmlContent;

        const filtroSelect = document.getElementById('filtroTipo');
        if (filtroSelect) {
            filtroSelect.value = filtro;
            filtroSelect.addEventListener('change', function () {
                const filtroAtual = this.value;
                document.querySelectorAll('#timelineList .timeline-item').forEach(li => {
                    li.style.display = (filtroAtual === '' || li.getAttribute('data-tipo') === filtroAtual) ? 'flex' : 'none';
                });
            });
        }

        // reaplica listeners para os item-link do timeline
        adicionarListenerAosLinks();
    }

    function abrirTimeline(filtroInicial = '') {
        if (intranetHome) intranetHome.style.display = 'none';
        if (publicacaoPage) publicacaoPage.classList.remove('active-page');
        gerarTimeline(filtroInicial);
        if (timelinePage) timelinePage.classList.add('active-page');
        window.scrollTo(0, 0);
    }

    // -------------------------
    // 9) Navegação / botões
    // -------------------------
    if (voltarBtn) {
        voltarBtn.addEventListener('click', function () {
            if (publicacaoPage) publicacaoPage.classList.remove('active-page');
            if (intranetHome) intranetHome.style.display = 'block';
            window.scrollTo(0, 0);
        });
    }

    if (voltarTimelineBtn) {
        voltarTimelineBtn.addEventListener('click', function () {
            if (timelinePage) timelinePage.classList.remove('active-page');
            if (intranetHome) intranetHome.style.display = 'block';
            document.querySelectorAll('.main-nav .nav-item').forEach(nav => nav.classList.remove('active'));
            const homeLink = document.querySelector('.main-nav a[href="#home"]');
            if (homeLink) homeLink.classList.add('active');
            window.scrollTo(0, 0);
        });
    }

    // nav filter links (.filter-nav)
    document.querySelectorAll('.filter-nav').forEach(link => {
        link.addEventListener('click', function (e) {
            e.preventDefault();
            const filtro = this.getAttribute('data-filter') || '';
            document.querySelectorAll('.main-nav .nav-item').forEach(nav => nav.classList.remove('active'));
            this.classList.add('active');
            abrirTimeline(filtro);
        });
    });

    // home link behaviour
    const homeLink = document.querySelector('.main-nav a[href="#home"]');
    if (homeLink) {
        homeLink.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelectorAll('.main-nav .nav-item').forEach(nav => nav.classList.remove('active'));
            this.classList.add('active');
            if (publicacaoPage) publicacaoPage.classList.remove('active-page');
            if (timelinePage) timelinePage.classList.remove('active-page');
            if (intranetHome) intranetHome.style.display = 'block';
            window.scrollTo(0, 0);
        });
    }

    // -------------------------
    // 10) Notificação popup
    // -------------------------
    function exibirNotificacao() {
        if (!notificationPopup) return;
        notificationPopup.classList.remove('hidden-js');
        setTimeout(() => notificationPopup.classList.add('visible-right'), 100);
    }
    function fecharNotificacao() {
        if (!notificationPopup) return;
        notificationPopup.classList.remove('visible-right');
        setTimeout(() => notificationPopup.classList.add('hidden-js'), 400);
    }
    if (closePopupBtn) closePopupBtn.addEventListener('click', fecharNotificacao);
    if (popupLink) popupLink.addEventListener('click', function (e) {
        // se esse popup aponta para um item, abrir
        const id = this.getAttribute('data-id');
        if (id) {
            e.preventDefault();
            fecharNotificacao();
            exibirPublicacaoViaPopup(id);
        }
    });

    function exibirPublicacaoViaPopup(id) {
        // busca o elemento e dispara a função existente
        if (conteudos[id]) exibirPublicacao(id);
    }

    // -------------------------
    // Inicialização final
    // -------------------------
    renderizarCardsDestaque();
    adicionarListenerAosLinks();

    // Exibe a notificação suavemente (se o elemento existir)
    if (notificationPopup) {
        notificationPopup.classList.add('hidden-js');
        setTimeout(exibirNotificacao, 1200);
    }

});



