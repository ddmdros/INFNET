//Como criar um numero
let numero = 75;
let numeroDecimal = 7.5;
let octal = 0o10;
let hexa = 0x10;
let binario = 0b10;

console.log(numero);
console.log(numeroDecimal);
console.log(octal);
console.log(hexa);
console.log(binario);


//Numeros positivos

let positivo = 5;
//Numeros negativos
let negativo = -5;
//Numeros decimais
let decimal = 7.5;
//Separador de milhar
let umBilhao = 1000000000.5;
console.log(umBilhao.toLocaleString());
let milhar = 1234;
console.log(milhar.toLocaleString());
//Utilizando o operador typeof
let num1 = 23;
let string1 = "23";
console.log(typeof num1);
console.log(typeof string1);

//Como converter uma string para numero
let string3 = "41";
console.log(typeof string3);
string3 = Number(string3);
console.log(typeof string3);