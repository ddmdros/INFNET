// ******getElementById
let titulo = document.getElementById("titulo");
console.log(titulo);
titulo.innerHTML = "Novo Título";

let mensagem = document.getElementById("mensagem");
let botao = document.getElementById("botao");

botao.addEventListener("click", () => {
    mensagem.innerHTML = "Nova mensagem";
})

// ****getElementsByTagName
// selecionar e modificar a cor de fonte de multiplos paragrafos
let paragrafos = document.getElementsByTagName("p");
console.log(paragrafos);

for (let i = 0; i < paragrafos.length; i++) {
    paragrafos[i].style.color = "blue";
}

// Estilizar a cor de fundo de itens de lista
let itens = document.getElementsByTagName("li");
for (let i = 0; i < itens.length; i++) {
    itens[i].style.backgroundColor = "yellow";
}

// Seleção de elementos pela classe ->>> getElementsByClassName
// Cards com classe especifica
let cardsDestaque = document.getElementsByClassName("destaque");
// console.log(cardsDestaque);
for (let i = 0; i < cardsDestaque.length; i++) {
    cardsDestaque[i].style.border = "2px solid red";
}

// Mudar a cor de fundo com o clique de um botao
let cardsPromo = document.getElementsByClassName("promo");
console.log(cardsPromo);

let botaoCardsPromo = document.getElementById("promoButton");

botaoCardsPromo.addEventListener("click", () => {
    for (let i = 0; i < cardsPromo.length; i++) {
        cardsPromo[i].style.backgroundColor = "blue";
        cardsPromo[i].style.color = "white";

    }
})

//Seleção de elementos ->>>>> querySelector querySelectorAll
//Selecionar um paragrafo dentro do container por meio da classe
let paragrafoDentroContainer = document.querySelector(".container p");
console.log(paragrafoDentroContainer);
paragrafoDentroContainer.style.fontWeight = "bold";

// Aplicar desconto ao preço dos produtos
let precos = document.querySelectorAll(".preco");
console.log(precos);

precos.forEach(precos => {
    let valor = parseFloat( precos.textContent.replace("R$","").replace(",","."));
    valor = valor * 0.78;
    console.log(valor);
    precos.textContent = "R$" + (valor.toFixed(2).replace(".",","));
})
