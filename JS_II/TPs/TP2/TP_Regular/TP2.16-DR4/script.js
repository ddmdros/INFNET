let entrada;
let incremento;
let mensagem = "Informe o incremento (1 a 10)";

do{
    entrada = prompt(mensagem);

    if(entrada === null){
        break;
        //sai daqui e dispara alert de operação cancelada
    }

    incremento = Number(entrada);
    // mesma ideia do outro

    if(isNaN(incremento) || incremento < 1 || incremento > 10){
        mensagem = "Incremento inválido. Insira um número de 1 a 10";
    }

} while (isNaN(incremento) || incremento < 1 || incremento > 10);

if (entrada !== null){
    let contador = 0;
    let continuar;

    while (true){
        contador += incremento;
        console.log(contador);
        continuar = prompt("Deseja continuar incrementando o contador?");

        if(continuar === null || continuar.toLocaleLowerCase() === "não" || continuar.toLocaleLowerCase() === "nao"){
            break;
        }
    }
    alert("Contador final: " + contador);
} else{
    alert("Operação cancelada");
}
