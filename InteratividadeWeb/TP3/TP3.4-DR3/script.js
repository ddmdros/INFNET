const lista = document.getElementById("lista");

lista.addEventListener("mouseover", function(){
    alert("testando evento");
});

//o mouseover "bubles" para os filhos, ou seja,
//ativa sempre que passa de um para outro
//mouseenter tb funcionaria, já que peguei a lista,
// e os filhos tb são parte dela. É até mais amigável,
// mas mantive o over pq o exercicio pediu "na lista ou em qqt um dos descendentes"