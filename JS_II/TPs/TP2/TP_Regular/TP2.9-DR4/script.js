let valores = [];
let contador = 0;
let valorUsuario;

do{
    valorUsuario = Number(prompt("Insira um valor"));
    valores.push(valorUsuario);
    contador++;

} while(contador < 3);

const sum = (a, b, c) => {
    return a + b + c;
}

let soma = sum(...valores);
console.log(soma);

// Nesse TP, estou pensando bastante em como deixar
// as coisas mais dinâmicas.

// Encontrei o reduce, mas ainda não me familiarizei com ele.
// Acho que ainda não vimos em aula. Mas pelo que entendi,
// ele funciona assim
 
// valores.reduce((a,b) => a (acumulador) + b (valor atual), 0 (valor inicial).

// Então ficaria assim:

// const soma = valores.reduce((a, b) => a + b, 0);

// deixei comentado por ainda estar me familiarizando com ele
// quem sabe até os TPs Prata e Ouro eu comece a usar mais [pray]