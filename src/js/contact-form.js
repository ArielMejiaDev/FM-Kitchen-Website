const scriptURL = 'https://script.google.com/macros/s/AKfycbwmri8v5iVZkHYyfbtL6Qic4xz5T6n2vb93NtfuOKmyxshMpXld/exec'
const form = document.forms['submit-to-google-sheet']
const formContainer = document.querySelector('.form-container')
form.addEventListener('submit', e => {
  e.preventDefault()
  fetch(scriptURL, { method: 'POST', body: new FormData(form)})
    .then(response => {
        Swal.fire({
            position: 'bottom-end',
            type: 'success',
            title: 'Thanks your message was sent',
            showConfirmButton: false,
            timer: 1500
          })
        formContainer.innerHTML = '<h1 class="text-uppercase text-center">Thank you!</h1><h2>We’ll get back to you as soon as possible.</h2><p class="text-center" style="margin-top: 3rem;"><a href="../../index.html" class="btn btn-red text-uppercase">Ok</a></p>'
    })
    .catch(error => console.error('Error!', error.message))
})