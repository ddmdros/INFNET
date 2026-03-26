const produtosGamers = [
  { nome: "Teclado Mecânico", preco: 350 },
  { nome: "Mouse Gamer", preco: 150 },
  { nome: "Headset", preco: 200 },
  { nome: "Monitor 144Hz", preco: 1200 },
  { nome: "Mousepad RGB", preco: 90 },
];

let produtosRestantes = [...produtosGamers];
let produtosMaisBaratos = [];

for (let i = 0; i < 3; i++){
  let indiceMaisBarato = 0;

  for (let j = 1; j < produtosRestantes.length; j++){
    if(produtosRestantes[j].preco < produtosRestantes[indiceMaisBarato].preco){
      indiceMaisBarato = j;
    }
  }

  produtosMaisBaratos.push(produtosRestantes[indiceMaisBarato]);
  
  produtosRestantes.splice(indiceMaisBarato,1);

}

console.log(produtosMaisBaratos);