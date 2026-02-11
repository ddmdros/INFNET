let valorDaCompra = Number(prompt("Insira o valor da compra").replace(",","."));
let categoriaCliente = prompt("Digite o tipo de consumidor:\nA - Gestante\nB - Aposentado\nC - Pensionista");

let categoriaClienteNormalizada = categoriaCliente.trim().toUpperCase();

let percentualDesconto;

if ((valorDaCompra <= 0) || (isNaN(valorDaCompra))){ // pega numeros negativos, igual a zero e strings
    alert("O valor da compra deve ser maior que zero.");
    percentualDesconto = null;
} else if (valorDaCompra < 80){
    switch (categoriaClienteNormalizada){
        case "A": // gestante
            percentualDesconto = 0.15;
            break;
        case "B": // aposentado
            percentualDesconto = 0.1;
            break;
        case "C": // pensionista
            percentualDesconto = 0.05;
            break;
        default:
            alert("Erro: tipo de consumidor inválido");
            percentualDesconto = null;
    }
} else {
     switch (categoriaClienteNormalizada){
        case "A": // gestante
            percentualDesconto = 0.2;
            break;
        case "B": // aposentado
            percentualDesconto = 0.15;
            break;
        case "C": // pensionista
            percentualDesconto = 0.1;
            break;
        default:
            alert("Erro: tipo de consumidor inválido");
            percentualDesconto = null;
        }
    } 


    if (percentualDesconto != null){
        let valorDesconto = (valorDaCompra * percentualDesconto);
        let valorComDesconto = (valorDaCompra - valorDesconto);
        alert("Valor da compra: " + valorDaCompra.toFixed(2) + "\n" +
            "Desconto: " + valorDesconto.toFixed(2) + "\n" +
            "Valor com desconto: R$" + valorComDesconto.toFixed(2)
        )
    }
