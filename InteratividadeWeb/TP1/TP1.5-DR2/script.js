let nomeColegio = prompt("Insira o nome do colégio");
let anoFundacao = prompt("Insira o ano de fundação");

const colegio = {
    nome: nomeColegio,
    anoFundacao: anoFundacao,
    nomeDiretor: "Reynaldo Lemos de Souza",
    numeroAlunos: 2456,
    telefone: "49999575757", //adicionei como string para evitar erros ao começar com 0, como (049999...)

    obterDiretor: function(){
        alert(this.nomeDiretor)
    }
}
colegio.obterDiretor();

//Também poderíamos adicionar as propriedades depois da criação
// colegio.nomeDiretor = "xxxx";
// colegio.obterDiretor = function() {alert(this.nomeDiretor);};