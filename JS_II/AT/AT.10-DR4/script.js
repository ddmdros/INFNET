let frase = "Nesse momento, o Bitcoin está em R$ 603.015,03, Loucura, né?";
let bitcoin = frase.slice(frase.indexOf("R$ ") + 3, frase.indexOf(", Loucura"));

bitcoin = bitcoin.replace(".", "").replace(",", ".");
// aqui, pega só o primeiro ponto, o que é ok para o exercício
// se o número fosse maior (ex.: 1.603.015,03), 
// usaríamos um replaceAll

let resultado = (Number(bitcoin) / 3).toFixed(2);
// o JS converte automaticamente, mas ajustei Number()
// como segurança

console.log(resultado);
console.log(typeof resultado);