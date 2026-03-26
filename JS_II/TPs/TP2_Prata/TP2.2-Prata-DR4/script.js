const alunos = [
  { nome: "Aluno A", nota1: 10, nota2: 9.8 },
  { nome: "Aluno B", nota1: 8.9, nota2: 8.7 },
  { nome: "Aluno C", nota1: 6.9, nota2: 7.2 },
  { nome: "Aluno D", nota1: 8.6, nota2: 7.9 },
];

let body = document.body;
let table = document.createElement("table");
table.style.border = "1px solid";
let thead = document.createElement("thead");
let headerRow = document.createElement("tr");

const colunas = ["Nome", "Nota 1", "Nota 2"];

colunas.forEach(texto =>{
    let th = document.createElement("th");
    th.textContent = texto;
    headerRow.appendChild(th);
});

thead.appendChild(headerRow);
table.appendChild(thead);

let tbody = document.createElement("tbody");

alunos.forEach(aluno => {
    let tr = document.createElement("tr");
    let tdNome = document.createElement("td");
    tdNome.textContent = aluno.nome;

    let tdNota1 = document.createElement("td");
    tdNota1.textContent = aluno.nota1;

    let tdNota2 = document.createElement("td");
    tdNota2.textContent = aluno.nota2;

    tr.appendChild(tdNome);
    tr.appendChild(tdNota1);
    tr.appendChild(tdNota2);

    tbody.appendChild(tr);

});

table.appendChild(tbody);
body.appendChild(table);