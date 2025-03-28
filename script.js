// Dados iniciais (simulando um banco de dados JSON)
let initiatives = [
    {
        "Iniciativas": "NCPI Dissemina",
        "O que é": "O NCPI Dissemina é a iniciativa voltada a ampliar a capacidade do NCPI disseminar evidências e conhecimentos científicos plurais com potencial de impacto sobre o desenho e a implementação de políticas públicas voltadas às Primeiras Infâncias.",
        "Descrição": "Canais e produtos voltados a levar evidências científicas para formuladores de políticas e agentes de implementação que atuam para aterrissar as políticas públicas e para desenvolver serviços públicos para as crianças na primeira infância.",
        "Resultados": [
            "NCPI visto como top referência sobre evidências para desenho e implementação de PPPI",
            "Públicos prioritários com acesso a informação atualizada e útil sobre implementação de PPPI"
        ],
        "Metas": [
            "Manter o site do NCPI entre os 3 primeiros colocados no Google em buscas de expressões prioritárias",
            "Aumentar a diversidade étnico-racial e regional de fontes sugeridas para entrevistas a veículos Tier 1",
            "Obter espaço editorial fixo para ao menos 2 integrantes do CC, com diversidade étnico-racial, regional e epistemológica",
            "Aumentar base de inscrições na newsletter em X% ao ano com taxa média de abertura de 20% ao ano",
            "5 X% de crescimento de menções ao NCPI e seus produtos na imprensa",
            "X% de crescimento de seguidores no LinkedIn",
            "12 produtos derivados do CC ao longo dos 3 anos",
            "10 produtos derivados do Prêmio",
            "8 produtos derivados do Simpósio",
            "6 encontros de disseminação com Comunidade NCPI (3 online e 3 presenciais)",
            "Participação de pesquisadores e/ou distribuição de materiais em ao menos 2 eventos estratégicos por ano"
        ],
        "FAROL_NO_TRIMESTRE": "Em Andamento",
        "MetasConcluidas": 4,
        "LÍDER": "Ana Silva",
        "OBSERVAÇÕES": "Iniciativa prioritária para o primeiro semestre",
        "Porta": "Porta para fora"
    },
    {
        "Iniciativas": "Simpósio Internacional",
        "O que é": "O Simpósio é evento voltado à sensibilização de gestores públicos, lideranças da sociedade civil e da academia por meio de evidências para a qualificação da implementação de políticas públicas de primeira infância.",
        "Descrição": "Encontro que apresenta evidências científicas e boas práticas capazes de pautar o debate público sobre políticas públicas para as primeiras infâncias, considerando a diversidade brasileira com vistas a contribuir para a tomada de decisão de gestores públicos.",
        "Resultados": [
            "Simpósio como espaço agregador das principais pautas e tendências de implementação de PPPI",
            "Perfil de palestrantes e participantes orientado pelas diversidades regional e étnico-racial brasileiras"
        ],
        "Metas": [
            "80% dos Participantes afirmam que participar do Simpósio ampliou seus conhecimentos sobre Pi e suas conexões com atores do campo",
            "1 encontro da Comunidade NCPI por edição do Simpósio",
            "Ao menos 5 side events por edição",
            "Participação de 3 a 5 palestrantes internacionais, com 50% deles com origem no Sul Global",
            "Ao menos 1 estudo científico inédito lançado no Simpósio",
            "100% dos estados brasileiros com participantes presencial e/ou on-line",
            "30% do público advindo do N ou NE, sendo pretos, pardos e indígenas",
            "300 participantes presenciais e ao menos 1000 online",
            "50% de participantes advindos da academia, OSC e imprensa",
            "50% de gestores públicos de alto e médio escalão + nível de rua",
            "40% dos palestrantes entre pessoas pretas, pardas e indígenas"
        ],
        "FAROL_NO_TRIMESTRE": "No Prazo",
        "MetasConcluidas": 8,
        "LÍDER": "Carlos Oliveira",
        "OBSERVAÇÕES": "Preparativos para o evento de outubro em andamento",
        "Porta": "Porta para fora"
    },
    {
        "Iniciativas": "Prêmio",
        "O que é": "O Prêmio identifica e reconhece pesquisadores que abordam as múltiplas infâncias e desigualdades nas primeiras infâncias brasileiras.",
        "Descrição": "Premiação que identifica e reconhece pesquisadores relacionados às primeiras infâncias, visando fortalecer a produção, disseminação e uso de evidências para apoiar a formulação e qualificação de políticas públicas em primeira infância no Brasil.",
        "Resultados": [
            "Todas as etapas da premiação com garantia de diversidade epistêmica, geográfica e racial",
            "Pesquisas premiadas articuladas com a gestão pública e inserção na imprensa"
        ],
        "Metas": [
            "50% de participantes do N e NE em todas as etapas de cada edição",
            "50% de participantes pretos, pardos e indígenas em todas as etapas",
            "Pesquisas distribuídas pelas diferentes área de concentração",
            "Assegurar ao menos 5 parceiros divulgadores a cada edição: FNP, RNPI, CNM, CPAPI, etc.",
            "50% da comissão julgadora do Prêmio formada por preto, pardos e indígenas",
            "1 formação em comunicação e influência para todos os finalistas",
            "1 formação em aplicação de evidências às PP para os premiados",
            "50 gestores públicos e de OSC presentes na cerimônia de premiação",
            "Ao menos 50% das pesquisas inscritas voltadas às crianças pretas, pardas e indígenas"
        ],
        "FAROL_NO_TRIMESTRE": "Em Risco",
        "MetasConcluidas": 3,
        "LÍDER": "Mariana Santos",
        "OBSERVAÇÕES": "Necessário ampliar divulgação para atingir meta de inscrições",
        "Porta": "Porta para fora"
    },
    {
        "Iniciativas": "ELP",
        "O que é": "A formação executiva, desenvolvida em parceria com a Escola de Saúde Pública da Universidade Harvard, busca mobilizar e capacitar lideranças para qualificar a criação e implementação de políticas.",
        "Descrição": "Formação para sensibilizar, mobilizar e capacitar lideranças de alto nível para qualificar a elaboração e implementação de políticas, programas e ações voltados ao desenvolvimento das primeiras infâncias no Brasil.",
        "Resultados": [
            "Lideranças sensibilizadas e engajadas a implementar PP voltadas às múltiplas infâncias brasileiras",
            "Participantes e docentes pretos, pardos e indígenas presentes de modo significativo no ELP"
        ],
        "Metas": [
            "80% dos participantes avaliam seus argumentos e evidências sobre PI como excelente/bom",
            "80% dos participantes avaliam suas habilidades de mobilizar agentes a favor da PI como excelente/bom",
            "80% dos participantes avaliam seu conhecimento para implementar políticas públicas de PI como excelente/bom",
            "NPS do Programa acima de 90%",
            "90% dos plano de ação apresentados com recortes das múltiplas infâncias brasileiras",
            "Ao menos 70% dos planos de ação em algum estágio de implementação",
            "Mínimo de 40% dos participantes pretos, pardos e indígenas",
            "Assegurar ao menos 15% de participantes para as 5 regiões brasileiras",
            "40% de diversidade nos professores de todas as etapas",
            "Ao menos 50% dos participantes ocupam posições de liderança na gestão pública"
        ],
        "FAROL_NO_TRIMESTRE": "No Prazo",
        "MetasConcluidas": 7,
        "LÍDER": "Roberto Almeida",
        "OBSERVAÇÕES": "Turma atual com excelente engajamento",
        "Porta": "Porta para dentro"
    },
    {
        "Iniciativas": "MOBILIZAÇÃO E GESTÃO DE RECURSOS FINANCEIROS",
        "Descrição": "Gestão de recursos financeiros para garantir a sustentabilidade das iniciativas",
        "Resultados": [
            "Fases V e VI financiadas, com novos parceiros que fortaleçam a coalizão e as iniciativas",
            "Gestão financeira precisa, eficiente e transparente assegurada ao longo da Fase V"
        ],
        "Metas": [
            "100% dos grants previstos, aprovados com os parceiros",
            "Prospecção de ao menos 1 parceiro para a fase 6.",
            "100% dos relatórios financeiros aprovados pelos parceiros",
            "100% dos compromissos financeiros executados",
            "Acompanhamento mensal do orçamento realizado pela equipe"
        ],
        "FAROL_NO_TRIMESTRE": "No Prazo",
        "MetasConcluidas": 4,
        "LÍDER": "Fernanda Costa",
        "OBSERVAÇÕES": "Relatórios financeiros do trimestre entregues no prazo",
        "Porta": "Porta para dentro"
    }
];

