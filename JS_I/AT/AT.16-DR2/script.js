let diaUsuario = prompt("Digite o dia atual (1-31)");
let mesUsuario = prompt("Digite o mês atual (1-12)");

diaUsuario = parseInt(diaUsuario);
mesUsuario = parseInt(mesUsuario);

const MS_POR_MINUTO = 1000 * 60;
const MS_POR_HORA = MS_POR_MINUTO * 60;
const MS_POR_DIA = MS_POR_HORA * 24;

let hoje = new Date();
let anoAtual = hoje.getFullYear();

let dataUsuario = new Date(
  anoAtual,
  mesUsuario - 1,
  diaUsuario,
  hoje.getHours(),
  hoje.getMinutes(),
  hoje.getSeconds(),
  hoje.getMilliseconds()
);

let anoNovo = anoAtual + 1;

let dataFinal = new Date(anoNovo, 0, 1, 0, 0, 0, 0);

let diferencaMS = dataFinal.getTime() - dataUsuario.getTime();

if (diferencaMS < 0) {
  alert("Data inválida");
} else {
  let restante = diferencaMS;
  let diferencaDias = Math.floor(restante / MS_POR_DIA);
  restante = restante % MS_POR_DIA;

  let diferencaHoras = Math.floor(restante / MS_POR_HORA);
  restante = restante % MS_POR_HORA;

  let diferencaMinutos = Math.floor(restante / MS_POR_MINUTO);

//   Exagero, mas resolvi brincar com o plural abaixo:

  alert(
    `${
      diferencaDias === 1 || diferencaDias === 0 ? "Falta" : "Faltam"
    } ${diferencaDias} ${
      diferencaDias === 1 || diferencaDias === 0 ? "dia" : "dias"
    }, ` +
      `${diferencaHoras} ${
        diferencaHoras === 1 || diferencaHoras === 0 ? "hora" : "horas"
      } e ` +
      `${diferencaMinutos} ${
        diferencaMinutos === 1 || diferencaMinutos === 0 ? "minuto" : "minutos"
      } para o Ano Novo!`
  );
}
