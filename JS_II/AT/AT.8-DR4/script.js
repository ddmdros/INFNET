function comparaStringCaseInsensitive(strA = "", strB = ""){
    return String(strA).toLowerCase() === String(strB).toLowerCase();
}

//testes TRUE
console.log(comparaStringCaseInsensitive("tEste", "Teste"));
console.log(comparaStringCaseInsensitive("bOi", "BOI"));
console.log(comparaStringCaseInsensitive("aBaCaXi", "abacaxi"));

// Extra: testes NUMBER
// (devido à inicialização default (strA = "") e à converção String(strB)
console.log(comparaStringCaseInsensitive("123", 123)); // true
console.log(comparaStringCaseInsensitive("usu4r10", "usu" + 4 + "r" + 10)); // true

//teste FALSE
console.log(comparaStringCaseInsensitive("Java", "Javascript"));
