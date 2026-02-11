// // if e Math

// let x = Math.pow(2,2);
// let y = Math.pow(5,3);

// // console.log(x,y);

// let n1 = 7;
// let n2 = 3.5;

// let media = (n1+n2)/2;
// console.log(media);
// console.log(Math.round(media));
// console.log("Média arredondada para cima: " + Math.ceil(media));
// console.log("Média arredondada para baixo: " + Math.floor(media));

// let maior = Math.max(n1, n2, 99, 1.7);
// console.log("Maior: " + maior);
// let menor = Math.min(n1, n2, 99, 1.7);
// console.log("Menor: " + menor);


// let aleatorio = Math.floor((Math.random() * 6) + 1);


// console.log(aleatorio);



// let escolha = prompt("cara ou coroa?");


// let resultado = Math.ceil((Math.random() * 2));
// console.log(resultado);

// if (resultado === 1){
//     console.log("cara");
// } else{
//     console.log("coroa");
// }



// if((resultado === 1) && (escolha === "cara") )||((resultado===2)&&(escolha==="coroa")){
//     console.log("jogador venceu")
// } ifelse ((resultado === 1) && (escolha === "coroa") || (resultado === 2) && (escolha === "cara")){
//      console.log("jogador perdeu")
// }


// let altura = Number(prompt("Digite a sua altura em metro separado por ponto (Ex: 1.8):"));
// let sexo = prompt("Digite o seu sexo (masculino/feminino):").toLowerCase();
// let pesoIdeal;

// if(sexo === "masculino"){
//     pesoIdeal = ((72.7 * altura) - 58);
// } else if (sexo === "feminino"){
//     pesoIdeal = (62.1 * altura) - 44.7;
// } else{
//     alert("Erro inesperado. Tente novamente");
// }

// alert(("Seu peso ideal é: " + pesoIdeal.toFixed(2) + "kg"));


// regulamento: ate 50
// 4 reais multa por kg excedente
// leia o peso de peixes e verifique se ha excessos
// se n tem excesso, 

let pesoPeixe = Number(prompt("Insira o peso do peixe em kg"));
let pesoExcedente;
let multa;

if(pesoPeixe <= 0){
    alert("O peso deve ser maior que zero");
} else if ((pesoPeixe <= 50)){
    alert("Show, Zezinho! Não tem multa nesse peixe de " + pesoPeixe + "kg!");
} else if (pesoPeixe > 50){
    pesoExcedente = (pesoPeixe - 50);
    multa = pesoExcedente * 4;
    alert("Ih, Zezinho, esse daí é um peixão de " + pesoPeixe + "kg.\n" + 
        "Peso excedente: " + pesoExcedente + "\n" + 
        "Multa: R$" + multa);
} else{
    alert("Erro inesperado. Tente novamente");
}
