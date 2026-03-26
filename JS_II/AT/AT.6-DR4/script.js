let numeros = [ 3, 1, 2, 5 ];
let novoVetor = [];

for(let i = 0; i < numeros.length; i++){

    novoVetor[i] = [];
    
    for(let j = 0; j < numeros[i]; j++){
        novoVetor[i].push(j);
    }

}

console.log(novoVetor);