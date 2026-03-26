const matriz = [
    [1, 2, 3],
    [2, 4, 6],
    [2, 3, -1],
];

let qtColunas = matriz.length;
let qtLinhas = [];

for (i = 0; i < matriz.length; i++) {
    let linhasColuna = matriz[i].length;
    let somaLinha = 0;

    qtLinhas.push(linhasColuna);

    for (j = 0; j < matriz[i].length; j++) {
        somaLinha += matriz[i][j];
    }
    console.log(`Soma vetores linha ${i + 1}: ${somaLinha}`);
}

const isTodasLinhasIguais = qtLinhas.every(tamanho => tamanho === qtLinhas[0]);

let isMatrizQuadrada = isTodasLinhasIguais && (qtLinhas[0] === qtColunas);

if (isMatrizQuadrada) {
    console.log("A matriz é quadrada");

    for (let j = 0; j < matriz[0].length; j++) {
        let multiplicacaoColuna = 1;

        for (let i = 0; i < matriz.length; i++) {
            multiplicacaoColuna *= matriz[i][j];
        }
        console.log(`Multiplicação vetores coluna ${j + 1}: ${multiplicacaoColuna}`);
    }

}

//s.o.c.o.r.r.o