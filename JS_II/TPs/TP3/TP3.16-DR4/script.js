function mapearRaizes(numeros){
    return numeros.map(n => Math.sqrt(n).toFixed(2));
}

let arr = [];
for(let i = 0; i < 5; i++){
    let numAtual = Number(prompt("Insira um número"));
    arr.push(numAtual);
}

let arrRaizQuadrada = mapearRaizes(arr);

console.log("Array original: " + arr);
console.log("Array com raízes quadradas " + arrRaizQuadrada);