// function obterQtdCaracteres(frase){
//     let tam = frase.length;
//     return tam;
// }

// function exibitQtd(qtd){
//     alert(`A frase possui ${qtd} caracteres`);
// }

// let frase = prompt("Digite sua frase");
// let qtd = obterQtdCaracteres(frase);
// exibitQtd(qtd);

// function obterMaior(n1, n2){
//   let maior = n1;
//   if (n2 > n1){
//     maior = n2;
//   } 
//   return maior;
// if (n1 > n2){
//     return n1;
// }
//     return n2;
// }

// let n1 = Number(prompt("Digite N1"));
// let n2 = Number(prompt("Digite n2"));

// let maior = obterMaior(n1, n2);

// alert("O maior é " + maior);

// let obterMaior = function(n1, n2){
//     if(n1 > n2){
//         return n1;
//     }
//     return n2;
// }

// let maior = obterMaior(1,5);
// console.log(maior);

// class Pessoa{
//     constructor(nome, peso, altura){
//         this.nome = nome;
//         this.peso = peso;
//         this.altura = altura;
//         this.imc = 0;
//     }

//     obterIMC(){
//         this.imc = (this.peso/(this.altura * this.altura));
//     }
// }

// let diogo = new Pessoa("Diogo", 80, 1.80);
// diogo.obterIMC();
// console.log(diogo.imc.toFixed(2));

// function obterMedia(n1, n2, n3){
//     function obterSoma(n1, n2, n3){
//         return n1 + n2 + n3;
//     }
//     let soma = obterSoma(n1, n2, n3);
//     return soma/3;
// }

// let media = obterMedia(5, 10, 15);
// alert(media);

// // ARROW FUNCTION
// const sum = (a,b) => {
//     return a + b;
// }

// const sum2 = function(a,b){
//     return a + b;
// }

// const sum3 = (a, b) => a + b;

// let numeros = [1, 2, 3, 4];

// let triplicados = numeros.map(n => n * 3);
// console.log(triplicados);

// let pessoas = [{nome: "Diogo", idade: 30}, {nome: "Pietra", idade: 17}];
// let encontrado = pessoas.find(p => p.idade === 30);
// console.log(encontrado);
