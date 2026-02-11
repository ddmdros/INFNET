//**** OPERADORES DE IGUALDADE ****/
//**** Simples */

// O operador de igualdade simples é representado por dois sinais de igual (==).
// Ele confere se o conteúdo do que está sendo comparado é igual, sem considerar o tipo.
// Por exemplo

let idade = 22;
let idadeString = "22";
console.log("22 == \"22\"?: " + (idade == idadeString));

// Como o conteúdo das duas variáveis é igual, o console.log vai retornar true.

//**** Estrita */
// O operador de igualdade restrita é representado por três sinais de igual (===). Como no simples, ele compara o conteúdo, mas também o tipo.
// Portanto
console.log("22 === \"22\"?: " + (idade === idadeString));
// retorna false.

//**** OPERADORES DE DIFERENÇA ****/

// A mesma lógica é aplicada aos operadores de diferença.

//**** Simples */
// A diferença simples é representada por (!=), e vai comparar apenas o conteúdo.

console.log("22 != \"22\"?: " + (idade != idadeString));

// No console.log acima, vai retornar false, pois ele entende que o conteúdo é o mesmo (5)
//**** Estrita */
// A diferença estrita é representada por (!==) e vai comparar tanto o tipo quanto o conteúdo.

console.log("22 != \"22\"?: " + (idade !== idadeString));
// No console.log acima, vai retornar false, pois o Number 5 é diferente da String "5"