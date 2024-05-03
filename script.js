// SlideShow Automático
let imagens=['/img/pitbull.png','/img/pngwing.com.png'];
let index = 0;
let time = 3000;

function slideShow(){
    document.getElementById('imgBanner').src=imagens[index];
    index++;

    if(index == imagens.length){
        index = 0;
    }
    setTimeout('slideShow()', time);
}
slideShow();

// Função que alterna entre 3 cores de fundo do index