let numeroInput = prompt("Digite um numero:");

try{
    let numero = parseInt(numeroInput);

    if(isNaN(numero)){
        throw new Error("Valor digitado inválido: " + numeroInput);
    }

    console.log("Conversão bem-sucedida: " + numero);
} catch(error){
    console.log("Erro ao converter para Int: " + error.message)
}