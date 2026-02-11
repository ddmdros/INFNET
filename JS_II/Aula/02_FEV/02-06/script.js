//Repetições indefinidas: while // do while

// while

//let j = 1;

// while (j <= 10){
//     j++;
//     console.log(j);
// }

//do while

// let i = 21;

// do{
//     console.log(i);
//     i++;
// }while(i <= 10);

//Exercicio: Faça um programa que pergunte ao usuário o seu peso e altura e calcule e 
// mostre o IMC. A condição de parada é se a entrada do peso do usuário for 
// 0.

// let peso = 0;
// let altura = 0;
// let imc = 0;

// do {
//     peso = Number(prompt("Qual o seu peso? (Digite 0 para sair)"));
//     if(peso != 0){
//         altura = Number(prompt("Qual a sua altura?"));
//         imc = peso / (altura ** 2);
//         console.log("IMC: " + imc.toFixed(2));
//     }

// }while(peso !== 0) alert("Operação cancelada pelo usuário.");



//Exercicio 2
// let num = 0;
// let maior = 0;

// do{
//     num = Number(prompt("Digite um numero ou 0 para sair"));
//     if(num == 0){
//         break;
//     }
//     if (num > maior){
//         maior = num;
//     }
//     alert(maior);
// }while(num != 0);


// //Exercicio 3
// let idade;
// let genero;
// let salario;
// let habitantes;
// let resposta;
// let media;
// let soma = 0;
// let qtd = 0;
// let qtdMulheres = 0;
// let qtdHomens = 0;
// let qtdNB;

// do{
//     idade = Number(prompt("Digite a idade"));
//     salario = Number(prompt("Digite o salario"));
//     genero = prompt("Digite o genero: M, F, O");

//     soma += salario;
//     qtd++;

//     if(genero == "f" || genero == "F"){
//         qtdMulheres++;
//     }

//     if(genero == "m" || genero == "M"){
//         qtdHomens++;
//     }

//     if(genero == "o" || genero == "o"){
//         qtdNB++;
//     }


// do{
//     resposta = prompt("Deseja continuar? (s ou n)");
// }while(resposta.toLowerCase != "s" && resposta != "n");
// }while(resposta.toLowerCase() !==  "n");

// media = soma / qtd;
// alert("Merdia salarial: " + media);
// alert("Qtd mulheres: " + qtdMulheres);