let valorAcumulado = 0;
let indiceDeModificacao = Number(prompt("Defina um valor para somar ou subtrair: "));

for (let i = 0; i < 3; i++) {
  let respostaUsuario = Number(
    prompt("Digite 1 para SOMAR " + indiceDeModificacao + "\nDigite 2 para SUBTRAIR " + indiceDeModificacao)
  );

  if (respostaUsuario == 1) {
    valorAcumulado += indiceDeModificacao;
    alert("Valor atual: " + valorAcumulado);
  } else if (respostaUsuario == 2) {
    valorAcumulado -= indiceDeModificacao;
    alert("Valor atual: " + valorAcumulado);
  } else {
    alert("Resposta inválida. Tente novamente");
  }
}

alert("Fim! Valor final: " + valorAcumulado);
