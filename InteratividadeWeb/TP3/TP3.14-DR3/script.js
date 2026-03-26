let input = document.getElementById("texto");
let span = document.getElementById("nome");

input.addEventListener("keydown", (e) => {
    if(e.key === "Enter"){
        span.textContent = input.value;
        input.value = "";
    }
})