// Variáveis globais
let currentInitiative = null;
let metasList = [];
let resultadosList = [];
let allExpanded = false;
let activeFilters = ['all'];
let currentPage = 'all'; // 'all', 'porta-fora', 'porta-dentro'

// Elementos DOM
document.addEventListener('DOMContentLoaded', () => {
    // Inicializar elementos DOM
    const sidebar = document.getElementById('sidebar');
    const toggleSidebarBtn = document.getElementById('toggleSidebar');
    const mainContent = document.getElementById('mainContent');
    const initiativesList = document.getElementById('initiativesList');
    const searchInput = document.getElementById('searchInput');
    const expandAllBtn = document.getElementById('expandAllBtn');
    const filterBtn = document.getElementById('filterBtn');
    const editModal = document.getElementById('editModal');
    const filterModal = document.getElementById('filterModal');
    const closeModalBtns = document.querySelectorAll('.close-modal');
    const cancelEditBtn = document.getElementById('cancelEditBtn');
    const saveEditBtn = document.getElementById('saveEditBtn');
    const cancelFilterBtn = document.getElementById('cancelFilterBtn');
    const applyFilterBtn = document.getElementById('applyFilterBtn');
    const addResultadoBtn = document.getElementById('addResultadoBtn');
    const addMetaBtn = document.getElementById('addMetaBtn');
    const exportBtn = document.getElementById('exportBtn');
    const exportDataBtn = document.getElementById('exportDataBtn');
    const menuDropdowns = document.querySelectorAll('.menu-dropdown');
    const submenuItems = document.querySelectorAll('.submenu-item');

    // Carregar dados do localStorage se existirem
    const savedData = localStorage.getItem('initiatives');
    if (savedData) {
        initiatives = JSON.parse(savedData);
    }

    // Configurar menu dropdown
    menuDropdowns.forEach(dropdown => {
        const toggle = dropdown.querySelector('.dropdown-toggle');
        toggle.addEventListener('click', (e) => {
            e.preventDefault();
            dropdown.classList.toggle('open');
        });
    });

    // Configurar itens do submenu
    submenuItems.forEach(item => {
        item.addEventListener('click', (e) => {
            e.preventDefault();
            const page = e.currentTarget.getAttribute('data-page');
            navigateToPage(page);
        });
    });

    // Toggle sidebar
    toggleSidebarBtn.addEventListener('click', () => {
        sidebar.classList.toggle('collapsed');
        mainContent.classList.toggle('expanded');
    });

    // Inicializar a página
    loadInitiatives();
    updateStats();

    // Configurar event listeners
    searchInput.addEventListener('input', handleSearch);
    expandAllBtn.addEventListener('click', toggleExpandAll);
    filterBtn.addEventListener('click', openFilterModal);
    closeModalBtns.forEach(btn => btn.addEventListener('click', closeModals));
    cancelEditBtn.addEventListener('click', closeModals);
    saveEditBtn.addEventListener('click', saveInitiative);
    cancelFilterBtn.addEventListener('click', closeModals);
    applyFilterBtn.addEventListener('click', applyFilters);
    addResultadoBtn.addEventListener('click', addResultado);
    addMetaBtn.addEventListener('click', addMeta);
    exportBtn.addEventListener('click', exportData);
    exportDataBtn.addEventListener('click', exportData);
    
    // Fechar modais ao clicar fora
    window.addEventListener('click', (e) => {
        if (e.target === editModal) {
            closeModals();
        }
        if (e.target === filterModal) {
            closeModals();
        }
    });
});

