let anos = Number(prompt("Digite sua idade em anos:"));
let meses = Number(prompt("Digite em meses"));
let dias = Number(prompt("Digite em dias"));
let idadeEmDias;

anosEmDias = anos*365*12;
mesesEmDias = 30;

idadeEmDias = anosEmDias + mesesEmDias + dias;

alert("Sua idade em dias é: " + idadeEmDias + "dias");