//Os principais métodos de acesso são pelos getElement(s)By e pelo querySelector

//os getElement(s) by temos:

//getElementByID -> um bom método de acesso, pois é preciso (se o HTML seguir a regra de não ter IDs duplicados)
let titulo = document.getElementById("titulo");
titulo.style.textTransform = "uppercase";
titulo.style.fontSize = "1.7rem";

//getElementsByClassName
let subtitulos = document.getElementsByClassName("subtitulo");

//Um "problema" desses getElements, no plural, é que eles não retornam um array, mas um nodeList
// Os nodeLists têm métodos próprios e, por isso, não aceitam métodos de array, como o forEach.
//  Abaixo, eu forcei a transformação em array com um spread só para usar esse método no exemplo
// pode ser convertido com o spread ou com o método Array.from()
[...subtitulos].forEach(s => {
    
    s.style.textTransform = "uppercase";
    s.style.fontSize = "1.3rem";
});



//getElementsByTagName
let primeiroParagrafo = document.getElementsByTagName("p");
primeiroParagrafo[0].style.backgroundColor= "yellow"; //outra forma de acessar elementos do NodeList é com o índice
// (meio perigoso fazer isso, mas para o exemplo funciona)

//getElementsByName
//não costumo usar "name" no HTML, mas funciona assim:
let liName = document.getElementsByName("tagName")[0];
liName.style.border = "1px solid";


//em querySelector temos dois


//querySelector(classe/ID/atributo/tag/universal/estado) -> retorna o primeiro

//querySelectorAll(mesmas possibilidades) -> retorna todos, em array