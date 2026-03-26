class Pessoa {
  constructor(altura, sexo){
    this.altura = altura;
    this.sexo = sexo;
  }
}

function novaPessoa(altura, sexo){
  return new Pessoa(altura, sexo);
}

let pessoas = [];
let i = 0;

do{
  let altura = Number(prompt(`Digite a altura da pessoa ${i + 1}`));
  let sexo = prompt(`Digite o sexo da pessoa ${i + 1}`);
  
  let pessoa = novaPessoa(altura, sexo);
    pessoas.push(pessoa);
    i++;

}while(i < 5);

console.log(pessoas);

let maiorAltura = 0;
let menorAltura = pessoas[0].altura;
let qtMulheres = 0;
let somaAlturaMulheres = 0;
let mediaAlturaMulheres = 0;
let qtHomens = 0;

pessoas.forEach(e  => {
  if(e.altura > maiorAltura){
    maiorAltura = e.altura;
  }

  if(e.altura < menorAltura){
    menorAltura = e.altura;
  }

  if(e.sexo.toLowerCase() === "f"){
    qtMulheres++;
    somaAlturaMulheres += e.altura;
  }

  if(e.sexo.toLowerCase() === "m"){
    qtHomens++;
  }

  
});

mediaAlturaMulheres = qtMulheres > 0 ? (somaAlturaMulheres/qtMulheres).toFixed(2) : 0;

alert(`Maior altura do grupo: ${maiorAltura}\nMenor altura do grupo: ${menorAltura}\nMédia da altura das mulheres: ${mediaAlturaMulheres}\nQuantidade de homens: ${qtHomens}`);


//P.S.: Como o exercício não pediu, não fiz validação de dados de entrada (ex.: cancelar, isNaN, etc), foquei apenas na lógica