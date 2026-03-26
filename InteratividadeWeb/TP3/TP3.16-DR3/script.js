let lista = document.getElementById("lista");
console.log(lista);

lista.addEventListener("click", function() {
    let primeiro = lista.firstElementChild;
    primeiro.innerText = "Amapá"
    primeiro.style.backgroundColor = "blue";
    
})