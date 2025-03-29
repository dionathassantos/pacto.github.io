// Dados iniciais (simulando um banco de dados JSON)
let initiatives = [
    {
        "Iniciativas": "MOBILIZAÇÃO E GESTÃO DE RECURSOS FINANCEIROS",
        "O que é": "Iniciativa focada na sustentabilidade financeira e mobilização de recursos para projetos",
        "Descrição": "Gestão estratégica de recursos e desenvolvimento de parcerias para garantir a sustentabilidade das ações do NCPI",
        "Resultados": [
            {
                "Resultado": "Ampliação das fontes de financiamento",
                "Metas": [
                    {
                        "texto": "Estabelecer 3 novas parcerias estratégicas",
                        "semestre": "1º Semestre 2024",
                        "status": "Em andamento",
                        "progresso": 40
                    }
                ]
            }
        ],
        "FAROL_NO_TRIMESTRE": "Em andamento",
        "LÍDER": "Marina Lima",
        "OBSERVAÇÕES": "Foco em diversificação de fontes",
        "Porta": "Porta para dentro"
    },
    {
        "Iniciativas": "GESTÃO DE IMPACTO",
        "O que é": "Iniciativa para monitorar e avaliar o impacto das ações do NCPI",
        "Descrição": "Desenvolvimento e implementação de metodologias para mensuração e avaliação do impacto das iniciativas",
        "Resultados": [
            {
                "Resultado": "Framework de avaliação implementado",
                "Metas": [
                    {
                        "texto": "Desenvolver indicadores de impacto",
                        "semestre": "2º Semestre 2024",
                        "status": "Em andamento",
                        "progresso": 30
                    }
                ]
            }
        ],
        "FAROL_NO_TRIMESTRE": "No prazo",
        "LÍDER": "Pedro Santos",
        "OBSERVAÇÕES": "Metodologia em desenvolvimento",
        "Porta": "Porta para dentro"
    },
    {
        "Iniciativas": "NCPI Dissemina",
        "O que é": "O NCPI Dissemina é a iniciativa voltada a ampliar a capacidade do NCPI disseminar evidências e conhecimentos científicos plurais com potencial de impacto sobre o desenho e a implementação de políticas públicas voltadas às Primeiras Infâncias.",
        "Descrição": "Canais e produtos voltados a levar evidências científicas para formuladores de políticas e agentes de implementação que atuam para aterrissar as políticas públicas e para desenvolver serviços públicos para as crianças na primeira infância.",
        "Resultados": [
            {
                "Resultado": "NCPI visto como top referência sobre evidências para desenho e implementação de PPPI",
                "Metas": [
                    {
                        "texto": "Manter o site do NCPI entre os 3 primeiros colocados no Google em buscas de expressões prioritárias",
                        "semestre": "1º Semestre 2025",
                        "status": "Em andamento",
                        "progresso": 60
                    }
                ]
            }
        ],
        "FAROL_NO_TRIMESTRE": "Em andamento",
        "LÍDER": "Ana Silva",
        "OBSERVAÇÕES": "Iniciativa prioritária para o primeiro semestre",
        "Porta": "Porta para fora"
    },
    {
        "Iniciativas": "Simpósio Internacional",
        "O que é": "Evento internacional que reúne especialistas e pesquisadores para discutir avanços e desafios na primeira infância",
        "Descrição": "Simpósio anual que promove o intercâmbio de conhecimentos e experiências entre profissionais e acadêmicos dedicados à primeira infância",
        "Resultados": [
            {
                "Resultado": "Realização do Simpósio com participação internacional",
                "Metas": [
                    {
                        "texto": "Organizar e realizar o Simpósio Internacional 2024",
                        "semestre": "2º Semestre 2024",
                        "status": "Em andamento",
                        "progresso": 30
                    }
                ]
            }
        ],
        "FAROL_NO_TRIMESTRE": "No prazo",
        "LÍDER": "Carlos Santos",
        "OBSERVAÇÕES": "Preparativos em andamento",
        "Porta": "Porta para fora"
    },
    {
        "Iniciativas": "Prêmio",
        "O que é": "Premiação para reconhecer e incentivar pesquisas e projetos inovadores na área da primeira infância",
        "Descrição": "Programa de reconhecimento que visa estimular a produção científica e práticas inovadoras no campo da primeira infância",
        "Resultados": [
            {
                "Resultado": "Lançamento e execução do programa de premiação",
                "Metas": [
                    {
                        "texto": "Lançar edital e selecionar projetos",
                        "semestre": "1º Semestre 2024",
                        "status": "Em andamento",
                        "progresso": 45
                    }
                ]
            }
        ],
        "FAROL_NO_TRIMESTRE": "No prazo",
        "LÍDER": "Mariana Costa",
        "OBSERVAÇÕES": "Edital em fase de elaboração",
        "Porta": "Porta para fora"
    },
    {
        "Iniciativas": "ELP",
        "O que é": "Programa de Liderança Executiva que visa capacitar gestores e tomadores de decisão",
        "Descrição": "Programa de formação executiva em parceria com instituições internacionais para desenvolvimento de lideranças na área da primeira infância",
        "Resultados": [
            {
                "Resultado": "Formação da nova turma de líderes",
                "Metas": [
                    {
                        "texto": "Selecionar e formar 30 participantes",
                        "semestre": "2º Semestre 2024",
                        "status": "Não iniciada",
                        "progresso": 0
                    }
                ]
            }
        ],
        "FAROL_NO_TRIMESTRE": "Em andamento",
        "LÍDER": "Roberto Alves",
        "OBSERVAÇÕES": "Processo seletivo em planejamento",
        "Porta": "Porta para fora"
    }
];

