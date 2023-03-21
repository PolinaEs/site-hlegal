const menuBtn = document.querySelector('.menu__btn')
const menuList = document.querySelector('.menu__list')
const body = document.querySelector('body')

menuBtn.addEventListener('click', (e) => {
  menuBtn.classList.toggle('active')
  body.classList.toggle('active')
  if (menuList.classList.contains('active')) {
    setTimeout(() => menuList.classList.toggle('active'), 500)
  } else {
    menuList.classList.toggle('active')
  }
})

var btnContainer = document.getElementById("active-lang");
var btns = btnContainer.getElementsByClassName("actions__language-link");
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function () {
    var current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace(" active", "");
    this.className += " active";
  });
}




