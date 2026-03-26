// - Evento drag

// O evento `drag` ocorre quando um elemento, 
// é `arrastado` pelo usuário. Ele é `disparado`
//  no elemento que está sendo arrastado.
// Para habilitar o `arrastar` de um elemento,
// é necessário definir o atributo `draggable`, 
// como `true` para esse elemento. Além disso, 
// é necessário adicionar um `ouvinte de evento`, 
// para o evento `dragstart` no elemento arrastado, 
// que define os dados a serem `transferidos` durante 
// o arrastar, utilizando o método `setData` do objeto `dataTransfer`

let caixinhas = document.querySelectorAll(".caixinha");
let containers = document.querySelectorAll(".container");
let areaInicial = document.querySelector("#novo");

caixinhas.forEach(c => {
    c.addEventListener("dragstart", function(e) {
        e.target.style.opacity = "0.5";
        e.dataTransfer.setData("text", e.target.id);
        console.log("peguei" + e.target.id);
    })

    c.addEventListener("dragend", function(e){
        e.target.style.opacity = "1";
    })
});

// - Evento drop

// O evento `drop` ocorre quando um elemento arrastado,
// é `solto` em um alvo `válido`. Ele é `disparado`
// no elemento de destino, onde o `elemento arrastado`
//  está sendo `solto`. Para `permitir` que um elemento seja 
// `solto` em um `alvo`, é necessário adicionar um `
// ouvinte de evento`, para o evento `dragover`
//  no elemento de destino e, dentro desse ouvinte, 
// chamar o método `preventDefault()` para permitir
//  que o elemento seja solto. Além disso, é necessário
//  adicionar um ouvinte de evento para o evento `drop`
//  no elemento de destino, onde a `lógica` para manipular os
//  `dados transferidos` é implementada.

const destinos = [...containers, areaInicial];

destinos.forEach(d => {
    d.addEventListener("dragover", function(e){
        e.preventDefault();
    });

    d.addEventListener("drop", function(e){
        e.preventDefault();
        let id = e.dataTransfer.getData("text");
        let elemento = document.getElementById(id);

        if(e.target.classList.contains("caixinha")){
            e.target.parentElement.appendChild(elemento);
        }else{
            e.target.appendChild(elemento);
        }
    });
});
