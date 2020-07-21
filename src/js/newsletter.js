const scriptURLNewsletter = 'https://script.google.com/macros/s/AKfycbwOWESy_LfO6L5oW2m8jmlLk0caNZl_FQVksNQy_t9C0sF1_8Du/exec'
const formNewsletter = document.forms['newsletter-to-google-sheet']
formNewsletter.addEventListener('submit', e => {
  e.preventDefault()
  fetch(scriptURLNewsletter, { method: 'POST', body: new FormData(form)})
    .then(response => {
        Swal.fire({
            position: 'top-end',
            type: 'success',
            title: 'Thanks now you are suscribed!',
            showConfirmButton: false,
            timer: 1500
          })
        
    })
    formNewsletter.reset()
    .catch(error => console.error('Error!', error.message))
})