// 1. Alternar Menu Lateral
const btnReduzir = document.getElementById('btn-reduzir-nav');
const appContainer = document.querySelector('.app-container');

btnReduzir.addEventListener('click', () => {
    appContainer.classList.toggle('reduzido');
    btnReduzir.innerText = appContainer.classList.contains('reduzido') ? '>' : '<';
});

// 2. Lógica de Status (Disponível / Ocupado)
const btnStatus = document.getElementById('btn-alternar-status');
const statusTag = document.getElementById('status-tag');
const statusTexto = document.getElementById('status-texto');

btnStatus.addEventListener('click', () => {
    if (statusTexto.innerText === "Disponível") {
        statusTexto.innerText = "Ocupado";
        statusTexto.style.color = "#ef4444";
        statusTag.classList.add('ocupado');
    } else {
        statusTexto.innerText = "Disponível";
        statusTexto.style.color = "#4ade80";
        statusTag.classList.remove('ocupado');
    }
});

// 3. Gerenciamento de Skills
const btnInserir = document.getElementById('btn-inserir-skill');
const btnRemover = document.getElementById('btn-remover-ultima-skill');
const inputSkill = document.getElementById('input-skills');
const listaSkills = document.getElementById('lista-skills');

// Adicionar Skill
btnInserir.addEventListener('click', () => {
    const valor = inputSkill.value.trim();
    
    if (valor !== "") {
        const novoItem = document.createElement('li');
        novoItem.innerText = valor;
        listaSkills.appendChild(novoItem);
        inputSkill.value = ""; // Limpa o campo
        inputSkill.focus();
    } else {
        alert("Digite uma habilidade válida!");
    }
});

// Remover Última Skill
btnRemover.addEventListener('click', () => {
    const itens = listaSkills.querySelectorAll('li');
    if (itens.length > 0) {
        listaSkills.removeChild(itens[itens.length - 1]);
    } else {
        alert("Não há mais habilidades para remover!");
    }
});

// Adicionar com a tecla Enter
inputSkill.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        btnInserir.click();
    }
});


function atualizarSaudacao() {
    const saudacaoElemento = document.getElementById('mensagem-boas-vindas');
    const horaAtual = new Date().getHours();
    let saudacao = "";

    if (horaAtual >= 5 && horaAtual < 12) {
        saudacao = "Bom dia,";
    } else if (horaAtual >= 12 && horaAtual < 18) {
        saudacao = "Boa tarde,";
    } else {
        saudacao = "Boa noite,";
    }

    saudacaoElemento.textContent = saudacao;
}

// Chama a função assim que a página carrega
atualizarSaudacao();