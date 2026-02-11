let nome = prompt("Digite o país");
let continente = prompt("Digite o nome do continente em que o país informado está localizado");
let capital = prompt("Informe a capital do país");

function Pais(nome, continente, capital){
    this.nome = nome;
    this.continente = continente;
    this.capital = capital;
}

const pais1 = new Pais(nome, continente, capital);

console.log(pais1);
