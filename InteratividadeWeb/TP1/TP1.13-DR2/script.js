const raioCirculoInput = Number(prompt("Raio do círculo: "));

const circulo = {
    raio: raioCirculoInput,

    calcularCircunferencia: function(){
        const  circunferenciaCirculo = (Math.PI * this.raio * 2);
        return circunferenciaCirculo.toFixed(2);
    },
    
    calcularArea: function(){
        const areaCirculo = (Math.PI * this.raio * this.raio);
        return areaCirculo.toFixed(2);
    }
}

console.log(circulo.calcularArea());
console.log(circulo.calcularCircunferencia());