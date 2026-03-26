let filmesFavoritos = [];

for(let i = 0; i < 5; i++){
    let filme = prompt(`Qual é o filme preferido da pessoa ${i + 1}?`)
    filmesFavoritos.push(filme);
}

let mensagemCaracteres = "";
let filmeMaiorNome = filmesFavoritos[0];
let somaCaracteres = 0;

for(let i = 0; i < filmesFavoritos.length; i++){
    let nomeAtual = filmesFavoritos[i];
    let tamanhoAtual = nomeAtual.length;

    mensagemCaracteres += `Filme ${i + 1} -  ${nomeAtual} - Caracteres: ${tamanhoAtual}\n`;

    if(tamanhoAtual > filmeMaiorNome.length){
        filmeMaiorNome = nomeAtual;
    }

    somaCaracteres += tamanhoAtual;
}

let qtDiferenteTitanic = filmesFavoritos.filter(e => e.toLowerCase() !== "titanic").length;
let media = (somaCaracteres / filmesFavoritos.length).toFixed(2);

alert(
    `${mensagemCaracteres}\n`+
    `Pessoas que não disseram Titanic: ${qtDiferenteTitanic}\n`+
    `Filme com mais caracteres: ${filmeMaiorNome}\n` +
    `Média caracteres no nome dos filmes informados: ${(media)}`);