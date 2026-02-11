/// TERNÁRIO
let genero = prompt("Digite seu genero:").trim().toUpperCase();

if((genero === "M")){
    console.log("Masculino");
} else {
    console.log("Feminino");
}

//condição? parte verdadeira: parte falsa;
//(genero) ? ("M") : ("F");
genero === "M" ? console.log("masculino") : console.log("feminino");


// ternario: teste, parte verdadeira e parte falsa (parte falsa pode ter uma parte verdadeira e outra falsa)
let media = 7;

if (media >= 6){
    console.log("Aprovado");
} else if (media >= 5) {
    console.log("Recuperação");
} else {
    console.log("Reprovado");
}

media >= 6 
    ? console.log("Aprovado")
    : media >= 5 
    ? console.log("Recuperação") 
    : console.log("Reprovado");

let usuario = "admin";
let senha = "123";
let temAcesso = false;

// if ((usuario === "admin") && (senha === "123")){
//     temAcesso = true;
// } else {
//     temAcesso = false;
// }

acesso = usuario === "admin" && senha === "123" ? true : false; 
// <- se usuario = admin e senha = 123, acesso =  true, senao acesso=false

// if (temAcesso){
//     console.log("Permissão concedida");
// } else {
//     console.log("Credenciais inválidas");
// }

temAcesso ? console.log("Permissao concedida") : console.log("Permissão negada");


