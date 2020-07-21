const $modal = document.getElementById('modal')
const $overlay = document.getElementById('overlayModal')
const $hideModal = document.querySelectorAll('.hide-modal')

// modal elements to fill dinamically
// const $modalTitle = $modal.querySelector('h1');
const $modalImage = $modal.querySelector('.modal-image')
let modalImages = []
const imageContainers = document.querySelectorAll('.box-img')
for (let i = 0; i < imageContainers.length; i++) {
    modalImages.push(imageContainers[i].firstChild.getAttribute('src'))
}
// const $modalDescription = $modal.querySelector('p');

const showModal = ($element) => {
    
    $overlay.classList.add('active')
    $modal.style.animation = 'modalIn .8s forwards'

    console.log()

    let background = $element.firstChild.style.background

    newBackground = background.replace('linear-gradient(rgba(218, 70, 71, 0.5), rgba(218, 70, 7, 0.5)) 0% 0% / cover,', '')
    console.log(newBackground)
    $modalImage.style.background = newBackground
    $modalImage.style.backgroundSize = 'contain'
    //example how to send data to modal

    // const id = $element.dataset.id;
    // const category = $element.dataset.category;
    // const data = findMovie(id, category);

    // $modalTitle.textContent = data.title;
    // $modalImage.setAttribute('src', data.medium_cover_image);
    // $modalDescription.textContent = data.description_full
}
for (let i = 0; i < $hideModal.length; i++) {
$hideModal[i].onclick = hideModal
    
}
function hideModal() {
    $overlay.classList.remove('active')
    $modal.style.animation = 'modalOut .8s forwards'
}