let salarioInicial = Number(prompt("Qual o seu salário atual?"));
let numDependentes = Number(prompt("Quantos dependentes você tem?"));
let anosDeEmpresa = Number(prompt("Quantos anos de empresa você tem?"));

let aumentoPercent = 1;
let bonusDependentes = 0;
let novoSalario;

if (anosDeEmpresa > 2){
    aumentoPercent = 1.15;
}

if (numDependentes > 0){
    bonusDependentes = 500;
}


novoSalario = (salarioInicial * aumentoPercent) + bonusDependentes;

alert(`Salário inicial: R$${salarioInicial.toFixed(2)}
Número dependentes: ${numDependentes}
Anos de empresa: ${anosDeEmpresa}
Novo salário: R$${novoSalario.toFixed(2)}`)
