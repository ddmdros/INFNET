function wordCount(text) {
  // Aqui você tem o texto pré-processado
  const preparedText = text
    .toLowerCase()
    .normalize("NFD")
    .replace(/\n/g, " ")
    .replace(/[^a-zA-Z0-9\s]/g, "")
    .split(" ")
    .filter((word) => word)
    .join(" ");

    return preparedText;
}

let teste = wordCount("bom dia mundo de Deus que só ç22");
teste.array.forEach(element => {
    
});
console.log(teste);
