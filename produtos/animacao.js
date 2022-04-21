imagem_atual = 1;
function aplicarIMG(msg){
        imagem1 = 1 + msg;
        imagem2 = 2 + msg;
        imagem3 = 3 + msg;
        zona1 = window.document.getElementById('zona1');
        zona2 = window.document.getElementById('zona2');
        zona3 = window.document.getElementById('zona3');

        zona1.style.transition = "0.6s ease-in-out";
        zona2.style.transition = "2s ease-in-out";
        zona3.style.transition = "3s ease-in";
 
        zona1.style.backgroundImage = "url('../IMG/roupa"+imagem1+".jpg')";
        zona2.style.backgroundImage = "url('../IMG/roupa"+imagem2+".jpg')";
        zona3.style.backgroundImage = "url('../IMG/roupa"+imagem3+".jpg')";

        
}
function escolher_IMG(ms){
    imagem_atual = imagem_atual + (ms);
        
        if(imagem_atual >= 9 ){
            imagem_atual = 1;
        } else if(imagem_atual <= 0){
            imagem_atual = 9;
        }
    aplicarIMG(imagem_atual);
/*</div>*/


}