let fotoGraos = document.getElementById("img-cafe");


console.log(fotoGraos);
fotoGraos.addEventListener("click", function(){
    
    this.setAttribute("src", "src/xicara_cafe.jpg");
    this.setAttribute("title", "xícara de café");
})