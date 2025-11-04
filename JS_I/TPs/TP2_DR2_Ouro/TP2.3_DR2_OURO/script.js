alert("Olá, usuário!\nEsta é uma calculadora virtual. Vamos começar definindo dois valores e depois o tipo de operação que vamos realizar. Tudo pronto?");

let primeiroNumero = Number(prompt("Insira o primeiro valor: "));
let segundoNumero = Number(prompt("Insira o segundo valor:"));
let resultado;

let tipoDeOperacao = Number(
  prompt(
    "Agora vamos definir o tipo de operação. Digite:\n" +
      "1 - Adição\n" +
      "2 - Subtração\n" +
      "3 - Multiplicação\n" +
      "4 - Divisão"
  )
);

alert("Calculando...");



if (tipoDeOperacao === 1){
    resultado = primeiroNumero + segundoNumero;
        alert(primeiroNumero + " + " + segundoNumero + ": "+ resultado);

    } else if (tipoDeOperacao === 2){
        resultado = primeiroNumero - segundoNumero;
        alert(primeiroNumero + " - " + segundoNumero + ": "+ resultado);

    } else if (tipoDeOperacao === 3){
        resultado = primeiroNumero * segundoNumero;
        alert(primeiroNumero + " x " + segundoNumero + ": "+ resultado);

    } else if (tipoDeOperacao === 4){
        if(segundoNumero === 0){
            alert("Não é possível dividir por zero!")
        } else{
            resultado = primeiroNumero / segundoNumero;
        alert(primeiroNumero + " % " + segundoNumero + ": "+ resultado);
        }

    } else {
        alert("Número inválido! Tente novamente");
    }


