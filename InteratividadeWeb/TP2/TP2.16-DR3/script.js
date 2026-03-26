let accordionItems = document.querySelectorAll(".accordion-item");
//como as classes já estavam em inglês, mantive tudo em inglês para não virar uma salada

//como o accordionItems é um array, precisamos acessar esses elementos individualmente
accordionItems.forEach(item =>{
    const header = item.querySelector(".accordion-header"); // acesso o header
    const content = item.querySelector(".accordion-content"); // e depois o conteúdo

    header.addEventListener("click", function(){
     const isAlreadyActive = content.classList.contains("active"); //precisamos de uma variavel
     // para verificar se já está ativo e poder fechar automaticamente quando o usuario clicar em outro header
    document.querySelectorAll(".accordion-content").forEach(content => {
    content.classList.remove("active"); // percorremos todos os .accordion-content e desativamos o que estiver ativo
});

    if(!isAlreadyActive){
        content.classList.toggle("active"); //exibe apenas o conteúdo clicado
    }
    });
});
