
const hamburgerBtn = document.querySelector('.hamburger-btn')
const dropDownDisplay = document.querySelector('.dropdown-menu')
const dropDownLinks = document.querySelector('.nav-link')

let isMenuOpen = false;

hamburgerBtn.addEventListener('click', () => {
     if(isMenuOpen == false) {
        hamburgerBtn.classList.add('open')
        isMenuOpen = true
     } else {
        hamburgerBtn.classList.remove('open')
        isMenuOpen = false
     }
})

let isDropDown = false

hamburgerBtn.addEventListener('click', () => {
    if (isDropDown == false) {
        dropDownDisplay.classList.add('show')
        isDropDown = true
    } else if (isDropDown == true) {
        dropDownDisplay.classList.remove('show')
        isDropDown = false
    }
})



