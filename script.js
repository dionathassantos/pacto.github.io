// Variáveis globais
let currentInitiative = null
let currentMetaIndex = null
let metasList = []
let resultadosList = []
let allExpanded = false
let activeStatusFilters = ["all"]
let activeSemesterFilters = ["all"]
let currentPage = "todas" // 'todas', 'porta-fora', 'porta-dentro'

// Elementos DOM
document.addEventListener("DOMContentLoaded", () => {
  // Inicializar elementos DOM
  const sidebar = document.getElementById("sidebar")
  const toggleSidebarBtn = document.getElementById("toggleSidebar")
  const mainContent = document.getElementById("mainContent")
  const initiativesList = document.getElementById("initiativesList")
  const searchInput = document.getElementById("searchInput")
  const expandAllBtn = document.getElementById("expandAllBtn")
  const filterBtn = document.getElementById("filterBtn")
  const editModal = document.getElementById("editModal")
  const editMetaModal = document.getElementById("editMetaModal")
  const filterModal = document.getElementById("filterModal")
  const closeModalBtns = document.querySelectorAll(".close-modal")
  const cancelEditBtn = document.getElementById("cancelEditBtn")
  const saveEditBtn = document.getElementById("saveEditBtn")
  const cancelMetaEditBtn = document.getElementById("cancelMetaEditBtn")
  const saveMetaEditBtn = document.getElementById("saveMetaEditBtn")
  const cancelFilterBtn = document.getElementById("cancelFilterBtn")
  const applyFilterBtn = document.getElementById("applyFilterBtn")
  const addResultadoBtn = document.getElementById("addResultadoBtn")
  const addMetaBtn = document.getElementById("addMetaBtn")
  const exportBtn = document.getElementById("exportBtn")
  const navItems = document.querySelectorAll(".nav-item")
  const metaProgressoInput = document.getElementById("metaProgresso")
  const progressoValueSpan = document.getElementById("progressoValue")

  // Carregar dados do localStorage se existirem
  const savedData = localStorage.getItem("initiatives")
  if (savedData) {
    initiatives = JSON.parse(savedData)
  }

  // Configurar navegação
  navItems.forEach((item) => {
    item.addEventListener("click", (e) => {
      e.preventDefault()
      const page = item.getAttribute("data-page")
      navigateToPage(page)

      // Atualizar classe ativa
      navItems.forEach((i) => i.classList.remove("active"))
      item.classList.add("active")
    })
  })

  // Toggle sidebar
  toggleSidebarBtn.addEventListener("click", () => {
    sidebar.classList.toggle("collapsed")
    mainContent.classList.toggle("expanded")
  })

  // Inicializar a página
  loadInitiatives()
  updateStats()

  // Configurar event listeners
  searchInput.addEventListener("input", handleSearch)
  expandAllBtn.addEventListener("click", toggleExpandAll)
  filterBtn.addEventListener("click", openFilterModal)
  closeModalBtns.forEach((btn) => btn.addEventListener("click", closeModals))
  cancelEditBtn.addEventListener("click", closeModals)
  saveEditBtn.addEventListener("click", saveInitiative)
  cancelMetaEditBtn.addEventListener("click", closeModals)
  saveMetaEditBtn.addEventListener("click", saveMetaEdit)
  cancelFilterBtn.addEventListener("click", closeModals)
  applyFilterBtn.addEventListener("click", applyFilters)
  addResultadoBtn.addEventListener("click", addResultado)
  addMetaBtn.addEventListener("click", addMeta)
  exportBtn.addEventListener("click", exportData)

  // Atualizar valor do progresso
  if (metaProgressoInput) {
    metaProgressoInput.addEventListener("input", () => {
      progressoValueSpan.textContent = metaProgressoInput.value
    })
  }

  // Fechar modais ao clicar fora
  window.addEventListener("click", (e) => {
    if (e.target === editModal) {
      closeModals()
    }
    if (e.target === filterModal) {
      closeModals()
    }
    if (e.target === editMetaModal) {
      closeModals()
    }
  })
})

