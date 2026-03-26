let lista = [];

function Produto(nome, preco){
    this.nome = nome;
    this.preco = preco;
}

function cadastrarProduto(vetor, nome, preco){
    let item = new Produto(nome, preco);
    vetor.push(item);
    return vetor;
}

let nome;
let preco;

do{
    nome = prompt("Nome do produto:");

    if(nome === null || nome === ""){
        break;
    }

    preco = Number(prompt("Preço:"));
    lista = cadastrarProduto(lista,nome, preco);

} while (true);

let textoParaExibir = "";
let total = 0;

for (let item of lista) {
    textoParaExibir += `${item.nome} - R$ ${item.preco.toFixed(2).replace('.', ',')}\n`;
    total += item.preco;
}

textoParaExibir += `Total: R$ ${total.toFixed(2).replace('.', ',')}`;

alert(textoParaExibir);