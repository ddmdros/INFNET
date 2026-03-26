//MÓDULO 1: Estrutura de dados e navegação

//#region 1. OBJETO LITERAL
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
//#region 2. FUNÇÃO CONSTRUTORA

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

//#endregion
//#region 3. SELETORES CABEÇALHO

let tituloPainel = document.getElementById("titulo-painel");
tituloPainel.innerText = "Painel de Controle Avançado";

let descricaoHeader = document.querySelector(".descricao-header");
descricaoHeader.style.backgroundColor = "lightgray";
// coloquei o lightgray que o AT pediu e logo sobrescrevi com uma cor que faz sentido, ok?
descricaoHeader.style.backgroundColor = "#121212";

let primeiroP = document.querySelector("p");
primeiroP.innerText += "Bem-vindo ao sistema";
//#endregion

//#region 4. SIDEBAR
let itemQualquerSidebar = document.querySelector("#menu-lista li");
let listaSidebar = itemQualquerSidebar.parentNode;
let primeiroElementoSidebar = listaSidebar.firstElementChild;
let ultimoElementoSidebar = listaSidebar.lastElementChild;

let configSideBarITEM = document.createElement("li");
let configLinkSidebar = document.createElement("a");
configLinkSidebar.setAttribute("href", "#");
configLinkSidebar.textContent = "Configurações";

configSideBarITEM.appendChild(configLinkSidebar);
listaSidebar.appendChild(configSideBarITEM);

//#region 4.1 [extra] ACTIVE LINK

const menuLista = document.getElementById("menu-lista");

menuLista.addEventListener("click", function (event) {
    const clicado = event.target;

    if (clicado.tagName === "A") {
        const linkAtivoAtual = menuLista.querySelector(".active-link");
        if (linkAtivoAtual) {
            linkAtivoAtual.classList.remove("active-link");
        }
        clicado.classList.add("active-link");
    }
});
//#endregion
//#endregion

//MÓDULO 2: Painel visual

//#region 5. GESTÃO DE AVATAR


// prof, em vez de simular, realmente permiti que o usuario troque a foto
// todos os requisitos (alterar o atributo src, alt e title) foram implementados diretamente na função do eventListener
const fotoPerfil = document.getElementById("foto-perfil");
const inputUpload = document.getElementById("input-upload-avatar");

fotoPerfil.addEventListener("click", function () {
    inputUpload.click();
});

inputUpload.addEventListener("change", function (event) {
    const arquivo = event.target.files[0];

    if (arquivo && arquivo.type.startsWith("image/")) {
        const leitor = new FileReader();

        leitor.onload = function (e) {
            fotoPerfil.src = e.target.result;
            // requisitos do exercício abaixo
            fotoPerfil.alt = "Foto de perfil atualizada pelo usuário";
            fotoPerfil.setAttribute("title", "Usuário Verificado");

            console.log("Foto de perfil carregada pelo usuário com sucesso");
        };

        leitor.readAsDataURL(arquivo);
    } else {
        console.error("Selecione um arquivo de imagem válido");
        alert("Selecione um arquivo de imagem válido");
    }
});
//#endregion

//#region 6. STATUS DE DISPONIBILIDADE

const indicadorStatus = document.getElementById("indicador-status");
const btnStatus = document.getElementById("btn-status");

indicadorStatus.classList.add("disponivel");
indicadorStatus.classList.remove("status-box");

btnStatus.addEventListener("click", function () {
    indicadorStatus.classList.toggle("disponivel");
    indicadorStatus.classList.toggle("ocupado");

    console.log("Status do Freelancer alterado.");
});

//#endregion

// #region 7. MURAL DE DEPOIMENTOS

const depoimentos = [
    { texto: "Entrega excepcional e código muito bem estruturado.", autor: "Carla S., CEO" },
    { texto: "O melhor custo-benefício para projetos Fullstack.", autor: "Marcos T., DevHouse" },
    { texto: "Conseguiu traduzir nossa necessidade em uma interface linda.", autor: "Ana J., Designer" },
    { texto: "Sempre disponível e muito transparente no processo.", autor: "Ricardo F., Freelancer" },
];

const containerLista = document.getElementById("lista-depoimentos");
const btnMural = document.getElementById("btn-nova-frase");
const avisoLimite = document.getElementById("aviso-limite");

let contador = 0;

function adicionarDepoimento() {

    if (depoimentos.length > 0) {

        //como eu não quero que as frases sejam repetidas, mas o exercício pediu aleatoriedade,
        // vou exibir aleatoriamente e remover da lista logo em segudia
        const indiceAleatorio = Math.floor(Math.random() * depoimentos.length);
        const itemRemovido = depoimentos.splice(indiceAleatorio, 1)[0];

        containerLista.insertAdjacentHTML('beforeend', `
            <div class="item-depoimento">
                <p class="texto-item">"${itemRemovido.texto}"</p>
                <p class="autor-item">— ${itemRemovido.autor}</p>
            </div>
        `);
    }

    if (depoimentos.length === 0) {
        btnMural.style.display = "none";
        if (avisoLimite) avisoLimite.style.display = "block";
    }
}

btnMural.addEventListener("click", adicionarDepoimento);

// #endregion

// #region 8. SKILLS
const listaSkills = document.getElementById("lista-skills");
listaSkills.firstElementChild.textContent = "Python";
console.log(listaSkills);

const btnRemoveSkill = document.getElementById("btn-remove-skill");
const btnAdicionaSkill = document.getElementById("btn-adiciona-skill");

btnRemoveSkill.addEventListener("click", function(){
    if(listaSkills.lenght > 0){
        listaSkills.lastElementChild.remove();
    }
});

const listaSkillsAleatorias = [
    "TypeScript", "React", "Next.js", "Vue.js", 
    "Angular", "Node.js", "Express", "NestJS",  
    "Django", "Flask", "Spring Boot", 
    ".NET Core", "Ruby on Rails", "PHP", "Laravel", "Go", 
    "Rust", "SQL Server", "PostgreSQL", "MySQL", "MongoDB", 
    "Redis", "GraphQL", "REST API", "Docker", "Kubernetes", 
    "AWS", "Azure", "Google Cloud", "Firebase", "Git", 
    "GitHub", "GitLab", "CI/CD", "Terraform", "Ansible", 
    "CSS3", "SASS", "Tailwind CSS", "Bootstrap", 
    "Figma", "UI/UX Design", "Unit Testing", "Jest", "Cypress"
];

console.log(listaSkillsAleatorias);
console.log(`Total de skills: ${listaSkillsAleatorias.length}`);
btnAdicionaSkill.addEventListener("click", function(){

});


// #endregion