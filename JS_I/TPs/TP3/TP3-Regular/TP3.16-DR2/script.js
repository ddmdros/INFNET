let passoUsuario = prompt("Passo a passo para fazer café na V60 e fazer de conta que é chique\nEste passo a passo é composto de 10 etapas. Digite a etapa a partir da qual você deseja iniciar (1-10):");

if (passoUsuario === null){
    alert("Operação cancelada pelo usuário");
    return;
}

passoUsuario = Number(passoUsuario);

if (isNaN(passoUsuario) || !(Number.isInteger(passoUsuario)) || (passoUsuario <= 0) || (passoUsuario > 10)){
    alert("Insira um número válido inteiro positivo de 1 a 10");
    return;
}

let passo1 = "Passo 1: Torre o café\n\n";
let passo2 = "Passo 2: Moa o café\nUse uma moagem média para esse método\n\n";
let passo3 = "Passo 3: Aqueça a água\nAqueça a água entre 90ºC e 95ºC em um bule bico de ganso.\n\n";
let passo4 = "Passo 4: Filtro\nColoque o filtro V60 sobre a jarra onde o café será servido\n\n";
let passo5 = "Passo 5: Escalde\nEscalde o filtro com a água quente. Descarte essa água\n\n"
let passo6 = "Passo 6: Adicionar o café\nColoque o café torrado e moído no filtro. A proporção é: 20g de café para cada 300ml de água (1:15)\n\n"
let passo7 = "Passo 7: Pré-infusão (bloom)\n Despeje 60ml de água (3x o peso do café) de forma lenta e circular, o suficiente apenas para cobrir todo o pó. Aguarde de 30 a 45 segundos.\n\n"
let passo8 = "Passo 8: Infusão\nApós o bloom, despeje a água em movimentos circulares do centro para as bordas. Evite despejar diretamente nas paredes do filtro. Faça isso até alcançar a medida desejada conforme a proporção de café adicionado. Lembre-se de que o tempo de infusão não deve ultrapassar os 3m\n\n";
let passo9 = "Passo 9: Observação\nA cama no final deve estar plana e homogênera, indicando uma extração bem distribuída\n\n";
let passo10 = "Passo 10: Sirva o café\n\n";

switch(passoUsuario){
    case(1):
        alert(passo1 + passo2 + passo3 + passo4 + passo5 + passo6 + passo7 + passo8 + passo9 + passo10);
        break;
        
    case(2):
        alert(passo2 + passo3 + passo4 + passo5 + passo6 + passo7 + passo8 + passo9 + passo10);
        break;

    case(3):
        alert(passo3 + passo4 + passo5 + passo6 + passo7 + passo8 + passo9 + passo10);
        break;

    case(4):
        alert(passo4 + passo5 + passo6 + passo7 + passo8 + passo9 + passo10);
        break;
    case(5):
        alert(passo5 + passo6 + passo7 + passo8 + passo9 + passo10);
        break;
    case(6):
        alert(passo6 + passo7 + passo8 + passo9 + passo10);
        break;
    case(7):
        alert(passo7 + passo8 + passo9 + passo10);
        break;
    case(8):
        alert(passo8 + passo9 + passo10);
        break;
    case(9):
        alert(passo9 + passo10);
        break;
    case(10):
        alert(passo10);
        break;
    default:
        alert("Opção inválida. Tente novamente");

}