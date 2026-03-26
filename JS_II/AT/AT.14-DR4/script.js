/*
O try catch é uma excelente forma de testar e tratar erros, 
como divisão por zero, problemas com variáveis, conexão, dados etc.

Duas grandes vantagens são: a) mensagens personalizáveis 
e mais amigáveis aos desenvolvedores e b) tratamento de alguns tipos
de erros, prevenindo que o programa pare.

Como é possível personalizar as mensagens de erro, 
fica mais fácil editar o que vai aparecer no console 
de acordo com as regras de negócio de cada cliente.

Isso facilita ao debuggar o programa e também pode acelerar
a resolução de problemas e processos.

Veja:
*/

// 1. Erro de referência


function funcaoTeste(){
    try{
        abacaxi();
        console.log("A função de cima não existe, e este log vai se perder no escopo");
    } catch(error){
        alert("Erro: " + error.message);
    }
}

funcaoTeste();

// 2. Erro de divisão por zero

// Divisão por zero não gera erro automaticamente, então temos que lançar um throw

function erroDivisao(a, b){
    try{
        if(b === 0){
            throw new Error("Não é possível dividir por zero");
        };
    } catch(error){
        alert(error.message);
        return;
    }

    return a/b;
}

erroDivisao(2,0);