// Navegar para uma página específica
function navigateToPage(page) {
    currentPage = page;
    
    // Atualizar título da página
    const pageTitle = document.getElementById('pageTitle');
    const contentTitle = document.getElementById('contentTitle');
    const filterBadge = document.getElementById('filterBadge');
    
    switch (page) {
        case 'porta-fora':
            pageTitle.textContent = 'Painel da Estratégia - Porta para fora';
            contentTitle.textContent = 'Iniciativas - Porta para fora';
            filterBadge.textContent = 'Porta para fora';
            filterBadge.classList.add('active');
            break;
        case 'porta-dentro':
            pageTitle.textContent = 'Painel da Estratégia - Porta para dentro';
            contentTitle.textContent = 'Iniciativas - Porta para dentro';
            filterBadge.textContent = 'Porta para dentro';
            filterBadge.classList.add('active');
            break;
        default:
            pageTitle.textContent = 'Painel Estratégico';
            contentTitle.textContent = 'Objetivos Estratégicos';
            filterBadge.classList.remove('active');
            break;
    }
    
    // Carregar iniciativas filtradas
    loadInitiatives();
    updateStats();
}

// Carregar iniciativas na lista
function loadInitiatives(filteredList = null) {
    const initiativesList = document.getElementById('initiativesList');
    let list = filteredList || initiatives;
    
    // Filtrar por porta se necessário
    if (currentPage === 'porta-fora') {
        list = list.filter(initiative => initiative.Porta === 'Porta para fora');
    } else if (currentPage === 'porta-dentro') {
        list = list.filter(initiative => initiative.Porta === 'Porta para dentro');
    }
    
    initiativesList.innerHTML = '';
    
    if (list.length === 0) {
        initiativesList.innerHTML = '<div class="empty-state">Nenhuma iniciativa encontrada.</div>';
        return;
    }
    
    list.forEach(initiative => {
        const totalMetas = initiative.Metas ? initiative.Metas.length : 0;
        const completedMetas = initiative.MetasConcluidas || 0;
        const progressPercentage = totalMetas > 0 ? (completedMetas / totalMetas) * 100 : 0;
        
        const initiativeElement = document.createElement('div');
        initiativeElement.className = 'initiative-item';
        initiativeElement.innerHTML = `
            <div class="initiative-header">
                <div class="initiative-title">
                    <i class="fas fa-chevron-right"></i>
                    <h3>${initiative.Iniciativas}</h3>
                </div>
                <div class="initiative-actions">
                    <div class="initiative-progress">
                        <span class="progress-text">${completedMetas}/${totalMetas} metas</span>
                        <div class="progress-bar">
                            <div class="progress-value" style="width: ${progressPercentage}%; background-color: ${getProgressColor(initiative.FAROL_NO_TRIMESTRE)}"></div>
                        </div>
                    </div>
                    <span class="status-badge ${getStatusClass(initiative.FAROL_NO_TRIMESTRE)}">${initiative.FAROL_NO_TRIMESTRE || 'Não definido'}</span>
                    <button class="edit-btn" data-initiative="${initiative.Iniciativas}">
                        <i class="fas fa-edit"></i>
                    </button>
                </div>
            </div>
            <div class="initiative-details">
                <p class="initiative-description">${initiative.Descrição || ''}</p>
                
                ${initiative.Resultados && initiative.Resultados.length > 0 ? `
                <div class="details-section">
                    <h4>Resultados Esperados:</h4>
                    <ul class="details-list">
                        ${initiative.Resultados.map(resultado => `<li>${resultado}</li>`).join('')}
                    </ul>
                </div>
                ` : ''}
                
                ${initiative.Metas && initiative.Metas.length > 0 ? `
                <div class="details-section">
                    <h4>Metas:</h4>
                    <ul class="details-list">
                        ${initiative.Metas.map(meta => `<li>${meta}</li>`).join('')}
                    </ul>
                </div>
                ` : ''}
                
                ${initiative.LÍDER ? `
                <div class="details-meta">
                    <span>Líder:</span> ${initiative.LÍDER}
                </div>
                ` : ''}
                
                ${initiative.Porta ? `
                <div class="details-meta">
                    <span>Porta:</span> ${initiative.Porta}
                </div>
                ` : ''}
                
                ${initiative.OBSERVAÇÕES ? `
                <div class="details-meta">
                    <span>Observações:</span> ${initiative.OBSERVAÇÕES}
                </div>
                ` : ''}
            </div>
        `;
        
        initiativesList.appendChild(initiativeElement);
        
        // Adicionar event listeners
        const header = initiativeElement.querySelector('.initiative-header');
        header.addEventListener('click', () => {
            const details = initiativeElement.querySelector('.initiative-details');
            const chevron = initiativeElement.querySelector('.initiative-title i');
            
            details.classList.toggle('active');
            
            if (details.classList.contains('active')) {
                chevron.classList.remove('fa-chevron-right');
                chevron.classList.add('fa-chevron-down');
            } else {
                chevron.classList.remove('fa-chevron-down');
                chevron.classList.add('fa-chevron-right');
            }
        });
        
        const editBtn = initiativeElement.querySelector('.edit-btn');
        editBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            const initiativeName = e.currentTarget.getAttribute('data-initiative');
            openEditModal(initiativeName);
        });
    });
}

