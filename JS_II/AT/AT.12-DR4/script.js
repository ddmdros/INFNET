let frase = "toda ciencia seria superflua se houvesse coincidencia imediata entre a aparencia e a essencia das coisas";

// 1. por regex
// let semVogais = frase.toLowerCase().replace(/[aeiou]/g, "");
// console.log(semVogais);

// // 2. com filter
// let vogais = "aeiou";
// let fraseSplit = frase.toLowerCase().split("");
// let resultado = fraseSplit.filter(l => !vogais.includes(l)).join("");
// console.log(resultado);

// 3. Com loop de trás pra frente (de trás pra frente pra não dar problema de reindexação)
let fraseSplit = frase.toLowerCase().split("");
let vogais = ["a", "e", "i", "o", "u"];

for (let i = fraseSplit.length - 1; i >= 0; i--){
    if(vogais.includes(fraseSplit[i])){
        fraseSplit.splice(i, 1);
    }
}

let resultado = fraseSplit.join("");
console.log(resultado);
