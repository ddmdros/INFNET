//MÓDULO 1: Estrutura de dados e navegação

//#region 1. OBJETO LITERAL (exercício 1)
const Freelancer = {
    nome: "Diogo",
    stack: "fullstack",
    anosXP: 1,

    apresentar: function () {
        let mensagem = `Nome: ${this.nome}\n` +
            `Stack: ${this.stack}\n` +
            `Anos de experiência: ${this.anosXP}`
        console.log(mensagem);
    },

    ficarDisponivel: function () {
        console.log("O freelancer está disponível para trabalho!");

    }
}
//#endregion
//#region 2. FUNÇÃO CONSTRUTORA (exercício 2)

function Projeto(nome, valor, prazoISO) {
    this.nome = nome;
    this.valor = valor;
    this.prazo = new Date(prazoISO).toLocaleDateString("pt-BR");

    this.detalhes = function () {
        console.log(`Projeto: ${this.nome} | Valor: R$${this.valor} | Prazo: ${this.prazo} `);
    };
}

const ecommerce = new Projeto("E-commerce", 120000, "2026-04-30");
const landingPage = new Projeto("Landing Page", 1400, "2026-05-14");
const appMobile = new Projeto("App Mobile", 3500, "2026-05-20");

appMobile.detalhes();
// #endregion

// #region 3. MANIPULAÇÃO CABEÇALHO (Exercício 3)

let tituloPainel = document.getElementById("titulo-painel");
tituloPainel.innerText = "Painel de Controle Avançado";

let descricaoHeader = document.querySelector(".descricao-header");
descricaoHeader.style.backgroundColor = "lightgray";
// prof, cumpri a rubrica logo acima, mas vou sobrescrever para fazer
// sentido no layout, ok?
descricaoHeader.style.backgroundColor = "#1a1a1a";

let primeiroP = document.querySelector("p");
primeiroP.innerText += "Bem-vindo ao sistema"; 

// #endregion

// #region 4. SIDEBAR (exercício 4)

let itemQualquer = document.querySelectorAll("#menu-lista li")[1];
let listaMenu = itemQualquer.parentNode;

let primeiroItem = listaMenu.firstElementChild;
console.log("Primeiro item lista sidebar: " + primeiroItem.innerHTML);

let ultimoItem = listaMenu.lastElementChild;
console.log("ùltimo item lista sidebar: " + ultimoItem.innerHTML);

let novoItemLi = document.createElement("li");
novoItemLi.innerHTML = `
    <a href="#">
        <span class="material-symbols-outlined">settings</span>
        <span class="texto-link">Configurações</span>
    </a>
`;

listaMenu.appendChild(novoItemLi);
// #endregion

// #region 5. GESTÃO DE AVATAR (exercício 4)


// #endregion

// #region 6. STATUS

const btnAlternarStatus = document.getElementById("btn-alternar-status");
const iconeStatus = document.getElementById("status-tag");
const textoStatus = document.getElementById("status-texto");


btnAlternarStatus.addEventListener("click", function(){
    if(iconeStatus.classList.contains("disponivel")){
        iconeStatus.classList.remove("disponivel");
        iconeStatus.classList.add("ocupado");

        textoStatus.innerText = "Ocupado";
    } else{
        iconeStatus.classList.remove("ocupado");
        iconeStatus.classList.add("disponivel");
        
        textoStatus.innerText = "Disponível";
    }
})
// #endregion 6.STATUS

// #region 7. DEPOIMENTOS


// #endregion 7. DEPOIMENTOS


// #region 8. SKILLS
const listaSkills = document.getElementById("lista-skills");
listaSkills.firstElementChild.textContent = "HTML5";

const btnRemoverUltimaSkill = document.getElementById("btn-remover-ultima-skill");
btnRemoverUltimaSkill.addEventListener("click", function(){
    if(listaSkills.lastElementChild){

        listaSkills.lastElementChild.remove();
    }
    
});

const inputSkill = document.getElementById("input-skills");
const btnAddSkill = document.getElementById("btn-inserir-skill");


btnAddSkill.addEventListener("click", function(){
    if (inputSkill.value.trim() !== "") {
        
        let novoItem = document.createElement("li");
        novoItem.textContent = inputSkill.value;
        
        listaSkills.appendChild(novoItem);

        inputSkill.value = "";
        inputSkill.focus();
    }
});

// Forço o JS "clicar" no botão se o usuario usar o enter para melhorar a experiencia
inputSkill.addEventListener("keydown", function(event) {

    if (event.key === "Enter") {
        event.preventDefault();
        btnAddSkill.click();
    }
});

// #endregion 8. SKILLS
// #region Extras


    //  #region Botão reduzir nav
    const btnReduzir = document.getElementById("btn-reduzir-nav");
    const appContainer = document.querySelector(".app-container");

    btnReduzir.addEventListener("click", function() {
        // Alterna a classe que reduz o grid
        appContainer.classList.toggle("reduzido");
        
        // Troca o ícone da setinha
        if (appContainer.classList.contains("reduzido")) {
            btnReduzir.innerHTML = "&gt;"; // Seta para direita
        } else {
            btnReduzir.innerHTML = "&lt;"; // Seta para esquerda
        }
    });
    //#endregion
// #endregion

