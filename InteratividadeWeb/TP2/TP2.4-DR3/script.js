let p1 = document.querySelectorAll("p")[0];
let p2 = document.querySelectorAll("p")[1];
let p3 = document.querySelectorAll("p")[2];

p1.classList.add("fundo", "borda", "texto");
p2.classList.add("texto", "fundo");
p3.classList.add("borda", "fundo");

p1.classList.remove("borda");
p2.classList.replace("texto", "borda");
p3.classList.replace("borda", "texto");