let primeiroAnguloInternoTriangulo = Number(prompt("Insira o primeiro angulo interno do triangulo"));
let segundoAnguloInternoTriangulo = Number(prompt("Insira o segundo angulo interno do triangulo"));
let terceiroAnguloInternoTriangulo = Number(prompt("Insira o terceiro angulo interno do triangulo"));
let tipoTriangulo;
let isTriangulo = false;

//valida se é um triângulo
if (isNaN(primeiroAnguloInternoTriangulo) || isNaN(segundoAnguloInternoTriangulo) || isNaN(terceiroAnguloInternoTriangulo)){
    alert("Erro de entrada. Verifique os dados informados e tente novamente");
} else if ((primeiroAnguloInternoTriangulo <=0) || (segundoAnguloInternoTriangulo <= 0) || (terceiroAnguloInternoTriangulo <= 0)){
    alert("Os ângulos devem ser positivos e diferentes de zero");
} else if ((primeiroAnguloInternoTriangulo + segundoAnguloInternoTriangulo + terceiroAnguloInternoTriangulo) !== 180 ){
    alert("A soma dos ângulos internos deve ser igual a 180");
} else {
    isTriangulo = true;    
}

//valida o tipo de triângulo
if (isTriangulo){
    if ((primeiroAnguloInternoTriangulo < 90) && (segundoAnguloInternoTriangulo < 90) && (terceiroAnguloInternoTriangulo < 90)){
        tipoTriangulo = "Acutângulo";
    } else if ((primeiroAnguloInternoTriangulo === 90) || (segundoAnguloInternoTriangulo === 90) || (terceiroAnguloInternoTriangulo === 90)){
        tipoTriangulo = "Retângulo";
    } else if ((primeiroAnguloInternoTriangulo > 90) || (segundoAnguloInternoTriangulo > 90) || (terceiroAnguloInternoTriangulo > 90)){
        tipoTriangulo = "Obtusângulo"
    } else {
        alert("Erro. Tente novamente.");
    }
} else{
    alert("Sua figura não é um triângulo. Verifique se a soma dos ângulos internos é igual a 180");
}

//se for um triângulo, exibe o tipo
//os casos em que não é já foram tratados com alert nas validações
if(isTriangulo){
    alert("Tipo triângulo: " + tipoTriangulo)
}
