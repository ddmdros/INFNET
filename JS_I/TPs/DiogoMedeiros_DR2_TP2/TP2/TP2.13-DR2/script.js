let valorDaCompra = Number(prompt("Digite o valor da compra:"));
let formaDePagamento = Number(prompt("Qual a forma de pagamento? Digite 1 para À Vista e 2 para Prazo"));
let tipoAVista;
let numeroParcelas;

if (formaDePagamento === 1) {
    tipoAVista = Number(prompt("Digite 1 para Dinheiro, 2 para Débito e 3 para Crédito"));
    if (tipoAVista === 1) {
        alert("Operação escolhida: À vista no Dinheiro com 10% de desconto\nValor da compra: " + valorDaCompra + "\nValor total: " + valorDaCompra * 0.9);
    } else if (tipoAVista === 2) {
        alert("Operação escolhida: À vista no Débito com 8% de desconto\nValor da compra: "+ valorDaCompra + "\nValor total: " + valorDaCompra * 0.92);
    } else {
        alert("Operação escolhida: À vista no Crédito com 5% de desconto\nValor da compra: " + valorDaCompra + "\nValor total: " + valorDaCompra * 0.95);
    }

} else if (formaDePagamento === 2) {
    numeroParcelas = Number(prompt("Em quantas vezes você quer parcelar?"));
    
    if ((numeroParcelas <= 3) && (numeroParcelas > 0)){
        if (numeroParcelas === 1){
        alert("Você inseriu o número de parcelas igual a 1. Por favor, tente novamente e escolha a opção pagamento À Vista no crédito para validar o seu desconto.");
        }
        else{
            alert("Operação escolhida: À Prazo em " + numeroParcelas + " vezes.\nValor da compra " + valorDaCompra + "\nValor da parcela: " + valorDaCompra/numeroParcelas);
        }
    } else if (numeroParcelas > 3) {
        alert("Operação escolhida: À Prazo em " + numeroParcelas + " vezes.\nValor da compra" + valorDaCompra + " Valor total: " +valorDaCompra*1.04 + "\nValor da parcela: " + valorDaCompra*1.04/numeroParcelas);
    } else {
        alert("Erro. Tente novamente");
    }
}