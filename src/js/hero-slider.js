const hero = document.querySelector('#slider-hero')
const dotSelectors = document.querySelectorAll('.slider-dot')
const selectorIcons = document.querySelectorAll('.dot')
const arrayClassList = ['slider-hero-first', 'slider-hero-second', 'slider-hero-third', 'slider-hero-fourth']
let slideTimer
function clearAllBackground() {
    if (hero.classList.contains('slider-hero-first')) {
        hero.classList.remove('slider-hero-first')
        hero.classList.remove('fadeIn')
    }
    if (hero.classList.contains('slider-hero-second')) {
        hero.classList.remove('slider-hero-second')
        hero.classList.remove('fadeIn')
    }
    if (hero.classList.contains('slider-hero-third')) {
        hero.classList.remove('slider-hero-third')
        hero.classList.remove('fadeIn')
    }
    if (hero.classList.contains('slider-hero-fourth')) {
        hero.classList.remove('slider-hero-fourth')
        hero.classList.remove('fadeIn')
    }
}
function getAllDotsEmpty() {
    for (let i = 0; i < selectorIcons.length; i++) {
        if (selectorIcons[i].classList.contains('fas') || selectorIcons[i].classList.contains('fa-circle')) {
            selectorIcons[i].classList.remove('fas')
            selectorIcons[i].classList.remove('fa-circle')
            selectorIcons[i].classList.add('far')
            selectorIcons[i].classList.add('fa-circle')
        }
    }
}
function fillDot(e) {
    console.log(e.target)
    getAllDotsEmpty()
    e.target.classList.remove('far')
    e.target.classList.remove('fa-circle')
    e.target.classList.add('fas')
    e.target.classList.add('fa-circle')
}
function changeSlide(e) {
    clearInterval(slideTimer)
    e.preventDefault()
    let dotSelected = e.target.getAttribute('id')
    switch (dotSelected) {
        case 'slider-dot-one':
            console.log('clase con fondo 1')
            clearAllBackground()
            fillDot(e)
            hero.getElementsByClassName.backgroundColor='#000000'
            hero.classList.add('slider-hero-first')
            hero.classList.add('fadeIn')
        break;
        case 'slider-dot-two':
            console.log('clase con fondo 2')
            clearAllBackground()
            fillDot(e)
            hero.getElementsByClassName.backgroundColor='#000000'
            hero.classList.add('slider-hero-second')
            hero.classList.add('fadeIn')
        break;
        case 'slider-dot-three':
            console.log('clase con fondo 3')
            clearAllBackground()
            fillDot(e)
            hero.getElementsByClassName.backgroundColor='#000000'
            hero.classList.add('slider-hero-third')
            hero.classList.add('fadeIn')
        break;
        case 'slider-dot-four':
            console.log('clase con fondo 4')
            clearAllBackground()
            fillDot(e)
            hero.getElementsByClassName.backgroundColor='#000000'
            hero.classList.add('slider-hero-fourth')
            hero.classList.add('fadeIn')
        break;
    }
}
for (let i = 0; i < dotSelectors.length; i++) {
    dotSelectors[i].addEventListener('click', changeSlide, false)
}
function timerSlider() {
    let i = 0
    let limit = 3
    slideTimer = setInterval(function() {
        clearAllBackground()
        if (hero.classList.contains('fadeIn')) {
            hero.classList.remove('fadeIn')
        }else {
            hero.classList.add('fadeIn')
        }

        i++
        if (i>limit) {
            i=0
        }


        hero.style.backgroundColor='#000'
        hero.classList.add(arrayClassList[i])
        
        getAllDotsEmpty()
        if (selectorIcons[i].classList.contains('far') || selectorIcons[i].classList.contains('fa-circle')) {
            selectorIcons[i].classList.remove('far')
            selectorIcons[i].classList.remove('fa-circle')
            selectorIcons[i].classList.add('fas')
            selectorIcons[i].classList.add('fa-circle')
        }


        
        
        
    }, 10000)
}
addEventListener('load', timerSlider, false)