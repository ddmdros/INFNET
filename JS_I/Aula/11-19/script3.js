let dado1 = Math.ceil(Math.random() * 6);
let dado2 = Math.ceil(Math.random() * 6);
let dado3 = Math.ceil(Math.random() * 6);
let dado4 = Math.ceil(Math.random() * 6);
let dado5 = Math.ceil(Math.random() * 6);
let dado6 = Math.ceil(Math.random() * 6);
console.log(`Dados do jogador 1: ${dado1}-${dado2}-${dado3}`);
console.log(`Dados do jogador 2: ${dado4}-${dado5}-${dado6}`);


let vitoriaPlayer1 = 0;
let vitoriaPlayer2 = 0;
let empate = 0;

if(dado1 > dado4){
    vitoriaPlayer1++;
} else if(dado1 < dado4){
    vitoriaPlayer2++;
} else{
    empate++;
}


if(dado2 > dado5){
    vitoriaPlayer1++;
} else if(dado2 < dado5){
    vitoriaPlayer2++;
} else{
    empate++;
}


if(dado3 > dado6){
    vitoriaPlayer1++;
} else if(dado3 < dado6){
    vitoriaPlayer2++;
} else{
    empate++;
}

vitoriaPlayer1 > vitoriaPlayer2 ? console.log("Player 1 venceu") : vitoriaPlayer1 < vitoriaPlayer2 ? console.log("Player 2 venceu") : console.log("Empate");


