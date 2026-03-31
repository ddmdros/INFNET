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

// sobrescrevi a mensagem também:

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

atualizarSaudacao();

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
            const novaFoto = e.target.result;
            fotoPerfil.src = novaFoto;
            
            // Requisitos do exercício
            fotoPerfil.alt = "Foto de perfil atualizada pelo usuário";
            fotoPerfil.setAttribute("title", "Usuário Verificado manualmente");
            fotoPerfil.style.borderColor = "#8bec7d";

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


// Easter Egg do Pato
function ativarEasterEggPato() {
    const linkPato = "https://img.freepik.com/vetores-gratis/pato-com-personagem-de-desenho-animado-de-cabeca-verde_1308-96950.jpg?semt=ais_hybrid&w=740&q=80";
    
    document.body.classList.add("duck-mode");

    fotoPerfil.src = linkPato;

    console.log("Easter egg ativado! 🦆");
    
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

function iniciarContagemRegressiva(duracaoEmSegundos, elemento) {
    let tempoRestante = duracaoEmSegundos;

    const intervalo = setInterval(function () {
        const horas = Math.floor(tempoRestante / 3600);
        const minutos = Math.floor((tempoRestante % 3600) / 60);
        const segundos = tempoRestante % 60;

        const hrsFormatadas = String(horas).padStart(2, '0');
        const minFormatados = String(minutos).padStart(2, '0');

            elemento.innerText = `Disponível em\n${hrsFormatadas}h ${minFormatados}m`;

        tempoRestante--;

        if (tempoRestante < 0) {
            clearInterval(intervalo);
            elemento.innerText = "Gerar Depoimento";r
            elemento.disabled = false;
            elemento.classList.remove("on-hold");
            elemento.style.cursor = "pointer";
        }
    }, 1000);
}

btnGerarDepoimento.addEventListener("click", function() {

    if(confirm("Quer gerar o depoimento de hoje? Lembre-se de que você só pode gerar um novo depoimento a cada 24 horas.\n(Ou atualize a página, ainda estamos em reforma :P )")){

            const indiceAleatorio = Math.floor(Math.random() * depoimentos.length);
            const depoimentoEscolhido = depoimentos[indiceAleatorio];
            containerDepoimentos.style.border = "1px solid #9fdeb6";
    
            containerDepoimentos.innerHTML = `
            <div class="item-depoimento">
        <p class="texto-item">"${depoimentoEscolhido.texto}"</p>
        <p class="autor-item"><strong>— ${depoimentoEscolhido.autor}</strong></p>
        </div>
        `;
            btnGerarDepoimento.classList.add("on-hold");
            btnGerarDepoimento.disabled = true;
            iniciarContagemRegressiva(86400, btnGerarDepoimento);

    }
       
// }

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

        let textoUltimaSkill = listaSkills.lastElementChild.textContent.trim().toLowerCase();
        if (textoUltimaSkill === "pato") {
            desativarEasterEggE_Restaurar();

            console.log("Easter Egg desativado! Foto restaurada.");
        }
        listaSkills.lastElementChild.remove();
    }

});

inputSkill.addEventListener("keydown", function (event) {

    if (event.key === "Enter") {
        event.preventDefault();
        btnAddSkill.click();
    }
});

// #endregion 8. SKILLS

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


// #region 13. TASK LIST
const inputTask = document.getElementById("input-task");
const btnInserirTask = document.getElementById("btn-inserir-task");
const containerTaskList = document.getElementsByClassName("active-task-list")[0];

inputTask.addEventListener("focus", function(){
    
});

btnInserirTask.addEventListener("click", function(){
    const novaTask = inputTask.value.trim();

    if(novaTask.length < 4){
        inputTask.style.borderColor = "var(--cor-secundaria)";
        alert("A descrição da tarefa deve conter pelo menos 4 caracteres");
    } else{
        inputTask.style.borderColor = "var(--cor-primaria)";

        containerTaskList.insertAdjacentHTML("beforeend", `<div class="task-element">
                            <p>${novaTask}</p>
                            <button class="btn-remove-task material-symbols-outlined">delete</button>
                        </div>`);

        inputTask.value = "";
    }

});

inputTask.addEventListener("keydown", function(event){

    if (event.key === "Enter") {
        event.preventDefault();
        btnInserirTask.click();
    }
});


containerTaskList.addEventListener("click", function(event){
    const botaoClicado = event.target.closest(".btn-remove-task");

    if(!botaoClicado){
        return;
    }

    const tarefaParaRemover = botaoClicado.closest(".task-element");

    if(tarefaParaRemover){
        tarefaParaRemover.remove();
    }
});


// #endregion

// #region 14. cadastro

// #region 14.1 logica toggle
const abas = document.querySelectorAll('.toggle-cadastro > div');
const conteudos = document.querySelectorAll('.tab-content');

abas.forEach(aba => {
    aba.addEventListener('click', () => {
        abas.forEach(a => a.classList.remove('active'));
        
        aba.classList.add('active');

        const alvoId = aba.getAttribute('data-target');

        conteudos.forEach(conteudo => {
            conteudo.classList.remove('active');
            if (conteudo.id === alvoId) {
                conteudo.classList.add('active');
            }
        });
    });
});
// #endregion


