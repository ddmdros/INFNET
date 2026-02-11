let primeiroValor = Number(prompt("Insira o primeiro valor inteiro: "));
let segundoValor = Number(prompt("Insira o segundo valor inteiro: "));
let terceiroValor = Number(prompt("Insira o terceiro valor inteiro: "));

let valorMaximo = Math.max(primeiroValor, segundoValor, terceiroValor);
let valorMinimo = Math.min(primeiroValor, segundoValor, terceiroValor);

alert("Valor máximo: " + valorMaximo + "\n" +
    "Valor mínimo: " + valorMinimo
);
