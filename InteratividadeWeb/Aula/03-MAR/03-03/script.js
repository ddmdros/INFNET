const botao = document.querySelector("#botao");
botao.addEventListener("click", function () {
  alert("O botão foi clicado!");
});

const titulo = document.querySelector("h1");
titulo.addEventListener("click", function () {
  titulo.innerHTML = "O título mudou pq o elemento h1 foi clicado!";
});

const parag = document.querySelector("#meuParagrafo");
parag.addEventListener("mouseup", function () {
  parag.style.color = "steelblue";
});

/* parag.addEventListener("mouseleave", function () {
  parag.style.color = "black";
}); */

const input = document.getElementById("entradaInput");
const resultado = document.getElementById("resultado");
/* input.addEventListener("keyup", function (event) {
  alert(input.value);
  resultado.textContent = input.value;
  if (event.key === "ArrowDown") {
    alert("Clicou no ArrowDown");
  } else {
    alert("Clicou na tecla: " + this.value);
  }
});
 */
input.addEventListener("change", function () {
  alert(input.value);
  resultado.textContent = input.value;
  input.value = "";
});
