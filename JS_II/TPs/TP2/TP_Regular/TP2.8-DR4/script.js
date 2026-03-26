const algunsCarros = [
    { marca: "Chevrolet" },
    { marca: "Honda" },
    { marca: "Volkswagen" },
    { marca: "Fiat" },
    { marca: "Nissan" },
    { marca: "Renault" },
    { marca: "Volkswagen" },
    { marca: "Fiat" },
    { marca: "Volkswagen" },
    { marca: "Fiat" },
    { marca: "Volkswagen" },
    { marca: "Honda" },
    { marca: "Chevrolet" },
    { marca: "Nissan" },
    { marca: "Chevrolet" },
    { marca: "Honda" },
    { marca: "Renault" },
    { marca: "Renault" },
    { marca: "Nissan" },
];

// Fiz dois aqui. Minha primeira solução ficou longa demais
// e não cresceria dinamicamente. Foi um código meio que
// à força:

// function obterQtdMarcas() {

//     let qtChevrolet = 0;
//     let qtHonda = 0;
//     let qtVolkswagen = 0;
//     let qtFiat = 0;
//     let qtNissan = 0;
//     let qtRenault = 0;

//     for (item of algunsCarros) {

//         switch (item.marca) {
//             case "Chevrolet":
//                 qtChevrolet++;
//                 break;
//             case "Honda":
//                 qtHonda++;
//                 break;
//             case "Volkswagen":
//                 qtVolkswagen++;
//                 break;
//             case "Fiat":
//                 qtFiat++;
//                 break;
//             case "Nissan":
//                 qtNissan++;
//                 break;
//             case "Renault":
//                 qtRenault++;
//                 break;
//             default:
//                 console.log("Indefinido");
//         }

//     }

//     let mensagem = `Chevrolet: ${qtChevrolet}
// Honda: ${qtHonda}
// Volkswagen: ${qtVolkswagen}
// Fiat: ${qtFiat}
// Nissan: ${qtNissan}
// Renault: ${qtRenault}`;

//     alert(mensagem);
// }

// obterQtdMarcas();

// A segunda opção usa um objeto vazio para ir
// inserindo as marcas à medida que aparecem

function obterQtdDinamico(){
    const contagem = {};

    for (let item of algunsCarros){ // for of pq quero acessar os valores
        if (contagem[item.marca]){
            contagem[item.marca]++; // Se já tem algo no objeto "contagem", bate aqui (primeiro bate no else, depois aqui)
        } else{
            contagem[item.marca] = 1; //Quando a marca aparecer pela primeira vez, vai bater aqui
        }
    }

    let mensagem = ""; // Como a contagem é dinâmica, a mensagem tb precisa ser construída dinamicamente
    for (let marca in contagem){ // for in pq quero acessar as chaves
        mensagem += `${marca}: ${contagem[marca]}\n`;
    }

    alert(mensagem.trim());
}

obterQtdDinamico();