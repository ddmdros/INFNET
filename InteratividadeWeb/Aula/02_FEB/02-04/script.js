//let paragrafo = document.getElementById("texto");
//let paragrafo = document.getElementsByClassName("cor")[1];
//let paragrafo = document.getElementsByTagName("p")[0];
//let paragrafo = document.querySelector(".cor");
let paragrafo = document.querySelectorAll("p")[1];
//console.log(paragrafo);


//MUDANDO TEXTOS NO HTML
//let titulo = document.body.firstElementChild;
let titulo = document.querySelector("h1");
//titulo.textContent = "Meu novo título";
//titulo.innerText = "Outro Título";
titulo.innerHTML = "Mais um <em>título</em:"; // é uma forma pouco limpa de passar conteúdo

//MUDANDO ESTILIZAÇÃO

//Propriedade style (in-line)
titulo.style.color = "blue";
titulo.style.backgroundColor = "yellow";
titulo.style.border = "1px solid green";
//só altera uma propriedade por vez

console.log(titulo);

//setAttibute
//paragrafo.setAttribute("title", "título");

paragrafo.setAttribute("style", "background-color: lightblue; color: steelblue");
console.log(paragrafo);

paragrafo.style.textAlign = "center";

//paragrafo.setAttribute("style", "textAllign: center;");

let corP = document.querySelector(".cor");
corP.style.backgroundColor = "steelblue";

corP.setAttribute("id", "novoP");
//corP.setAttribute("class", "cor fonte");
console.log(corP);

corP.classList.add("fonte");
corP.classList.add("qualquer");
corP.classList.add("sublinhado");

//let outroP = querySelectorAll(".cor")[1];
let outroP = corP.nextElementSibling;
//let outroP = corP.nextSibling; //pega o próximo elemento, nesse caso </n>, nao é o que queremos
console.log(outroP);
outroP.classList.replace("fonte","sublinhado");




