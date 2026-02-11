let primeiroNumero = Number(prompt("Digite um numero"));
let segundoNumero = Number(prompt("Digite outro numero"));

let soma = primeiroNumero + segundoNumero;
let subtracao = primeiroNumero - segundoNumero;
let multiplicacao = primeiroNumero * segundoNumero;
let divisao = primeiroNumero / segundoNumero;

alert(`Soma: ${soma}
Subtração: ${subtracao}
Multiplicação: ${multiplicacao}
Divisão: ${divisao.toFixed(2)}`
);
