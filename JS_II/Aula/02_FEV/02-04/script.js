let paises = ["China", "Brasil", "Colômbia", "Uruguai"];
let paises2 = ["Japão", "Alemanha", "França", "Itália"];

//Embaralhar listas - forma simplificada e menos precisa
// paises.sort(() => Math.random() - 0.5);

// console.log(paises);

//Spread(...)

//spread + sorted
// let ordenado = [...paises].toSorted();
// console.log(ordenado);

//concat
// let juncao = [...paises, "Irlanda", ...paises2];
// console.log(juncao);

// let nums = [4,1,7];
// let maior = Math.max(...nums);
// console.log(maior);



//MAP: cria um novo array, aplica a transformacao, nao altera o original

let numeros = [-10, 0, 4, 6, 10];
// let dobrados = numeros.map(n => n * 2);
// console.log(dobrados);

//FILTER
//let filtro = numeros.filter(n => n > 5 && n < 8);
//console.log(filtro);

//FIND: retorna o primeiro valor encontrado e encerra quando encontra ou retorna undefined
// let elemento = numeros.find(n => n % 2 == 0 && n < 2);
// console.log(elemento);

let pessoa = {
    nome: "Luiz",
    idade: 20
};

let pessoas = [pessoa, pessoa];

let p = pessoas.find(n => n .nome == "Luiz");
console.log(p);

//some: verifica se algum (argumento). Retorna boolean
let paresSome = numeros.some(n => n % 2 == 0);
console.log(paresSome);
//every: verifica se todos (argumento). Retorna boolean

// let pares = numeros.every(n => n % 2 == 0);
// console.log(pares);