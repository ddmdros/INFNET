let contador = 0;

while(true){
    let sorteio = Math.random();

    if(sorteio < 0.75){
        contador++;
        console.log(contador);
    }

    if(sorteio < 0.1){
        break;
    }
}