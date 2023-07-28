
const nav = document.querySelector('.nav__container');
const header = document.querySelector('.header');
const bgImage = document.querySelector('.background__image')

const initialCoords = header.getBoundingClientRect();
console.log(initialCoords);

window.addEventListener('scroll', function (e){
    // console.log(window.scrollY);

    if(window.scrollY > initialCoords.bottom) {
        nav.classList.add ('sticky');
        bgImage.classList.add('background__image-offscreen');
    }
    else{
        nav.classList.remove('sticky');
        bgImage.classList.remove('background__image-offscreen');
    }
})

filter('body');
function filter(action){
    let selected;
    selected = document.getElementsByClassName("pricing__service");
    let arr = [...selected];
    let filteredArr = [];
    let othersArr = [];
    console.log(selected);
    console.log(arr)

    if(action == 'all'){
        action == '';

        arr.forEach(function(element, index, array){
            element.classList += " active";
        })
    }
    else{
        arr.forEach(function(element, index, array){
            if(element.classList.contains(action)){
                filteredArr.push(element);
            }
            else{
                othersArr.push(element);
            }
        })
    
        console.log(filteredArr);
        console.log(othersArr);
        
        filteredArr.forEach(function(element, index, array){
            element.classList += " active";
        })
    
        othersArr.forEach(function(element, index, array){
            element.classList.remove ("active");
        })
    
        console.log(filteredArr);
        console.log(othersArr);
    }
}
 
function openMenu(){
    document.body.classList += " menu--open"
}

function closeMenu(){
    document.body.classList.remove('menu--open')
}

  