// Atualizar estatísticas
function updateStats() {
    let filteredInitiatives = [...initiatives];
    
    // Filtrar por porta se necessário
    if (currentPage === 'porta-fora') {
        filteredInitiatives = filteredInitiatives.filter(initiative => initiative.Porta === 'Porta para fora');
    } else if (currentPage === 'porta-dentro') {
        filteredInitiatives = filteredInitiatives.filter(initiative => initiative.Porta === 'Porta para dentro');
    }
    
    const totalInitiatives = filteredInitiatives.length;
    
    let totalGoals = 0;
    let completedGoals = 0;
    
    filteredInitiatives.forEach(initiative => {
        if (initiative.Metas && Array.isArray(initiative.Metas)) {
            totalGoals += initiative.Metas.length;
        }
        
        if (initiative.MetasConcluidas) {
            completedGoals += initiative.MetasConcluidas;
        }
    });
    
    const completionPercentage = totalGoals > 0 
        ? Math.round((completedGoals / totalGoals) * 100) 
        : 0;
    
    document.getElementById('totalInitiatives').textContent = totalInitiatives;
    document.getElementById('totalGoals').textContent = totalGoals;
    document.getElementById('completedGoals').textContent = completedGoals;
    document.getElementById('completionPercentage').textContent = `${completionPercentage}%`;
}

