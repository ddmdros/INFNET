function validarCPF(cpf){
    
    let tamanhoCerto = (cpf.length === 14);
    let formatoCerto = (cpf[3] === "." && cpf[7] === "." && cpf[11] === "-");
    
    return tamanhoCerto && formatoCerto;
}

let teste1 = "093.103.839-17";
let teste2 = "09310383917";
let teste3 = "093.103.839.17";

console.log(validarCPF(teste1));
console.log(validarCPF(teste2));
console.log(validarCPF(teste3));
