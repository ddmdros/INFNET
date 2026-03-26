let body = document.body;
//body.innerHTML = "<div id='teste'>Conteúdo teste</div>";

let lista = document.querySelector("ul");
const itemNovo = document.createElement("li");
itemNovo.setAttribute("class", "texto");
itemNovo.textContent = "Açaí";

lista.appendChild(itemNovo);
//console.log(itemNovo);


const itemPequi = document.createElement("li");
itemPequi.innerText = "Arroz com Pequi";
lista.appendChild(itemPequi);

const divQualquer = document.createElement("div");
divQualquer.innerHTML = "<span>Texto qualquer da div com innerHTML dentro de um span</span>";

body.appendChild(divQualquer);

const itemLasanha = document.createElement("li");
itemLasanha.textContent = "Lasanha";
lista.appendChild(itemLasanha);
lista.insertBefore(itemLasanha,lista.firstElementChild);
itemNovo.remove();

const suco = document.createElement("li");
suco.textContent = "Suco";

//lista.replaceChild(suco, lista.firstChild.nextElementSibling.nextElementSibling);
//lista.replaceChild(suco, document.querySelectorAll("li")[2]);

const abacaxi = document.createElement("li");
abacaxi.textContent = "Abacaxi";
lista.prepend(abacaxi);


const table = document.querySelector("table");
table.innerHTML += "<tr><td>Diogo Medeiros 2</td><td>Desenvolvedor Web 2</td><td class='valor'>R$ 24.000,00</td><td class='valor'>R$ 288.000,00</td></tr>";

console.log(table.lastElementChild.lastElementChild);
const itemTabela = table.lastElementChild.lastElementChild;
const itemClone = itemTabela.cloneNode(true);
itemClone.firstElementChild.textContent = "Diogo Medeiros 3"
itemClone.firstElementChild.nextElementSibling.textContent = "Desenvolvedor Web 3";
itemClone.querySelectorAll("td")[2].textContent = "R$ 28.000,00";
itemClone.lastElementChild.textContent = "R$ 336.000,00";

table.append(itemClone);