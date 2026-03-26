function dividir(a, b){

    if (a === "" || b === "" || a === null || b === null || a.trim() === "" || b.trim() === "") {
        throw new Error("Os campos não podem estar vazios.");
    }

    a = Number(a);
    b = Number(b);

    if (isNaN(a) || isNaN(b)) {
        throw new Error("Entrada inválida. Digite apenas números.");
    }
    if (b === 0) {
        throw new Error("Não é possível dividir por zero.");
    }
    if (b < 0) {
        throw new Error("Não é possível dividir por números negativos.");
    }

    return a / b;
}


let num1 = prompt("Digite um numero: ");
let num2 = prompt("Digite outro número:" );

try{
    let resultado = dividir(num1, num2);
    console.log("Resultado: " + resultado);
    
} catch(error){
    console.log("Erro: " + error.message);

}