let votosRoboRat = prompt("Insira a quantidade de votos que o mascote RoboRat recebeu");
let votosSuperKeyboard = prompt("Insira a quantidade de votos que o mascote SuperKeyboard recebeu");
let votosNulos = prompt("Insira a quantidade de votos nulos");
//Prepara a definicao do novo mascote
let novoMascote;

//verifica operacao cancelada
if ((votosRoboRat === null) || (votosSuperKeyboard === null) || (votosNulos === null)) {
    alert("Operação cancelada pelo usuário. Preencha todos os campos.");
} else {
    //transforma em numero
    votosRoboRat = Number(votosRoboRat);
    votosSuperKeyboard = Number(votosSuperKeyboard);
    votosNulos = Number(votosNulos);

    //Verifica números inválidos (negativos, Strings e fração)
    if ((isNaN(votosRoboRat) || (votosRoboRat < 0)) || !(Number.isInteger(votosRoboRat)) || (isNaN(votosSuperKeyboard) || (votosSuperKeyboard < 0)) || !(Number.isInteger(votosSuperKeyboard)) || (isNaN(votosNulos) || (votosNulos < 0) || !(Number.isInteger(votosNulos)))) {
        alert("Insira números válidos (positivos e inteiros).");
    } else {
        //Prepara as variáveis que serão chamadas no alert
        let totalVotosBruto = votosRoboRat + votosSuperKeyboard + votosNulos;
        let roboRatPercentBruto = (votosRoboRat / totalVotosBruto) * 100;
        let superKeyboardPercentBruto = (votosSuperKeyboard / totalVotosBruto) * 100;
        let nulosPercentBruto = (votosNulos / totalVotosBruto) * 100;

        let votosValidos = votosRoboRat + votosSuperKeyboard;

        //Na remota possibilidade de votosValidos = 0, os percentuais líquidos podem gerar NaN e travar a operação
        //Par impedir que isso aconteça, usamos um ternário que transforma os percentuais brutos em 0, impedindo que a divisao por zero ocorra
        let roboRatPercentLiquido = votosValidos > 0 ? (votosRoboRat / votosValidos) * 100 : 0;
        let superKeyboardPercentLiquido = votosValidos > 0 ? (votosSuperKeyboard / votosValidos) * 100 : 0;

        //Atribui essa definicao
        if (roboRatPercentLiquido > superKeyboardPercentLiquido) {
            novoMascote = "RoboRat";
        } else if (superKeyboardPercentLiquido > roboRatPercentLiquido) {
            novoMascote = "SuperKeyboard";
        } else {
            novoMascote = null;
        }

        //Exibe as porcentagens no console
        alert(
            `Total de votos:\n
            SuperKeyboard: ${votosSuperKeyboard} (${superKeyboardPercentBruto.toFixed(2)}%)\n
            RoboRat: ${votosRoboRat} (${roboRatPercentBruto.toFixed(2)}%)\n
            Nulos: ${votosNulos} (${nulosPercentBruto.toFixed(2)}%)\n
            Total de votos (bruto): ${totalVotosBruto} (100%)\n
            
            Votos válidos:
            SuperKeyboard: ${votosSuperKeyboard} (${superKeyboardPercentLiquido.toFixed(2)}%)\n
            RoboRat: ${votosRoboRat} (${roboRatPercentLiquido.toFixed(2)}%)\n
            Total votos válidos:  ${votosValidos}
            
            Carregando o resultado...
            `

 
        );
                               
        //Exibe o vencedor ou, em caso de empate, exibe mensagem de empate
        if (novoMascote != null) {
            alert("O novo mascote é: " + novoMascote);
        } else {
            alert("Empatou! Temos que refazer a votação...");
        }

    }
}



