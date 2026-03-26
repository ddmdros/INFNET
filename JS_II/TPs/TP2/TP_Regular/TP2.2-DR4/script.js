let algunsNumeros = [2, 5, 8, 10, 3];
let i = 0;

while (i < algunsNumeros.length) {
    let divisores = 0;

    //checar os todos os divisores do numero
    for (let j = 1; j <= algunsNumeros[i]; j++) {
        if (algunsNumeros[i] % j === 0) {
            divisores++;
        }
    }

    //verificar se é primo
    if (divisores !== 2) {
        //se for, remove do array
        algunsNumeros.splice(i, 1);
    } else {
        //se não for, incrementar o índice
        i++;
    }
}

console.log(algunsNumeros);