// Função para calcular o progresso de uma iniciativa
function calculateProgress(initiative) {
    if (!initiative.Resultados) return 0;
    
    let totalMetas = 0;
    let totalProgress = 0;
    
    initiative.Resultados.forEach(resultado => {
        if (resultado.Metas && Array.isArray(resultado.Metas)) {
            resultado.Metas.forEach(meta => {
                totalMetas++;
                totalProgress += meta.progresso || 0;
            });
        }
    });
    
    return totalMetas > 0 ? Math.round(totalProgress / totalMetas) : 0;
}

// Carregar dados do localStorage ou usar dados iniciais
function loadDataFromStorage() {
    try {
        const savedData = localStorage.getItem('initiatives');
        if (savedData) {
            window.initiatives = JSON.parse(savedData);
            console.log('Dados carregados do localStorage:', window.initiatives);
        } else {
            window.initiatives = initiatives;
            localStorage.setItem('initiatives', JSON.stringify(initiatives));
            console.log('Usando dados iniciais e salvando no localStorage');
        }
    } catch (error) {
        console.error('Erro ao carregar dados:', error);
        window.initiatives = initiatives;
    }

    // Inicializar os dashboards
    loadInitiatives();
    updateStats();
    
    // Configurar event listeners
    setupEventListeners();
    
    return true;
}

function setupEventListeners() {
    // Search functionality
    const searchInput = document.getElementById('searchInput');
    const searchInputInterno = document.getElementById('searchInputInterno');
    
    if (searchInput) {
        searchInput.addEventListener('input', () => handleSearch('porta-fora'));
    }
    if (searchInputInterno) {
        searchInputInterno.addEventListener('input', () => handleSearch('porta-dentro'));
    }

    // Expand all buttons
    const expandAllBtn = document.getElementById('expandAllBtn');
    const expandAllBtnInterno = document.getElementById('expandAllBtnInterno');
    
    if (expandAllBtn) {
        expandAllBtn.addEventListener('click', () => toggleExpandAll('porta-fora'));
    }
    if (expandAllBtnInterno) {
        expandAllBtnInterno.addEventListener('click', () => toggleExpandAll('porta-dentro'));
    }

    // Filter buttons
    const filterBtn = document.getElementById('filterBtn');
    const filterBtnInterno = document.getElementById('filterBtnInterno');
    
    if (filterBtn) {
        filterBtn.addEventListener('click', () => openFilterModal('porta-fora'));
    }
    if (filterBtnInterno) {
        filterBtnInterno.addEventListener('click', () => openFilterModal('porta-dentro'));
    }

    // Export buttons
    const exportBtn = document.getElementById('exportBtn');
    const exportBtnInterno = document.getElementById('exportBtnInterno');
    
    if (exportBtn) {
        exportBtn.addEventListener('click', () => exportData('porta-fora'));
    }
    if (exportBtnInterno) {
        exportBtnInterno.addEventListener('click', () => exportData('porta-dentro'));
    }
}

// Variáveis globais
let currentInitiative = null;
let currentMetaIndex = null;
let metasList = [];
let resultadosList = [];
let allExpanded = false;
let activeFilters = ['all'];
let currentPage = 'all'; // 'all', 'porta-fora', 'porta-dentro'

// Funções de navegação
function setupNavigation() {
    // Configurar event listeners para os itens de navegação
    document.querySelectorAll('.submenu-item, .nav-item').forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const pageId = this.getAttribute('data-page');
            showPage(pageId);
        });
    });

    // Mostrar a página inicial (porta-fora por padrão)
    setTimeout(() => {
        showPage('porta-fora');
    }, 100);
}

