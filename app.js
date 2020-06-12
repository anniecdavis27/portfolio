
const hamburgerBtn = document.querySelector('.hamburger-btn')
const dropDownDisplay = document.querySelector('.dropdown-menu')
const dropDownLinkOne = document.querySelector('#nav-one')
const dropDownLinkTwo = document.querySelector('#nav-two')
const dropDownLinkThree = document.querySelector('#nav-three')

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
let isLinkOneVisible = false
let isLinkTwoVisible = false
let isLinkThreeVisible = false

hamburgerBtn.addEventListener('click', () => {
    if (isDropDown == false) {
        dropDownDisplay.classList.add('show')
        dropDownLinkOne.classList.add('visible')
        dropDownLinkTwo.classList.add('visible-two')
        dropDownLinkThree.classList.add('visible-three')
        isDropDown = true
        isLinkOneVisible = true
        isLinkTwoVisible = true
        isLinkThreeVisible = true
    } else if (isDropDown == true) {
        dropDownDisplay.classList.remove('show')
        dropDownLinkOne.classList.remove('visible')
        dropDownLinkTwo.classList.remove('visible-two')
        dropDownLinkThree.classList.remove('visible-three')
        isDropDown = false
        isLinkOneVisible = false
        isLinkTwoVisible = false
        isLinkThreeVisible = false
    }
})



