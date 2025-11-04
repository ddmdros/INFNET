let posicaoTraseiraCarroA = Number(prompt("Insira a posição da traseira do carro A"));
let posicaoTraseiraCarroB = Number(prompt("Insira a posição da traseira do carro B"));
let posicaoTraseiraCarroC = Number(prompt("Insira a posição da traseira do carro C"));
let resultado;
let mensagem;

if((0 <= posicaoTraseiraCarroA) && (posicaoTraseiraCarroA < posicaoTraseiraCarroB) && (posicaoTraseiraCarroB < posicaoTraseiraCarroC) && (posicaoTraseiraCarroC <= 500)){
    if((posicaoTraseiraCarroB - posicaoTraseiraCarroA) < (posicaoTraseiraCarroC - posicaoTraseiraCarroB)){
        resultado = 1;
    } else if ((posicaoTraseiraCarroB - posicaoTraseiraCarroA) > (posicaoTraseiraCarroC - posicaoTraseiraCarroB)){
        resultado = -1;
    } else if ((posicaoTraseiraCarroB - posicaoTraseiraCarroA) === (posicaoTraseiraCarroC - posicaoTraseiraCarroB)){
        resultado = 0;
    } 
} else{
    mensagem = "erro";
}

if(resultado === 1){
    mensagem = "O carro B deve acelerar";

} else if (resultado === -1){
    mensagem = "O carro B deve desacelerar";
} else if (resultado === 0) {
    mensagem = "O carro B deve manter a velocidade";
} else {
    mensagem = "Valores de entrada inválidos. Verifique as seguintes condições e tente novamente:\n" +
        "- A posição da traseira do carro A deve ser maior ou igual a zero\n" +
        "- A posição da traseira do carro B deve ser maior do que a posição da traseira do carro A\n" +
        "- A posição da traseira do carro C deve ser maior do que a posição da traseira do carro B\n" +
        "- A posição da traseira do carro C deve ser menor ou igual a 500";
}

alert("Resultado: " + resultado + "\n" + mensagem);