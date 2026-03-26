const tabelaCorpo = document.getElementById("tabela-corpo");

function adicionarElementosLinha(){

    let novaLinha = document.createElement("tr");
    
    const dadosLivro = ["Great Expectations", "Charles Dickens", "EN", "4/5"];

    dadosLivro.forEach(t =>{
        const celula = document.createElement("td");
        celula.textContent = t;
        novaLinha.appendChild(celula);
    });

    tabelaCorpo.appendChild(novaLinha);
}

function excluirElementosLinha(){
    if(tabelaCorpo.childElementCount > 0){
        tabelaCorpo.firstElementChild.remove();
    }
    else{
        alert("Todas as linhas foram removidas");
    }
}