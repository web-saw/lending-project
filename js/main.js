const form = document.querySelector('.form');
const input = document.querySelector('.form__input');
const navBtn = document.querySelector('.nav__button');
const mobileNav = document.querySelector('.nav__mobile-nav');
const body = document.body;


input.addEventListener('focus', function () {
   form.classList.add('form--active');
})


input.addEventListener('blur', function () {
   form.classList.remove('form--active');
})


navBtn.addEventListener('click', function (event) {
   event.stopPropagation();
   mobileNav.classList.toggle('nav__mobile-nav--active');
   navBtn.classList.toggle('nav__button--close');
   body.classList.toggle('no-scroll');
})

window.addEventListener('click', function () {
   if (body.classList.contains('no-scroll')) {
      body.classList.toggle('no-scroll');
      mobileNav.classList.toggle('nav__mobile-nav--active');
      navBtn.classList.toggle('nav__button--close');
   }

})

mobileNav.addEventListener('click', function (event) {
   event.stopPropagation();

})