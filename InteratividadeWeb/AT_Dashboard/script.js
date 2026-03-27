//MÓDULO 1: Estrutura de dados e navegação

//#region 1. OBJETO LITERAL (exercício 1)
const Freelancer = {
    nome: "Diogo Medeiros",
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

// #region 5. GESTÃO DE AVATAR (exercício 5)

// fiz um easter egg para cumprir esse requisito
// e permiti que o usuario de fato troque a foto

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
            
            // Requisitos do exercício
            fotoPerfil.alt = "Foto de perfil atualizada pelo usuário";
            fotoPerfil.setAttribute("title", "Usuário Verificado manualmente");
            fotoPerfil.style.borderColor = "#8bec7d";

            console.log("Foto de perfil carregada pelo usuário com sucesso 🖼️");
        };

        leitor.readAsDataURL(arquivo);
    } else {
        console.error("Erro: Selecione um arquivo de imagem válido (.jpg, .png, etc.)");
        alert("Por favor, selecione um arquivo de imagem válido.");
    }
});

const urlOriginal = "https://cdn-icons-png.flaticon.com/512/3607/3607444.png";

const musicaPato = new Audio('https://www.myinstants.com/media/sounds/quack-sound-effect.mp3');
musicaPato.loop = true;
musicaPato.volume = 1.0;

const somQuackCurto = new Audio('https://www.myinstants.com/media/sounds/quack.mp3');


// Função para ativar o Easter Egg do Pato
function ativarEasterEggPato() {
    document.body.classList.add("duck-mode");

    musicaPato.play();
    somQuackCurto.play();

    fotoPerfil.src = "https://img.freepik.com/vetores-gratis/pato-com-personagem-de-desenho-animado-de-cabeca-verde_1308-96950.jpg?semt=ais_hybrid&w=740&q=80";
    fotoPerfil.title = "Usuário Pato Verificado! 🦆";
    fotoPerfil.style.borderColor = "#f39c12";
    
    document.getElementById("mensagem-boas-vindas").innerText = "Quack-vindo,";
    document.querySelector(".user-name-text").innerText = "Pato de Medeiros";

    let audio = new Audio('https://www.myinstants.com/media/sounds/quack.mp3');
    audio.play();

    console.log("Easter egg ativado! 🦆");
}

function desativarEasterEggE_Restaurar() {

    document.body.classList.remove("duck-mode");

    musicaPato.pause();
    musicaPato.currentTime = 0;
    
    fotoPerfil.src = urlOriginal;
    fotoPerfil.title = "Diogo Medeiros";
    fotoPerfil.style.borderColor = "#8bec7d";

    document.getElementById("mensagem-boas-vindas").innerText = "Bem-vindo de volta,";
    document.querySelector(".user-name-text").innerText = "Diogo Medeiros";

    console.log("Easter Egg desativado! Foto restaurada.");
}

// #endregion

// #region 6. STATUS

const btnAlternarStatus = document.getElementById("btn-alternar-status");
const iconeStatus = document.getElementById("status-tag");
const textoStatus = document.getElementById("status-texto");


btnAlternarStatus.addEventListener("click", function () {
    if (iconeStatus.classList.contains("disponivel")) {
        iconeStatus.classList.remove("disponivel");
        iconeStatus.classList.add("ocupado");
        fotoPerfil.classList.add("ocupado");

        textoStatus.innerText = "Ocupado";
        textoStatus.style.color = "#ef4444";
    } else {
        iconeStatus.classList.remove("ocupado");
        iconeStatus.classList.add("disponivel");
        fotoPerfil.classList.remove("ocupado");

        textoStatus.innerText = "Disponível";
        textoStatus.style.color = "#4ade80";
    }
})


// #endregion 6.STATUS

// #region 7. DEPOIMENTOS


const depoimentos = [
    { texto: "Entrega excepcional e código muito bem estruturado.", autor: "Carla S., CEO" },
    { texto: "O melhor custo-benefício para projetos Fullstack.", autor: "Marcos T., DevHouse" },
    { texto: "Conseguiu traduzir nossa necessidade em uma interface linda.", autor: "Ana J., Designer" },
    { texto: "Sempre disponível e muito transparente no processo.", autor: "Ricardo F., Freelancer" },
];

const containerDepoimentos = document.getElementById("section-depoimentos");
const btnGerarDepoimento = document.getElementById("btn-gerar-depoimento");


btnGerarDepoimento.addEventListener("click", function() {
    
    if(containerDepoimentos.childElementCount > 0){
        alert("Depoimento do dia exibido. \nVolte amanhã para mais ou... Na verdade, só atualize a página.\nEstamos em fase de testes 😅");
        return;
    } else{
        
        const indiceAleatorio = Math.floor(Math.random() * depoimentos.length);
        const depoimentoEscolhido = depoimentos[indiceAleatorio];
        containerDepoimentos.style.border = "1px solid #9fdeb6";
        
        containerDepoimentos.innerHTML = `
        <div class="item-depoimento">
    <p class="texto-item">"${depoimentoEscolhido.texto}"</p>
    <p class="autor-item"><strong>— ${depoimentoEscolhido.autor}</strong></p>
    </div>
    `;
       
}

});
// #endregion 7. DEPOIMENTOS


// #region 8. SKILLS
const listaSkills = document.getElementById("lista-skills");
listaSkills.firstElementChild.textContent = "HTML5";
const inputSkill = document.getElementById("input-skills");
const btnAddSkill = document.getElementById("btn-inserir-skill");


btnAddSkill.addEventListener("click", function () {
    let valorInput = inputSkill.value.trim();
    if (valorInput !== "") {

        let novoItem = document.createElement("li");
        novoItem.textContent = inputSkill.value;

        listaSkills.appendChild(novoItem);

        // easter egg do pato (requisito exercício 5)
        if (valorInput.toLowerCase() === "pato") {
            ativarEasterEggPato();
        }

        inputSkill.value = "";
        inputSkill.focus();
    }
});

const btnRemoverUltimaSkill = document.getElementById("btn-remover-ultima-skill");
btnRemoverUltimaSkill.addEventListener("click", function () {
    
    if (listaSkills.lastElementChild) {

        // remove easter egg do pato quando remove a palavra-chave
        let textoUltimaSkill = listaSkills.lastElementChild.textContent.trim().toLowerCase();
        if (textoUltimaSkill === "pato") {
            desativarEasterEggE_Restaurar();

            console.log("Easter Egg desativado! Foto restaurada.");
        }
        listaSkills.lastElementChild.remove();
    }

});

// Forço o JS "clicar" no botão se o usuario usar o enter para melhorar a experiencia
inputSkill.addEventListener("keydown", function (event) {

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

btnReduzir.addEventListener("click", function () {
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
// #endregion
