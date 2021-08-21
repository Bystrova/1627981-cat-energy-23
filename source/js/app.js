const menuToggle = document.querySelector('.main-nav__toggle');
const menuNav = document.querySelector('.main-nav');
menuNav.classList.remove('main-nav--nojs');

menuToggle.addEventListener('click', () => {
  if (menuNav.classList.contains('main-nav--closed')) {
    menuNav.classList.remove('main-nav--closed');
    menuNav.classList.add('main-nav--opened');
  } else {
    menuNav.classList.remove('main-nav--opened');
    menuNav.classList.add('main-nav--closed');
  }
});
