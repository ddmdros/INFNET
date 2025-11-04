let dinheiroQueRecebi = Number(prompt("Informe a quantidade de dinheiro para pagar o produto:"));
let valorDoProduto = Number(prompt("Informe o valor do produto:"));
let troco = dinheiroQueRecebi - valorDoProduto;


console.log("Troco exato: R$: " + troco);
console.log("Troco arredondado para cima: R$" + Math.ceil(troco));
console.log("Troco arredondado para baixo: R$" + Math.floor(troco));