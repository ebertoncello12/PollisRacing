      function handleCredentialResponse(response) {   /* Esta Funçao e  chamada como um retorno de chamada quando o usuário faz login usando o Google Sign-In. 
                                                      Essa função decodifica o token de credencial do usuário, 
                                                      obtém o nome completo e a imagem de perfil e os exibe no HTML, 
                                                      antes de redirecionar o usuário para outra página.*/

      const data = jwt_decode(response.credential);   /*Esta linha decodifica o token JWT retornado pela API de login do Google após
                                                       o usuário realizar o login com sucesso. */                                    

      const queryParams = `?fullName=${data.name}&picture=${data.picture}`; /*Esta linha cria uma string de consulta que inclui o 
                                                                              nome completo e a imagem do usuário,
                                                                              que foram extraídos do token JWT na linha anterior. 
                                                                              A string de consulta é usada para passar esses valores para 
                                                                              a painel.html*/

      document.cookie = `nomecompleto=${data.name}`; /*passa por cookies de navegador */ 
      document.cookie = `foto=${data.picture}`;
      window.location.href = `painel.html${queryParams}`; /*aqui os dados extraidos do jwt token foram extraidos e 
                                                                  sao retornados no id Fullname e picture da outra pagina*/


    }
     /* FUnçao para animar o texto letra por letra    */
    function animateText(elementId, message, delay) {
      const element = document.getElementById(elementId);
      let index = 0;
      const intervalId = setInterval(function() {
        element.innerHTML += message.charAt(index);
        index++;
        if (index >= message.length) {
          clearInterval(intervalId);
        }
      }, delay);
    }
     /* FUnçao para animar o texto letra por letra    */
    window.addEventListener('load', function() {
      animateText('ola', 'OLÁ!', 100);
      animateText('mensagem', 'Acesse o Centralizador com a sua conta Google.', 100);

      google.accounts.id.initialize({
        client_id: "857961179786-r9p4i592okbbt5eoqhvgfjhl8vparn3h.apps.googleusercontent.com",
        callback: handleCredentialResponse,
        auto_select: true,
        hosted_domain: "notredamecampinas.net.br"
      });
      /*ESTILIZÇAO OFICIAL DO BUTTON GOOGLE */
      google.accounts.id.renderButton(
        document.getElementById("botaoLogin"),{
          theme: "outline",
          type:"standard",
          text:"continue_with.",
          size:"large",
          logo_alignment:"center",
          width:"300",
          heigh:"350"
        }
      );
      /*POP UP DO GOOGLE SIGN IN*/
      google.accounts.id.prompt();
    });
     /*AMARZENA O LOGIN NA MAQUILA LOCAL DO USUARIO*/ 
    sessionStorage.setItem('userToken', 'meuTokenDeUsuario');

    /*FUNÇAO PARA ADICIONAR PRE LOADER*/
    window.addEventListener("load", function() {
    const preloader = document.getElementById("preloader");
    preloader.style.display = "block";
  
    setTimeout(function() {
    preloader.style.display = "none";
    document.body.style.overflowY = "scroll"; // para permitir que o conteúdo role novamente
  }, 300); // tempo em milissegundos
});
  window.onload = function() {
  var isLoggedIn = sessionStorage.getItem('loggedIn');
  if (!isLoggedIn) {
      window.location.href = 'login.html';
  }
}





