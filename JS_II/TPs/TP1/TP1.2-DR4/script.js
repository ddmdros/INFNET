let paises = [];
paises.push("Brasil", "Venezuela", "Guatemala", "Porto Rico", "Argentina");
console.log(paises);
console.log(paises.length);
paises[2] = "Uruguai";
// a atribuição direta (que usei) é mais performática para um problema simples como esse, mas outra opção é o splice
//paises.splice(2,1,"Uruguai");
console.log(paises);