// Funções auxiliares
function getStatusClass(status) {
    if (!status) return '';
    
    switch (status.toLowerCase()) {
        case 'em andamento':
            return 'em-andamento';
        case 'no prazo':
            return 'no-prazo';
        case 'em risco':
            return 'em-risco';
        default:
            return '';
    }
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
    const detailsElements = document.querySelectorAll('.initiative-details');
    const chevrons = document.querySelectorAll('.initiative-title i');
    
    allExpanded = !allExpanded;
    
    if (allExpanded) {
        expandAllBtn.innerHTML = '<i class="fas fa-chevron-up"></i> Recolher Todos';
        detailsElements.forEach(el => el.classList.add('active'));
        chevrons.forEach(icon => {
            icon.classList.remove('fa-chevron-right');
            icon.classList.add('fa-chevron-down');
        });
    } else {
        expandAllBtn.innerHTML = '<i class="fas fa-chevron-down"></i> Expandir Todos';
        detailsElements.forEach(el => el.classList.remove('active'));
        chevrons.forEach(icon => {
            icon.classList.remove('fa-chevron-down');
            icon.classList.add('fa-chevron-right');
        });
    }
}

function openEditModal(initiativeName) {
    const editModal = document.getElementById('editModal');
    currentInitiative = initiatives.find(i => i.Iniciativas === initiativeName);
    
    if (!currentInitiative) return;
    
    // Preencher o formulário
    document.getElementById('editNome').value = currentInitiative.Iniciativas;
    document.getElementById('editDescricao').value = currentInitiative.Descrição || '';
    document.getElementById('editPorta').value = currentInitiative.Porta || '';
    document.getElementById('editFarol').value = currentInitiative.FAROL_NO_TRIMESTRE || '';
    document.getElementById('editLider').value = currentInitiative.LÍDER || '';
    document.getElementById('editMetasConcluidas').value = currentInitiative.MetasConcluidas || 0;
    document.getElementById('editObservacoes').value = currentInitiative.OBSERVAÇÕES || '';
    
    // Configurar o máximo de metas concluídas
    const maxMetas = currentInitiative.Metas ? currentInitiative.Metas.length : 0;
    document.getElementById('editMetasConcluidas').max = maxMetas;
    
    // Preencher resultados
    resultadosList = [...(currentInitiative.Resultados || [])];
    const resultadosContainer = document.getElementById('resultadosContainer');
    resultadosContainer.innerHTML = '';
    
    resultadosList.forEach((resultado, index) => {
        const resultadoRow = document.createElement('div');
        resultadoRow.className = 'item-row';
        resultadoRow.innerHTML = `
            <input type="text" value="${resultado}" readonly>
            <button type="button" class="remove-item" data-index="${index}">
                <i class="fas fa-times"></i>
            </button>
        `;
        resultadosContainer.appendChild(resultadoRow);
    });
    
    // Adicionar event listeners para remover resultados
    document.querySelectorAll('#resultadosContainer .remove-item').forEach(btn => {
        btn.addEventListener('click', (e) => {
            const index = parseInt(e.currentTarget.getAttribute('data-index'));
            resultadosList.splice(index, 1);
            e.currentTarget.parentElement.remove();
            updateRemoveButtons('#resultadosContainer');
        });
    });
    
    // Preencher metas
    metasList = [...(currentInitiative.Metas || [])];
    const metasContainer = document.getElementById('metasContainer');
    metasContainer.innerHTML = '';
    
    metasList.forEach((meta, index) => {
        const metaRow = document.createElement('div');
        metaRow.className = 'item-row';
        metaRow.innerHTML = `
            <input type="text" value="${meta}" readonly>
            <button type="button" class="remove-item" data-index="${index}">
                <i class="fas fa-times"></i  class="remove-item" data-index="${index}">
                <i class="fas fa-times"></i>
            </button>
        `;
        metasContainer.appendChild(metaRow);
    });
    
    // Adicionar event listeners para remover metas
    document.querySelectorAll('#metasContainer .remove-item').forEach(btn => {
        btn.addEventListener('click', (e) => {
            const index = parseInt(e.currentTarget.getAttribute('data-index'));
            metasList.splice(index, 1);
            e.currentTarget.parentElement.remove();
            updateRemoveButtons('#metasContainer');
            
            // Atualizar o máximo de metas concluídas
            document.getElementById('editMetasConcluidas').max = metasList.length;
            
            // Ajustar o valor atual se necessário
            const currentValue = parseInt(document.getElementById('editMetasConcluidas').value);
            if (currentValue > metasList.length) {
                document.getElementById('editMetasConcluidas').value = metasList.length;
            }
        });
    });
    
    editModal.style.display = 'block';
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
    editModal.style.display = 'none';
    filterModal.style.display = 'none';
}

