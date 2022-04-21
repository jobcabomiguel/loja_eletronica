campo_zona = window.document.getElementById('html');
n = document.getElementById('numero_nobre').innerText = '244 945-632-475';
        function carregar(imagens){
                actual = imagens;
                campo_zona.style.backgroundImage = "url('imagens/fundo"+actual+".jpg')";
                campo_zona.style.backgroundSize = "cover";
                campo_zona.style.transition = "4s ease-in-out";


        }
        function inicia(){
            imagens = 1;
            carregar(imagens);            
            setInterval("troca()",8000);
        }
        function troca(){
            imagens++;
            total = 8;
                if (imagens == total){
                    imagens = 1;
                }
                carregar(imagens)
        }
    function mostrar(){
        links = document.getElementById('links');
        links.style.transition ="4s";
        links.style.display = "block";
    }


    function mostrar(){
        links = document.getElementById('links');
        links.style.transition ="4s";
        links.style.display = "block";
    }
    
    function eliminar(){
        links = document.getElementById('links');
        links.style.transition ="4s";
        links.style.display = "none";
    }  
