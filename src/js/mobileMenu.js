let body = document.querySelector('body')
let mobileMenu = body.querySelector('.mobile-menu')
let burger = body.querySelector('.burger')
let cross = document.querySelector('.cross')

function openMenu() {
  mobileMenu.classList.add('mobile-menu--opened')
  body.classList.add('body--blur')
}

export function closeMenu() {
  mobileMenu.classList.remove('mobile-menu--opened')
  body.classList.remove('body--blur')
}

burger.addEventListener('click', function (event) {
  event.stopPropagation()
  openMenu()
})

cross.addEventListener('click', function (event) {
  closeMenu()
})

body.addEventListener('click', function (event) {
  if (!mobileMenu.contains(event.target) && event.target !== burger) {
    closeMenu()
  }
})