// Navegar para uma página específica
function navigateToPage(page) {
  currentPage = page

  // Atualizar título da página
  const pageTitle = document.getElementById("pageTitle")
  const contentTitle = document.getElementById("contentTitle")
  const filterBadge = document.getElementById("filterBadge")

  switch (page) {
    case "porta-fora":
      pageTitle.textContent = "Painel Estratégico - Porta para fora"
      contentTitle.textContent = "Iniciativas - Porta para fora"
      filterBadge.textContent = "Porta para fora"
      filterBadge.classList.add("active")
      break
    case "porta-dentro":
      pageTitle.textContent = "Painel Estratégico - Porta para dentro"
      contentTitle.textContent = "Iniciativas - Porta para dentro"
      filterBadge.textContent = "Porta para dentro"
      filterBadge.classList.add("active")
      break
    default:
      pageTitle.textContent = "Painel Estratégico"
      contentTitle.textContent = "Objetivos Estratégicos"
      filterBadge.classList.remove("active")
      break
  }

  // Carregar iniciativas filtradas
  loadInitiatives()
  updateStats()
}

// Carregar iniciativas na lista
function loadInitiatives(filteredList = null) {
  const initiativesList = document.getElementById("initiativesList")
  let list = filteredList || initiatives

  // Filtrar por porta se necessário
  if (currentPage === "porta-fora") {
    list = list.filter((initiative) => initiative.Porta === "Porta para fora")
  } else if (currentPage === "porta-dentro") {
    list = list.filter((initiative) => initiative.Porta === "Porta para dentro")
  }

  initiativesList.innerHTML = ""

  if (list.length === 0) {
    initiativesList.innerHTML = '<div class="empty-state">Nenhuma iniciativa encontrada.</div>'
    return
  }

  list.forEach((initiative) => {
    // Criar elemento de iniciativa
    const initiativeElement = document.createElement("div")
    initiativeElement.className = "initiative-item"

    // Calcular progresso total baseado no progresso de cada meta
    let totalProgresso = 0
    let metasCompletas = 0

    if (initiative.Metas && initiative.Metas.length > 0) {
      initiative.Metas.forEach((meta) => {
        totalProgresso += meta.progresso || 0
        if (meta.status === "Concluído") {
          metasCompletas++
        }
      })

      totalProgresso = Math.round(totalProgresso / initiative.Metas.length)
    }

    // Criar cabeçalho da iniciativa
    const headerElement = document.createElement("div")
    headerElement.className = "initiative-header"
    headerElement.innerHTML = `
            <div class="initiative-title">
                <i class="fas fa-chevron-right"></i>
                <h3>${initiative.Iniciativas}</h3>
            </div>
            <div class="initiative-actions">
                <div class="initiative-progress">
                    <span class="progress-text">${metasCompletas}/${initiative.Metas ? initiative.Metas.length : 0} metas</span>
                    <div class="progress-bar">
                        <div class="progress-value" style="width: ${totalProgresso}%; background-color: ${getProgressColor(initiative.FAROL_NO_TRIMESTRE)}"></div>
                    </div>
                </div>
                <span class="status-badge ${getStatusClass(initiative.FAROL_NO_TRIMESTRE)}">
                    ${getStatusIcon(initiative.FAROL_NO_TRIMESTRE)}
                    ${initiative.FAROL_NO_TRIMESTRE || "Não definido"}
                </span>
                <button class="edit-btn" data-initiative="${initiative.id}">
                    <i class="fas fa-edit"></i>
                </button>
            </div>
        `

    initiativeElement.appendChild(headerElement)

    // Criar detalhes da iniciativa
    const detailsElement = document.createElement("div")
    detailsElement.className = "initiative-details"

    // Descrição
    let detailsContent = `
            <p class="initiative-description">${initiative.Descrição || ""}</p>
        `

    // Resultados e Metas
    if (initiative.Resultados && initiative.Resultados.length > 0) {
      initiative.Resultados.forEach((resultado) => {
        detailsContent += `
                    <div class="resultado-item">
                        <div class="resultado-header">
                            <i class="fas fa-bullseye"></i> Resultado: ${resultado.texto}
                        </div>
                        <div class="metas-container">
                `

        // Filtrar metas por resultado
        const resultadoMetas = initiative.Metas.filter((meta) => meta.resultadoId === resultado.id)

        if (resultadoMetas.length > 0) {
          resultadoMetas.forEach((meta) => {
            detailsContent += `
                            <div class="meta-item">
                                <div class="meta-header">
                                    <div class="meta-text">${meta.texto}</div>
                                    <div class="meta-info">
                                        <span class="meta-semestre">${meta.semestre}</span>
                                        <span class="meta-status ${getMetaStatusClass(meta.status)}">
                                            ${getStatusIcon(meta.status)}
                                            ${meta.status}
                                        </span>
                                    </div>
                                </div>
                                <div class="meta-progress">
                                    <div class="meta-progress-value" style="width: ${meta.progresso}%; background-color: ${getProgressColor(meta.status)}"></div>
                                </div>
                                <div class="meta-actions">
                                    <button class="btn btn-sm btn-outline edit-meta-btn" data-initiative="${initiative.id}" data-meta-index="${meta.id}">
                                        <i class="fas fa-edit"></i> Editar Status
                                    </button>
                                </div>
                            </div>
                        `
          })
        } else {
          detailsContent += `<p class="empty-state">Nenhuma meta associada a este resultado.</p>`
        }

        detailsContent += `
                        </div>
                    </div>
                `
      })
    }

    // Metadados
    detailsContent += `
            <div class="details-meta">
                <span>Líder:</span> ${initiative.LÍDER || "Não definido"}
            </div>
            <div class="details-meta">
                <span>Porta:</span> ${initiative.Porta || "Não definido"}
            </div>
            ${
              initiative.OBSERVAÇÕES
                ? `
            <div class="details-meta">
                <span>Observações:</span> ${initiative.OBSERVAÇÕES}
            </div>
            `
                : ""
            }
        `

    detailsElement.innerHTML = detailsContent
    initiativeElement.appendChild(detailsElement)

    initiativesList.appendChild(initiativeElement)

    // Adicionar event listeners
    const header = initiativeElement.querySelector(".initiative-header")
    header.addEventListener("click", () => {
      const details = initiativeElement.querySelector(".initiative-details")
      const chevron = initiativeElement.querySelector(".initiative-title i")

      details.classList.toggle("active")

      if (details.classList.contains("active")) {
        chevron.classList.remove("fa-chevron-right")
        chevron.classList.add("fa-chevron-down")
      } else {
        chevron.classList.remove("fa-chevron-down")
        chevron.classList.add("fa-chevron-right")
      }
    })

    const editBtn = initiativeElement.querySelector(".edit-btn")
    editBtn.addEventListener("click", (e) => {
      e.stopPropagation()
      const initiativeId = e.currentTarget.getAttribute("data-initiative")
      openEditModal(initiativeId)
    })

    // Adicionar event listeners para botões de edição de meta
    const editMetaBtns = initiativeElement.querySelectorAll(".edit-meta-btn")
    editMetaBtns.forEach((btn) => {
      btn.addEventListener("click", (e) => {
        e.stopPropagation()
        const initiativeId = e.currentTarget.getAttribute("data-initiative")
        const metaId = e.currentTarget.getAttribute("data-meta-index")
        openEditMetaModal(initiativeId, metaId)
      })
    })
  })
}