function showPage(pageId) {
    // Esconder todas as seções de conteúdo
    document.querySelectorAll('.content-wrapper').forEach(section => {
        section.style.display = 'none';
        section.classList.remove('active');
    });
    
    // Mostrar a seção solicitada
    const contentSection = document.getElementById(pageId);
    if (contentSection) {
        contentSection.style.display = 'block';
        contentSection.classList.add('active');
        currentPage = pageId; // Atualizar a página atual
        
        // Atualizar título da página
        const pageTitle = document.getElementById('pageTitle');
        if (pageTitle) {
            switch(pageId) {
                case 'porta-fora':
                    pageTitle.textContent = 'Porta para fora';
                    loadInitiatives(); // Recarregar iniciativas
                    break;
                case 'porta-dentro':
                    pageTitle.textContent = 'Porta para dentro';
                    loadInitiatives(); // Recarregar iniciativas
                    break;
                case 'teoria-mudanca':
                    pageTitle.textContent = 'Teoria da Mudança NCPI';
                    break;
                case 'governanca':
                    pageTitle.textContent = 'Governança';
                    break;
                case 'sistematica':
                    pageTitle.textContent = 'Sistemática de Monitoramento e Avaliação';
                    break;
                case 'relatorios':
                    pageTitle.textContent = 'Relatórios de Avaliação NCPI';
                    break;
                default:
                    const link = document.querySelector(`[data-page="${pageId}"] span`);
                    if (link) {
                        pageTitle.textContent = link.textContent;
                    }
            }
        }

        // Atualizar navegação
        document.querySelectorAll('.submenu-item, .nav-item').forEach(item => {
            item.classList.remove('active');
        });
        const activeLink = document.querySelector(`[data-page="${pageId}"]`);
        if (activeLink) {
            activeLink.classList.add('active');
        }
    }
}

function setupDropdowns() {
    const menuDropdowns = document.querySelectorAll('.menu-dropdown');
    
    menuDropdowns.forEach(dropdown => {
        const toggle = dropdown.querySelector('.dropdown-toggle');
        
        toggle.addEventListener('click', (e) => {
            e.preventDefault();
            e.stopPropagation();
            
            // Fechar outros dropdowns abertos
            menuDropdowns.forEach(otherDropdown => {
                if (otherDropdown !== dropdown) {
                    otherDropdown.classList.remove('open');
                    otherDropdown.querySelector('.dropdown-icon').classList.replace('fa-chevron-up', 'fa-chevron-down');
                }
            });
            
            // Alternar o dropdown atual
            dropdown.classList.toggle('open');
            
            // Atualizar ícone
            const dropdownIcon = toggle.querySelector('.dropdown-icon');
            if (dropdown.classList.contains('open')) {
                dropdownIcon.classList.replace('fa-chevron-down', 'fa-chevron-up');
            } else {
                dropdownIcon.classList.replace('fa-chevron-up', 'fa-chevron-down');
            }
        });
    });
}

// Elementos DOM
document.addEventListener('DOMContentLoaded', async () => {
    console.log('DOM Carregado'); // Debug
    
    // Inicializar elementos DOM
    const sidebar = document.getElementById('sidebar');
    const toggleSidebarBtn = document.getElementById('toggleSidebar');
    const mainContent = document.getElementById('mainContent');
    
    // Carregar dados do localStorage
    const dataLoaded = await loadDataFromStorage();
    console.log('Dados carregados:', dataLoaded); // Debug
    
    // Inicializar a navegação e dropdowns
    setupNavigation();
    setupDropdowns();
    
    // Configurar event listeners para modais
    setupModalEventListeners();

    // Toggle sidebar
    if (toggleSidebarBtn) {
        toggleSidebarBtn.addEventListener('click', () => {
            sidebar.classList.toggle('collapsed');
            mainContent.classList.toggle('expanded');
        });
    }
});

function setupModalEventListeners() {
    const editModal = document.getElementById('editModal');
    const editMetaModal = document.getElementById('editMetaModal');
    const filterModal = document.getElementById('filterModal');
    const closeModalBtns = document.querySelectorAll('.close-modal');
    const cancelEditBtn = document.getElementById('cancelEditBtn');
    const saveEditBtn = document.getElementById('saveEditBtn');
    const cancelMetaEditBtn = document.getElementById('cancelMetaEditBtn');
    const saveMetaEditBtn = document.getElementById('saveMetaEditBtn');
    const cancelFilterBtn = document.getElementById('cancelFilterBtn');
    const applyFilterBtn = document.getElementById('applyFilterBtn');
    const metaProgressoInput = document.getElementById('metaProgresso');
    const progressoValueSpan = document.getElementById('progressoValue');

    // Close modal buttons
    if (closeModalBtns) {
        closeModalBtns.forEach(btn => btn.addEventListener('click', closeModals));
    }

    // Edit initiative modal buttons
    if (cancelEditBtn) cancelEditBtn.addEventListener('click', closeModals);
    if (saveEditBtn) saveEditBtn.addEventListener('click', saveInitiativeEdit);

    // Edit meta modal buttons
    if (cancelMetaEditBtn) cancelMetaEditBtn.addEventListener('click', closeModals);
    if (saveMetaEditBtn) saveMetaEditBtn.addEventListener('click', saveMetaEdit);

    // Filter modal buttons
    if (cancelFilterBtn) cancelFilterBtn.addEventListener('click', closeModals);
    if (applyFilterBtn) applyFilterBtn.addEventListener('click', applyFilters);

    // Meta progress input
    if (metaProgressoInput && progressoValueSpan) {
        metaProgressoInput.addEventListener('input', () => {
            progressoValueSpan.textContent = metaProgressoInput.value;
        });
    }

    // Close modals when clicking outside
    window.addEventListener('click', (e) => {
        if (e.target === editModal || e.target === filterModal || e.target === editMetaModal) {
            closeModals();
        }
    });
}

