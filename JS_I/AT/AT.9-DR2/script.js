let numeroSemana = Number(prompt("Insira um número inteiro de 1 a 7 para determinar o dia da semana, em que 1 é segunda-feira e 7 é domingo"));
let nomeDia;
switch(numeroSemana){
    case 1:
        nomeDia = "Segunda-feira" ;
        break;
    case 2:
        nomeDia = "Terça-feira";
        break;
    case 3:
        nomeDia = "Quarta-feira";
        break;
    case 4:
        nomeDia = "Quinta-feira";
        break;
    case 5:
        nomeDia = "Sexta-feira";
        break;
    case 6:
        nomeDia = "Sábado";
        break;
    case 7:
        nomeDia = "Domingo";
        break;
    default:
        nomeDia = "Número inválido. Digite um número inteiro entre 1 e 7";
}

console.log(nomeDia);