// Atualizar estatísticas
function updateStats() {
  let filteredInitiatives = [...initiatives]

  // Filtrar por porta se necessário
  if (currentPage === "porta-fora") {
    filteredInitiatives = filteredInitiatives.filter((initiative) => initiative.Porta === "Porta para fora")
  } else if (currentPage === "porta-dentro") {
    filteredInitiatives = filteredInitiatives.filter((initiative) => initiative.Porta === "Porta para dentro")
  }

  const totalInitiatives = filteredInitiatives.length

  let totalGoals = 0
  let completedGoals = 0
  let totalProgress = 0

  filteredInitiatives.forEach((initiative) => {
    if (initiative.Metas && Array.isArray(initiative.Metas)) {
      totalGoals += initiative.Metas.length

      initiative.Metas.forEach((meta) => {
        totalProgress += meta.progresso || 0
        if (meta.status === "Concluído") {
          completedGoals++
        }
      })
    }
  })

  const completionPercentage = totalGoals > 0 ? Math.round(totalProgress / totalGoals) : 0

  document.getElementById("totalInitiatives").textContent = totalInitiatives
  document.getElementById("totalGoals").textContent = totalGoals
  document.getElementById("completedGoals").textContent = completedGoals
  document.getElementById("completionPercentage").textContent = `${completionPercentage}%`
  document.getElementById("overallProgress").style.width = `${completionPercentage}%`
}

