let minhaDiv = document.getElementsByClassName("minhaDiv")[0];
// getByClassName retorna um array, então queremos o primeiro (e único) objeto dentro dele
// outra maneira é usar direto o querySelector(.minhaDiv);

minhaDiv.addEventListener("click", function(){
    this.setAttribute("style", "background-color: blue; color: white; border: 2px dashed orange; height: 220px; width: 220px;");
});

