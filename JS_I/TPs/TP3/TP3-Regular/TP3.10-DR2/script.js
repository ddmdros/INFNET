let numeroUsuario = prompt("Digite um número por extenso (de 0 a 9)");

// o exercício não pedia, mas estou tentando manter o pensamento de já ir tratando dados do usuario
// como o exercício disse "três", com acento, não usei regex
let numeroUsuarioNormalizado = numeroUsuario.trim().toLowerCase();


switch (numeroUsuarioNormalizado){
    case "um":
        alert("1");
        break;
    case "dois":
        alert("2");
        break;
    case "três":
        alert("3")
        break;
    case "quatro":
        alert("4");
        break;
    case "cinco":
        alert("5");
        break;
    case "seis":
        alert("6");
        break;
    case "sete":
        alert("7");
        break;
    case "oito":
        alert("8");
        break;
    case "nove":
        alert("9");
        break;
    case "zero":
        alert("0");
        break;
    default:
        alert("Erro. Tente novamente");
}