// Funções auxiliares
function getStatusClass(status) {
  if (!status) return ""

  switch (status.toLowerCase()) {
    case "no prazo":
      return "no-prazo"
    case "em risco":
      return "em-risco"
    case "concluído":
      return "concluida"
    case "não iniciado":
      return "nao-iniciada"
    case "em andamento":
      return "em-andamento"
    default:
      return ""
  }
}

function getMetaStatusClass(status) {
  if (!status) return ""

  switch (status.toLowerCase()) {
    case "não iniciado":
      return "nao-iniciada"
    case "em andamento":
      return "em-andamento"
    case "no prazo":
      return "no-prazo"
    case "em risco":
      return "em-risco"
    case "concluído":
      return "concluida"
    default:
      return ""
  }
}

function getProgressColor(status) {
  if (!status) return "#9ca3af"

  switch (status.toLowerCase()) {
    case "no prazo":
      return "#10b981"
    case "em risco":
      return "#ef4444"
    case "concluído":
      return "#3b82f6"
    case "não iniciado":
      return "#9ca3af"
    case "em andamento":
      return "#f59e0b"
    default:
      return "#9ca3af"
  }
}

function getStatusIcon(status) {
  if (!status) return ""

  switch (status.toLowerCase()) {
    case "no prazo":
      return '<i class="fas fa-check-circle"></i> '
    case "em risco":
      return '<i class="fas fa-exclamation-circle"></i> '
    case "concluído":
      return '<i class="fas fa-check-double"></i> '
    case "não iniciado":
      return '<i class="fas fa-clock"></i> '
    case "em andamento":
      return '<i class="fas fa-spinner"></i> '
    default:
      return ""
  }
}

// Manipuladores de eventos
function handleSearch() {
  const searchInput = document.getElementById("searchInput")
  const searchTerm = searchInput.value.toLowerCase()

  if (searchTerm === "") {
    loadInitiatives()
    return
  }

  const filteredInitiatives = initiatives.filter(
    (initiative) =>
      initiative.Iniciativas.toLowerCase().includes(searchTerm) ||
      (initiative.Descrição && initiative.Descrição.toLowerCase().includes(searchTerm)),
  )

  loadInitiatives(filteredInitiatives)
}

function toggleExpandAll() {
  const expandAllBtn = document.getElementById("expandAllBtn")
  const detailsElements = document.querySelectorAll(".initiative-details")
  const chevrons = document.querySelectorAll(".initiative-title i")

  allExpanded = !allExpanded

  if (allExpanded) {
    expandAllBtn.innerHTML = '<i class="fas fa-chevron-up"></i> Recolher Todos'
    detailsElements.forEach((el) => el.classList.add("active"))
    chevrons.forEach((icon) => {
      icon.classList.remove("fa-chevron-right")
      icon.classList.add("fa-chevron-down")
    })
  } else {
    expandAllBtn.innerHTML = '<i class="fas fa-chevron-down"></i> Expandir Todos'
    detailsElements.forEach((el) => el.classList.remove("active"))
    chevrons.forEach((icon) => {
      icon.classList.remove("fa-chevron-down")
      icon.classList.add("fa-chevron-right")
    })
  }
}

