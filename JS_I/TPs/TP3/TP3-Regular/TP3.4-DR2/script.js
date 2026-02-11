let frutaUsuario = prompt("Digite o nome de uma fruta: ");
let frutaNormalizada;
if (frutaUsuario === null){
    alert("Erro inesperado. Tente novamente."); // se o usuario cancelar o prompt, isso aparece
} else {

    frutaNormalizada = frutaUsuario // resolve problemas de diferentes entradas de textos com acento ou diferentes capitalizacao
    .trim() // remove espaços adicionais
    .toLowerCase() // deixa tudo em caixa baixa
    .normalize("NFD") // separa letras e acentos
    .replace(/[\u0300-\u036f]/g, ""); // substitui os acentos por uma string vazia
    
    //com fruta normalizada, Maçã, MAÇÃ, maçã, macã, BANANA, banaNa e todas essas variáveis viram: banana, maca, laranja
    
    if(frutaNormalizada === "laranja"){ // verifica se é laranja
        alert("Não esqueça de descascar!");
    } else if(frutaNormalizada === "maca"){
        alert("Se você tirar a casca, perderá as vitaminas!"); // verifica se é maçã
    } else if(frutaNormalizada === "banana"){
        alert("Já vem naturalmente embalada e pronta para o consumo."); // verifica se é banana
    } else{
        alert("Não tenho nada a dizer sobre isso.") // alerta para outras opções
    }
}