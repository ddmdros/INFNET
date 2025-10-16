// Tipos primitivos
let string = "abc";
let inteiro = 23;
let decimal = 4.5;
let bigInt = 123456n;
let logico = false;
let simbolo = Symbol("aaa");
let indefinido = undefined;
let vazio = null;

//String
let nome = "Diogo";
let aspasSimples = 'Diogo';
let crase = `Diogo`;

let pergunta = "'Tudo bem?'";
let resposta = '"Tudo bem!"';
console.log(pergunta);
console.log(resposta);

//caracteres de escape
let eescape = "- \"Bom dia\"\n- \"Boa Tarde\"!";
console.log(eescape);

//tabulação (tipo tab)
let tabulacao = "a\tb\tc";
console.log(tabulacao);

//concatenacao de string
let mensagem1 = "Olá,";
let mensagem2 = " tudo bem?";
let mensagemComposta = mensagem1 + mensagem2;
console.log(mensagemComposta);

//operador typeof
console.log(typeof("ab"));
console.log(typeof(2));
console.log(typeof(mensagemComposta));

//retorno de funcao prompt sempre volta em String
//let retorno = prompt("Digite algo: ");
//console.log(typeof(retorno));

//para converter:
//retorno = Number(retorno);

//atributo lenght de uma string
let s = "";
console.log(s.length);