function openEditModal(initiativeId) {
  const editModal = document.getElementById("editModal")
  currentInitiative = initiatives.find((i) => i.id === initiativeId)

  if (!currentInitiative) return

  // Preencher o formulário
  document.getElementById("editNome").value = currentInitiative.Iniciativas
  document.getElementById("editDescricao").value = currentInitiative.Descrição || ""
  document.getElementById("editPorta").value = currentInitiative.Porta || ""
  document.getElementById("editFarol").value = currentInitiative.FAROL_NO_TRIMESTRE || ""
  document.getElementById("editLider").value = currentInitiative.LÍDER || ""
  document.getElementById("editObservacoes").value = currentInitiative.OBSERVAÇÕES || ""

  // Preencher resultados
  resultadosList = [...(currentInitiative.Resultados || [])]
  const resultadosContainer = document.getElementById("resultadosContainer")
  resultadosContainer.innerHTML = ""

  resultadosList.forEach((resultado, index) => {
    const resultadoRow = document.createElement("div")
    resultadoRow.className = "item-row"
    resultadoRow.innerHTML = `
            <input type="text" value="${resultado.texto}" readonly>
            <button type="button" class="remove-item" data-index="${index}">
                <i class="fas fa-times"></i>
            </button>
        `
    resultadosContainer.appendChild(resultadoRow)
  })

  // Adicionar event listeners para remover resultados
  document.querySelectorAll("#resultadosContainer .remove-item").forEach((btn) => {
    btn.addEventListener("click", (e) => {
      const index = Number.parseInt(e.currentTarget.getAttribute("data-index"))
      resultadosList.splice(index, 1)
      e.currentTarget.parentElement.remove()
      updateRemoveButtons("#resultadosContainer")
    })
  })

  // Preencher metas
  metasList = [...(currentInitiative.Metas || [])]
  const metasContainer = document.getElementById("metasContainer")
  metasContainer.innerHTML = ""

  metasList.forEach((meta, index) => {
    const metaRow = document.createElement("div")
    metaRow.className = "item-row"
    metaRow.innerHTML = `
            <input type="text" value="${meta.texto}" readonly>
            <span class="meta-semestre">${meta.semestre}</span>
            <button type="button" class="remove-item" data-index="${index}">
                <i class="fas fa-times"></i>
            </button>
        `
    metasContainer.appendChild(metaRow)
  })

  // Adicionar event listeners para remover metas
  document.querySelectorAll("#metasContainer .remove-item").forEach((btn) => {
    btn.addEventListener("click", (e) => {
      const index = Number.parseInt(e.currentTarget.getAttribute("data-index"))
      metasList.splice(index, 1)
      e.currentTarget.parentElement.remove()
      updateRemoveButtons("#metasContainer")
    })
  })

  // Preencher dropdown de resultados para novas metas
  const newMetaResultado = document.getElementById("newMetaResultado")
  newMetaResultado.innerHTML = ""
  resultadosList.forEach((resultado) => {
    const option = document.createElement("option")
    option.value = resultado.id
    option.textContent = resultado.texto.substring(0, 50) + (resultado.texto.length > 50 ? "..." : "")
    newMetaResultado.appendChild(option)
  })

  editModal.style.display = "block"
}

function openEditMetaModal(initiativeId, metaId) {
  const editMetaModal = document.getElementById("editMetaModal")
  currentInitiative = initiatives.find((i) => i.id === initiativeId)

  if (!currentInitiative || !currentInitiative.Metas) return

  const meta = currentInitiative.Metas.find((m) => m.id === metaId)
  if (!meta) return

  currentMetaIndex = metaId

  // Preencher o formulário
  document.getElementById("metaText").value = meta.texto
  document.getElementById("metaSemestre").value = meta.semestre
  document.getElementById("metaStatus").value = meta.status
  document.getElementById("metaProgresso").value = meta.progresso
  document.getElementById("progressoValue").textContent = meta.progresso

  editMetaModal.style.display = "block"
}

function openFilterModal() {
  const filterModal = document.getElementById("filterModal")

  // Resetar checkboxes de status
  const statusCheckboxes = filterModal.querySelectorAll('input[type="checkbox"][id^="filter"]:not([id^="filterAll"])')
  statusCheckboxes.forEach((checkbox) => {
    checkbox.checked = activeStatusFilters.includes(checkbox.value)
  })

  document.getElementById("filterAll").checked = activeStatusFilters.includes("all")

  // Resetar checkboxes de semestre
  const semesterCheckboxes = filterModal.querySelectorAll('input[type="checkbox"][id^="filter"]:not([id^="filterAll"])')
  semesterCheckboxes.forEach((checkbox) => {
    checkbox.checked = activeSemesterFilters.includes(checkbox.value)
  })

  document.getElementById("filterAllSemesters").checked = activeSemesterFilters.includes("all")

  filterModal.style.display = "block"
}

function closeModals() {
  const editModal = document.getElementById("editModal")
  const filterModal = document.getElementById("filterModal")
  const editMetaModal = document.getElementById("editMetaModal")
  editModal.style.display = "none"
  filterModal.style.display = "none"
  editMetaModal.style.display = "none"
}

