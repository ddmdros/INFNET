//os loops for são loops de repetição definidos

// for(let i = 10; i >= 0; i = i + 2){
//     document.write(i);
//     document.write("<br>");
// }


// somar 2 (i = i + 2)
// somar 1 (i++)
// diminuir 1 (i--)

//faça um algoritimo que conte de 1 a 100, e a cada múltiplo de 10, emita uma mensagem: multiplo de 10

// for(i = 1; i <= 100; i++){
//     if(i % 10 === 0){
//         console.log(i);
//     }
// }



// let idades = [];
// let soma = 0;
// let media = 0;

// for (let i = 0; i < 3; i++){
//     idades.push(Number(prompt("idade:")));
//     soma += idades[i];
// }

// for (let i = 0; i < idades.length; i++){
//     let resultado = "Pessoa " + (i+1) + " tem " + idades[i] + " anos";
//     document.writeln(resultado + "<br>");
// }

// media = soma/idades.length;

// alert(media);



// let altura = [];
// let genero = [];
// let somaAltura = 0;
// let somaAlturaMulheres = 0;
// let somaAlturaHomens = 0;
// let qtHomens = 0;
// let qtMulheres = 0;

// for (let i = 0; i < 5; i++){
//     altura.push(Number(prompt("Altura:")));
//     genero.push(prompt("Genero (m/f)").toLocaleLowerCase());
//     somaAltura += altura[i];

//     if(genero[i] === "m"){
//         qtHomens++;
//         somaAlturaHomens += altura[i];
//     }

//     if(genero[i] === "f"){
//         qtMulheres++;
//         somaAlturaMulheres += altura[i];
//     }
// }

// console.log("Maior altura do grupo: " + Math.max(...altura));
// console.log("Menor altura do grupo: " + Math.min(...altura));
// console.log("Média altura mulheres: " + somaAlturaMulheres/qtMulheres);
// console.log("Número homens: " + qtHomens);

//for in e for of

