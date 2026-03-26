const filmesNerds = [
  { titulo: "Star Wars: Uma Nova Esperança", ano: 1977 },
  { titulo: "Matrix", ano: 1999 },
  { titulo: "Harry Potter e a Pedra Filosofal", ano: 2001 },
  { titulo: "Senhor dos Anéis: A Sociedade do Anel", ano: 2001 },
];

let anoHarryPotter = 0;

for(let i = 0; i < filmesNerds.length; i++){
    if(filmesNerds[i].titulo === "Harry Potter e a Pedra Filosofal"){
        anoHarryPotter = filmesNerds[i].ano;
    }
}

console.log(anoHarryPotter);