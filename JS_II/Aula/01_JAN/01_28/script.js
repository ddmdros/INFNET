let vetor = [];
let numeros = [2, 4, 18, 15, 3];
let paises = ["Brasil", "Chile", "Noruega"];

//exibindo todo o vetor
console.log(paises);

//exibindo o que está em determinada posição do vetor
console.log(paises[0]);
console.log(paises[1]);

//adicionando item array
console.log(paises[10] = "Argentina");
console.log(paises);

//descobrindo tamanho do array
console.log(paises.length);

//exibindo ultimo elemento
console.log(paises[paises.length - 1]);

// push - adiciona no final do array
//let pais = prompt("Digite um pais");
paises.push("Venezuela", "Paraguai");
console.log(paises);

//pop - retira do ultimo
paises.pop();
console.log(paises);

// unshift - adiciona no inicio do array
paises.unshift("Unshift");
console.log(paises);

//shift - retira no inicio do array
paises.shift();
console.log(paises);

//erros comuns

//1- erro de acesso (acessando indices nao existentes)
console.log(paises[0]);
console.log(paises[55]);

//"gambiarra p adicionar em posicao especifica"
// prefira unshift (adiciona no começo) ou push (adiciona no fim)
paises[55] = "Iraque";
console.log(paises[55]);


//delete -- cuidado. Remove o conteúdo, mas deixa vazio.
//Prefira pop (remove do final) ou shift (remove do começo)
delete paises[1];
console.log(paises);

//splice() -- remover e ou inserir em qqr posicao
let novoArray = ["Brasil", "Chile", "India"];

//remover
//novoArray.splice(2,1); //(posicao inicial, quantos elementos vai remover)
//console.log(novoArray);

//remove todo mundo a partir daquela posicao
//paises.splice(1);
//console.log(paises);

//remove a partir do penultimo
//paises.splice(paises.lenght -2);


//Adicao com splice (adiciona e empurra todo mundo)
//paises.splice(1, 0, "Italia");
//console.log(paises);

//remocao e insercao ao mesmo tempo (troca um pelo outro)


// paises.splice(2,1,"Paraguai");
// console.log(paises);

let nomes = ["Julio", "Ana", "Caio"];
//nomes.sort();

// console.log(nomes);

//sort compara strings, entao dá ruim em numeros (10 vem antes de 2)
// let numeros2 = [2, 10, 4];
// numeros2.sort();
// console.log(numeros2); 

//nomes.reverse();
//reverse inverte, não é alfabeticamente inverso

//alfabeticamente inverso é: 
nomes.sort().reverse();


console.log(nomes);
