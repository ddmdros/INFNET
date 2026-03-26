let texto = prompt("Insira um texto:");

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
console.log(textoInvertido);
