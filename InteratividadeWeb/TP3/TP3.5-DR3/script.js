const tabelaCorpo = document.getElementById("tabela-corpo");
const botao = document.getElementById("botao-inserir-linhas");


function adicionarElementos(){

    let novaLinha = document.createElement("tr");
    
    const dadosLivro = ["Great Expectations", "Charles Dickens", "EN", "4/5"];

    dadosLivro.forEach(t =>{
        const celula = document.createElement("td");
        celula.textContent = t;
        novaLinha.appendChild(celula);
    });

    tabelaCorpo.appendChild(novaLinha);
}
