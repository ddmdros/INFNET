let lista = document.getElementById("lista-frutas");

lista.addEventListener("click", function(e){
    if(e.target.tagName === "LI"){
        alert(e.target.textContent);
    }
});
