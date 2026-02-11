function Advogado(nome, horasTrabalhadas, valorHora){
    this.nome = nome;
    this.horasTrabalhadas = horasTrabalhadas;
    this.valorHora = valorHora;

    this.calcularGanho = function(){
        let valorTotalGanho = this.horasTrabalhadas * this.valorHora;
        return valorTotalGanho;
    }
}

let nomeUsuario = prompt("Informe o seu nome");
let horasTrabalhadasUsuario = Number(prompt("Informe a quantidade de horas trabalhadas"));
let valorHoraUsuario = Number(prompt("Informe o valor da sua hora, em reais"));

let adv1 = new Advogado(nomeUsuario, horasTrabalhadasUsuario,valorHoraUsuario);
let valorGanhoAdv1 = adv1.calcularGanho();
console.log(valorGanhoAdv1);