function saveInitiative() {
  if (!currentInitiative) return

  // Atualizar resultados com IDs
  const updatedResultados = resultadosList.map((resultado, index) => {
    if (!resultado.id) {
      return {
        id: `r${currentInitiative.id}-${index + resultadosList.length}`,
        texto: resultado.texto,
      }
    }
    return resultado
  })

  const updatedInitiative = {
    ...currentInitiative,
    Iniciativas: document.getElementById("editNome").value,
    Descrição: document.getElementById("editDescricao").value,
    Porta: document.getElementById("editPorta").value,
    FAROL_NO_TRIMESTRE: document.getElementById("editFarol").value,
    LÍDER: document.getElementById("editLider").value,
    OBSERVAÇÕES: document.getElementById("editObservacoes").value,
    Resultados: updatedResultados,
    Metas: [...metasList],
  }

  // Atualizar a iniciativa na lista
  const index = initiatives.findIndex((i) => i.id === currentInitiative.id)
  if (index !== -1) {
    initiatives[index] = updatedInitiative
  }

  // Salvar no localStorage
  localStorage.setItem("initiatives", JSON.stringify(initiatives))

  // Recarregar a lista e atualizar estatísticas
  loadInitiatives()
  updateStats()

  // Fechar o modal
  closeModals()

  // Mostrar mensagem de sucesso
  alert("Iniciativa atualizada com sucesso!")
}

function saveMetaEdit() {
  if (!currentInitiative || !currentMetaIndex) return

  // Encontrar a meta
  const metaIndex = currentInitiative.Metas.findIndex((m) => m.id === currentMetaIndex)
  if (metaIndex === -1) return

  // Atualizar a meta
  currentInitiative.Metas[metaIndex] = {
    ...currentInitiative.Metas[metaIndex],
    semestre: document.getElementById("metaSemestre").value,
    status: document.getElementById("metaStatus").value,
    progresso: Number.parseInt(document.getElementById("metaProgresso").value),
  }

  // Atualizar a iniciativa na lista
  const index = initiatives.findIndex((i) => i.id === currentInitiative.id)
  if (index !== -1) {
    initiatives[index] = currentInitiative
  }

  // Salvar no localStorage
  localStorage.setItem("initiatives", JSON.stringify(initiatives))

  // Recarregar a lista e atualizar estatísticas
  loadInitiatives()
  updateStats()

  // Fechar o modal
  closeModals()

  // Mostrar mensagem de sucesso
  alert("Meta atualizada com sucesso!")
}

function applyFilters() {
  // Obter filtros de status
  const statusCheckboxes = document.querySelectorAll(
    'input[type="checkbox"][id^="filter"]:not([id^="filterAll"]):not([id^="filter1S"]):not([id^="filter2S"])',
  )
  activeStatusFilters = Array.from(statusCheckboxes)
    .filter((cb) => cb.checked)
    .map((cb) => cb.value)

  // Se nenhum filtro de status estiver selecionado ou "Todos" estiver selecionado, mostrar todos
  if (activeStatusFilters.length === 0 || document.getElementById("filterAll").checked) {
    activeStatusFilters = ["all"]
  }

  // Obter filtros de semestre
  const semesterCheckboxes = document.querySelectorAll(
    'input[type="checkbox"][id^="filter1S"], input[type="checkbox"][id^="filter2S"]',
  )
  activeSemesterFilters = Array.from(semesterCheckboxes)
    .filter((cb) => cb.checked)
    .map((cb) => cb.value)

  // Se nenhum filtro de semestre estiver selecionado ou "Todos" estiver selecionado, mostrar todos
  if (activeSemesterFilters.length === 0 || document.getElementById("filterAllSemesters").checked) {
    activeSemesterFilters = ["all"]
  }

  // Aplicar filtros
  let filteredInitiatives = [...initiatives]

  // Filtrar por status
  if (!activeStatusFilters.includes("all")) {
    filteredInitiatives = filteredInitiatives.filter((initiative) =>
      activeStatusFilters.includes(initiative.FAROL_NO_TRIMESTRE),
    )
  }

  // Filtrar por semestre
  if (!activeSemesterFilters.includes("all")) {
    filteredInitiatives = filteredInitiatives.filter(
      (initiative) =>
        initiative.Metas && initiative.Metas.some((meta) => activeSemesterFilters.includes(meta.semestre)),
    )
  }

  // Carregar iniciativas filtradas
  loadInitiatives(filteredInitiatives)

  closeModals()
}

