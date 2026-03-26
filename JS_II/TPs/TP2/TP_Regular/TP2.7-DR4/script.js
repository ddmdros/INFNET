function Pessoa(nome, resposta){
    this.nome = nome;
    this.resposta = resposta;
}

const pessoas = [];
let qtSim = 0;
let qtNao = 0;

while(true){
    let nome = prompt("Qual é o seu nome?");

    if(nome === "" || nome === null){
        break; // sai se o usuário cancelar
    }

    let resposta = prompt("Você é feliz? (Sim/Não)"); //mantendo em variaveis diferentes para poder cancelar ali em cima
    //pensei em fazer com "s" e "n" para facilitar para o usuário, mas decidi seguir exatamente o que o exercício pediu

    while(resposta === null || (resposta.toLocaleLowerCase() !== "sim" && resposta.toLocaleLowerCase() !== "não")){
        resposta = prompt("Resposta inválida. Você é feliz? (Sim/Não)"); // firula
    }

    if (resposta.toLocaleLowerCase() === "sim"){
        qtSim++;
    } else{
        qtNao++;
    }

    pessoas.push(new Pessoa(nome, resposta));
}

let qtTotal = pessoas.length;

if (qtTotal > 0){
    let porcentagemSim = ((qtSim / qtTotal) * 100).toFixed(2);
    let porcentagemNao = ((qtNao / qtTotal) * 100).toFixed(2);

    alert(
        `Total de respostas: ${qtTotal}\n` +
        `Sim: ${qtSim} (${porcentagemSim}%)\n` +
        `Não: ${qtNao} (${porcentagemNao}%)`
    );

} else {
    alert("Nenhuma resposta registrada");//um feedbackzinho para o usuário se ele cancelar
}

console.log(pessoas);
