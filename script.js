
const nav = document.querySelector('.nav__container');
const header = document.querySelector('.header');
const bgImage = document.querySelector('.background__image')

const initialCoords = header.getBoundingClientRect();
console.log(initialCoords);


window.addEventListener('scroll', function (e){
    console.log(window.scrollY);

    if(window.scrollY > initialCoords.bottom) {
        nav.classList.add ('sticky');
        bgImage.classList.add('background__image-offscreen');
    }
    else{
        nav.classList.remove('sticky');
        bgImage.classList.remove('background__image-offscreen');
    }
})
 

  