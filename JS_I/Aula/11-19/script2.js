let genero = prompt("Digite o seu gênero (M ou F)").trim().toUpperCase();
let tamanho = prompt("Digite o tamanho da camiseta (P, M ou G)").trim().toUpperCase();
let generoCamiseta;
let valor;

switch(tamanho){
    case "P":
        genero === "M" ? valor = 30 : valor = 40;
        break;
    case "M":
        genero === "M" ? valor = 45 : valor = 55;
        break;
    case "G":
        genero === "M" ? valor = 60 : valor = 70;
        break;
    default:
        alert("Erro. Tente novamente");
        valor = null;
}

switch(true){ 
    case (genero === "M") && (tamanho === "P"): 
        valor = 30; 
        break; 
    case (genero === "M") && (tamanho === "M"): 
        valor = 45; 
        break; 
    case (genero === "M") && (tamanho === "G"): 
        valor = 60; 
        break; 
    case (genero === "F") && (tamanho === "P"): 
        valor = 40;
        break;
    case (genero === "F") && (tamanho === "M"):
        valor = 55;
        break;
    case (genero === "F") && (tamanho === "G"):
        valor = 70;
        break;
    default:
        valor = null;
        alert("Erro de digitação"); 
}

if ((genero === "M") && (tamanho === "P")){
    valor = 30;
} else if ((genero === "M") && (tamanho === "M")){
    valor = 45;
} else if ((genero === "M") && (tamanho === "G")){
    valor = 60;
} else if ((genero === "F") && (tamanho === "P")){
    valor = 40;
} else if ((genero === "F") && (tamanho === "M")){
    valor = 55;
} else if ((genero === "F") && (tamanho === "G")){
    valor = 70;
} else{
    alert("Erro. Tente novamente");
    valor = null;
}

if (valor !== null){
    generoCamiseta = genero === "M" ? "masculina" : "feminina";
    alert(`Camiseta ${generoCamiseta} tamanho ${tamanho}: R$: ${valor.toFixed(2)}`);
}
