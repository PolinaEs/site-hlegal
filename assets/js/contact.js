const menuBtn = document.querySelector('.contact-menu__btn')
const menuList = document.querySelector('.contact-menu__list')
const body = document.querySelector('body')

menuBtn.addEventListener('click', (e) => {
  menuBtn.classList.toggle('active')

})

$('.contact-menu__btn').on('click', function () {
  $(this).toggleClass('-active');
  $('.contact-menu__list').stop(true, true).slideToggle(500);
});

