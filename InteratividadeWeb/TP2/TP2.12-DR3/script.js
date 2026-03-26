let botao = document.createElement("button");
let lista = document.getElementById("lista");
let body = document.body;

botao.textContent = "inserir";
body.append(botao);

botao.addEventListener("click", function(){
    let elementoLista = document.createElement("li");
    elementoLista.textContent = "nova entrada";
    lista.appendChild(elementoLista);
});