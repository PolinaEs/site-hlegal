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

var btnContainer = document.getElementById("active-lang");
var btns = btnContainer.getElementsByClassName("about-actions__language-link");
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function () {
    var current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace(" active", "");
    this.className += " active";
  });
}