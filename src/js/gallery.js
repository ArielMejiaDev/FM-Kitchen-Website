
//const images = ['0.jpg', '1.jpg', '2.jpg', '3.jpg']
const gallery = document.querySelector('.gallery-container')
const galleryBoxes = gallery.querySelectorAll('.box-img')

let images = []
for (let i = 0; i < galleryBoxes.length; i++) {
    images.push(galleryBoxes[i].firstChild.getAttribute('src'))
    console.log(galleryBoxes[i].firstChild.getAttribute('src'))
}
console.log(images)
// Function to load images of boxes
const boxes = document.querySelectorAll('.box-img')
const boxTexts = document.querySelectorAll('.box-text');
// const msg = [
//     'Ver Mas', 
//     'Siguenos en Instagram', 
//     'Siguenos en facebook', 
//     'Siguenos en twitter', 
//     'Leenos en Medium', 
//     'Nuestra Ubicacion', 
//     'Soundcloud', 
//     'App']

const clearBox = (e) => {
    e.target.style.background=`linear-gradient(transparent, transparent),  url(${images[e.target.getAttribute('text')]}) no-repeat center`
    e.target.style.backgroundSize='cover'
    //e.target.removeChild(e.target.childNodes[0])
    e.target.innerHTML = ''
}
const addLayer = (e) => {
    e.target.style.background=`linear-gradient(rgba(218, 70, 71, 0.5), rgba(218, 70, 7, 0.5)), url(${images[e.target.getAttribute('text')]}) no-repeat center`
    e.target.style.backgroundSize='cover'
    
    e.target.innerHTML = '<i style="pointer-events: none;" class="fas fa-search"></i>'
    e.target.onmouseout = clearBox
}
const fillBoxes = () => {
    for (let i = 0; i < boxes.length; i++) {
        boxes[i].style.background=`linear-gradient(transparent, transparent), url(${images[boxes[i].getAttribute('text')]}) no-repeat center`
        boxes[i].style.backgroundSize='cover'
        boxes[i].classList.add('fadeIn')
        boxes[i].onmouseover = addLayer
    }
}

addEventListener('load', fillBoxes, false)