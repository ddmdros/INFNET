const gato = {
    nome: "Bernardo",
    idade: 1.4,
    cor: "Frajola",

    miar: function(){
        console.log("Miau!");
    },

    dormir: function(){
        console.log("ZZZZzzzzz....");
    }
}

// console.log(gato.nome);
// console.log(gato.idade);
// console.log(gato.cor);

// gato.miar();
// gato.dormir();


const carro ={
    marca: "Ford",
    modelo: "Mustang",
    ano: 1969,
    cor: "Vermelho",

    acelerar: function(){
        console.log("O carro está acelerando");
    },

    frear: function(){
        console.log("O carro está freando.");
    }
}

console.log(carro.marca);
console.log(carro.modelo);
console.log(carro.ano);
console.log(carro.cor);
carro.acelerar();
carro.frear();
