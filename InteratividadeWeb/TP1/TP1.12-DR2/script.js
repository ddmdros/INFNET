function Prefeito(nome, idade){
    this.nome = nome;
    this.idade = idade;
}

function Cidade(nome, anoFundacao, prefeito){
    this.nome = nome;
    this.anoFundacao = anoFundacao;
    this.prefeito = prefeito;
}

const nomeCidadeInput = prompt("Nome da cidade: ");
const anoFundacaoInput = Number(prompt("Ano de fundação da cidade: "));
const nomePrefeitoInput = prompt("Nome do prefeito: ");
const idadePrefeitoInput = Number(prompt("Idade do prefeito: "));

var prefeito1 = new Prefeito(nomePrefeitoInput,idadePrefeitoInput);
//console.log(prefeito1);
var cidade1 = new Cidade(nomeCidadeInput, anoFundacaoInput, prefeito1);
//console.log(cidade1);