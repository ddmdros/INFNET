let numeroCentro = Number(prompt("Digite um número inteiro:"));
let distancia = Number(prompt("Digite um segundo número inteiro:"));

let min = numeroCentro - distancia;
let max = numeroCentro + distancia;

let numeroAleatorio = Math.floor(Math.random() * (max - min + 1)) + min;

console.log(numeroAleatorio);
