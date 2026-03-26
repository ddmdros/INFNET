let alturas = [];
let soma = 0;
let i = 0;

alturas.push(200, 140, 32, 25);

while (i < alturas.length){
    soma += alturas[i];
    i++;
}

// Podia ter feito a soma manualmente, 
// mas como estamos trabalhando com while
// e essa lista pode crescer,
// fiz um loop de incremento

console.log(soma);