let pesos = [];
pesos.push(81, 75, 100, 9, 98);

console.log([...pesos].reverse());

console.log([...pesos].sort((a, b) => ( a - b)));
// essa arrow function compara os números de dois em dois
// e faz a operação (a-b). Se a > b, inverte a posição,
// garantindo que números como 9 ou 100 não fiquem desordenados
// por causa da "dicionalização" do método sort()