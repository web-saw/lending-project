const form = document.querySelector('.form');
const input = document.querySelector('.form__input');
const navBtn = document.querySelector('.nav__button');
const mobileNav = document.querySelector('.nav__mobile-nav');


input.addEventListener('focus', function () {
   form.classList.add('form--active');
})


input.addEventListener('blur', function () {
   form.classList.remove('form--active');
})


navBtn.addEventListener('click', function () {
   mobileNav.classList.toggle('nav__mobile-nav--active');
   navBtn.classList.toggle('nav__button--close');
})