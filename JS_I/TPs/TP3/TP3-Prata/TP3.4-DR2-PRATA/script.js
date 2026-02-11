let peso = Number(prompt("Digite seu peso em kg"));
let altura = Number(prompt("Digite sua altura em m"));

let IMC = peso/(altura ** 2);
let classificacao;

//Atribuicao com Switch

switch(IMC){
    
}

// Atribuindo classificacao com if
if ((IMC >= 18.5) && (IMC <= 24.99)){
    classificacao = "Peso Normal";
} else if ((IMC >= 25) && (IMC <= 29.99)){
    classificacao = "Pré-Obesidade";
} else if ((IMC >= 30) && (IMC <= 34.99)){
    classificacao = "Obesidade Grau I";
} else if ((IMC >= 35) && (IMC <= 39.99)){
    classificacao = "Obesidade Grau II";
} else if (IMC >= 40){
    classificacao = "Obesidade Grau III";
} else {
    alert("Erro. Tente Novamente");
}

// Exibindo no console
alert(`IMC: ${IMC}\n Classificação: ${classificacao}`);