//Exercício 1 aula 30/01/26

//Crie um vetor
let cores = [];

//Peça para o usuário preencher 4 cores e adicione cada cor no vetor criado
let entrada = prompt("Insira quatro cores separadas por vírgula (ex: amarelo, azul, laranja, verde");
cores = entrada.split(",").map(cor => cor.trim());
console.log("Vetor fornecido pelo usuario: " + cores);

//retire a última cor
cores.pop();
console.log("Removendo a última cor: " + cores);

//Adicione duas novas cores
cores.push("indigo", "anil");
console.log("Adicionando duas cores: " + cores);

//Escreva na tela a primeira posição
console.log("primeira posição: " + cores[0]);
//Escreva na tela a última posição do vetor
console.log("última posição: " + cores[cores.length - 1]);

//Retire o segundo e terceiro itens
cores.splice(1,2);
console.log("removendo segundo e terceiros itens: " + cores);

//Coloque o vetor em ordem alfabética
cores.sort();
//Exiba o vetor
console.log("colocando em ordem alfabetica: " + cores);

//Coloque o vetor em ordem alfabética reversa
cores.reverse();
//Exiba o vetor
console.log("colocando em ordem alfabetica reversa: " + cores);


