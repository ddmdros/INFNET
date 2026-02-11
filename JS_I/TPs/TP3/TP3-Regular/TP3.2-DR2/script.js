let pesoPeixe = Number(prompt("Digite o peso do peixe em kg: "));
let kgExedente;
let multa;

if (pesoPeixe <= 0){ // lança erro para números negativos e igual a 0
alert("O peso do peixe deve ser maior que 0. Tente novamente");
} else if ((pesoPeixe > 0) && (pesoPeixe < 50)){ // lança mensagem para peso dentro do padrão
    alert("Boa, Zezinho! Esse peixe de " + pesoPeixe + "kg não tem multa.");
} else if(pesoPeixe > 50){ // calcula peso excedente e multa para peixes maiores que o permitido. Exibe essas informações.
    kgExedente = pesoPeixe - 50;
    multa = kgExedente * 4;
    alert("Opa! Esse peixão de " + pesoPeixe + "kg ultrapassou o limite estabelecido pelo regulamento de pesca.\n" + 
        "Peso excedente: " + kgExedente + "kg\n" +
        "Multa: R$" + multa
    )
} else {
    alert("Erro inesperado. Tente novamente"); // Lança erro generalista, como o usuário digitar "abacaxi" no prompt.
}