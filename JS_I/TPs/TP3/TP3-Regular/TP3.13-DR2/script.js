let altura = prompt("Insira sua altura(m)");
let peso = prompt("Insira seu peso (kg)");

//Novamente, o texto não pede, mas experimentamos tratar erros de entrada

//Primeiro, verificamos se o usuário cancela o prompt
if ((altura === null) || (peso === null)){
    alert("Operação cancelada pelo usuário");
} else {
    //Se não cancelar, convertemos os dados em Number
    altura = Number(altura);
    peso = Number(peso);

    //Se nao forem Number ou forem menores ou igual a zero, lança erro e para a aplicação
    if((isNaN(altura) || isNaN(peso)) || (altura <= 0) || (peso <= 0)){
        alert("Erro. Insira um número válido e tente novamente");
    } else{ 
        //Se nao for, começa a lógica
        let IMC = peso / (altura ** 2);
        let classificacao;
        
        //Usamos if else, mas poderia ser switch
        if(IMC < 18.5){
            classificacao = "Abaixo do peso normal";
        } else if(IMC < 25){
            classificacao = "Peso normal";
        } else if(IMC < 30){
            classificacao = "Excesso de peso";
        } else if (IMC < 35){
            classificacao = "Obesidade classe I";
        } else if (IMC < 40){
            classificacao = "Obesidade classe II";
        } else {
            classificacao = "Obesidade classe III";
        } 
        
        alert(`IMC: ${IMC.toFixed(2)}\nClassificação: ${classificacao}`);
    }
    
}
    
    
    
    
