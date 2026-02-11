let numeroUsuario = Number(prompt("Chute um número"));
let numeroAleatorio = Math.floor(Math.random() * 100) + 1;

if (numeroAleatorio === numeroUsuario){
    alert("Correto!");
} else if (numeroUsuario < numeroAleatorio){
    alert("Muito baixo.");
} else if (numeroUsuario > numeroAleatorio){
    alert("Muito alto.");
} else{
    alert("Erro. Tente novamente");
}

// O mais interessante é fazer um loop, mas o AT não pediu.

// Se fôssemos fazer um loop, mantemos a declaração 
// do numero aleatório como está e declaramos o numeroUsuario vazio
// e depois entramos no loop:


// let numeroAleatorio = Math.floor(Math.random() * 100) + 1;
// let numeroUsuario;

// while (numeroUsuario != numeroAleatorio) {
//     numeroUsuario = Number(prompt("Chute um número"));

//     if (numeroAleatorio === numeroUsuario){
//         alert("Correto!");
//     } else if (numeroUsuario < numeroAleatorio){
//         alert("Muito baixo.");
//     } else if (numeroUsuario > numeroAleatorio){
//         alert("Muito alto.");
//     } else{
//         alert("Erro. Tente novamente");
//     }
    
// }