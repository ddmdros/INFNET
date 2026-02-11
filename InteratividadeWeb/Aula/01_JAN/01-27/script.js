//Notação ou sintaxe de objeto

//A convenção é assim:
const meuObjeto = {
    cidade: "Lages normal",

}

//Tem gente usando, mas parece nao ser recomendado
let outroObjeto = {
    cidade: "Lages tem gente usando",

}

//"pythonizando", como diz o professor. Pior de todos.
maisUmObjeto = {
    cidade: "Lages like a python",

}

console.log(meuObjeto.cidade);
console.log(outroObjeto.cidade);
console.log(maisUmObjeto.cidade);


const estudante = {
    nome: "Diogo",
    curso: "Engenharia de Software",
    idade: 29,
    cpf: "redacted",

    saudar: function () {
        alert("Olá! Eu sou um método do objeto estudante");
    },

    mensagem() {
        console.log("Bom dia, turma");
        //document.write("O estudante " + this.nome + " tirou DML em tudo");
    },

    graduacao: {
        gradNome: "Engenharia de Software",
        disciplina: "IPW"
    }
}

console.log("grad: " + estudante.graduacao.gradNome);

console.log(estudante.nome);

estudante.mensagem();
// estudante.saudar();

let prefeito = "Prefeito de Oliveira";
const cidade = "Florianópolis";
const numHabitantes = 587486;

const prefeitura = { prefeito, cidade, numHabitantes }
console.log(prefeitura.prefeito);

prefeito = "O prefeito mudou, fi";
console.log(prefeitura.prefeito);
console.log(prefeito);
prefeitura.prefeito = "Agora sim, mudamos o prefeito da pref";
console.log(prefeitura.prefeito);
console.log(prefeito);

prefeitura.novaProp = "Nova prop";
console.log(prefeitura);
//console.log(novaProp);
console.log(prefeitura.novaProp);

//remover prop
delete prefeitura.novaProp;
console.log(prefeitura);
console.log(prefeitura.novaProp);

function Pessoa(nome, idade) {
    this.nome = nome;
    this.idade = idade;

    this.mensagem = function () {
        return `Meu nome é ${this.nome} e tenho ${this.idade} anos`;
    }
}

let pessoa1 = new Pessoa("Roberto", 29);
let pessoa2 = new Pessoa("Bethania", 32);

console.log(pessoa1.mensagem());
//pessoa1.mensagem();