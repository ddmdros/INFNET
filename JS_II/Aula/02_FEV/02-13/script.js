// let idades = [];
// let soma = 0;
// let menorIdade = 0;

// for(let i = 1; i < 3; i++){

//     mais moderno
//     let idadeInput = Number(prompt("Idade"));
//     idades.push(idadeInput);
//     soma += idadeInput;
//     idades.push(Number(prompt("Idade")));

//     Bom saber pq cai em testes
//     e tb funciona em linguagens mais cruas, tipo C

//     idades[i] = Number(prompt("Idade"));
//     soma += idades[i];

//     if(idades[i] < menorIdade || i == 0){
//         menorIdade = idades[i];
//     }

// }

// let altura = [];
// let sexo = [];
// let maiorAltura = 0;
// let menorAltura = 0;
// let numHomens = 0;
// let numMulheres = 0;
// let somaAlturaMulheres = 0;


// for(let i = 0; i < 5; i++){
//     altura[i] = Number(prompt("Altura"));
//     sexo[i] = prompt("Sexo (m ou f)").toLowerCase();

//     if(sexo[i] === "m" ){
//         numHomens++;
//     }

//     if(sexo[i] === "f" ){
//         numMulheres++;
//         somaAlturaMulheres += altura[i];
//     }

//     if(altura[i] < menorAltura || i === 0){
//         menorAltura = altura[i];
//     }

//     if(altura[i] > maiorAltura || i === 0){
//         maiorAltura = altura[i];
//     }

// }

// console.log("Maior altura: " + maiorAltura);
// console.log("Menor altura: " + menorAltura);
// if(numMulheres > 0){
//     console.log("Média altura das mulheres: " + somaAlturaMulheres/numMulheres);
// }
// console.log("Número de homens: " + numHomens);

// class Carro{
//     constructor(modelo, cavalos){
//         this.modelo = modelo;
//         this.cavalos = cavalos;
//     }
// }

// let carros = [];
// let modelo;
// let cavalos;
// let maiorNumCavalos = 0;
// let indicePotente;
// let carroPotente;

// for(let i = 0; i < 3; i++){
//     modelo = prompt("Modelo");
//     cavalos = Number(prompt("Cavalos"));

//     let carro = new Carro(modelo, cavalos);
//     carros.push(carro);

//     if(carros[i].cavalos > maiorNumCavalos){
//         maiorNumCavalos = carros[i].cavalos;
//      carroPotente = carros[i];
//         indicePotente = [i];
//     }

// }

//console.log(carroPotente);
//console.log(carros[indicePotente]);

let matriz = new Array(3);

for(let i = 0; i < 3; i++){
    for(let j = 0; j < 3; j++){
        matriz[i][j] = Number(prompt("Digite um numero"));
    }
}