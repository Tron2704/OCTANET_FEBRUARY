let slider = document.querySelector('.slider .list');
let items = document.querySelectorAll('.slider .list .item');
let next = document.getElementById('next');
let prev = document.getElementById('prev');
let dots = document.querySelectorAll('.slider .dots li');

let lengthItems = items.length - 1;
let active = 0;
next.onclick = function () {
  active = active + 1 <= lengthItems ? active + 1 : 0;
  reloadSlider();
}
prev.onclick = function () {
  active = active - 1 >= 0 ? active - 1 : lengthItems;
  reloadSlider();
}
let refreshInterval = setInterval(() => { next.click() }, 3000);
function reloadSlider() {
  slider.style.left = -items[active].offsetLeft + 'px';
  // 
  let last_active_dot = document.querySelector('.slider .dots li.active');
  last_active_dot.classList.remove('active');
  dots[active].classList.add('active');

  clearInterval(refreshInterval);
  refreshInterval = setInterval(() => { next.click() }, 3000);
}

dots.forEach((li, key) => {
  li.addEventListener('click', () => {
    active = key;
    reloadSlider();
  })
})
window.onresize = function (event) {
  reloadSlider();
};


var dropdowns = document.getElementsByClassName("dropdown-btn");
var i;

for (i = 0; i < dropdowns.length; i++) {
  dropdowns[i].addEventListener("click", function () {
    var activeDropdowns = document.querySelectorAll('.dropdown-btn.active');
    for (var j = 0; j < activeDropdowns.length; j++) {
      activeDropdowns[j].classList.remove('active');
      activeDropdowns[j].nextElementSibling.style.display = 'none';
    }

    this.classList.toggle("active");
    var dropdownContent = this.nextElementSibling;
    if (dropdownContent.style.display === "block") {
      dropdownContent.style.display = "none";
    } else {
      dropdownContent.style.display = "block";
    }
  });
}


document.addEventListener('DOMContentLoaded', function () {
  const navIcon = document.getElementById('navIcon');
  const sidenav = document.querySelector('.sidenav');

  navIcon.addEventListener('click', function () {
    sidenav.style.display = (sidenav.style.display === 'none') ? 'block' : 'none';
  });
});