function loadInitiatives(filteredList = null) {
    const initiativesList = document.getElementById('initiativesList');
    const initiativesListInterno = document.getElementById('initiativesListInterno');
    const initiatives = filteredList || window.initiatives;

    console.log('Carregando iniciativas:', initiatives); // Debug

    if (!initiatives || initiatives.length === 0) {
        const emptyState = `
            <div class="empty-state">
                <i class="fas fa-folder-open"></i>
                <p>Nenhuma iniciativa encontrada</p>
            </div>
        `;
        if (initiativesList) initiativesList.innerHTML = emptyState;
        if (initiativesListInterno) initiativesListInterno.innerHTML = emptyState;
        return;
    }

    // Limpar conteúdo existente
    if (initiativesList) initiativesList.innerHTML = '';
    if (initiativesListInterno) initiativesListInterno.innerHTML = '';

    // Separar iniciativas por tipo
    const portaForaIniciativas = initiatives.filter(i => i.Porta === 'Porta para fora');
    const portaDentroIniciativas = initiatives.filter(i => i.Porta === 'Porta para dentro');

    // Renderizar iniciativas porta para fora
    if (initiativesList) {
        portaForaIniciativas.forEach((initiative, index) => {
            const card = createInitiativeCard(initiative, index);
            initiativesList.appendChild(card);
        });
    }

    // Renderizar iniciativas porta para dentro
    if (initiativesListInterno) {
        portaDentroIniciativas.forEach((initiative, index) => {
            const card = createInitiativeCard(initiative, index);
            initiativesListInterno.appendChild(card);
        });
    }

    // Atualizar estatísticas
    updateStats();
}

function createInitiativeCard(initiative, index) {
    const card = document.createElement('div');
    card.className = 'initiative-card';
    
    // Calculate progress
    const progress = calculateProgress(initiative);
    
    // Create header
    const header = document.createElement('div');
    header.className = 'initiative-header';
    header.innerHTML = `
        <div class="initiative-title-section">
            <i class="fas fa-chevron-right expand-icon"></i>
            <span class="initiative-name">${initiative.Iniciativas}</span>
        </div>
        <div class="initiative-actions">
            <button class="btn btn-sm btn-outline action-btn" data-action="edit">
                <i class="fas fa-edit"></i>
            </button>
            <button class="btn btn-sm btn-outline action-btn" data-action="delete">
                <i class="fas fa-trash"></i>
            </button>
        </div>
    `;

    // Create status section
    const statusSection = document.createElement('div');
    statusSection.className = 'initiative-status';
    statusSection.innerHTML = `
        <span class="status-badge ${getStatusClass(initiative.FAROL_NO_TRIMESTRE)}">
            <i class="fas fa-circle"></i>
            ${initiative.FAROL_NO_TRIMESTRE || 'Em andamento'}
        </span>
        <div class="progress-section">
            <div class="progress-bar">
                <div class="progress-value" style="width: ${progress}%"></div>
            </div>
            <span class="progress-text">${progress}%</span>
        </div>
    `;

    // Create content
    const content = document.createElement('div');
    content.className = 'initiative-content';
    content.innerHTML = `
        <div class="initiative-description">
            ${initiative['O que é'] || initiative.Descrição || ''}
        </div>
        <div class="results-section">
            ${createResultsContent(initiative)}
        </div>
    `;

    // Add click handler for expansion
    header.querySelector('.initiative-title-section').addEventListener('click', () => {
        const icon = header.querySelector('.expand-icon');
        icon.classList.toggle('active');
        content.classList.toggle('active');
    });

    // Add click handlers for action buttons
    header.querySelectorAll('.action-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.stopPropagation(); // Impedir que o clique se propague
            const action = btn.dataset.action;
            if (action === 'edit') {
                openEditModal(initiative);
            } else if (action === 'delete') {
                if (confirm('Tem certeza que deseja excluir esta iniciativa?')) {
                    deleteInitiative(initiative.Iniciativas);
                }
            }
        });
    });

    card.appendChild(header);
    card.appendChild(statusSection);
    card.appendChild(content);
    return card;
}

