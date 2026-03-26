//já que fiz o html em inglês, segui a lógica aqui
//andei lendo que é bom não misturar taaaanto pt e en
const body = document.body;
const button = document.getElementById("button");

function darkMode(){

    if(body.classList.contains("light-mode")){
        body.classList.replace("light-mode","dark-mode");
        button.textContent = "Light mode";
    } else{
        body.classList.replace("dark-mode","light-mode");
        button.textContent = "Dark mode";
    }
    
}