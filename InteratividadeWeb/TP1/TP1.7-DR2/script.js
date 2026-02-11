function Endereco(rua, bairro, cidade){
    this.rua = rua;
    this.bairro = bairro;
    this.cidade = cidade;
}

function Escola(numeroAlunos, nomeDiretor, anoFundacao, endereco){
    this.numeroAlunos = numeroAlunos;
    this.nomeDiretor = nomeDiretor;
    this.anoFundacao = anoFundacao;
    this.endereco = endereco;
}

let ruaUsuario = prompt("Digite o nome da rua");
let bairroUsuario = prompt("Digite o nome do bairro");
let cidadeUsuario = prompt("Digite o nome da cidade");

let numeroAlunosUsuario = prompt("Digite o número de alunos");
let nomeDiretorUsuario = prompt("Digite o nome do diretor");
let anoFundacaoUsuario = prompt("Digite o ano de fundação");

const endereco1 = new Endereco(ruaUsuario, bairroUsuario, cidadeUsuario);
const escola1 = new Escola(numeroAlunosUsuario, nomeDiretorUsuario, anoFundacaoUsuario, endereco1);

console.log(escola1);