
let botoes = document.querySelectorAll("button");
// acessamos o array de botões

function checaAprovacao(event){

    let botaoClicado = event.target; // pega apenas o índice atual (loop fora da fç)
    let tr = botaoClicado.closest("tr"); //pega a table row
    let notaElemento = tr.querySelector(".nota");
    let nota = Number(notaElemento.textContent);
    
    //valida
    if(nota >= 5){
        tr.classList.remove("vermelho");
        tr.classList.add("verde");
    } else{
        tr.classList.remove("verde");
        tr.classList.add("vermelho");
    }   

}

//loop para percorrer o array e rodar a fç
botoes.forEach(botao =>{
    botao.addEventListener("click", checaAprovacao);
})
