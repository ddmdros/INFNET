let fibonacci = [];
let numCandidato = 1;

fibonacci.push(0, 1);

while(fibonacci[fibonacci.length - 1] < 55){
    let ultimo = fibonacci[fibonacci.length - 1];
    let penultimo = fibonacci[fibonacci.length - 2];

    if(numCandidato === ultimo + penultimo){
        fibonacci.push(numCandidato);
    }

    numCandidato++;
};

console.log(fibonacci);

// Esse primeiro código incrementa em 1 o numero teste e precisa
// verificar de 1 em 1. Se fossemos verificar 100000 numeros, seria 
// muito processamento desperdiçado.

// Dei uma pesquisada e encontrei uma adição recente (2022) ao JS, o .at
// .at(0) = pega o primeiro elemento
// .at(-1) = pega o último elemento
// .at(-2) = pega o penúltimo elemento

let fibonacciTunado = [];
fibonacciTunado.push(0,1);

while(fibonacciTunado.at(-1) < 55){
    let proximo = fibonacciTunado.at(-1) + fibonacciTunado.at(-2);
    fibonacciTunado.push(proximo);
}

console.log("Fibonacci tunado:" + fibonacciTunado);

// isso reduz bastante as verificações e produz o mesmo resultado
// também dava para fazer a versão tunada sem essa adição, usando lenght-1 etc
