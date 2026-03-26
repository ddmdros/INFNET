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

let galeria = document.createElement("section");
galeria.id = "galeria";
body.appendChild(galeria);

galeria.style.display = "flex";
galeria.style.flexDirection = "column";

let tagIMG = document.createElement("img");
let tagIMG2 = document.createElement("img");
let tagIMG3 = document.createElement("img");

tagIMG.src = "https://images.unsplash.com/photo-1587132137056-bfbf0166836e?q=80&w=1160&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
tagIMG2.src = "https://plus.unsplash.com/premium_photo-1724249990837-f6dfcb7f3eaa?q=80&w=774&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
tagIMG3.src = "https://plus.unsplash.com/premium_photo-1724255994628-dceb76a829e8?q=80&w=774&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

galeria.appendChild(tagIMG);
galeria.appendChild(tagIMG2);
galeria.appendChild(tagIMG3);

lista.firstElementChild.remove();
p1.remove();
