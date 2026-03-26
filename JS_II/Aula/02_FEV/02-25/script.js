// function exibir(texto){
//     alert(texto);
// }

// reutilizavel
// function exibir(){
//     alert("oi via function");
// }

// let btn = document.getElementById("btn");
//btn.onclick = exibir;


//via funcao anonima
// btn.onclick = function (){
//     alert("ola");
// }

// via event listener
// btn.addEventListener("click", function(){
//     alert("via eventListener")
// });

// let itens = document.querySelectorAll("#itens li");

// for(let i = 0; i < itens.length; i++){
//     itens[i].addEventListener("click", function(e){
//         //this.style.color = "green";
//         //console.log(e);
//         e.target.style.color = "blue";
        
//     })
// }

// window.onload = function(){
//     this.alert("teste");
// }

// function somar (a, b){
//     alert(a + b)
// }

// somar(3,5);

// var x = function(){
//     somar(2,4)
// }

function calcularIMC(peso, altura){
    let total = peso / altura ** 2;
    return total;
}

let imc = calcularIMC(80,1.80);
console.log(imc);

