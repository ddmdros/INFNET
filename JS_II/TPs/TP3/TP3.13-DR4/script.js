let numeroUsuario = Number(prompt("Número:"));

function fat(n){
    if (n < 0) return "Informe um número igual ou maior a zero";

    let resultado = 1;

    for(let i = 2; i <= n; i++){
        resultado *= i;    
    }

    return resultado;
}

if(isNaN(numeroUsuario)){
    alert("Digite um número válido");
} else{
    alert(`O fatorial de ${numeroUsuario} é ${fat(numeroUsuario)}`);
}