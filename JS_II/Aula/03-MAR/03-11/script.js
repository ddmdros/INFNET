// let idade = "28";
// let altura = "1.8";

// console.log(typeof idade);
// console.log(typeof altura);

// idade = parseInt(idade);
// altura = parseFloat(altura);

// console.log(typeof idade);
// console.log(typeof altura);

// let x;
// console.log(x);

// let y = null;
// console.log(y);

// let pessoa = {nome: "Paulo", email: null};
// console.log(pessoa);
// pessoa.idade = 19;
// console.log(pessoa.idade);

//em GERAL, undefined é erro, null é de proposito (mas nem sempre)
// null não tem valor, COSTUMA ser colocado por ser humano. VALOR nulo.

// null = valor NULO
// undefined = valor INDEFINIDO


//_______________Manipulação de strings___________//

//template string
// class Aluno{
//     constructor(nome, idade, media){
//         this.nome = nome;
//         this.idade = idade;
//         this.media = media;
//     }
// }

// let aluno = new Aluno("Juca", 22, 28);
// console.log(`Nome: ${aluno.nome}\nIdade: ${aluno.idade}\nMédia: ${aluno.media}`);

//charAt, concat, indexOF, lastIndexOf, replace, search, splice, split, substring, toLowerCase, toUpperCase, length


// let curso = "GR";
// let modalidade = "L";
// let turno = "N";

//charAt
//console.log(curso.charAt(0));
//concat
//console.log(curso.concat(modalidade).concat(turno));
//indexOf
// var frase = "Vou chamar isso de cauda, cauda é um bom nome";
// let ind1 = frase.indexOf("cauda");
// console.log(ind1);
// let ind2 = frase.indexOf("cauda", 25);
// console.log(ind2);
// let ind3 = frase.indexOf("teto");
// console.log(ind3);
// let ind4 = frase.lastIndexOf("cauda");
// console.log(ind4);

// //replace
// let frase = "Foi buscar pão e queijo";
// let f = frase.replace("pão", "presunto");
// console.log(frase);
// console.log(f);

//search
// const regexCPF = /^\d{3}\.\d{3}\.\d{3}\-\d{2}$/;
// const regexCNPJ = /^\d{2}\.\d{3}\.\d{3}\/\d{4}\-\d{2}$/;
// const regexCPFouCNPJ = /(^\d{3}\.\d{3}\.\d{3}\-\d{2}$)|(^\d{2}\.\d{3}\.\d{3}\/\d{4}\-\d{2}$)/;

// //substring
// let nome = "Joaquim Luis Romualdo";
// let primeiroNome = nome.substring(0, nome.indexOf(" "));
// //console.log(primeiroNome);
// let ultimoNome = nome.substring(nome.lastIndexOf(" ") + 1);
// console.log(ultimoNome);

// let nome = "Luana Alves Silva";
// let data = "13/03/2026";
// let planetas = "Terra-Marte-Júpiter-Saturno";

// let vetorPlanetas = planetas.split("-");

// console.log(vetorPlanetas);