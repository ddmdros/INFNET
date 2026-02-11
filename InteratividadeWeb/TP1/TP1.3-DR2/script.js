const carro = {
    ano: null,
    modelo: "",

    acelerar: function() {
        alert("Acelerando!")
    }
}

carro.ano = 1968;
carro.modelo = "Fusca";

let meuCarro = carro;

meuCarro.acelerar();


