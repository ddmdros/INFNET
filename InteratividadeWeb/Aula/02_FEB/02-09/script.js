let botao = document.querySelector(".bt_tema");
let botaoImagem = document.querySelector("#img");


///diferentes formas de chamar funcao

//essa primeira tem que add "onclick = "function()"" dentro do botão no html como prop
// botao.onclick = function(){
//     alert("fui clicado");
// }


//funcao
// function alterarTema(){
//     alert("Fui clicado");
// }

//outro jeito
// botao.addEventListener("click", function(){
//     alert("outro jeito");
// });


botao.addEventListener("click", function() {
    document.body.classList.toggle("dark");

    if(document.body.classList.contains("dark")){
        botao.textContent = "Modo claro";
    } else{
        botao.textContent = "Modo escuro";
    }
});

botaoImagem.addEventListener("click", function() {
    document.querySelector("img").classList.toggle("hide");
        if(document.querySelector("img").classList.contains("hide")){
            document.querySelector("img").style.border = "3px solid red";

        } else{
            document.querySelector("img").style.borderRadius = "12px";
            document.querySelector("img").style.border = "3px solid blue";

        }
})


//classList: add, remove, replace, toggle, contains

function trocaTitle(){
    document.querySelector("img").setAttribute("title", "novo title");
}


let paragrafo = document.querySelector("p");
paragrafo.addEventListener("click", trocaTexto);
document.querySelector("h1").className = "texto";
botaoImagem.className = "bt_tema";

function trocaTexto() {
    paragrafo.textContent = "Events are fired to notify code of interesting changes that may affect code execution. These can arise from user interactions such as using a mouse or resizing a window, changes in the state of the underlying environment (e.g., low battery or media events from the operating system), and other causes.";
}
