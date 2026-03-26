let salario = [];
let nome = [];
let continuar;
let nomeMaiorSalario;
let maiorSalario = 0;


do{
    let nomeInput = prompt("Nome:");
    nome.push(nomeInput);

    let salarioInput = Number(prompt("Salario:"));
    salario.push(salarioInput);

    if(salarioInput > maiorSalario){
        maiorSalario = salarioInput;
        nomeMaiorSalario = nomeInput;
    }

    do{
        continuar = prompt("Deseja continuar? (s/n)");
        if(!continuar) continuar = ""; // se o usuario cancelar, o continuar vai ser "null" e o codigo vai quebrar. Aqui, garantimos que o cancelar será uma string;

    } while((continuar.toLocaleLowerCase() !== "s") && (continuar.toLocaleLowerCase() !== "n"));

}while(continuar.toLocaleLowerCase() === "s");

console.log("Maior salário:" + maiorSalario + "(" + nomeMaiorSalario + ")");
