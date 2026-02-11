let ladoUm = Number(prompt("Digite o primeiro lado do triangulo: "));
let ladoDois = Number(prompt("Digite o segundo lado do triangulo: "));
let ladoTres = Number(prompt("Digite terceiro lado do triangulo: "));

if ((ladoUm === ladoDois) && (ladoDois === ladoTres) && (ladoTres === ladoUm)) {
    alert("O triângulo é equilátero");
} else if ((ladoUm === ladoDois) ||(ladoDois === ladoTres) || (ladoTres === ladoUm)) {
    alert("O triângulo é isósceles");
} else {
    alert("O triângulo é escaleno!");
}
