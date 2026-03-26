let valoresUsuario = [];

for(let i = 0; i < 3; i++){
    let num = Number(prompt(`Insira o ${i + 1} número:`));
    if(!isNaN(num)){
        valoresUsuario.push(num);
    }
}

// A pegadinha aq é o sort() bagunça ao organizar 
// números, pq foi feito para ser usado com strings
// Podemos usar uma arrow function, que parece ser 
// a opção mais adotada no mercado:

// valoresUsuario.sort((a,b) => a - b); 

//Como o prof Lauro pediu para exercitarmos a lógica, 
// aqui está a conversão com for:

for(let i = 0; i < valoresUsuario.length; i++){
    for (let j = 0; j < valoresUsuario.length - 1; j++){
        if(valoresUsuario[j] > valoresUsuario[j + 1]){
            let temp = valoresUsuario[j];
            valoresUsuario[j] = valoresUsuario[j + 1];
            valoresUsuario[j + 1] = temp;
        }
    }
}

console.log("Lista ordenada: " + valoresUsuario);