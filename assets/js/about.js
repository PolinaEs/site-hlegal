const menuBtn = document.querySelector('.about-menu__btn')
const menuList = document.querySelector('.about-menu__list')
const body = document.querySelector('body')

menuBtn.addEventListener('click', (e) => {
  menuBtn.classList.toggle('active')

})

$('.about-menu__btn').on('click', function () {
  $(this).toggleClass('-active');
  $('.about-menu__list').stop(true, true).slideToggle(500);
});

