const images = []
    //get data from the api
    //tutorial: https://rudrastyh.com/instagram/get-photos-with-javascript.html
    //how to get token ; https://instagram.pixelunion.net/
    //or go to instagram developers and create a project and create a access token take care about the Valid Redirect URIs field
    //maybe some config in ssl it´s neccesary
    //------------------------------------------------------------------------------- 
    const token = '3595418679.1677ed0.e9ceb5b64e274e28a61e278a8a325b9d'
    fetch(`https://api.instagram.com/v1/users/self/media/recent/?access_token=${token}`)
    .then(response => response.json())
    .then(data => {
        results = data.data
        var i = 0;
        do {
            images.push(results[i].images.standard_resolution.url)
            i++
        }
        while (i < 8);
    })
    .catch(() => {
        backupImages = ['0.jpg', '1.jpg', '2.jpg', '3.jpg', '4.jpg', '5.jpg', '6.jpg', '7.jpg']
        for (let i = 0; i < backupImages.length; i++) {
            images.push(`src/images/instagram-posts/${backupImages[i]}`)            
        }
        console.log('Ocurrio un Error!')
    })
// Function to load images of boxes
const boxes = document.querySelectorAll('.box-img')
const boxTexts = document.querySelectorAll('.box-text');
const msg = ['Ver Mas', 'Siguenos en Instagram', 'Siguenos en facebook', 'Siguenos en twitter', 'Leenos en Medium', 'Nuestra Ubicacion', 'Soundcloud', 'App']

const clearBox = (e) => {
    e.target.style.background=`linear-gradient(transparent, transparent),  url(${images[e.target.getAttribute('text')]}) no-repeat center`
    e.target.style.backgroundSize='cover'
    e.target.innerHTML = ''
}
const addLayer = (e) => {
    e.target.style.background=`linear-gradient(rgba(218, 70, 71, 0.5), rgba(218, 70, 7, 0.5)), url(${images[e.target.getAttribute('text')]}) no-repeat center`
    e.target.style.backgroundSize='cover'
    e.target.onmouseout = clearBox
    e.target.innerHTML = 'View\nMore'
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