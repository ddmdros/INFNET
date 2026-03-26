let botao = document.querySelector("button");
let lista = document.querySelector("ul");
// console.log(botao);
// console.log(lista);

botao.addEventListener("click", function(){
    let novoItem = document.createElement("li");
    lista.appendChild(novoItem);

    let index = lista.childElementCount;
    novoItem.textContent = `Novo Item ${index}`;
    novoItem.id = `novoitem${index}`;

    if(index === 10){
        alert('Novo Item 10 criado');
    }
});

