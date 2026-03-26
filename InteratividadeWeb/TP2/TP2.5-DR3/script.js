let body = document.body;
let div = document.createElement("div");
let lista = document.createElement("ul");

body.appendChild(div);
div.appendChild(lista);


let banana = document.createElement("li");
let maca = document.createElement("li");
let abacaxi = document.createElement("li");
let pera = document.createElement("li");

banana.textContent = "banana";
maca.textContent = "maçã";
abacaxi.textContent = "abacaxi";
pera.textContent = "pera";

lista.appendChild(banana);
lista.appendChild(maca);
lista.appendChild(abacaxi);
lista.appendChild(pera);

// Mesma coisa, mas de forma dinâmica:
// const frutas = ["banana", "maçã", "abacaxi", "pera"];

// frutas.forEach(fruta => {
//     let li = document.createElement("li");
//     li.textContent = fruta;
//     lista.appendChild(li);
// })

lista.style.backgroundColor = "black";
lista.style.color = "white";
lista.style.fontFamily = "sans-serif";
lista.style.padding = "20px";
lista.style.listStyle = "none";

let elementosLista = lista.querySelectorAll("li");

elementosLista.forEach(item => {
    item.style.border = "1px solid white";
    item.style.textAlign = "center";
    item.style.padding = "10px";
})
