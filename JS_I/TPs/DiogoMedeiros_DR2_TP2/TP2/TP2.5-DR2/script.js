const melhorGuitarrista = "Jimi Hendrix";
let a = 1, b = 2, c = 3;
let salarioMinimo = 1518;


// Let e Const

/*

Ao declarar usando let, atribuimos um valor a uma variável e guardamos ele na memória.
Ao declarar usando const, fazemos o mesmo, mas esse valor será final. Ou seja, não será possível alterar esse valor futuramente.
Let, em contraste, permite que esses valores sejam modificados ao longo do código, tanto de forma manual (hard coded) quanto automática, pelo próprio código (recomendado).

Por exemplo:
Se eu quiser dizer que o melhor guitarrista do mundo é o Jimi Hendrix, posso fazer como no exemplo acima
let melhorGuitarrista = "Jimi Hendrix";
Como usamos let, esse valor pode ser alterado, tanto de forma manual, por alguém que discorde da afirmação:
melhorGuitarrista = "Outro guitarrista"
ou através de outras interações no código, como através de interações com bancos de dados, por exemplo, mas isso está fora do escopo deste módulo.

Se essa variável fosse declarada com const, nada conseguiria alterar essa informação, pois recebemos um erro ao tentar modificar constantes.
*/

//Var e variáveis não declaradas

/*
Outra maneira de declarar é usando a palavra reservada var.
Ela já foi mais usada, mas hoje em dia seu uso não é recomendado, pois ela tem escopo de função, enquanto let e const têm escopo de bloco, o que evita muitos problemas.
Ou seja:
Se declararmos uma variável do tipo var dentro de uma função, e ela for alterada em outro local do código, mesmo que seja em um escopo diferente, ela poderá ser alterada, e isso pode resultar em erros e interações inesperadas. Por isso o seu uso não é recomendado.

Não declarar variáveis também não é uma boa prática, pois escrever
x = 5
sem let ou const cria uma variável global automaticamente, que também pode gerar erros inesperados.
*/

