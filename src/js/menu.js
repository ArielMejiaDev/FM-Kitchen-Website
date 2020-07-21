const menus = document.querySelectorAll('.main-menu')
menuOne = document.querySelector('.menu-one')
menuTwo = document.querySelector('.menu-two')
menuThree = document.querySelector('.menu-three')
menuFour = document.querySelector('.menu-four')
menuFive = document.querySelector('.menu-five')
filterOne = document.querySelector('#filter-one')
filterTwo = document.querySelector('#filter-two')
filterThree = document.querySelector('#filter-three')
filterFour = document.querySelector('#filter-four')
filterFive = document.querySelector('#filter-five')
function hideAllMenus() {
    for (let i = 0; i < menus.length; i++) {
        menus[i].style.display='none'
    }
}
function addDisableFiltersStyle(e) {
    const filters = document.querySelectorAll('.filter')
    for (let i = 0; i < filters.length; i++) {
        if (filters[i].classList.contains('btn-red')) {
            filters[i].classList.remove('btn-red')
            filters[i].classList.add('btn-secondary')
        }
    }
    if (e) {
        e.target.classList.remove('btn-secondary')
        e.target.classList.add('btn-red')
    }else {
        let defaultFilter = document.querySelector('#filter-one')
        defaultFilter.classList.remove('btn-secondary')
        defaultFilter.classList.add('btn-red')
    }
}
function loadMenuOne(e) {
    hideAllMenus()
    addDisableFiltersStyle(e)
    menuOne.style.display='block'
}
function loadMenuTwo(e) {
    hideAllMenus()
    addDisableFiltersStyle(e)
    menuTwo.style.display='block' 
}
function loadMenuThree(e) {
    hideAllMenus()
    addDisableFiltersStyle(e)
    menuThree.style.display='block' 
}
function loadMenuFour(e) {
    hideAllMenus()
    addDisableFiltersStyle(e)
    menuFour.style.display='block' 
}
function loadMenuFive(e) {
    hideAllMenus()
    addDisableFiltersStyle(e)
    menuFive.style.display='block' 
}
//loadDefaultMenu(menuOne)
//events on click in filters
filterOne.addEventListener('click', loadMenuOne, false)
filterTwo.addEventListener('click', loadMenuTwo, false)
filterThree.addEventListener('click', loadMenuThree, false)
filterFour.addEventListener('click', loadMenuFour, false)
filterFive.addEventListener('click', loadMenuFive, false)
addEventListener('load', showDefaultMenu, false)
function showDefaultMenu() {
    hideAllMenus()
    loadMenuOne()
}