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
// let maiorIdade = 0;
// let menorIdade = 0;


// let menorSalario = 0;
// let generoMenorSalario;
// let idadeMenorSalario;

// do{
//     idade = Number(prompt("Digite a idade"));
//     salario = Number(prompt("Digite o salario"));
//     genero = prompt("Digite o genero: M, F, O");



//     if(genero == "f" || genero == "F"){
//         qtdMulheres++;
//     }

//     if(genero == "m" || genero == "M"){
//         qtdHomens++;
//     }

//     if(genero == "o" || genero == "o"){
//         qtdNB++;
//     }

//     if (idade > maiorIdade || menorIdade == 0 ){
//         maiorIdade = idade;
//     }


//     if(idade < menorIdade){
//         menorIdade = idade;
//     }

//     if(salario < menorSalario || qtd === 0){
//         menorSalario = salario;
//         generoMenorSalario = genero;
//         idadeMenorSalario = idade;
//     }

//     soma += salario;
//     qtd++;

// do{
//     resposta = prompt("Deseja continuar? (s ou n)");
// }while(resposta.toLowerCase != "s" && resposta != "n");
// }while(resposta.toLowerCase() !==  "n");

// media = soma / qtd;
// alert("Merdia salarial: " + media);
// alert("Qtd mulheres: " + qtdMulheres);
// alert("Maior idade: " + menorIdade);
// alert("Menor idade: " + menorIdade);
// alert("Idade pessoa com menor salario: " + idadeMenorSalario + "/nGenero pessoa menor salario: " + generoMenorSalario)



//break
// let i = 1;

// while (i <= 10){
//     if (i === 5){
//         break;
//     }
//     console.log(i);
//     i++;
// }

//break senha
// let senha = "";

// do{
//     senha = prompt("Digite a senha:");

//     if (senha === "1234"){
//         console.log("Acesso liberado");
//         break;
//     }

//     console.log("Senha incorreta");
// } while (true);

//Continue
// let i = 0;

// while (i < 10){
//     i++;
//     if (i === 5){
//         continue; // quando i for 5, ele pula oq ta pra baixo e volta no loop, vai printar: 1, 2, 3, 4, 6, 7, 8, 9, 10
//     }
//     console.log(i);
// }

// let num;

// do{
//     num = Number(prompt("Digite um numero entre 1 e 10"));

//     if(num < 1 || num > 10){
//         console.log("Numero invalido. Tente novamente");
//         continue;
//     }
//     console.log("Numero valido ", num);

// } while (num < 1 || num > 10);

//cuidado, bug abaixo
// let i = 0;

// while (i < 5) {
//     if(i === 2){
//         continue;
//     }

//     console.log(i);
//     i++;
// }

//exercicio em sala

let continuarImput;

do {
    let primeiroNumero = Number(prompt("Digite o primeiro numero"));
    let sinalOperacao = prompt("Digite a operação (+, -, * ou /");
    let segundoNumero = Number(prompt("Digite o segundo número"));
    let resultado;

    switch (sinalOperacao) {
        case "*":
            resultado = primeiroNumero * segundoNumero;
            break;
        case "/":
            if (segundoNumero !== 0) {
                resultado = primeiroNumero / segundoNumero;
            } else {
                alert("Operação inválida. Não é possível dividir por 0");
            }
            break;
        case "+":
            resultado = primeiroNumero + segundoNumero;
            break;
        case "-":
            resultado = primeiroNumero - segundoNumero;
            break;
        default:
            alert("Opção inválida. Use apenas +, -, * ou /");
    }

    if (resultado !== undefined) {
        alert("Resultado: " + resultado);
    }

    do {
        continuarImput = prompt("Deseja continuar? (s/n)").toLocaleLowerCase();
    } while (
        continuarImput !== "s" && continuarImput !== "n"
    )

} while (continuarImput === "s");

// faca um programa que simule uma calculadora de 4 operacoes
// o programa deve ler os dois numeros, efetuar o calculo e exibir o resultado final

//o programa deve ser capaz de veriricar operacoes invalidas (divisao por zero), exibindo um alerta --- faça usando o switch

// apos o resultado de cada conta, pergunte se o usuario quer continuar calculando


