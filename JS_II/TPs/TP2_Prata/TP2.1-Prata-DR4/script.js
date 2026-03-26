let usuarioInput = prompt("Digite uma palavra");
let usuarioInputNormalizado = usuarioInput.toLocaleLowerCase();

function checaPalindromo(usuarioInputNormalizado){
    let usuarioInputInvertido = invertePalavra(usuarioInputNormalizado);
    if(usuarioInputNormalizado === usuarioInputInvertido){
        alert(`${usuarioInputNormalizado} é um palíndromo`);
    } else{
        alert(`${usuarioInputNormalizado} não é um palíndromo`);
    }
}

function invertePalavra(palavra){
    let palavraInvertida = "";
    for(let i = palavra.length -1; i >= 0; i--){
        palavraInvertida += palavra[i];
    }
    return palavraInvertida;

}

checaPalindromo(usuarioInputNormalizado);