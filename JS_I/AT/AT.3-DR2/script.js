// O enunciado do AT sugere usar user e admin, mas como estou 
// fazendo o AT em português, achei melhor manter a consistência 
// e evitar a declaracao de variaveis em dois idiomas.

let nomeUsuario = prompt("Digite o seu nome de usuário:");
let senhaUsuario = prompt("Digite a sua senha:");

let usuarioCadastrado = "admin"; 
let senhaCadastrada = "1234";

let isAutorizado = (
    (nomeUsuario === usuarioCadastrado) &&
    (senhaUsuario === senhaCadastrada)
);

isAutorizado ? alert("Acesso autorizado") : alert("Acesso negado");