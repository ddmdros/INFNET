let idadeCibele = Number(prompt("Qual é a idade da Cibele?"));
let idadeCamila = Number(prompt("E da Camila?"));
let idadeCeleste = Number(prompt("E da Celeste?"));
let idadesIguais = false;

let maisVelha = Math.max(idadeCamila, idadeCeleste, idadeCibele);
let maisNova = Math.min(idadeCamila, idadeCeleste, idadeCibele);

if ((idadeCamila === idadeCeleste) || (idadeCamila === idadeCibele) || (idadeCeleste === idadeCibele)) {
    idadesIguais = true;
}

if (idadesIguais) {
    alert("Aha! Pensou que ia me enganar, né? Não tem nenhuma irmã com idade igual entre elas! Dá uma olhada nas idades informadas e tenta de novo!");
} else {
    alert("Pelas informações que me passou, eu posso dizer que...");

    if (maisVelha === idadeCamila) {
        alert("A Camila tem " + idadeCamila + " anos e é a mais velha!");
    } else if (maisNova === idadeCamila) {
        alert("A Camila tem " + idadeCamila + " anos e é a mais nova!");
    } else {
        alert("A Camila tem " + idadeCamila + " anos e é a irmã do meio!")
    }

}