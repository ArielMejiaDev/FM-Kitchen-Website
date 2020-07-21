const iframeUrl = 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3463.21600225084!2d-95.40950269999999!3d29.7713951!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8640c74cadb59f09%3A0x53d324df9956cf33!2sFM+Kitchen+and+Bar!5e0!3m2!1ses!2sgt!4v1549110542596'
const redirectUrl = 'https://goo.gl/maps/6cVBF6gxGMs'
const maps = document.querySelector('.hero-maps')

/* ========================================================================== */
/*                      CALC THE DIMENSIONS OF THE IFRAME                     */
/* ========================================================================== */

let iframeWidth
let iframeHeight
function changeIframeSize(x) {
    if (x.matches) { // If media query matches
        iframeWidth = 300
        iframeHeight = 200
    } else {
        iframeWidth = 400
        iframeHeight = 300
    }
}
  
var x = window.matchMedia("(max-width: 375px)")
changeIframeSize(x) // Call listener function at run time
x.addListener(changeIframeSize) // Attach listener function on state changes



maps.addEventListener('click', redirectToGMaps, false)
function redirectToGMaps() {
    Swal.fire({
        //title: '<strong>HTML <u>example</u></strong>',
        //type: 'info',
        html:
          `<iframe src="${iframeUrl}" width="${iframeWidth}" height="${iframeHeight}" frameborder="0" style="border:0" allowfullscreen></iframe>`,
        showCloseButton: true,
        showCancelButton: true,
        confirmButtonColor: '#000000;',
        cancelButtonColor: '#d33',
        focusConfirm: false,
        cancelButtonText:
          '<i class="fas fa-long-arrow-alt-left"></i> Back to page',
        cancelButtonAriaLabel: '',
        confirmButtonText:
          '<i class="fas fa-map-marked-alt"></i> Go to maps!',
        confirmButtonAriaLabel: '',
      }).then((result) => {
        if (result.value) {
        //   Swal.fire(
        //     'Deleted!',
        //     'Your file has been deleted.',
        //     'success'
        //   )
        window.open(redirectUrl, '_blank');
        }
      })

      
}