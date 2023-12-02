const menu = document.getElementById('hamburguer')
const menuNav = document.querySelector('.pg-nav-responsive')
const navBar = document.getElementById('navbar-container')

menu.addEventListener('click', () => {
  menuNav.classList.toggle('open-menu')

  if (menuNav.classList.contains('open-menu')) {
    navBar.style.backgroundColor = '#1e1e1e'
  } else {
    navBar.style.backgroundColor = '#171717'
  }
  
})