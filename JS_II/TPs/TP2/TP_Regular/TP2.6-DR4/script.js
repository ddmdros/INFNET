let frase = "A vingança nunca é plena, mata a alma e a envenena!";
let novaFrase = "";
let proximaMaiuscula = true;

for(let caractere of frase){
    if(proximaMaiuscula === true){
        novaFrase += caractere.toUpperCase();
        proximaMaiuscula = false;
    }

    else{
        novaFrase += caractere;
    }
    if(caractere === " "){
        proximaMaiuscula = true;
    }
}

console.log(novaFrase);