// #region 14.2 validacao pj

const formPJ = document.getElementById("form-cadastro-pj");
const inputNome = document.getElementById("pj-nome");
const inputData = document.getElementById("pj-data");
const inputEmail = document.getElementById("pj-email");
const selectAtuacao = document.getElementById("pj-atuacao");
const textareaDesc = document.getElementById("pj-descricao");

// funções de validação

function validarNomePJ(valor) {
    const nome = valor.trim();
    const palavras = nome.split(" ");
    const temSA = palavras.includes("SA");
    return nome.length >= 4 && temSA;

}

function validarDataPJ(valor) {
    if (!valor) return false;
    const dataDigitada = new Date(valor);
    const dataLimite = new Date("2000-01-01");
    return dataDigitada > dataLimite;
}

function validarEmailPJ(valor) {
    const arroba = valor.indexOf("@");
    const ponto = valor.lastIndexOf(".");
    return arroba > 0 && ponto > arroba + 1 && ponto < valor.length - 1;
}

function validarAtuacaoPJ(valor) {
    return valor !== "";
}

function validarDescricaoPJ(valor) {
    const texto = valor.trim();
    return texto.length > 0 && texto.length <= 50;
}

// feedback visual
function aplicarFeedback(input, spanId, eValido, forçarErro = false) {
    const span = document.getElementById(spanId);
    
    if (eValido) {
        if (input) input.classList.remove("campo-invalido"); 
        span.classList.remove("destaque-erro");
    } else if (forçarErro) {
        if (input) input.classList.add("campo-invalido");    
            span.classList.add("destaque-erro");
    }
}

// eventos de input
inputNome.addEventListener("input", () => aplicarFeedback(inputNome, "erro-pj-nome", validarNomePJ(inputNome.value)));
inputData.addEventListener("input", () => aplicarFeedback(inputData, "erro-pj-data", validarDataPJ(inputData.value)));
inputEmail.addEventListener("input", () => aplicarFeedback(inputEmail, "erro-pj-email", validarEmailPJ(inputEmail.value)));
selectAtuacao.addEventListener("change", () => aplicarFeedback(selectAtuacao, "erro-pj-atuacao", validarAtuacaoPJ(selectAtuacao.value)));
textareaDesc.addEventListener("input", () => aplicarFeedback(textareaDesc, "erro-pj-descricao", validarDescricaoPJ(textareaDesc.value)));

// evento de submit
formPJ.addEventListener("submit", (event) => {
    event.preventDefault();

    const nomeOk = validarNomePJ(inputNome.value);
    const dataOk = validarDataPJ(inputData.value);
    const emailOk = validarEmailPJ(inputEmail.value);
    const atuacaoOk = validarAtuacaoPJ(selectAtuacao.value);
    const descOk = validarDescricaoPJ(textareaDesc.value);

    aplicarFeedback(inputNome, "erro-pj-nome", nomeOk, true);
    aplicarFeedback(inputData, "erro-pj-data", dataOk, true);
    aplicarFeedback(inputEmail, "erro-pj-email", emailOk, true);
    aplicarFeedback(selectAtuacao, "erro-pj-atuacao", atuacaoOk, true);
    aplicarFeedback(textareaDesc, "erro-pj-descricao", descOk, true);

    if (nomeOk && dataOk && emailOk && atuacaoOk && descOk) {
        alert(`Empresa "${inputNome.value}" cadastrada`);
        formPJ.reset();
        
        document.querySelectorAll(".regras-negocio-labels-cadastro").forEach(span => {
            span.classList.remove("destaque-sucesso");
        });
    } else {
        console.log("Formulário contém erros. Corrija-os para prosseguir.");
    }
});
// #endregion

// #region 14.3 validacao pf

const formPF = document.getElementById("form-cadastro-pf");
const inputLogin = document.getElementById("pf-login");
const inputIdade = document.getElementById("pf-idade");
const selectGenero = document.getElementById("pf-genero");
const inputSenha = document.getElementById("pf-senha");
const inputConfirma = document.getElementById("pf-senha-confirma");
const checkboxesMusica = document.querySelectorAll('input[name="musica"]');

// funções de validação
const validarLoginPF = (v) => v.trim().length > 0 && v.trim().length <= 8;
const validarIdadePF = (v) => v !== "" && Number(v) > 12;
const validarGeneroPF = (v) => v !== "";
const validarMusicaPF = () => Array.from(checkboxesMusica).filter(c => c.checked).length >= 2;
const validarSenhaPF = (v) => v.length >= 4 && v.length <= 10;
const validarConfirmaPF = (v1, v2) => v1 === v2 && v1 !== "";

inputLogin.addEventListener("input", () => {
    if(validarLoginPF(inputLogin.value)) aplicarFeedback(inputLogin, "erro-pf-login", true);
});

