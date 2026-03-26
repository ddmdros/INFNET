let botao = document.querySelector("button");
let cores = ["corVerde", "corRoxa", "corLaranja", "corVermelha"];
let areaInicial = document.getElementById("novo");
let containers = document.querySelectorAll(".container");
let destinos = [...containers, areaInicial];

// no começo, tinha colocado destinos
// dentro do próprio evento de botão,
// mas depois vi que poderia trazer
// para fora para economizar processamento

destinos.forEach(destino => {
    destino.addEventListener("dragover", e => e.preventDefault());

    //feedback visual (UX thinking) [firula]:
    destino.addEventListener("dragenter", e=>{
        if(!e.target.classList.contains("caixinha")){
            e.target.style.backgroundColor = "rgba(0,0,0,0.1)";
        }
    });

    destino.addEventListener("dragleave", e=> {
        e.target.style.backgroundColor = "";
    });

    //codigo da funcionalidade em si:
    destino.addEventListener("drop", e => {
        e.target.style.backgroundColor = "";
        let id = e.dataTransfer.getData("text");
        let elemento = document.getElementById(id);

        if(e.target.classList.contains("caixinha")){
            e.target.parentElement.appendChild(elemento);
        } else {
            e.target.appendChild(elemento);
        }
    })
});

botao.addEventListener("click", function(){
    let novaCaixinha = document.createElement("div");
    novaCaixinha.classList.add("caixinha");
    novaCaixinha.draggable = true;
    novaCaixinha.id = `caixa-${Date.now()}`; // => mt profissional ele hehe
    // tinha feito com areaInicial.childElementCount antes, mas Date.now() é
    // mais preciso

    let numAleatorio = Number(Math.floor(Math.random() * cores.length)); 
    //.lenght ajusta dinamicamente se colocarmos mais cores dps
    let corAleatoria = cores[numAleatorio];
    novaCaixinha.classList.add(corAleatoria);

    //demorei a entender que devia fazer os eventos de drag 
    //dentro do evento de criação //melt

    novaCaixinha.addEventListener("dragstart", e => {
        e.target.style.opacity = "0.5";    
        console.log(e.target.id);
        e.dataTransfer.setData("text", e.currentTarget.id);
    });    

    novaCaixinha.addEventListener("dragend", e => {
        e.currentTarget.style.opacity = "1";
    });

    areaInicial.appendChild(novaCaixinha);

});
