let flag = false
// Open and close burger menu
function openNav() {
    document.getElementById("nav-mobile").style.width = "80%";
  }
function closeNav() {
document.getElementById("nav-mobile").style.width = "0%";
}

/* ========================================================================== */
/*                              COLLAPSE SIDENAVE                             */
/* ========================================================================== */
const openSideNav = () => {

  //document.querySelector('#sidenav').style.width
  
  var x = window.matchMedia("(max-width: 1024px)")

    if (x.matches) { 
      document.querySelector('#sidenav').style.width = '100%'
    } else {
      document.querySelector('#sidenav').style.width = '50%'
    }
  document.querySelector('#toogleSideNav').onclick = closeSideNav
  document.onclick = function(e){
    if (e.target.getAttribute('id') !== 'toogleSideNav') {
      closeSideNav()
    }
  }
}
const closeSideNav = () => {
  document.querySelector('#toogleSideNav').onclick = openSideNav
  document.querySelector('#sidenav').style.width = '0%'  
}