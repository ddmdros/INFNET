const botao = document.querySelector("#botao");

botao.addEventListener("click", function(){
    //alert("Clicou no botão");
    titulo.textContent = "Clique aqui";
    titulo.style.textDecoration = "underline";
    titulo.style.color = "blue";
    titulo.style.cursor = "pointer";
});

const titulo = document.querySelector("h1");
titulo.addEventListener("click", function(){
    titulo.innerHTML = "<p>Com base na imagem enviada, você ainda tem aproximadamente 121 horas de conteúdo para concluir. Como o prazo é até o fim de abril, restam cerca de 8 semanas e meia. Para manter uma carga horária equilibrada, a meta será de aproximadamente 14 a 15 horas por semana.</p>";
    titulo.style.fontSize = "24px";
    titulo.style.fontWeight = 400;
    titulo.style.textDecoration = "none";
    titulo.style.color = "black";
    titulo.style.cursor = "auto";
});

const paragrafo = document.querySelector("#meuParagrafo");
paragrafo.addEventListener("mousedown", function(){
    paragrafo.style.color = "steelblue";
});
paragrafo.addEventListener("mouseup", function(){
    paragrafo.style.color = "black";
});
