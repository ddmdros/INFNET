//fç recursiva é uma fç que chama ela mesma
// function exemplo(n){
//     if(condicaoDeParada){
//         return resultado;
//     }

//     return exemplo(n-1); // chamada recursiva
// }

//fatorial
// caso base: n === 0 || n === 1

// function fatorial(n){
//     if(n === 0 || n === 1){
//         return 1;
//     }

//     return n * fatorial(n-1);
// }

// console.log(fatorial(5));

// function somaRecursiva(n){
//     if(n === 0 || n === 1){
//         return 0;
//     }else if( n === 1 ){
//         return 1;
//     }

//     return n + somaRecursiva(n - 1);
// }

// console.log(somaRecursiva(10));



//recursiva de fibonacci: (fib (n- 1)) + fib ((n-2))
//condicao de parada: ??


//includes

// let palavra = "Brasil";

// if(palavra.includes("l")){
//     console.log("tem l");
// }


//flat: reduz em (n) níveis
const arr1 = [0, 1 , 2, [3, 4]];
console.log(arr1.flat()); // >> [ 0, 1, 2, 3, 4 ]

const arr2 = [0, 1 , 2, [3, 4], [4, [5, 2, 3]]];
console.log(arr2.flat()); // >> [ 0, 1, 2, 3, 4, 4, [ 5, 2, 3 ] ]
console.log(arr2.flat(2));//  tira 2 níveis >> [0, 1, 2, 3, 4, 4, 5, 2, 3]
console.log(arr2.flat(Infinity)); // >> retira níveis recursivamente até acabar e ficar tudo flat

