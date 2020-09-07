document.addEventListener('DOMContentLoaded', () => {
  const burgerButton = document.querySelector('.burger-button')
  const burgerMenu = document.querySelector('.header-navbar')
  burgerButton.addEventListener('click', (e) => {
    e.preventDefault()
    burgerButton.classList.toggle('button-active')
    burgerMenu.classList.toggle('burger-active')
    burgerMenu.classList.forEach((el) => {
      if (el === 'burger-active') {
        document.body.style = 'overflow:hidden'
      } else {
        document.body.style = 'overflow:auto'
      }
    })
  })
})
