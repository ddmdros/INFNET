//1

// let nomeCompleto = prompt("Nome completo:");
// let vetorNomeCompleto = nomeCompleto.split(" ");
// let primeiroNome = vetorNomeCompleto[0];
// let ultimoNome = vetorNomeCompleto[vetorNomeCompleto.length -1];
// let iniciais = "";

// let iniciaisNomeCompleto = vetorNomeCompleto.forEach(e => {
//     iniciais += e[0];
// })

// console.log(`Primeiro nome: ${primeiroNome}\n`+
//         `Último nome: ${ultimoNome}\n`+
//         `Iniciais de cada nome: ${iniciais}\n`
// );

//2

// let palavra = "Benfeitor";
// let semVogais = palavra.toLowerCase().split("").map(p => {
//     let vogais = "aeiou";

//     if(!vogais.includes(p)){
//         return p;
//     }

//     return "";
// }).join("");

// let primeiraUltimaLetraConcat = (palavra[0] + palavra[palavra.length - 1]).toLowerCase();

// let consoantesMaiusculas = palavra.toLowerCase().split("").map(p => {
//     let vogais = "aeiou";
//     if(!vogais.includes(p)){
//         return p.toUpperCase();
//     }
//     return p;
// }).join("");

// let semPrimeiraUltimaLetra = palavra.substring(1, palavra.length - 1);

// console.log("Sem vogais: " + semVogais);
// console.log("Concat primeira e ultima letra: " + primeiraUltimaLetraConcat);
// console.log("Consoantes em maiúsculo: " + consoantesMaiusculas);
// console.log("Sem a primeira e a última letra: " + semPrimeiraUltimaLetra);

// let palavra2 = "brASILEIRO";
// if(palavra2.includes("pro")){
//     let novaFrase = palavra2.replace("pro", "alu");
//     console.log(novaFrase);
// }

// if(palavra2.includes("br")){
//     palavra2 = palavra2.toLowerCase();
//     console.log(palavra2);
// }

// let fraseSemEspacos = frase.split("").map(p => {
//     if(p === " "){
//         return ""
//     }

//     return p;
// }).join("");


// console.log(fraseSemEspacos);