let nomeUsuario = "";

do{
    nomeUsuario = prompt("Digite o seu nome");

} while(nomeUsuario === "" || nomeUsuario === null);

console.log("Nome do usuário: " + nomeUsuario);