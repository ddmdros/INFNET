// let cards = document.querySelectorAll(".card");
// console.log(cards);
//card.classList.add("vermelho");

// cards.forEach(function(card) {
//     card.classList.toggle("vermelho");
//     card.setAttibute("title", "card Js");
// });


////////////

//console.log(c[0]); 
let c = $(".c");

$("button").on("click", function(){
    $(".c").animate({
        // backgroundColor: "lightblue",
        opacity: 0.25,
        left: "+=50",
        height: "toggle"
    }, 500,
    function(){
        // alert("terminou");
    }
    );
});
// $(c).addClass("azul");
// $(c).toggleClass("azul");
// $(c).attr("title", "card Jquery");
// let t = $("h3")[1];
// $(t).text("Teste Jquery");

// $(t).on("click", function(){
//     alert("Clicou no título 2");
// });

