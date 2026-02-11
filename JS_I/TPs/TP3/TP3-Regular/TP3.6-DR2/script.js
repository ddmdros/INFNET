const coresDisponiveis = "Cores disponíveis: amarelo, laranja, vermelho, azul, verde, branco, preto, roxo"; // salva as cores numa variável para mostrar para o usuário e não precisar repetir código

let primeiraCorUsuario = prompt("Insira a primeira cor:\n" + coresDisponiveis); // coleta as informações do usuário e exibe toda vez as cores disponíveis
let segundaCorUsuario = prompt("Insira a segunda cor:\n" + coresDisponiveis);


if (primeiraCorUsuario === null || segundaCorUsuario === null){ // se o usuário cancelar, exibe uma mensagem personalizada
    alert("Operação cancelada pelo usuário");
} else{ //senão, entra na lógica
    let primeiraCorNormalizada = primeiraCorUsuario.trim().toLowerCase(); // crio variáveis de cores normalizadas para evitar problemas de input de usuário, como AzuL, azul, Azul etc
    let segundaCorNormalizada = segundaCorUsuario.trim().toLowerCase(); 

    if ((primeiraCorNormalizada === "amarelo") && (segundaCorNormalizada === "laranja") || (primeiraCorNormalizada === "laranja") && (segundaCorNormalizada === "amarelo")){ // fiz as duas opções, independente da cor. certamente há outras maneiras de fazer isso, mas ainda não aprendemos, então fiz o melhor que pude com as informações que temos até o momento
        alert("Vermelho"); // verifico com as cores em low-caps, pois foram normalizadas, mas exibo com a primeira em maiúscula, por preferencia
    } else if ((primeiraCorNormalizada === "vermelho") && (segundaCorNormalizada === "amarelo") || (primeiraCorNormalizada === "amarelo") && (segundaCorNormalizada === "vermelho")){
        alert("Laranja");
    } else if ((primeiraCorNormalizada === "azul") && (segundaCorNormalizada === "vermelho") || (primeiraCorNormalizada === "vermelho") && (segundaCorNormalizada === "azul")){
        alert("Roxo");
    } else if ((primeiraCorNormalizada === "amarelo") && (segundaCorNormalizada === "azul") || (primeiraCorNormalizada === "azul") && (segundaCorNormalizada === "amarelo")){
        alert("Verde");
    } else if ((primeiraCorNormalizada === "amarelo") && (segundaCorNormalizada === "verde") || (primeiraCorNormalizada === "verde") && (segundaCorNormalizada === "amarelo")){
        alert("Azul");
    } else if ((primeiraCorNormalizada === "branco") && (segundaCorNormalizada === "preto") || (primeiraCorNormalizada === "preto") && (segundaCorNormalizada === "branco")){
        alert("Cinza");
    } else if ((primeiraCorNormalizada === "vermelho") && (segundaCorNormalizada === "branco") || (primeiraCorNormalizada === "branco") && (segundaCorNormalizada === "vermelho")){
        alert("Rosa");
    } else if ((primeiraCorNormalizada === "vermelho") && (segundaCorNormalizada === "verde") || (primeiraCorNormalizada === "verde") && (segundaCorNormalizada === "vermelho")){
        alert("Marrom");
    } else if ((primeiraCorNormalizada === "laranja") && (segundaCorNormalizada === "roxo") || (primeiraCorNormalizada === "roxo") && (segundaCorNormalizada === "laranja")){
        alert("Marrom-terra");
    } else if ((primeiraCorNormalizada === "roxo") && (segundaCorNormalizada === "branco") || (primeiraCorNormalizada === "branco") && (segundaCorNormalizada === "roxo")){
        alert("Lilás");
    } else{
        alert("Erro inesperado. Tente novamente"); // trata de erros gerais, como digitar um número ou uma cor indisponível
    }
}