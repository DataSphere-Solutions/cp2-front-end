// SlideShow Automático
let imagens=['/img/anunciopc1.png','/img/anunciopc2.png','/img/anunciopc3.png','/img/anunciopc4.png'];
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

function clickMenu(){
    if(item.style.display == 'block') {
        item.style.display ='block'
    } else {
        item.style.display = 'block'

    }

}