checkboxesMusica.forEach(check => {
    check.addEventListener("change", () => {
        const spanMusica = document.getElementById("erro-pf-musica");
        if(validarMusicaPF()) spanMusica.classList.remove("destaque-erro");
    });
});


selectGenero.addEventListener("change", () => {
    if(validarGeneroPF(selectGenero.value)) aplicarFeedback(selectGenero, "erro-pf-genero", true);
});

inputSenha.addEventListener("input", () => {
    if(validarSenhaPF(inputSenha.value)) aplicarFeedback(inputSenha, "erro-pf-senha", true);
});

inputConfirma.addEventListener("input", () => {
    if(validarConfirmaPF(inputSenha.value, inputConfirma.value)) {
        aplicarFeedback(inputConfirma, "erro-pf-senha-confirma", true);
    }
});
inputIdade.addEventListener("input", () => {
    if(validarIdadePF(inputIdade.value)) aplicarFeedback(inputIdade, "erro-pf-idade", true);
});

// evento submit PF
formPF.addEventListener("submit", (e) => {
    e.preventDefault();

    const loginOk = validarLoginPF(inputLogin.value);
    const idadeOk = validarIdadePF(inputIdade.value);
    const generoOk = validarGeneroPF(selectGenero.value);
    const musicaOk = validarMusicaPF();
    const senhaOk = validarSenhaPF(inputSenha.value);
    const confirmaOk = validarConfirmaPF(inputSenha.value, inputConfirma.value);
    
    aplicarFeedback(inputLogin, "erro-pf-login", loginOk, true);
    aplicarFeedback(inputIdade, "erro-pf-idade", idadeOk, true);
    aplicarFeedback(selectGenero, "erro-pf-genero", generoOk, true);
    aplicarFeedback(inputSenha, "erro-pf-senha", senhaOk, true);
    aplicarFeedback(inputConfirma, "erro-pf-senha-confirma", confirmaOk, true);
    
    aplicarFeedback(null, "erro-pf-musica", musicaOk, true);

    if (loginOk && idadeOk && generoOk && musicaOk && senhaOk && confirmaOk) {
        alert("Desenvolvedor cadastrado com sucesso!");
        formPF.reset();

        const campos = [inputLogin, inputIdade, selectGenero, inputSenha, inputConfirma];
        campos.forEach(input => input.classList.remove("campo-invalido"));
        
        const spans = document.querySelectorAll("#conteudo-pf .regras-negocio-labels-cadastro");
        spans.forEach(span => span.classList.remove("destaque-erro"));
    }
});
// #endregion
// #endregion


// #region api
const formWA = document.getElementById("form-whatsapp");
const inputWATelefone = document.getElementById("wa-telefone");
const inputWAMensagem = document.getElementById("wa-mensagem");

// 1. Funções de Validação
const validarTelefone = (v) => {
    // Remove tudo que não é número e checa se tem entre 10 e 11 dígitos
    const numeros = v.replace(/\D/g, "");
    return numeros.length >= 10 && numeros.length <= 11;
};

const validarMensagem = (v) => v.trim().length > 0;

// 2. Eventos de Feedback (Seguindo o padrão "Clean")
inputWATelefone.addEventListener("input", () => {
    if(validarTelefone(inputWATelefone.value)) aplicarFeedback(inputWATelefone, "erro-wa-telefone", true);
});

inputWAMensagem.addEventListener("input", () => {
    if(validarMensagem(inputWAMensagem.value)) aplicarFeedback(inputWAMensagem, "erro-wa-mensagem", true);
});

// 3. Evento de Envio
formWA.addEventListener("submit", (e) => {
    e.preventDefault();

    const telOk = validarTelefone(inputWATelefone.value);
    const msgOk = validarMensagem(inputWAMensagem.value);

    aplicarFeedback(inputWATelefone, "erro-wa-telefone", telOk, true);
    aplicarFeedback(inputWAMensagem, "erro-wa-mensagem", msgOk, true);

    if (telOk && msgOk) {
        // LIMPEZA: Remove parênteses, espaços e traços
        const numeroLimpo = inputWATelefone.value.replace(/\D/g, "");
        
        // CODIFICAÇÃO: Transforma o texto para o formato de URL (ex: espaços viram %20)
        const mensagemCodificada = encodeURIComponent(inputWAMensagem.value);

        // MONTAGEM: O link do WhatsApp (Adicionamos o 55 do Brasil por padrão)
        const urlFinal = `https://wa.me/55${numeroLimpo}?text=${mensagemCodificada}`;

        // AÇÃO: Abre em nova aba
        window.open(urlFinal, "_blank");
        
        formWA.reset();
        // Limpa bordas de erro se houver
        [inputWATelefone, inputWAMensagem].forEach(el => el.classList.remove("campo-invalido"));
    }
});
// #endregion
// #region outros

//  botão reduzir nav
const btnReduzir = document.getElementById("btn-reduzir-nav");
const appContainer = document.querySelector(".app-container");

btnReduzir.addEventListener("click", function () {
    appContainer.classList.toggle("reduzido");
});


// #endregion
