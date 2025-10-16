//Operador de multiplicacao (*)
let mult = 3 * 2;
console.log(mult);

let preco = 19.99;
let percDesconto = 0.05;
let desconto = preco * percDesconto;
console.log(desconto);

//Operador de divisao (/)
let divisao = 3 / 2;
console.log(divisao);

//Usando parênteses
let expressao = 3 * (2 + 1);
console.log(expressao);

let expressao2 = 3 * ((2+1) -1);
console.log(expressao2);

    //divisao por zero volta "Infinity". Não pode.

//Valor NaN
let v = NaN;
let inteiro = 1;

console.log(NaN === 1);
console.log("Casa" === NaN); // NaN é um Number inválido, então é false
console.log(NaN !== 1);
console.log(NaN === NaN); // NaN é um Number indefinido e, portanto, não é comparável

console.log("Casa" === NaN);           // false (string ≠ number)
console.log(Number("Casa"));           // NaN
console.log(isNaN(Number("Casa")));    // true
console.log(NaN === NaN);              // false
console.log(Number.isNaN(NaN));        // true


//Operadores (*=) e (/=)

    //Operador (*=)
    let n = 1;
    n *= 10;
    console.log(n);

    //Operador (/=)
    n /= 2;
    console.log(n);