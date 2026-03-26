console.log("1. Criando array e adicionando 5 paises a ele");
let paises = [];
paises.push("Brasil", "Venezuela", "Guatemala", "Porto Rico", "Argentina");
console.log(paises);

console.log("2. Length do array: " + paises.length);
console.log("3. Substituindo índice 2");
paises[2] = "Uruguai";
console.log(paises);


console.log("4. Adicionando país novo")
paises.push("Colômbia");
console.log(paises);

console.log("5. Apagando a terceira posição");
paises.splice(3,1);
console.log(paises);


console.log("6. Removendo última posição");
paises.pop();
console.log(paises);

console.log("7. Adicionando dois novos valores ao final do array de países");
paises.push("Paraguai", "Peru");
console.log(paises);