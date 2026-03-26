// Nesse exercício, comecei de trás para frente
// Primeiro fiz um código dinâmico, depois fiz um downgrade.

//Aqui está o que o exercício pediu

let nomeTime = prompt("Nome do time:");
let qtdVitorias = Number(prompt("Quantidade de vitórias:"));
let qtdEmpates = Number(prompt("Quantidade de empates:"));
let qtdDerrotas = Number(prompt("Quantidade de derrotas"));

function calcularEstatisticas(nomeTime, qtdVitorias, qtdDerrotas, qtdEmpates){
    let totalPontos = (qtdVitorias * 3) + qtdEmpates;
    let totalDeJogos = qtdVitorias + qtdDerrotas + qtdEmpates;
    let mediaPontosPorJogo = totalPontos/totalDeJogos;

    console.log(`Estatística do time ${nomeTime}\n
        Total de pontos: ${totalPontos}\n
        Pontos por jogo (média): ${mediaPontosPorJogo.toFixed(2)}`);
}

calcularEstatisticas(nomeTime, qtdVitorias, qtdDerrotas, qtdEmpates);


// Aqui foi por onde comecei, criando uma classe e um loop que permite
// que o usuário continue inserindo dados

// class DesempenhoTime {
//     constructor(nomeTime, qtdVitorias, qtdDerrotas, qtdEmpates) {
//         this.nomeTime = nomeTime;
//         this.qtdVitorias = qtdVitorias;
//         this.qtdDerrotas = qtdDerrotas;
//         this.qtdEmpates = qtdEmpates;
//     }

//     totalPontos = 0;
//     mediaPontosPorJogo = 0;

//     calcularEstatisticas() {
//         this.totalPontos = (this.qtdVitorias * 3) + this.qtdEmpates;
//         this.totalJogos = this.qtdDerrotas + this.qtdEmpates + this.qtdVitorias;

//         if(this.totalJogos > 0){
//             this.mediaPontosPorJogo = this.totalPontos / this.totalJogos;
//         }

//         return this;
//     }

// }

// let times = [];
// let continuar = true;

// while(continuar){

//     let nome = prompt("Nome do time");
//     let vitorias = Number(prompt("Quantidade de vitórias"));
//     let derrotas = Number(prompt("Quantidade de derrotas"));
//     let empates = Number(prompt("Quantidade de empates"));

//     let novoTime = new DesempenhoTime(nome, vitorias, derrotas, empates);
//     novoTime.calcularEstatisticas();
//     times.push(novoTime);
//     continuar = confirm("Deseja adicionar mais um time?");
// }

// console.log("Tabela de classificação final:");
// console.table(times);

