let pagina = window.location.href;

if (pagina.includes("6mfrz2.csb.app/")) {
  alert("Você está na página certa");

  let pais = prompt("Insira o nome de um país");

  if (pais) {
    location.href = "https://pt.wikipedia.org/wiki/" + pais;
  }
}

/*
  A Wikipedia aceita acentos (á ã) e caracteres especiais (ç),
  então não fiz tratamento de string, mas se o código
  redirecionasse para outros domínios, poderia quebrar.
  
  Em outros sites, alternativas de tratamento são:

  1- Substituir manualmente caracteres problemáticos, como espaço:
  pais = pais.trim().replaceAll(" ", "_");

  2 - Usar encodeURIComponent, que trata de uma quantidade maior
  de problema, como cedilha e acentos:
  pais = encodeURIComponent(pais.trim());
*/
