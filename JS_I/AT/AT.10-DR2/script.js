let idade = Number(prompt("Informe sua idade"));
let respostaPremium = prompt("Você é usuário Premium? (Sim/Não)");

let isPremium;

if (respostaPremium === "Sim"){
    isPremium = true;
} else if (respostaPremium === "Não"){
    isPremium = false;
} else{
    alert("Erro. Tente novamente.");
    isPremium = null;
}

// Como o AT pede para finalizar o programa com um erro
// se o usuario digitar algo diferente de "Sim" ou "Não",
// defini que a parte abaixo só executa se as condições
// forem atendidas.

let isAcessoConcedido;

if (isPremium !== null){
    isAcessoConcedido = ((idade >= 21) && (isPremium)) ? true : false;
    console.log(isAcessoConcedido);
}

