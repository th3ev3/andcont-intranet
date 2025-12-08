document.addEventListener('DOMContentLoaded', function() {
    
    // --- 1. Dados e Conteúdo Fictício (Com Tipo e Fonte) ---
    const conteudos = {
        'novo-ponto': { 
            titulo: "Lançamento Oficial: Novo Sistema de Ponto AndCont", 
            data: "05/Dezembro/2025", 
            tipo: "Notícia", 
            fonte: "RH",
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
            texto: "O período de agendamento das férias para o ciclo de 2026 está aberto. Por favor, acesse o Portal RH para enviar sua solicitação até o dia 15/12."
        },
        'o-que-devo-saber': { 
            titulo: "Guia Rápido: Primeiro Acesso e Estrutura", 
            data: "Atualizado em 20/Novembro/2025", 
            tipo: "Documento", 
            fonte: "TI",
            texto: "Este guia contém todas as informações essenciais para quem acaba de se juntar ao nosso time. Inclui senhas de Wi-Fi, acesso a pastas compartilhadas e organograma básico." 
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
            texto: "Galeria de fotos e resumo dos eventos que rolaram no mês de Setembro, incluindo o Happy Hour de Primavera!"
        },
        // Adicione outros conteúdos conforme os 'data-id' do HTML
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

    // --- 3. Lógica do Acordeão ---
    document.querySelectorAll('.acordeao-header').forEach(header => {
        header.addEventListener('click', function() {
            let content = this.parentElement.querySelector('.acordeao-content');

            if (content) {
                content.classList.toggle('open');
            }
        });
    });

    // --- 4. Funções de Navegação e Conteúdo ---

    function exibirPublicacao(id) {
        const comunicado = conteudos[id];
        
        if (!comunicado) {
            alert("Conteúdo não encontrado.");
            return;
        }

        // 1. Preenche o conteúdo da nova página
        document.getElementById('publicacaoTitulo').textContent = comunicado.titulo;
        document.getElementById('publicacaoData').textContent = `Publicado em: ${comunicado.data}`;
        document.getElementById('publicacaoTexto').textContent = comunicado.texto;
        
        // 2. Oculta Home/Timeline e exibe Publicação
        intranetHome.style.display = 'none';
        timelinePage.classList.remove('active-page');
        publicacaoPage.classList.add('active-page');

        window.scrollTo(0, 0); 
    }
    
    function gerarTimeline(filtro) {
        const timelineContent = document.getElementById('timeline-content');
        
        // 1. Converte e Ordena (Mais Recente Primeiro)
        let itensArray = Object.keys(conteudos).map(id => ({
            id: id,
            ...conteudos[id]
        }));

        itensArray.sort((a, b) => {
            const dateA = new Date(a.data.split('/').reverse().join('/'));
            const dateB = new Date(b.data.split('/').reverse().join('/'));
            return dateB - dateA; 
        });

        // 2. Constrói o HTML (Filtros e Lista)
        let htmlContent = `<div class="timeline-filtros">
            <label>Filtrar por Tipo:</label>
            <select id="filtroTipo">
                <option value="">Todos</option>
                <option value="Notícia">Notícias</option>
                <option value="Política">Políticas</option>
                <option value="Evento">Eventos</option>
            </select>
        </div>
        <ul id="timelineList" class="timeline-list">`;
        
        itensArray.forEach(item => {
            const itemTipo = item.tipo;
            // Define se o item deve ser exibido ou escondido inicialmente
            const displayStyle = (filtro === '' || itemTipo === filtro) ? 'flex' : 'none';

            htmlContent += `
                <li class="timeline-item" data-tipo="${itemTipo}" style="display: ${displayStyle};">
                    <span class="timeline-date">${item.data}</span>
                    <span class="timeline-source">[${item.fonte}]</span>
                    <a href="#" class="item-link" data-id="${item.id}">${item.titulo}</a>
                    <span class="timeline-type">${itemTipo}</span>
                </li>
            `;
        });

        htmlContent += `</ul>`;
        timelineContent.innerHTML = htmlContent;

        // 3. Configura o filtro <select> para o valor inicial
        const filtroSelect = document.getElementById('filtroTipo');
        if (filtroSelect) {
            filtroSelect.value = filtro;
        }

        // 4. Adiciona lógica de Filtro no Select
        if (filtroSelect) {
            filtroSelect.addEventListener('change', function() {
                const filtroAtual = this.value;
                document.querySelectorAll('#timelineList .timeline-item').forEach(li => {
                    const itemTipo = li.getAttribute('data-tipo'); 
                    if (filtroAtual === '' || itemTipo === filtroAtual) {
                        li.style.display = 'flex';
                    } else {
                        li.style.display = 'none';
                    }
                });
            });
        }

        // 5. Re-adiciona o Listener para os links de publicação criados
        document.querySelectorAll('#timelineList .item-link').forEach(link => {
            link.addEventListener('click', function(e) {
                e.preventDefault();
                const contentId = this.getAttribute('data-id');
                if (contentId) {
                    exibirPublicacao(contentId);
                }
            });
        });
    }

    function abrirTimeline(filtroInicial = '') {
        // Oculta a Home e a Publicação
        intranetHome.style.display = 'none';
        publicacaoPage.classList.remove('active-page');

        // Gera e Exibe a Timeline
        gerarTimeline(filtroInicial); 
        timelinePage.classList.add('active-page');
        window.scrollTo(0, 0); 
    }

    // --- 5. Event Listeners ---

    // A. Links do Dashboard (Abre Publicação)
    itemLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const contentId = this.getAttribute('data-id');
            if (contentId) {
                exibirPublicacao(contentId);
            }
        });
    });

    // B. Botão Voltar da Publicação (Volta para Home)
    voltarBtn.addEventListener('click', function() {
        publicacaoPage.classList.remove('active-page');
        intranetHome.style.display = 'block';
        window.scrollTo(0, 0); 
    });

    // C. Links da NAV Filtrada (Abre Timeline Filtrada)
    filterNavLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const filtro = this.getAttribute('data-filter');
            
            // Ativa o link na NAV
            document.querySelectorAll('.main-nav .nav-item').forEach(nav => nav.classList.remove('active'));
            this.classList.add('active');
            
            abrirTimeline(filtro); // Abre a timeline já filtrada
        });
    });

    // D. Link 'Início' (Volta para Home - CORRIGIDO)
    homeLink.addEventListener('click', function(e) {
        e.preventDefault();
        
        // Ativa o link 'Início'
        document.querySelectorAll('.main-nav .nav-item').forEach(nav => nav.classList.remove('active'));
        this.classList.add('active');

        // Oculta as outras páginas
        publicacaoPage.classList.remove('active-page');
        timelinePage.classList.remove('active-page');
        
        // Exibe a Home
        intranetHome.style.display = 'block'; 
        
        window.scrollTo(0, 0);
    });

    // E. Botão Voltar da Timeline (Volta para Home)
    voltarTimelineBtn.addEventListener('click', function() {
        timelinePage.classList.remove('active-page');
        intranetHome.style.display = 'block';
        
        // Ativa o link 'Início' na nav
        document.querySelectorAll('.main-nav .nav-item').forEach(nav => nav.classList.remove('active'));
        document.querySelector('.main-nav a[href="#home"]').classList.add('active');
        
        window.scrollTo(0, 0); 
    });
});


