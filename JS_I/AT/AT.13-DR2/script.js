let dia1 = Number(prompt("Digite o dia da primeira data"));
let mes1 = Number(prompt("Digite o mês da primeira data"));
let ano1 = Number(prompt("Digite o ano da primeira data"));

let dia2 = Number(prompt("Digite o dia da segunda data"));
let mes2 = Number(prompt("Digite o mês da segunda data"));
let ano2 = Number(prompt("Digite o ano da segunda data"));

let data1Ms = new Date(ano1, mes1 - 1, dia1).getTime();
let data2Ms = new Date(ano2, mes2 - 1, dia2).getTime();

const milissegundosPorDia = 1000 * 60 * 60 * 24;

if (data1Ms < data2Ms){
    let diferenca = Math.floor((data2Ms - data1Ms) / milissegundosPorDia);
    alert(diferenca);
} else {
    alert("Erro. Tente novamente");
}
