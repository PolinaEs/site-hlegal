const menuBtn = document.querySelector('.services-menu__btn')
const menuList = document.querySelector('.services-menu__list')
const body = document.querySelector('body')

menuBtn.addEventListener('click', (e) => {
  menuBtn.classList.toggle('active')

})

$('.services-menu__btn').on('click', function () {
  $(this).toggleClass('-active');
  $('.services-menu__list').stop(true, true).slideToggle(500);
});

