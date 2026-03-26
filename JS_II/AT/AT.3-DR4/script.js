let planetas = [ "Mercúrio", "Vênus", "Terra", "Marte", "Júpiter", "Terra", "Urano", "Netuno", "Plutão", "Ceres" ];

//removendo Vênus (antes da primeira Terra)
let primeiraTerra = planetas.indexOf("Terra");
planetas.splice(primeiraTerra - 1, 1);
console.log(planetas);

//removendo Urano (depois da segunda Terra)
let ultimaTerra = planetas.lastIndexOf("Terra");
planetas.splice(ultimaTerra + 1, 1);
console.log(planetas);

// tomei o cuidado de declarar ultima Terra depois
// de remover a primeira, para não cometer erros
// devido à reindexação


