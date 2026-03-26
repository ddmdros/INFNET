let numeros1 = [12, 7, 3, 4, 11];
let numeros2 = [3, 9, 1, 5, 12];
let numeros3 = [...numeros1, ...numeros2];
let soma = 0;

for(let i = 0; i < numeros3.length; i++){
    soma += numeros3[i];
}

console.log(soma);