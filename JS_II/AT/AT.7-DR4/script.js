function reaisParaCentavos(valorEmReal){
    
    // let valorEmCentavos = valorEmReal * 100;
    // >> essa função funcionaria, mas se testarmos 1.1, por exemplo
    // vai gerar um valor residual (110.00000000000001)
    // arredondando já na função evita isso:

    let valorEmCentavos = Math.round(valorEmReal * 100);
    
    return valorEmCentavos;
}

const resA = reaisParaCentavos(2.5); //R$ 2,50
console.log(resA); //Mostra o número 250 no console.


const resB = reaisParaCentavos(3); //R$ 3,00
console.log(resB); //Mostra o número 300 no console.

const resC = reaisParaCentavos(1.1); // R$ 1,10
console.log(resC); //Mostra o número 110 no console.