function addResultado() {
  const newResultadoInput = document.getElementById("newResultado")
  const newResultado = newResultadoInput.value.trim()

  if (newResultado === "") return

  const newResultadoObj = {
    id: `r${currentInitiative.id}-${resultadosList.length + 1}`,
    texto: newResultado,
  }

  resultadosList.push(newResultadoObj)

  const resultadosContainer = document.getElementById("resultadosContainer")
  const resultadoRow = document.createElement("div")
  resultadoRow.className = "item-row"
  resultadoRow.innerHTML = `
        <input type="text" value="${newResultado}" readonly>
        <button type="button" class="remove-item" data-index="${resultadosList.length - 1}">
            <i class="fas fa-times"></i>
        </button>
    `
  resultadosContainer.appendChild(resultadoRow)

  // Adicionar event listener para remover
  resultadoRow.querySelector(".remove-item").addEventListener("click", (e) => {
    const index = Number.parseInt(e.currentTarget.getAttribute("data-index"))
    resultadosList.splice(index, 1)
    e.currentTarget.parentElement.remove()
    updateRemoveButtons("#resultadosContainer")
  })

  // Atualizar dropdown de resultados para novas metas
  const newMetaResultado = document.getElementById("newMetaResultado")
  const option = document.createElement("option")
  option.value = newResultadoObj.id
  option.textContent = newResultado.substring(0, 50) + (newResultado.length > 50 ? "..." : "")
  newMetaResultado.appendChild(option)

  newResultadoInput.value = ""
  updateRemoveButtons("#resultadosContainer")
}

function addMeta() {
  const newMetaInput = document.getElementById("newMeta")
  const newMetaSemestre = document.getElementById("newMetaSemestre")
  const newMetaResultado = document.getElementById("newMetaResultado")
  const newMetaText = newMetaInput.value.trim()
  const semestre = newMetaSemestre.value
  const resultadoId = newMetaResultado.value

  if (newMetaText === "" || !resultadoId) return

  const newMeta = {
    id: `m${currentInitiative.id}-${metasList.length + 1}`,
    texto: newMetaText,
    semestre: semestre,
    status: "Não Iniciado",
    progresso: 0,
    resultadoId: resultadoId,
  }

  metasList.push(newMeta)

  const metasContainer = document.getElementById("metasContainer")
  const metaRow = document.createElement("div")
  metaRow.className = "item-row"
  metaRow.innerHTML = `
        <input type="text" value="${newMeta.texto}" readonly>
        <span class="meta-semestre">${newMeta.semestre}</span>
        <button type="button" class="remove-item" data-index="${metasList.length - 1}">
            <i class="fas fa-times"></i>
        </button>
    `
  metasContainer.appendChild(metaRow)

  // Adicionar event listener para remover
  metaRow.querySelector(".remove-item").addEventListener("click", (e) => {
    const index = Number.parseInt(e.currentTarget.getAttribute("data-index"))
    metasList.splice(index, 1)
    e.currentTarget.parentElement.remove()
    updateRemoveButtons("#metasContainer")
  })

  newMetaInput.value = ""
  updateRemoveButtons("#metasContainer")
}

function updateRemoveButtons(containerId) {
  const container = document.querySelector(containerId)
  const removeButtons = container.querySelectorAll(".remove-item")

  removeButtons.forEach((btn, index) => {
    btn.setAttribute("data-index", index)
  })
}

function exportData() {
  // Criar um arquivo JSON para download
  const dataStr = JSON.stringify(initiatives, null, 2)
  const dataUri = "data:application/json;charset=utf-8," + encodeURIComponent(dataStr)

  const exportFileDefaultName = "iniciativas.json"

  const linkElement = document.createElement("a")
  linkElement.setAttribute("href", dataUri)
  linkElement.setAttribute("download", exportFileDefaultName)
  linkElement.click()
}

```svg file="logo-ncpi.svg"
<svg width="100" height="100" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M50 10C27.909 10 10 27.909 10 50C10 72.091 27.909 90 50 90C72.091 90 90 72.091 90 50C90 27.909 72.091 10 50 10Z" fill="#00A884"/>
<path d="M35 35V65H40V50L55 65H60V35H55V50L40 35H35Z" fill="white"/>
<path d="M65 35V65H70V35H65Z" fill="white"/>
</svg>

