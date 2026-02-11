let num1 = prompt("Insira um número inteiro e positivo");
let num2 = prompt("Insira qualquer valor real");
let num3 = prompt("Insira outro valor real qualquer");
let num4 = prompt("Insira outro valor real qualquer");

//Capta entradas nulas e encerra o script se isso acontecer
if ((num1 === null) || (num2 === null) || (num3 === null) || (num4 === null)) {
    alert("Operação cancelada pelo usuário. Todos os campos devem ser preenchidos.");

} else {
    //Se o usuario nao cancelar, converte tudo para Number
    num1 = Number(num1);
    num2 = Number(num2);
    num3 = Number(num3);
    num4 = Number(num4);

    //Se o usuario digitar uma string em alguma entrada, também para o script e exibe mensagem de erro
    if (isNaN(num1) || isNaN(num2) || isNaN(num3) || isNaN(num4)) {
        alert("Insira números válidos");
    } else {
        //Se o primeiro numero nao for inteiro ou for menor ou igual a zero, para o script e exibe mensagem de erro
        if ((num1 <= 0) || !(Number.isInteger(num1))) {
            alert("O primeiro valor deve ser inteiro e positivo");
        } else {
            //Agora entra na lógica 

            //Primeiro definimos quais sao os valores mínimo, máximo e mediano
            //Encontrar o máximo e mínimo é fácil com o Math.min e Math.max:
            let minimo = Math.min(num2, num3, num4);
            let maximo = Math.max(num2, num3, num4);
            let medio;

            //A partir deles, encontramos o médio com uma lógica de if.
            //Primeiro, tentamos uma atribuição com ifs representada abaixo, comentada.
            //Ela funcionou para muitos casos, mas não funciona com entradas repetidas, por exemplo
            // 5, 6, 6

            /*
            
            if ((minimo === num2) && (maximo === num4)){
              medio = num3;
            } else if ((minimo === num2) && (maximo === num3)){
              medio = num4;
            } else if ((minimo === num3) && (maximo === num4)){
              medio = num2;
            } else if ((minimo === num3) && (maximo === num2)){
              medio = num4;
            } else if ((minimo === num4) && (maximo === num2)){
              medio = num3;
            } else if ((minimo === num4) && (maximo === num3)){
              medio = num2;
            }
            */

            //Então usamos a seguinte:

            if ((num2 !== minimo) && (num2 !== maximo)) {
                medio = num2;
            } else if ((num3 !== minimo) && (num3 !== maximo)) {
                medio = num3;
            } else {
                medio = num4;
            }

            //Agora que sabemos quais sao os valores mínimo, médio e máximo,
            // Usamos um switch para definir a ordem de exibicao

            switch (num1) {
                case (1):
                    alert(`${minimo}, ${medio}, ${maximo}`);
                    break;
                case (2):
                    alert(`${maximo}, ${medio}, ${minimo}`);
                    break;
                case (3):
                    alert(`${medio}, ${maximo}, ${minimo}`);
                    // também poderia ser (minimo, maximo, medio);
                    break;
                default:
                    alert("O valor " + num1 + " não corresponde a nenhuma das condições definidas.")
            }
        }
    }
}