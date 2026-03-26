let fibo = [0, 1];

for(let i = 0; i < 18; i++){
    let proximo = fibo[i] + fibo[i+1];
    fibo.push(proximo);
}

console.log(fibo[19]);
