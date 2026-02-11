let precoAlcoolL = Number(prompt("Informe o preco do litro do álcool: "));
let precoGasolinaL = Number(prompt("Informe o preço do litro da gasolina:"));
let valorAbastecido = Number(prompt("Quantos reais você tem para abastecer?"));

let proporcao = precoAlcoolL / precoGasolinaL;

let isGasolinaVantajosa = proporcao >= 0.7;

isGasolinaVantajosa 
    ? alert("Use gasolina, você abastecerá " + (valorAbastecido/precoGasolinaL).toFixed(2) + " litros") 
    : alert("Use álcool, você abastecerá " + (valorAbastecido/precoAlcoolL).toFixed(2) + " litros");