function createResultsContent(initiative) {
    if (!initiative.Resultados || initiative.Resultados.length === 0) {
        return '<p class="no-results">Nenhum resultado cadastrado</p>';
    }

    return initiative.Resultados.map((resultado, resultadoIndex) => `
        <div class="result-card">
            <div class="result-header">
                <span class="result-title">${resultado.Resultado}</span>
            </div>
            ${createGoalsTable(resultado.Metas, initiative.Iniciativas, resultadoIndex)}
        </div>
    `).join('');
}

function createGoalsTable(metas, initiativeName, resultadoIndex) {
    if (!metas || metas.length === 0) {
        return '<p class="no-goals">Nenhuma meta cadastrada</p>';
    }

    return `
        <table class="goals-table">
            <thead>
                <tr>
                    <th>Meta</th>
                    <th>Status</th>
                    <th>Progresso</th>
                    <th>Ações</th>
                </tr>
            </thead>
            <tbody>
                ${metas.map((meta, metaIndex) => `
                    <tr>
                        <td>${meta.Meta || meta.texto}</td>
                        <td>
                            <span class="goal-status ${getMetaStatusClass(meta.status)}">
                                ${meta.status || 'Em andamento'}
                            </span>
                        </td>
                        <td>
                            <div class="progress-section">
                                <div class="progress-bar">
                                    <div class="progress-value" style="width: ${meta.progresso || 0}%"></div>
                                </div>
                                <span class="progress-text">${meta.progresso || 0}%</span>
                            </div>
                        </td>
                        <td>
                            <button class="btn btn-sm btn-outline" onclick="openEditMetaModal('${initiativeName.replace(/'/g, "\\'")}', ${resultadoIndex}, ${metaIndex})">
                                <i class="fas fa-edit"></i>
                            </button>
                        </td>
                    </tr>
                `).join('')}
            </tbody>
        </table>
    `;
}

// Atualizar estatísticas
function updateStats() {
    let filteredInitiatives = [...initiatives];
    
    // Filtrar por porta se necessário
    if (currentPage === 'porta-fora') {
        filteredInitiatives = filteredInitiatives.filter(initiative => initiative.Porta === 'Porta para fora');
        updatePortaForaStats(filteredInitiatives);
    } else if (currentPage === 'porta-dentro') {
        filteredInitiatives = filteredInitiatives.filter(initiative => initiative.Porta === 'Porta para dentro');
        updatePortaDentroStats(filteredInitiatives);
    }
}

function updatePortaForaStats(initiatives) {
    const totalInitiatives = initiatives.length;
    let totalGoals = 0;
    let completedGoals = 0;
    let totalProgress = 0;
    
    initiatives.forEach(initiative => {
        if (initiative.Resultados && Array.isArray(initiative.Resultados)) {
            initiative.Resultados.forEach(resultado => {
                if (resultado.Metas && Array.isArray(resultado.Metas)) {
                    totalGoals += resultado.Metas.length;
                    completedGoals += resultado.Metas.filter(meta => meta.status === 'Concluída').length;
                    totalProgress += resultado.Metas.reduce((sum, meta) => sum + (meta.progresso || 0), 0);
                }
            });
        }
    });
    
    const avgProgress = totalGoals > 0 ? Math.round(totalProgress / totalGoals) : 0;
    
    document.getElementById('totalInitiatives').textContent = totalInitiatives;
    document.getElementById('totalGoals').textContent = totalGoals;
    document.getElementById('completedGoals').textContent = completedGoals;
    document.getElementById('completionPercentage').textContent = `${avgProgress}%`;
    
    // Atualizar tendências (simulado)
    updateTrends('porta-fora');
}

function updatePortaDentroStats(initiatives) {
    const totalInitiatives = initiatives.length;
    let totalGoals = 0;
    let completedGoals = 0;
    let totalProgress = 0;
    
    initiatives.forEach(initiative => {
        if (initiative.Resultados && Array.isArray(initiative.Resultados)) {
            initiative.Resultados.forEach(resultado => {
                if (resultado.Metas && Array.isArray(resultado.Metas)) {
                    totalGoals += resultado.Metas.length;
                    completedGoals += resultado.Metas.filter(meta => meta.status === 'Concluída').length;
                    totalProgress += resultado.Metas.reduce((sum, meta) => sum + (meta.progresso || 0), 0);
                }
            });
        }
    });
    
    const avgProgress = totalGoals > 0 ? Math.round(totalProgress / totalGoals) : 0;
    
    document.getElementById('totalInitiativesInterno').textContent = totalInitiatives;
    document.getElementById('totalGoalsInterno').textContent = totalGoals;
    document.getElementById('completedGoalsInterno').textContent = completedGoals;
    document.getElementById('completionPercentageInterno').textContent = `${avgProgress}%`;
    
    // Atualizar tendências (simulado)
    updateTrends('porta-dentro');
}

