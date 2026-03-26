let tuplas = [ [3, 7], [5, 2], [8, 4], [1, 9], [6, 3] ];
let soma = 0;

for (const [num1, num2] of tuplas) {
   soma += num1 + num2;
}

console.log(soma);