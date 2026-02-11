// O navigator tem algumas questões de obsolescência devido a diferentes
// fatores, como atualizações de segurança e incompatibilidade
// com dispositivos. Vamos começar então com as exibições mais tranquilas:

// Opções tranquilas
let idioma = "Idioma: " + navigator.language + "\n";
let areCookiesAtivos = "Cookies ativos? " + navigator.cookieEnabled + "\n";

/*
Outras, por sua vez, são instáveis, variam de acordo ou são perigosas
quanto a segurança de dados:

-- navigator.platform: pode ser usada para rastrear usuários
--  navigator.appName: a ideia era exibir o nome do navegador, mas sempre retorna "Netscape"
no Chrome, Firefox e Edge, então não é muito útil hoje em dia.
--  navigator.appVersion: retorna informações diferentes para cada navegador, o que a torna
pouco confiável.

Então, como capturar essas informações?

User-Agent é uma forma relativamente prática de obter essas informações,
mas já está em processo de obsolescência por contribuir para o rastreamento.
As opções mais seguras (Client Hints) são mais avançadas, mas não vamos entrar
nesse assunto neste momento. Por isso, vou exibir informações com userAgent.
*/

let dadosUsuario = "Navegador e versão (UserAgent): " +  navigator.userAgent + "\n";

// userAgent retorna uma string longa, como o exemplo abaixo. Se quiséssemos 
// obter informações precisas como navegador e versão, precisaríamos tratar o retorno.
// Para o propósito deste AT, vou exibir os dados na mesma string;

/*
    Mozilla/5.0 (Windows NT 10.0; Win64; x64) 
    AppleWebKit/537.36 (KHTML, like Gecko) 
    Chrome/142.0.0.0 Safari/537.36
*/

// Então vamos lá:

alert(idioma + areCookiesAtivos + dadosUsuario);

