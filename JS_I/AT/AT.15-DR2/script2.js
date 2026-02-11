

console.log(window.navigator.appCodeName);
console.log(window.navigator.language);
console.log(window.navigator.userAgent);
console.log(window.navigator.appVersion);


let campo = window.document.getElementById("campo");
let valor = window.document.getElementById("valor");

campo.innerHTML = "Navegador: ";
valor.innerHTML = window.navigator.userAgent;

// document.body.style.background = "blue";