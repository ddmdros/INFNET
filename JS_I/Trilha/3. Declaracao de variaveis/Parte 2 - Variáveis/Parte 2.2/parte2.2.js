//Como criar uma variável
let nome = "Diogo";
let salario = 2000.50;

//Como modificar uma variável let
nome = "José";
salario = 2500.6;

nome = 10; // pode mudar de String pra Num
nome = "10"; // q loucura, mas tb pode

//Como criar uma variavel const
//geralmente em SCREAMING_CASE

const PI = 3.67;
const SALARIO_MAXIMO = 10000;

//Quando utilizar let e const

//const sempre pra valores imutáveis
const TOTAL_DIAS_ANO = 365;
let diaAtual = 25;
const FERIAS_MAXIMO = 30;
let ferias_cedidas = 15;

//var -- nunca usar

var idade = 40;
//como criar uma variavel com var
idade = 30;

//como modificar uma variavel var
var teste = "Fora do bloco";

{
    var teste = "Dentro do bloco";
}

console.log(teste);

