function calcularSomaNaturais(n){
    let acumulador = 0;
    for (let i = 1; i <= n; i++){
        acumulador += i;
    }

    return acumulador;

}

let numeroInput = Number(prompt("Digite um número inteiro"));
if(!isNaN(numeroInput) && (numeroInput >= 1)){
    let resultado = calcularSomaNaturais(numeroInput);
    alert(`A soma de todos os números inteiros de 1 a ${numeroInput} é: ${resultado}`);
} else{
    alert("O número deve ser maior ou igual 1");
}

//Abaixo o código não performático que criei da primeira vez
// let listaNumerosDaSoma = [];
// for(let i = 1; i < numeroInteiroInput + 1; i++){
//     listaNumerosDaSoma.push(i); 
// }

// listaNumerosDaSoma.forEach(n => {
//     soma += n;
// });