
      var urlPath = window.location.pathname;
    // Obtém o nome do arquivo sem a extensão .html
      var fileName = urlPath.replace(/^.*[\\\/]/, '').split('.').slice(0, -1).join('.');
  // As seguintes linhas de código obtêm os parâmetros da URL e, em seguida, definem o texto e a imagem do elemento HTML correspondente.
      const urlParams = new URLSearchParams(window.location.search);
      const fullName = urlParams.get('fullName');      
      const picture = urlParams.get('picture');
  /*Parametros para capturar os valores retornados do JWT decodificado e passado para os supostos id ( Fullname , Picture)*/
      document.getElementById('fullName').textContent = getCookie("nomecompleto"); 
      document.getElementById('picture').setAttribute('src', getCookie("foto"));  
      // Remove as informaçoes da URL // 
      history.pushState(null, '', window.location.href.split('?')[0]);
      //Captura o cookie criado ao autenticar com o google
        function getCookie(cname) {
              let name = cname + "=";
              let decodedCookie = decodeURIComponent(document.cookie);
              let ca = decodedCookie.split(';');
              for(let i = 0; i <ca.length; i++) {
                let c = ca[i];
                while (c.charAt(0) == ' ') {
                  c = c.substring(1);
                }
                if (c.indexOf(name) == 0) {
                  return c.substring(name.length, c.length);
                }
              }
              return "";
        }        
        /*Funçao para letras vir por uma por uma */ 
        function animateText(elementId, message, delay) {  
            var element = document.getElementById(elementId);
              var index = 0;
                var intervalId = setInterval(function() {
                  element.innerHTML += message.charAt(index);
                    index++;
                if (index >= message.length) {
                clearInterval(intervalId);
                                              }
              },  delay);
          }
              window.addEventListener('load', function() {         
              animateText('escolha-plataforma', 'Escolha sua plataforma:', 100);
        });
          window.onload = function() {
        if (!sessionStorage.getItem('userToken')) {
        window.location.href = 'index.html';
          }
          };                

  