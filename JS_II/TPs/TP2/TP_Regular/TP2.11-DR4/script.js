let palavras = ["ovo", "banana", "radar", "asa", "paralelepípedo", "osso"];

function ehPalindromo(texto){

    function inverterTexto(texto){
        let textoInvertido = "";
        let i = texto.length - 1;

        while(i >= 0){
            textoInvertido += texto[i];
            i--;
        }

        return textoInvertido;
    }

    let textoInvertido = inverterTexto(texto);

    if(textoInvertido === texto){
        return true;
    } else{
        return false;
    }

} 

for (let palavra of palavras){
    let resultado = ehPalindromo(palavra);
    if(resultado){
        console.log(`A palavra ${palavra} é um palíndromo`);
    } else{
        console.log(`A palavra ${palavra} não é um palíndromo`);
    }
}