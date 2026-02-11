let altura = Number(prompt("Insira sua altura"));
let genero = prompt("M para homem, F para mulher").trim().toUpperCase();
let pesoIdeal;

pesoIdeal = genero === "M" ? ((72.7*altura) - 58) : ((62.1*altura)-44.7);

alert("Seu peso ideal é " + pesoIdeal.toFixed(2) + "kg");
