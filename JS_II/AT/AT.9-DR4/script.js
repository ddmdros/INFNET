function raizQuadradaDe(numA = 0){ 
    let resultado = Math.sqrt(Number(numA)).toFixed(2);
    alert(resultado);
    return resultado;
}

raizQuadradaDe(4); // >> 2.00
raizQuadradaDe("8");// >> 2.83
raizQuadradaDe(16);// >> 4.00

// Assim como no exercicio anterior,
// fiz o tratamento de string.
// Também usei toFixed(2) para números quebrados
// e fiz um return com o resultado
// caso a gente queira usar depois