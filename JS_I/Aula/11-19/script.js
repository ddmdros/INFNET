let tamanho = prompt("Digite o tamanho (P, M ou G):");

// if (tamanho.toUpperCase() === "P"){
//     console.log("10");
// } else if(tamanho.toUpperCase() === "M"){
//     console.log("20");
// } else if(tamanho.toUpperCase() === "G"){
//     console.log("30");
// } else{
//     console.log("Erro");
// }

switch(tamanho.toUpperCase()){
    case("P"):
        console.log("10");
        break;
    case("M"):
        console.log("20");
        break;
    case("G"):
        console.log("30");
        break;
    default:
        console.log("Erro");
}

tamanho == "M" ? console.log("20") : tamanho == "G" ? console.log("30") : console.log("10");
