let salarios = [];
let soma = 0;
let i = 0;
let media;

salarios.push(1990, 7500, 6800, 12000, 2300);

while(i < salarios.length){
    soma += salarios[i];
    i++;
}

media = soma/salarios.length;

console.log(media);
