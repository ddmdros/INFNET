const abelha = document.getElementById("abelha");
const destino = document.getElementById("destino");
const girassol = document.getElementById("girassol");
const titulo = document.getElementById("tituloh2");
const origem = document.getElementById("origem");

//alcança

abelha.addEventListener("dragstart", function(e){
    e.dataTransfer.setData("text/plain", e.target.id);
    console.log("peguei" + e.target.id);
});

titulo.addEventListener("dragstart", function(e){
    e.dataTransfer.setData("text/plain", e.target.id);
    console.log(e.target.id);
});

girassol.addEventListener("dragstart", function(e){
    e.dataTransfer.setData("text/plain", e.target.id);
    console.log("peguei" + e.target.id);
});


//sobrevoa

destino.addEventListener("dragover", function(e){
    e.preventDefault();
    const id = e.dataTransfer.getData("text/plain");
    //console.log(id + "sobrevoando");
});

origem.addEventListener("dragover", function(e){
    e.preventDefault();
    const id = e.dataTransfer.getData("text/plain");
    //console.log(id + "sobrevoando");
});

//solta

destino.addEventListener("drop", function(e){
    e.preventDefault();
    const id = e.dataTransfer.getData("text/plain");
    console.log("soltei " + id);
    const elemento = document.getElementById(id);
    destino.appendChild(elemento);
})

origem.addEventListener("drop", function(e){
    e.preventDefault();
    const id = e.dataTransfer.getData("text/plain");
    console.log("soltei " + id);
    const elemento = document.getElementById(id);
    origem.appendChild(elemento);
})