function updateTrends(page) {
    const trends = document.querySelectorAll(`#${page} .trend`);
    trends.forEach(trend => {
        const randomValue = Math.floor(Math.random() * 10) + 1;
        const isPositive = Math.random() > 0.3;
        
        trend.className = `trend ${isPositive ? 'positive' : 'negative'}`;
        trend.innerHTML = `
            <i class="fas fa-arrow-${isPositive ? 'up' : 'down'}"></i>
            <span>${randomValue}% desde o último mês</span>
        `;
    });
}

// Funções auxiliares
function getStatusClass(status) {
    if (!status) return 'em-andamento';
    
    const statusMap = {
        'em andamento': 'em-andamento',
        'no prazo': 'no-prazo',
        'em risco': 'em-risco'
    };
    
    return statusMap[status.toLowerCase()] || 'em-andamento';
}

function getMetaStatusClass(status) {
    if (!status) return 'nao-iniciada';
    
    const statusMap = {
        'não iniciada': 'nao-iniciada',
        'em andamento': 'em-andamento',
        'concluída': 'concluida'
    };
    
    return statusMap[status.toLowerCase()] || 'nao-iniciada';
}

function getProgressColor(status) {
    if (!status) return '#9ca3af';
    
    switch (status.toLowerCase()) {
        case 'em andamento':
            return '#f59e0b';
        case 'no prazo':
            return '#10b981';
        case 'em risco':
            return '#ef4444';
        default:
            return '#9ca3af';
    }
}

// Manipuladores de eventos
function handleSearch() {
    const searchInput = document.getElementById('searchInput');
    const searchTerm = searchInput.value.toLowerCase();
    
    if (searchTerm === '') {
        loadInitiatives();
        return;
    }
    
    const filteredInitiatives = initiatives.filter(initiative => 
        initiative.Iniciativas.toLowerCase().includes(searchTerm) ||
        (initiative.Descrição && initiative.Descrição.toLowerCase().includes(searchTerm))
    );
    
    loadInitiatives(filteredInitiatives);
}

function toggleExpandAll() {
    const expandAllBtn = document.getElementById('expandAllBtn');
    const detailsRows = document.querySelectorAll('.details-row, .metas-row');
    const expandButtons = document.querySelectorAll('.expand-btn');
    
    allExpanded = !allExpanded;
    
    if (allExpanded) {
        expandAllBtn.innerHTML = '<i class="fas fa-chevron-up"></i> Recolher Todos';
        detailsRows.forEach(row => {
            row.style.display = 'table-row';
        });
        expandButtons.forEach(btn => {
            const icon = btn.querySelector('i');
            icon.classList.remove('fa-chevron-right');
            icon.classList.add('fa-chevron-down');
        });
    } else {
        expandAllBtn.innerHTML = '<i class="fas fa-chevron-down"></i> Expandir Todos';
        detailsRows.forEach(row => {
            row.style.display = 'none';
        });
        expandButtons.forEach(btn => {
            const icon = btn.querySelector('i');
            icon.classList.remove('fa-chevron-down');
            icon.classList.add('fa-chevron-right');
        });
    }
}

function openEditModal(initiative) {
    const editModal = document.getElementById('editModal');
    
    // Preencher o formulário com os dados da iniciativa
    document.getElementById('editNome').value = initiative.Iniciativas;
    document.getElementById('editDescricao').value = initiative.Descrição || '';
    document.getElementById('editPorta').value = initiative.Porta || 'Porta para fora';
    document.getElementById('editFarol').value = initiative.FAROL_NO_TRIMESTRE || 'Em andamento';
    document.getElementById('editLider').value = initiative.LÍDER || '';
    document.getElementById('editObservacoes').value = initiative.OBSERVAÇÕES || '';
    
    // Armazenar a iniciativa atual para referência
    currentInitiative = initiative;
    
    // Mostrar o modal
    editModal.style.display = 'block';
}

function openEditMetaModal(initiativeName, resultadoIndex, metaIndex) {
    event.stopPropagation(); // Impedir que o clique se propague para o card
    
    const editMetaModal = document.getElementById('editMetaModal');
    const initiative = window.initiatives.find(i => i.Iniciativas === initiativeName);
    
    if (!initiative || !initiative.Resultados?.[resultadoIndex]?.Metas?.[metaIndex]) {
        console.error('Meta não encontrada');
        return;
    }
    
    // Armazenar referências para uso posterior
    currentInitiative = initiative;
    currentResultadoIndex = resultadoIndex;
    currentMetaIndex = metaIndex;
    
    const meta = initiative.Resultados[resultadoIndex].Metas[metaIndex];
    
    // Preencher o formulário
    document.getElementById('metaText').value = meta.Meta || meta.texto || '';
    document.getElementById('metaSemestre').value = meta.semestre || '1º Semestre 2024';
    document.getElementById('metaStatus').value = meta.status || 'Em andamento';
    document.getElementById('metaProgresso').value = meta.progresso || 0;
    document.getElementById('progressoValue').textContent = meta.progresso || 0;
    
    editMetaModal.style.display = 'block';
}

