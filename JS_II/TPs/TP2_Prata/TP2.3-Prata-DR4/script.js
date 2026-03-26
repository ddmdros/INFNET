const funcionarios = [
  { nome: "Nikola Tesla", idade: 86, salario: 1856.0, cargo: "Engenheiro" },
  { nome: "Alan Turing", idade: 41, salario: 1912.0, cargo: "Matemático" },
  { nome: "Albert Einstein", idade: 76, salario: 1879.0, cargo: "Físico" },
  { nome: "Marie Curie", idade: 67, salario: 1867.0, cargo: "Matemática" },
];

funcionarios.forEach(f => {
    f.salario = f.salario * 3;
})

let somaSalario = 0;
let qtFuncionarios = 0;
let maiorSalario = 0;
let menorSalario = funcionarios[0].salario;
let funcionarioMaiorSalario = "";
let cargoFuncionarioMenorSalario = funcionarios[0].cargo;


funcionarios.forEach(f => {
    somaSalario += f.salario;
    qtFuncionarios++;
    if(f.salario > maiorSalario){
        maiorSalario = f.salario;
        funcionarioMaiorSalario = f.nome;
    }
    if(f.salario < menorSalario){
        menorSalario = f.salario;
        cargoFuncionarioMenorSalario = f.cargo;
    }
});

let salarioMedio = somaSalario/qtFuncionarios;

console.log(funcionarios);
console.log(salarioMedio);
console.log(funcionarioMaiorSalario);
console.log(cargoFuncionarioMenorSalario);


let p = document.createElement("p");
p.innerHTML = `<strong>Salário médio da empresa após o reajuste:</strong> ${salarioMedio}<br><strong>Nome do funcionário com o maior salário:</strong> ${funcionarioMaiorSalario}<br><strong>Cargo funcionário com o menor salário:</strong> ${cargoFuncionarioMenorSalario}`;
document.body.appendChild(p);