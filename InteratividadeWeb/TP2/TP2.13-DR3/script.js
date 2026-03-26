let divModal = document.getElementById("modal");
divModal.classList.add("hide");

let botao = document.querySelector("button");
botao.addEventListener("click", function(){
    divModal.classList.remove("hide");
})

let botaoFechar = document.getElementById("close");
botaoFechar.addEventListener("click", function(){
    divModal.classList.add("hide");
})