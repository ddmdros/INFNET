let opcoesCamiseta = "vermelha, amarela, branca";
let opcoesCalca = "amarela, preta, jeans";
let camiseta = prompt("Digite como é a sua camiseta. Opções: " + opcoesCamiseta).trim().toLowerCase();
let calca = prompt("Digite como é a sua calça. Opções: " + opcoesCalca).trim().toLowerCase();

if ((camiseta === "vermelha") && (calca === "amarela")){
    alert("Ketchup e mostarda!");
} else if ((camiseta === "amarela") && (calca === "preta")){
    alert("Agora você é uma abelha!");
} else if ((camiseta === "branca") && (calca === "jeans")){
    alert("Look clássico! Não tem como errar!")
} else {
    alert("Hmm, nada a comentar...");
}