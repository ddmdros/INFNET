let valores = [];
let numero;

do{
    numero = Number(prompt("Digite um número"));
    
    if(numero % 2 === 0){
        valores.push(numero);
    }
    
} while(numero % 2 === 0);

console.log(valores);