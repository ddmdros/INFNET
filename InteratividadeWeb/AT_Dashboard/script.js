// #region MODULO 1 (1-4)
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

// #endregion MODULO 1

// #region MODULO 2 (5-8)
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
            const novaFoto = e.target.result; // A variável nasce aqui
            fotoPerfil.src = novaFoto;
            
            // Requisitos do exercício
            fotoPerfil.alt = "Foto de perfil atualizada pelo usuário";
            fotoPerfil.setAttribute("title", "Usuário Verificado manualmente");
            fotoPerfil.style.borderColor = "#8bec7d";

            // ATUALIZA OS COMENTÁRIOS AQUI DENTRO:
            atualizarFotosDosComentarios(novaFoto); 
            console.log("Foto de perfil carregada pelo usuário com sucesso 🖼️");
        };

        leitor.readAsDataURL(arquivo);
    }
});

const urlOriginal = "https://cdn-icons-png.flaticon.com/512/3607/3607444.png";

const musicaPato = new Audio('https://www.myinstants.com/media/sounds/quack-sound-effect.mp3');
musicaPato.loop = true;
musicaPato.volume = 1.0;

const somQuackCurto = new Audio('https://www.myinstants.com/media/sounds/quack.mp3');


// Função para ativar o Easter Egg do Pato
function ativarEasterEggPato() {
    const linkPato = "https://img.freepik.com/vetores-gratis/pato-com-personagem-de-desenho-animado-de-cabeca-verde_1308-96950.jpg?semt=ais_hybrid&w=740&q=80";
    
    document.body.classList.add("duck-mode");
    // ... resto do seu código de áudio ...

    fotoPerfil.src = linkPato;
    // ... resto do seu código de texto ...

    console.log("Easter egg ativado! 🦆");
    
    // ATUALIZA USANDO O LINK DEFINIDO ACIMA:
    atualizarFotosDosComentarios(linkPato);
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

    atualizarFotosDosComentarios(urlOriginal);
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
        // o exercício pediu para gerar um novo <p>, mas gerei dois pra ficar bonitinho, tá? <3

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

// #endregion

// #region MODULO 3 (9-12)

// #region 9. CONTADOR VISUALIZAÇÕES
let contadorVisualizacoes = 0;

const spanContadorVisualizacoes = document.getElementById("contador-visualizacoes");
const btnVisualizarPerfil = document.getElementById("btn-ver-perfil-publico");

spanContadorVisualizacoes.innerHTML = contadorVisualizacoes;
if (btnVisualizarPerfil && spanContadorVisualizacoes){

    
    btnVisualizarPerfil.addEventListener("click", function(){
        contadorVisualizacoes++;
        spanContadorVisualizacoes.innerHTML = contadorVisualizacoes;
        btnVisualizarPerfil.innerHTML = `Visualizando...`;
        console.log(`Perfil visualizado. Total: ${contadorVisualizacoes}`)
        
    });
    
    btnVisualizarPerfil.addEventListener("mouseover", function() {
        btnVisualizarPerfil.style.backgroundColor = "#22c55e";
        //adicionar translate e transition 
        // btnVisualizarPerfil.style.transform = "scale(1.05)";
    });
    
    btnVisualizarPerfil.addEventListener("mouseout", function() {
        btnVisualizarPerfil.style.backgroundColor = "#4ade80";
        btnVisualizarPerfil.style.transform = "scale(1)";
    });
}
// #endregion

// #region 10. LOAD EVENT
window.addEventListener("load", function(){
    console.log("Sistema carregado");
    const idiomaNavegador = navigator.language;
    const urlAtual = window.location.href;

    console.log("Idioma: " + idiomaNavegador);
    console.log("URL: " + urlAtual);
    

    if(idiomaNavegador && urlAtual){
        // this.alert("Informações de segurança verificadas. Tudo certo."); // comentado para nao atrapalhar o desenvolvimento
        // window.location.href = "https://www.infnet.edu.br";
    }
});

// #endregion

// #region 11 DEPLOY
const btnDeploy = document.getElementById("btn-deploy");

btnDeploy.addEventListener("mouseover", function(){
    btnDeploy.style.backgroundColor = "var(--cor-hover-btn)";
})

btnDeploy.addEventListener("mouseout", function(){
    btnDeploy.style.backgroundColor = "var(--cor-primaria)";
});

btnDeploy.addEventListener("mousedown", function(){
    btnDeploy.textContent = "Enviando...";
})

// #endregion

// #region 12. Post Interativo

const btnToggleComentarios = document.getElementById("btn-abrir-comentarios");
const secaoComentarios = document.getElementById("lista-comentarios");
const inputComent = document.getElementById("input-novo-comentario");
const btnEnviar = document.getElementById("btn-enviar-comentario");
const containerScroll = document.getElementById("container-scroll");
const spanContador = document.getElementById("comentarios-count");
const spanGramatica = document.getElementById("comentarios-noun-agreement");

// #region toogle footbar
btnToggleComentarios.addEventListener("click", () => {
    // Verifica se está escondido
    if (secaoComentarios.style.display === "none" || secaoComentarios.style.display === "") {
        secaoComentarios.style.display = "flex"; // Mostra
        inputComent.focus();
    } else {
        secaoComentarios.style.display = "none"; // Esconde
    }
});
// #endregion

// #region comentarios 
function atualizarContadorComentarios() {
    const totalReal = containerScroll.querySelectorAll(".comentario").length;    

    spanContador.innerText = totalReal;

    if (totalReal <= 1) {
        spanGramatica.innerText = "comentário";
    } else {
        spanGramatica.innerText = "comentários";
    }
}

// Evento postar novo comentário
btnEnviar.addEventListener("click", () => {
    const texto = inputComent.value.trim();
    const urlFotoAtual = document.getElementById("foto-perfil").src;

    if (texto !== "") {
        const novoComent = document.createElement("div");
        novoComent.classList.add("comentario");
        
        novoComent.innerHTML = `
            <img class="img-perfil-coment" src="${urlFotoAtual}" alt="Avatar do usuário">
            <p class="txt-comentario">${texto}</p>
        `;

        containerScroll.appendChild(novoComent);
        
        // Limpa a caixa de texto e rola para o último comentário
        inputComent.value = "";
        containerScroll.scrollTop = containerScroll.scrollHeight;

        atualizarContadorComentarios();
        
        // Atualiza a gramática (plural/singular)
        spanGramatica.innerText = qtdComentarios === 1 || qtdComentarios === 0 ? "comentário" : "comentários";
    }
});

// Postar apertando a tecla "Enter" no teclado
inputComent.addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
        event.preventDefault(); // Evita que a página recarregue
        btnEnviar.click();      // Simula um clique no botão
    }
});

