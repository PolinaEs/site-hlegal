const menuBtn = document.querySelector('.member-menu__btn')
const menuList = document.querySelector('.member-menu__list')
const body = document.querySelector('body')

menuBtn.addEventListener('click', (e) => {
  menuBtn.classList.toggle('active')

})

$('.member-menu__btn').on('click', function () {
  $(this).toggleClass('-active');
  $('.member-menu__list').stop(true, true).slideToggle(500);
});

