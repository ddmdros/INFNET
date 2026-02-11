
function jogar() {
    let numeroUsuario = (prompt("Escolha um numero inteiro de 0 a 8"));

    if (numeroUsuario === null){
        alert("Operação cancelada pelo usuario");
        return;
    } 
        
    if (isNaN(numeroUsuario)){
        alert("Insira um número válido.");
        return;    
    } 

    numeroUsuario = Number(numeroUsuario);
    
    if(!Number.isInteger(numeroUsuario)){
        alert("Insira um número inteiro");
        return;
    }

    if ((numeroUsuario < 0) || (numeroUsuario > 8)){
        alert("Insira um número entre 0 e 8");
        return;
    }

    let numeroMaquina = Math.floor(Math.random() * 9);
let condicaoVitoria = numeroMaquina === numeroUsuario ? "venceu" : "perdeu";

    alert(`Você ${condicaoVitoria}!\nNúmero escolhido: ${numeroUsuario}\nNúmero sorteado: ${numeroMaquina}`)


} 
    
jogar();