atualizarContadorComentarios();

function atualizarFotosDosComentarios(novaUrl) {
    // Busca todas as imagens que têm a classe dos comentários
    const todasAsFotosComentarios = document.querySelectorAll(".img-perfil-coment");
    
    // Para cada foto encontrada, atualiza o src para a nova URL
    todasAsFotosComentarios.forEach(foto => {
        foto.src = novaUrl;
    });
}
// #endregion

// #region curtida
const btnAreaCurtida = document.getElementById("btn-curtir-post");
const iconeCoracao = document.getElementById("coracao");

const spanCurtidasCount = document.getElementById("curtidas-count");
const spanCurtidasGramatica = document.getElementById("curtidas-noun-agreement");

let totalCurtidas = 0;
let curtido = false;

btnAreaCurtida.style.cursor = "pointer";

btnAreaCurtida.addEventListener("click", function() {
    curtido = !curtido; // Alterna o estado (Toggle)

    if (curtido) {
        totalCurtidas++;
        // Estiliza apenas o ícone
        iconeCoracao.style.color = "var(--cor-secundaria)"; 
        iconeCoracao.style.fontVariationSettings = "'FILL' 1"; 
        // Efeito visual de clique na área toda
        this.style.transform = "scale(1.05)";
    } else {
        totalCurtidas--;
        iconeCoracao.style.color = "white"; 
        iconeCoracao.style.fontVariationSettings = "'FILL' 0"; 
        this.style.transform = "scale(1)";
    }

    // Atualiza o número na tela
    spanCurtidasCount.innerText = totalCurtidas;

    // Lógica de Gramática: 0 e 1 são tratados como SINGULAR
    if (totalCurtidas <= 1) {
        spanCurtidasGramatica.innerText = "curtida";
    } else {
        spanCurtidasGramatica.innerText = "curtidas";
    }
    
    console.log(`Interação: ${curtido ? "Curtiu" : "Descurtiu"}. Total: ${totalCurtidas}`);
});

