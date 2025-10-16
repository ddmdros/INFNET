//Operador de potenciação
let numero = 2;
let quadrado = numero ** 2;
console.log(quadrado);
let cubo = numero ** 3;
console.log(cubo);

//Operador de resto
let divisao = 3 / 2;
console.log(divisao);
let restoDivisao = 3 % 2;
console.log(restoDivisao);

//Ordem de precedencia
let ordem = "potencia > multiplicacao > divisao > soma"
let expressao = 3 * 2 + 1 ** 3;
let expressao2 = ((1 ** 3) + (3 * 2));
console.log(expressao);
console.log(expressao2);

//Converter strings e numeros em um calculo
let numero2 = Number("12");
console.log(typeof numero2);

//Interações entre strings e numeros em um calculo
let numero3 = 2;
let str = "3";
console.log(numero3 + str); // cuidado com isso
console.log(numero3 - str);
console.log(numero3 * str);

//Como calcular numeros recebidos via prompt
let numero4 = prompt("Digite um número: ");
console.log(numero4); // <- aqui ainda é string
let numero4_str = Number(numero4);
console.log(numero4_str); // <- aqui já é number