let valores = [];
let numero = 0;

while(numero < 30){
    // Como a variável foi inicializada com 0, vai entrar na primeira vez
    // e vai sair quando o usuario digitar um número maior ou igual a 30
    numero = Number(prompt("Digite um número"));

    //Se o número for igual ou maior que 30, não adiciona o valor ao vetor
    if(numero < 30){
        valores.push(numero);
    }
}

console.log(valores);
