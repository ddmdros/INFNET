// //Number
// var x = 35;
// var y = 18;
// var z = 3.14;
// var raio = 2.10;

// //Booleano
// var achou = false;
// var a = 14;
// var b = 42;
// var prim = (a == 14); // 
// var sec = (a == b);

// console.log(prim);
// console.log(sec);

// // = atribuicao
// // == comparacao (igual)

// //Undefined
// var marvin;
// console.log(marvin);

// var text = "";
// console.log(text);

// let nota_final = "snake_case"; // nao se usa muito
// //let nota-final = "kebab-case"; // nao se usa mais
// let NotaFinal = "PascalCase"; // so pode nome de classe
// let notaFinal = "camelCase" // este é o que vamos usar

// ///

// let x2 = 5/2;
// console.log(x2);

// let x3 = 233%60;
// console.log(x3);

// let a2 = 9;
// a2++;
// let b2 = a2;
// console.log(b2);

let totalDeMinutos = Number(prompt("Insira um valor em minutos"));

let horas = 0;
let minutos = 0;

horas = parseInt(totalDeMinutos/60);
console.log(horas);
minutos = totalDeMinutos % 60;
console.log(minutos);