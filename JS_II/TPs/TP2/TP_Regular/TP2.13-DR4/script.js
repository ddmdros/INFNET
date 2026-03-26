let qtNumeros = Number(prompt("Quantos números naturais deseja sortear?"));

for(let i = 0; i < qtNumeros; i++){
    console.log(Math.ceil(Math.random() * 60));
}
