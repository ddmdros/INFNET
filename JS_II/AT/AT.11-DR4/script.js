let frase = "toda ciência seria supérflua se houvesse coincidência imediata entre a aparência e a essência das coisas";

//método 1: quick and easy
let total = frase.toLowerCase().split("").filter(l => l === "a").length;
console.log(total);

//método 2: function
// let fraseSplit = frase.split("");

// function contarLetrasA(arrayDeletras){
//     let contador = 0;
//     arrayDeletras.forEach(function(letra){
//         if (letra.toLowerCase() === "a") {
//             contador++;
//         }
//     });
//         return contador;
// }

// let resultadoFinal = contarLetrasA(fraseSplit);
// console.log(resultadoFinal);