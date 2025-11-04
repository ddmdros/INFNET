let numeroInicio = Math.floor(Number(prompt("Insira um número inteiro")));
let numeroFim =  Math.floor(Number(prompt("Insira outro número inteiro")));

let numeroAleatorio = Math.floor(Math.random() * (numeroFim - numeroInicio + 1) + numeroInicio);

console.log(numeroAleatorio);