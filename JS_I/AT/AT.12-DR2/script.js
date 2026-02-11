let quantidadeDoces = Number(prompt("Informe a quantidade de doces"));

let caixasP = 0;
let caixasM = 0;
let caixasG = 0;

let docesAvulsos = quantidadeDoces;

if (quantidadeDoces >= 40){
    caixasG = parseInt(quantidadeDoces / 40);
    docesAvulsos %= 40;
}

if (docesAvulsos >= 30){
    caixasM = parseInt(docesAvulsos / 30);
    docesAvulsos %= 30;
}

if (docesAvulsos >= 20){
    caixasP = parseInt(docesAvulsos / 20);
    docesAvulsos %= 20;
}

let caixaExtra = false;

if (docesAvulsos > 0){
    caixasP++;
    caixaExtra = true;
}

let totalCaixas = caixasP + caixasM + caixasG;

alert(`
Total de caixas utilizadas: ${totalCaixas}

Caixas grandes: ${caixasG}
Caixas médias: ${caixasM}
Caixas pequenas: ${caixasP}

${caixaExtra ? "Foi necessária uma caixa adicional para os doces restantes." : "Não foi necessária caixa adicional."}
`);
