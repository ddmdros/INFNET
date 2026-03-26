let entrada;
let incremento;
let mensagem = "Incremento (1-10)";

do{
    entrada = prompt(mensagem);

    if(entrada === null){
        break; // sai do loop se o usuário cancelar
    }

    incremento = Number(entrada); // converti depois para poder pegar o "null" case

    if(isNaN(incremento) || incremento < 1 || incremento > 10){
        mensagem = "Incremento inválido. Insira um número de 1 a 10"; //firula
    }

} while(isNaN(incremento) || incremento < 1 || incremento > 10);

if(entrada != null){ // entra se o usuário não tiver cancelado
    for (let contador = 0; contador <= 50; contador += incremento){
        console.log(contador);
    }
} else{ // alerta se tiver cancelado
    alert("Operação cancelada");
}