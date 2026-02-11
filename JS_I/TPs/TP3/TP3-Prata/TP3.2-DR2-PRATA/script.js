let num1 = Number(prompt("Digite o primeiro número"));
let num2 = Number(prompt("Digite o segundo número"));
let num3 = Number(prompt("Digite o terceiro número"));
let num4 = Number(prompt("Digite o quarto número"));
let num5 = Number(prompt("Digite o quinto número"));

let maior;
let menor;

if (isNaN(num1) || isNaN(num2) || isNaN(num3) || isNaN(num4) || isNaN(num5)){
    alert("Erro. Insira números válidos.");
} else{
    maior = Math.max(num1, num2, num3, num4, num5);
    menor = Math.min(num1, num2, num3, num4, num5);
    alert("Menor: " + menor + "\nMaior: " + maior);
}

