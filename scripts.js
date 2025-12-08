document.addEventListener('DOMContentLoaded', function() {
    
    // --- 1. Dados e Conteúdo Fictício (Com Tipo, Fonte e DESTAQUE) ---
    const conteudos = {
        'novo-ponto': { 
            titulo: "Lançamento Oficial: Novo Sistema de Ponto AndCont", 
            data: "05/Dezembro/2025", 
            tipo: "Notícia", 
            fonte: "RH",
            destaque: true,
            texto: `Prezado Colaborador,
            
É com satisfação que anunciamos a migração para o nosso novo sistema de Ponto Eletrônico, mais moderno e com integração total ao sistema de Banco de Horas.

**Principais Benefícios:**
* Interface amigável e acessível via mobile.
* Lançamento automático de horas extras aprovadas.
* Visualização em tempo real do saldo de Banco de Horas.

O treinamento obrigatório para o uso do novo sistema está agendado para o dia 10/12/2025. O link será enviado por e-mail.

Atenciosamente,
RH e TI AndCont.`
        },
        'aviso-ferias': {
            titulo: "Aviso: Agendamento de Férias 2026",
            data: "01/Dezembro/2025",
            tipo: "Notícia",
            fonte: "RH",
            destaque: true,
            texto: "O período de agendamento das férias para o ciclo de 2026 está aberto. Por favor, acesse o Portal RH para enviar sua solicitação até o dia 15/12."
        },
        'ramais': { 
            titulo: "Contatos e Ramais Chave (TI, RH, Financeiro)", 
            data: "01/Setembro/2025", 
            tipo: "Documento", 
            fonte: "Administração",
            texto: "Lista completa de contatos internos e ramais atualizados. Em caso de emergência, ligue para o ramal 999.\n\n☎️ TI Suporte: Ramal 100\n☎️ RH (Férias e Benefícios): Ramal 205\n📧 Financeiro (Reembolsos): financeiro@andcont.com.br" 
        },
        'codigo-conduta': { 
            titulo: "Código de Conduta e Ética", 
            data: "15/Outubro/2025", 
            tipo: "Política", 
            fonte: "Compliance", 
            texto: "Nossos princípios e valores guiam todas as nossas decisões. Por favor, revise anualmente e confirme a leitura no formulário do RH." 
        },
        'gincana': { 
            titulo: "Regras da Gincana de Fim de Ano - 2025", 
            data: "03/Dezembro/2025", 
            tipo: "Evento", 
            fonte: "Eventos",
            destaque: true,
            texto: "A gincana começa em breve! Leia as regras oficiais, confira sua equipe e prepare-se para as tarefas que valem o grande prêmio!" 
        },
        'uso-celular': {
            titulo: "Regras para Uso de Celular Corporativo",
            data: "01/Maio/2025",
            tipo: "Política",
            fonte: "Administração",
            texto: "Diretrizes para o uso adequado de dispositivos móveis fornecidos pela empresa."
        },
        'setembro': {
            titulo: "Recap - Eventos de Setembro",
            data: "30/Setembro/2025",
            tipo: "Evento",
            fonte: "Comunicação",
            destaque: false,
            texto: "Galeria de fotos e resumo dos eventos que rolaram no mês de Setembro, incluindo o Happy Hour de Primavera!"
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
            tipo: "Documento", 
            fonte: "RH",
            texto: "Acesso às plataformas de EAD e treinamentos obrigatórios." 
        },
        'ponto-banco': { 
            titulo: "Ponto Eletrônico e Banco de Horas", 
            data: "01/Dezembro/2025", 
            tipo: "Documento", 
            fonte: "RH",
            texto: "Instruções sobre como consultar e gerenciar seu ponto e banco de horas." 
        },
        'politica-emprestimo': { 
            titulo: "Política de Empréstimo Consignado", 
            data: "10/Junho/2025", 
            tipo: "Política", 
            fonte: "Financeiro", 
            texto: "Regras e procedimentos para solicitação de empréstimos consignados." 
        },
        'lgpd': { 
            titulo: "Compliance e LGPD", 
            data: "01/Julho/2025", 
            tipo: "Política", 
            fonte: "Compliance", 
            texto: "Diretrizes de conformidade com a Lei Geral de Proteção de Dados." 
        },
        'gestao-beneficios': { 
            titulo: "Gestão de benefícios e ferramentas", 
            data: "01/Março/2025", 
            tipo: "Documento", 
            fonte: "RH", 
            texto: "Como gerenciar planos de saúde, vale-refeição e outras ferramentas." 
        },
    };

    // --- 2. Elementos Globais ---
    const intranetHome = document.getElementById('intranet-home');
    const publicacaoPage = document.getElementById('publicacao-page');
    const timelinePage = document.getElementById('timeline-page');
    
    const voltarBtn = document.getElementById('voltarBtn');
    const voltarTimelineBtn = document.getElementById('voltarTimelineBtn');
    
    const itemLinks = document.querySelectorAll('.item-link');
    const filterNavLinks = document.querySelectorAll('.filter-nav');
    const homeLink = document.querySelector('.main-nav a[href="#home"]');

    const notificationPopup = document.getElementById('new-post-notification');
    const popupLink = document.getElementById('popup-link');
    const closePopupBtn = document.getElementById('close-popup-btn'); 

    // --- 3. Lógica do Acordeão (Agora sempre FECHADO por padrão) ---
    document.querySelectorAll('.acordeao-content').forEach(content => {
        content.classList.remove('open'); // garante FECHADO ao carregar
    });

    document.querySelectorAll('.acordeao-header').forEach(header => {
        header.addEventListener('click', function() {
            let content = this.parentElement.querySelector('.acordeao-content');
            if (content) {
                content.classList.toggle('open');
            }
        });
    });

    // --- 4. Lógica de conteúdo, timeline, popup e navegação (inalterados) ---

    function linkClickHandler(e) {
        e.preventDefault();
        const contentId = this.getAttribute('data-id');
        if (contentId) {
            exibirPublicacao(contentId);
        }
    }

    function adicionarListenerAosLinks() {
        document.querySelectorAll('.item-link').forEach(link => {
            link.removeEventListener('click', linkClickHandler); 
        });
        document.querySelectorAll('.item-link').forEach(link => {
            link.addEventListener('click', linkClickHandler);
        });
    }

    function renderizarCardsDestaque() {
        const cardNoticias = document.querySelector('.noticias-quentinhas .clean-list');
        const cardEventos = document.querySelector('.eventos .acordeao-content');

        cardNoticias.innerHTML = '';
        cardEventos.innerHTML = '';

        const destaques = Object.keys(conteudos)
            .map(id => ({ id: id, ...conteudos[id] }))
            .filter(item => item.destaque === true);

        destaques.sort((a, b) => {
            const parseDate = (d) => {
                const [day, month, year] = d.split('/');
                return new Date(`${year}/${month}/${day}`);
            };
            return parseDate(b.data) - parseDate(a.data);
        });

        destaques.forEach(item => {
            const li = document.createElement('li');
            const link = document.createElement('a');
            
            link.href = '#';
            link.classList.add('item-link');
            link.setAttribute('data-id', item.id);
            
            let prefixo = item.tipo === "Notícia" ? "📢" : (item.tipo === "Evento" ? "🎉" : "");
            link.innerHTML = `${prefixo} ${item.titulo}. `;
            
            li.appendChild(link);

            if (item.tipo === 'Notícia' && cardNoticias.children.length < 3) {
                cardNoticias.appendChild(li);
            }
            if (item.tipo === 'Evento' && cardEventos.children.length < 2) {
                cardEventos.appendChild(li);
            }
        });

        adicionarListenerAosLinks();
    }

    function exibirPublicacao(id) {
        const comunicado = conteudos[id];
        if (!comunicado) return alert("Conteúdo não encontrado.");

        document.getElementById('publicacaoTitulo').textContent = comunicado.titulo;
        document.getElementById('publicacaoData').textContent = `Publicado em: ${comunicado.data}`;
        document.getElementById('publicacaoTexto').innerHTML = comunicado.texto
            .replace(/\n/g, '<br>')
            .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');
        
        intranetHome.style.display = 'none';
        timelinePage.classList.remove('active-page');
        publicacaoPage.classList.add('active-page');

        window.scrollTo(0, 0); 
    }

    function gerarTimeline(filtro) {
        const timelineContent = document.getElementById('timeline-content');
        let itensArray = Object.keys(conteudos).map(id => ({ id, ...conteudos[id] }));

        itensArray.sort((a, b) => {
            const parseDate = (d) => {
                const [day, month, year] = d.split('/');
                return new Date(`${year}/${month}/${day}`);
            };
            return parseDate(b.data) - parseDate(a.data);
        });

        let htmlContent = `
        <div class="timeline-filtros">
            <label>Filtrar por Tipo:</label>
            <select id="filtroTipo">
                <option value="">Todos</option>
                <option value="Notícia">Notícias</option>
                <option value="Política">Políticas</option>
                <option value="Evento">Eventos</option>
                <option value="Documento">Documentos</option>
            </select>
        </div>
        <ul id="timelineList" class="timeline-list">`;

        itensArray.forEach(item => {
            const displayStyle = (filtro === '' || item.tipo === filtro) ? 'flex' : 'none';

            htmlContent += `
                <li class="timeline-item" data-tipo="${item.tipo}" style="display: ${displayStyle};">
                    <span class="timeline-date">${item.data}</span>
                    <span class="timeline-source">[${item.fonte}]</span>
                    <a href="#" class="item-link" data-id="${item.id}">${item.titulo}</a>
                    <span class="timeline-type">${item.tipo}</span>
                </li>`;
        });

        htmlContent += `</ul>`;
        timelineContent.innerHTML = htmlContent;

        const filtroSelect = document.getElementById('filtroTipo');
        filtroSelect.value = filtro;

        filtroSelect.addEventListener('change', function() {
            const filtroAtual = this.value;
            document.querySelectorAll('#timelineList .timeline-item').forEach(li => {
                li.style.display = (filtroAtual === '' || li.getAttribute('data-tipo') === filtroAtual)
                    ? 'flex' : 'none';
            });
        });

        document.querySelectorAll('#timelineList .item-link').forEach(link => {
            link.addEventListener('click', linkClickHandler);
        });
    }

    function abrirTimeline(filtroInicial = '') {
        intranetHome.style.display = 'none';
        publicacaoPage.classList.remove('active-page');

        gerarTimeline(filtroInicial); 
        timelinePage.classList.add('active-page');
        window.scrollTo(0, 0); 
    }

    voltarBtn.addEventListener('click', function() {
        publicacaoPage.classList.remove('active-page');
        intranetHome.style.display = 'block';
        window.scrollTo(0, 0); 
    });

    filterNavLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const filtro = this.getAttribute('data-filter');

            document.querySelectorAll('.main-nav .nav-item').forEach(nav => nav.classList.remove('active'));
            this.classList.add('active');
            
            abrirTimeline(filtro);
        });
    });

    homeLink.addEventListener('click', function(e) {
        e.preventDefault();
        
        document.querySelectorAll('.main-nav .nav-item').forEach(nav => nav.classList.remove('active'));
        this.classList.add('active');

        publicacaoPage.classList.remove('active-page');
        timelinePage.classList.remove('active-page');
        
        intranetHome.style.display = 'block'; 
        window.scrollTo(0, 0);
    });

    voltarTimelineBtn.addEventListener('click', function() {
        timelinePage.classList.remove('active-page');
        intranetHome.style.display = 'block';
        
        document.querySelectorAll('.main-nav .nav-item').forEach(nav => nav.classList.remove('active'));
        homeLink.classList.add('active');
        
        window.scrollTo(0, 0); 
    });

    function exibirNotificacao() {
        notificationPopup.classList.remove('hidden-js'); 
        setTimeout(() => {
            notificationPopup.classList.add('visible-right');
        }, 100); 
    }

    function fecharNotificacao() {
        notificationPopup.classList.remove('visible-right');
        setTimeout(() => {
            notificationPopup.classList.add('hidden-js');
        }, 400); 
    }

    closePopupBtn.addEventListener('click', fecharNotificacao);
    popupLink.addEventListener('click', fecharNotificacao);

    renderizarCardsDestaque();

    notificationPopup.classList.add('hidden-js'); 
    setTimeout(exibirNotificacao, 2000); 
    
});