function openFilterModal() {
    const filterModal = document.getElementById('filterModal');
    // Resetar checkboxes
    const checkboxes = filterModal.querySelectorAll('input[type="checkbox"]');
    checkboxes.forEach(checkbox => {
        checkbox.checked = activeFilters.includes(checkbox.value);
    });
    
    filterModal.style.display = 'block';
}

function closeModals() {
    const editModal = document.getElementById('editModal');
    const filterModal = document.getElementById('filterModal');
    const editMetaModal = document.getElementById('editMetaModal');
    editModal.style.display = 'none';
    filterModal.style.display = 'none';
    editMetaModal.style.display = 'none';
}

// Função para salvar a edição da iniciativa
async function saveInitiativeEdit() {
    if (!currentInitiative) return;
    
    try {
        // Obter os valores do formulário
        const updatedInitiative = {
            ...currentInitiative,
            Iniciativas: document.getElementById('editNome').value,
            Descrição: document.getElementById('editDescricao').value,
            Porta: document.getElementById('editPorta').value,
            Farol: document.getElementById('editFarol').value,
            Líder: document.getElementById('editLider').value,
            Observações: document.getElementById('editObservacoes').value
        };
        
        // Atualizar a iniciativa no objeto global
        const index = window.initiatives.findIndex(i => i.Iniciativas === currentInitiative.Iniciativas);
        if (index !== -1) {
            window.initiatives[index] = updatedInitiative;
        }
        
        // Salvar no localStorage
        localStorage.setItem('initiatives', JSON.stringify(window.initiatives));
        
        // Recarregar a interface
        loadInitiatives();
        updateStats();
        
        // Fechar o modal
        closeModals();
        
        // Mostrar mensagem de sucesso
        alert('Iniciativa atualizada com sucesso!');
        
    } catch (error) {
        console.error('Erro ao salvar iniciativa:', error);
        alert('Erro ao salvar as alterações. Por favor, tente novamente.');
    }
}

function applyFilters() {
    const filterModal = document.getElementById('filterModal');
    const checkboxes = filterModal.querySelectorAll('input[type="checkbox"]:checked');
    activeFilters = Array.from(checkboxes).map(cb => cb.value);
    
    // Se "all" estiver selecionado, mostrar todas as iniciativas
    if (activeFilters.includes('all')) {
        loadInitiatives();
    } else {
        // Filtrar por status
        const filteredInitiatives = initiatives.filter(initiative => 
            activeFilters.includes(initiative.FAROL_NO_TRIMESTRE)
        );
        loadInitiatives(filteredInitiatives);
    }
    
    closeModals();
}

function addResultado() {
    const newResultadoInput = document.getElementById('newResultado');
    const newResultado = newResultadoInput.value.trim();
    
    if (newResultado === '') return;
    
    resultadosList.push({ Resultado: newResultado, Metas: [] });
    
    const resultadosContainer = document.getElementById('resultadosContainer');
    const resultadoRow = document.createElement('div');
    resultadoRow.className = 'item-row';
    resultadoRow.innerHTML = `
        <input type="text" value="${newResultado}" readonly>
        <button type="button" class="remove-item" data-index="${resultadosList.length - 1}">
            <i class="fas fa-times"></i>
        </button>
    `;
    resultadosContainer.appendChild(resultadoRow);
    
    // Adicionar event listener para remover
    resultadoRow.querySelector('.remove-item').addEventListener('click', (e) => {
        const index = parseInt(e.currentTarget.getAttribute('data-index'));
        resultadosList.splice(index, 1);
        e.currentTarget.parentElement.remove();
        updateRemoveButtons('#resultadosContainer');
    });
    
    newResultadoInput.value = '';
    updateRemoveButtons('#resultadosContainer');
}

