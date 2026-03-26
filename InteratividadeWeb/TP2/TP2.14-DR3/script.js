let linhas = document.querySelectorAll(".azul, .vermelho");

linhas.forEach(linha => {
    linha.classList.toggle("azul");
    linha.classList.toggle("vermelho");
});