// Localize os novos elementos (adicione no início do scripts.js)
const notificationPopup = document.getElementById('new-post-notification');
const popupLink = document.getElementById('popup-link');
const closePopupBtn = document.getElementById('close-popup-btn'); // Novo ID para o X

// --- Nova Lógica para Exibir/Fechar o Popup ---

function exibirNotificacao() {
    // 1. Remove a classe que esconde o elemento
    notificationPopup.classList.remove('hidden-js'); 
    
    // 2. Adiciona a classe que anima o elemento (entra pela direita)
    // Usamos um timeout para que a animação funcione corretamente
    setTimeout(() => {
        notificationPopup.classList.add('visible-right');
    }, 100); 
}

function fecharNotificacao() {
    // 1. Remove a classe que anima para fora da tela
    notificationPopup.classList.remove('visible-right');
    
    // 2. Adiciona a classe que o esconde completamente após a animação (0.4s do CSS)
    setTimeout(() => {
        notificationPopup.classList.add('hidden-js');
    }, 400); 
}

// --- Listeners para o Popup ---

// Listener para o botão 'X' fechar o pop-up
closePopupBtn.addEventListener('click', fecharNotificacao);

// Listener para o link do pop-up abrir a publicação
// O clique será capturado pelo listener global de .item-link que já existe, 
// mas é bom ter uma ação de fechar aqui também.
popupLink.addEventListener('click', fecharNotificacao);


// --- Chamada Inicial ---
// Chame a função para exibir o popup assim que a página carregar (no final do DOMContentLoaded)

// Inicialmente, adicione a classe de esconder para garantir que não apareça antes do JS
notificationPopup.classList.add('hidden-js'); 

// Chame a função para exibição após 2 segundos de carregamento
setTimeout(exibirNotificacao, 2000); 

// Fim do bloco DOMContentLoaded