function addMeta() {
    const newMetaInput = document.getElementById('newMeta');
    const newMetaSemestre = document.getElementById('newMetaSemestre');
    const newMetaText = newMetaInput.value.trim();
    const semestre = newMetaSemestre.value;
    
    if (newMetaText === '') return;
    
    // Criar nova meta
    const newMeta = {
        texto: newMetaText,
        semestre: semestre,
        status: 'Não iniciada',
        progresso: 0
    };
    
    // Adicionar a meta ao primeiro resultado (ou criar um novo resultado se não existir)
    if (!currentInitiative.Resultados || currentInitiative.Resultados.length === 0) {
        currentInitiative.Resultados = [{
            Resultado: 'Novo Resultado',
            Metas: [newMeta]
        }];
    } else {
        if (!currentInitiative.Resultados[0].Metas) {
            currentInitiative.Resultados[0].Metas = [];
        }
        currentInitiative.Resultados[0].Metas.push(newMeta);
    }
    
    // Atualizar a interface
    const metasContainer = document.getElementById('metasContainer');
    const metaRow = document.createElement('div');
    metaRow.className = 'item-row';
    metaRow.innerHTML = `
        <input type="text" value="${newMeta.texto}" readonly>
        <span class="meta-semestre">${newMeta.semestre}</span>
        <button type="button" class="remove-item" data-resultado-index="0" data-meta-index="${currentInitiative.Resultados[0].Metas.length - 1}">
            <i class="fas fa-times"></i>
        </button>
    `;
    metasContainer.appendChild(metaRow);
    
    // Adicionar event listener para remover
    metaRow.querySelector('.remove-item').addEventListener('click', (e) => {
        const resultadoIndex = parseInt(e.currentTarget.getAttribute('data-resultado-index'));
        const metaIndex = parseInt(e.currentTarget.getAttribute('data-meta-index'));
        currentInitiative.Resultados[resultadoIndex].Metas.splice(metaIndex, 1);
        e.currentTarget.parentElement.remove();
        updateRemoveButtons('#metasContainer');
    });
    
    newMetaInput.value = '';
    updateRemoveButtons('#metasContainer');
}

function updateRemoveButtons(containerId) {
    const container = document.querySelector(containerId);
    const removeButtons = container.querySelectorAll('.remove-item');
    
    removeButtons.forEach((btn, index) => {
        btn.setAttribute('data-index', index);
    });
}

function exportData() {
    // Criar um arquivo JSON para download
    const dataStr = JSON.stringify(initiatives, null, 2);
    const dataUri = 'data:application/json;charset=utf-8,' + encodeURIComponent(dataStr);
    
    const exportFileDefaultName = 'iniciativas.json';
    
    const linkElement = document.createElement('a');
    linkElement.setAttribute('href', dataUri);
    linkElement.setAttribute('download', exportFileDefaultName);
    linkElement.click();
}

// Helper function to get resultado status based on metas
function getResultadoStatus(metas) {
    if (!metas || metas.length === 0) return '';
    
    const concluidas = metas.filter(meta => meta.status === 'Concluída').length;
    const total = metas.length;
    
    if (concluidas === total) {
        return '<span class="meta-status concluida">Concluído</span>';
    } else if (concluidas > 0) {
        return '<span class="meta-status em-andamento">Em Andamento</span>';
    }
    return '<span class="meta-status nao-iniciada">Não Iniciado</span>';
}

// Helper function to get initiative deadline
function getPrazo(initiative) {
    let latestSemestre = '';
    initiative.Resultados.forEach(resultado => {
        const metas = Array.isArray(resultado.Metas) ? resultado.Metas : [];
        metas.forEach(meta => {
            if (meta.semestre > latestSemestre) {
                latestSemestre = meta.semestre;
            }
        });
    });
    return latestSemestre;
}

// Função para salvar edição de meta
async function saveMetaEdit() {
    if (!currentInitiative || currentResultadoIndex === null || currentMetaIndex === null) return;
    
    try {
        const meta = {
            texto: document.getElementById('metaText').value,
            semestre: document.getElementById('metaSemestre').value,
            status: document.getElementById('metaStatus').value,
            progresso: parseInt(document.getElementById('metaProgresso').value)
        };
        
        // Atualizar a meta no objeto global
        window.initiatives = window.initiatives.map(initiative => {
            if (initiative.Iniciativas === currentInitiative.Iniciativas) {
                const updatedInitiative = { ...initiative };
                updatedInitiative.Resultados = updatedInitiative.Resultados.map((resultado, rIndex) => {
                    if (rIndex === currentResultadoIndex) {
                        const updatedResultado = { ...resultado };
                        updatedResultado.Metas = updatedResultado.Metas.map((m, mIndex) => {
                            if (mIndex === currentMetaIndex) {
                                return meta;
                            }
                            return m;
                        });
                        return updatedResultado;
                    }
                    return resultado;
                });
                return updatedInitiative;
            }
            return initiative;
        });
        
        // Salvar no localStorage
        localStorage.setItem('initiatives', JSON.stringify(window.initiatives));
        
        // Recarregar a interface
        loadInitiatives();
        updateStats();
        
        // Fechar o modal
        closeModals();
        
        // Mostrar mensagem de sucesso
        alert('Meta atualizada com sucesso!');
        
    } catch (error) {
        console.error('Erro ao salvar meta:', error);
        alert('Erro ao salvar as alterações. Por favor, tente novamente.');
    }
}
