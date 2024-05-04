// SlideShow Automático
let imagens=['/img/anuncicelular2.png','/img/anunciocelular1.png','/img/anunciocelular3.png','/img/anunciocelular4.png'];
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
