let valorDoProduto = Number(prompt("Qual o valor do produto?"));
let isPromocao = (prompt("O produto está em promoção?") === "Sim") 
    ? true 
    : false;
let categoria;

if ((!isPromocao) && (valorDoProduto < 200)){
    categoria = "Barato";
} else if ((isPromocao) 
    && (valorDoProduto >= 200) 
    && (valorDoProduto <= 3000)){
    categoria = "Moderado";
} else if (valorDoProduto > 3000){
    categoria = "Caro";
} else {
    categoria = null;
    alert("Erro. Tente novamente");
}

if (categoria != null){
    alert(categoria);
}


