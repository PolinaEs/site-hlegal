const menuBtn = document.querySelector('.team-menu__btn')
const menuList = document.querySelector('.team-menu__list')
const body = document.querySelector('body')

menuBtn.addEventListener('click', (e) => {
  menuBtn.classList.toggle('active')

})

$('.team-menu__btn').on('click', function () {
  $(this).toggleClass('-active');
  $('.team-menu__list').stop(true, true).slideToggle(500);
});