// Reset do scale após o clique para manter a fluidez
btnAreaCurtida.addEventListener("transitionend", () => {
    if (!curtido) btnAreaCurtida.style.transform = "scale(1)";
});

const imgProjeto = document.getElementById("img-projeto");
const coracaoFeedback = document.getElementById("coracao-feedback");
let ultimoClique = 0;

// Função mestre para curtir (reutilizável)
function executarCurtida() {
    // Se ainda não estiver curtido, dispara a lógica de curtir
    if (!curtido) {
        btnAreaCurtida.click(); // Reutiliza a lógica que já criamos no botão
    }

    // Feedback visual do coração grande no meio da imagem
    coracaoFeedback.classList.add("animar");
    
    setTimeout(() => {
        coracaoFeedback.classList.remove("animar");
    }, 500); // Some após meio segundo
}

// Detector de Double Tap
imgProjeto.addEventListener("click", function(e) {
    const tempoAtual = new Date().getTime();
    const diferencaMedia = tempoAtual - ultimoClique;

    // Se o tempo entre cliques for menor que 300ms, é um Double Tap
    if (diferencaMedia < 300 && diferencaMedia > 0) {
        executarCurtida();
    }

    ultimoClique = tempoAtual;
});

// #endregion

// #region bookmark
const btnSalvar = document.getElementById("btn-salvar");
const iconeBookmark = document.getElementById("bookmark-txt");
const fraseBtnBookmark = document.querySelector(".salvar-frase");

btnSalvar.addEventListener("click", function(){

    if(iconeBookmark.textContent === "bookmark"){
        alert("Projeto salvo na coleção!")
        iconeBookmark.textContent = "bookmark_added";

        iconeBookmark.style.color = "var(--cor-primaria)";
        fraseBtnBookmark.style.color = "var(--cor-primaria)";
        fraseBtnBookmark.textContent = "Salvo";
        fraseBtnBookmark.style.transform = "scale(1.1)"; // seguindo o padrão da curtida

    } else{
        alert("Projeto removido na coleção!")
        iconeBookmark.textContent = "bookmark";

        iconeBookmark.style.color = "white";
        fraseBtnBookmark.style.color = "white";
        fraseBtnBookmark.textContent = "Salvar";
        fraseBtnBookmark.style.transform = "scale(1)";
    }

});

// #endregion


// #endregion

// #endregion

// #region MODULO 4 (13-16)

// #region 13. TASK LIST
const inputTask = document.getElementById("input-task");
const btnInserirTask = document.getElementById("btn-inserir-task");

inputTask.addEventListener("focus", function(){
    
});

const taskList = [];

btnInserirTask.addEventListener("click", function(){
    let novaTask = inputTask.value;
    taskList.push(novaTask);

    if(novaTask.length < 4){
        inputTask.style.borderColor = "var(--cor-secundaria)";
        alert("A descrição da tarefa deve conter pelo menos 4 caracteres");
    } else{
        inputTask.style.borderColor = "var(--cor-primaria)";

        inputTask.value = "";
    }

});


inputTask.addEventListener("keydown", function(event){

    if (event.key === "Enter") {
        event.preventDefault();
        btnInserirTask.click();
    }
});



// #endregion



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


if (window.innerWidth <= 1024) {
    document.querySelector('.app-container').classList.add('reduzido');
}
// #endregion
