let body = document.body;
let div = document.createElement("div");
let lista = document.createElement("ul");

body.appendChild(div);
div.appendChild(lista);

const frutas = ["banana", "maçã", "abacaxi", "pera"];

frutas.forEach(fruta => {
    let li = document.createElement("li");
    li.textContent = fruta;
    lista.appendChild(li);
})

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

let p1 = document.createElement("p");
let p2 = document.createElement("p");

p1.id = "primeiro";
p2.id = "segundo";

let h2 = document.createElement("h2");

p1.textContent = "primeiro paragrafo";
h2.textContent = "titulo h2";
p2.textContent = "segundo paragrado";

body.appendChild(p1);
body.appendChild(p2);

body.insertBefore(h2, p2);