function saveInitiative() {
    if (!currentInitiative) return;
    
    const updatedInitiative = {
        ...currentInitiative,
        Iniciativas: document.getElementById('editNome').value,
        Descrição: document.getElementById('editDescricao').value,
        Porta: document.getElementById('editPorta').value,
        FAROL_NO_TRIMESTRE: document.getElementById('editFarol').value,
        LÍDER: document.getElementById('editLider').value,
        MetasConcluidas: parseInt(document.getElementById('editMetasConcluidas').value) || 0,
        OBSERVAÇÕES: document.getElementById('editObservacoes').value,
        Resultados: [...resultadosList],
        Metas: [...metasList]
    };
    
    // Atualizar a iniciativa na lista
    const index = initiatives.findIndex(i => i.Iniciativas === currentInitiative.Iniciativas);
    if (index !== -1) {
        initiatives[index] = updatedInitiative;
    }
    
    // Salvar no localStorage
    localStorage.setItem('initiatives', JSON.stringify(initiatives));
    
    // Recarregar a lista e atualizar estatísticas
    loadInitiatives();
    updateStats();
    
    // Fechar o modal
    closeModals();
    
    // Mostrar mensagem de sucesso
    alert('Iniciativa atualizada com sucesso!');
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
    
    resultadosList.push(newResultado);
    
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
    const newMeta = newMetaInput.value.trim();
    
    if (newMeta === '') return;
    
    metasList.push(newMeta);
    
    const metasContainer = document.getElementById('metasContainer');
    const metaRow = document.createElement('div');
    metaRow.className = 'item-row';
    metaRow.innerHTML = `
        <input type="text" value="${newMeta}" readonly>
        <button type="button" class="remove-item" data-index="${metasList.length - 1}">
            <i class="fas fa-times"></i>
        </button>
    `;
    metasContainer.appendChild(metaRow);
    
    // Adicionar event listener para remover
    metaRow.querySelector('.remove-item').addEventListener('click', (e) => {
        const index = parseInt(e.currentTarget.getAttribute('data-index'));
        metasList.splice(index, 1);
        e.currentTarget.parentElement.remove();
        updateRemoveButtons('#metasContainer');
        
        // Atualizar o máximo de metas concluídas
        document.getElementById('editMetasConcluidas').max = metasList.length;
        
        // Ajustar o valor atual se necessário
        const currentValue = parseInt(document.getElementById('editMetasConcluidas').value);
        if (currentValue > metasList.length) {
            document.getElementById('editMetasConcluidas').value = metasList.length;
        }
    });
    
    newMetaInput.value = '';
    updateRemoveButtons('#metasContainer');
    
    // Atualizar o máximo de metas concluídas
    document.getElementById('editMetasConcluidas').max = metasList.length;
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
