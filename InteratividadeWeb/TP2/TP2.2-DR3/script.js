let btnInserir = document.getElementById("btn-inserir");
let container = document.getElementById('container-txt');

btnInserir.addEventListener("click", function(){
    container.innerHTML += "<p style='background-color: yellow; color: blue;'>As borboletas são azuis, mas as rosas são verdes.<br>E nós? O que será de nós?</p>";
});
