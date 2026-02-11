let valor = 0;

for (let i = 0; i < 3; i++) {
  let respostaUsuario = Number(
    prompt("Digite 1 para SOMAR 1.\nDigite 2 para SUBTRAIR 1")
  );

  if (respostaUsuario == 1) {
    valor++;
    alert("Valor atual: " + valor);
  } else if (respostaUsuario == 2) {
    valor--;
    alert("Valor atual: " + valor);
  } else {
    alert("Resposta inválida. Tente novamente");
  }
}

alert("Fim! Valor final: " + valor);
