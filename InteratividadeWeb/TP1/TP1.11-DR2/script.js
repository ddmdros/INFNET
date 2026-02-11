let card = document.getElementById("card");
console.log(card);

card.setAttribute("style", "background-color: yellow; border: 4px solid red; height: 150px;");

// como não temos nenhuma propriedade de estilo, coloquei tudo de uma vez com o setAttribute.
// se não quiséssemos perder informações, poderíamos usar a propriedade style:
// card.style.backgroundColor = "yellow";
// card.style.border = "4px solid red";
// card.style.height = "150px";
