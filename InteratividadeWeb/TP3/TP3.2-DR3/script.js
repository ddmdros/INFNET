let imagem = document.querySelector("img");
console.log(imagem);

imagem.addEventListener("load", function() {
    document.body.insertAdjacentHTML("beforeend", "<br>Quack, quack! Imagem carregada!");
    //usei insertAjacentHTML para adicionar sem quebrar
    imagem.style.border = "1px solid gold";
    imagem.style.borderRadius = "10px";
});
