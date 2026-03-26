let paises = [];
paises.push("Brasil", "Venezuela", "Guatemala", "Porto Rico", "Argentina");
console.log(paises);
console.log(paises.length);
paises[2] = "Uruguai";
console.log(paises);

//Adicionando país novo
paises.push("Colômbia");
console.log(paises);

paises.splice(3,1);
console.log(paises);
