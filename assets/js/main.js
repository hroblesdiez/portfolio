//menu 
const menuBtn = document.querySelector('.menu-btn');
const hamburguer = document.querySelector('.menu-btn__hamburguer');
const nav = document.querySelector('.nav');
const menuNav = document.querySelector('.menu-nav');
const navItems = document.querySelectorAll('.menu-nav__item');

let $showMenu = false;

menuBtn.addEventListener ('click', toggleMenu);

function toggleMenu() {
    if (!$showMenu) {
        hamburguer.classList.add('open');
        nav.classList.add('open');
        menuNav.classList.add('open');
        navItems.forEach(item => item.classList.add('open'));
        $showMenu = true;
    } else {
        hamburguer.classList.remove('open');
        nav.classList.remove('open');
        menuNav.classList.remove('open');
        navItems.forEach(item => item.classList.remove('open'));
        $showMenu = false;
    }
}

//Get the IP of the user
const spanishNumber = document.querySelectorAll('.contact__spanish-number');
const polishNumber = document.querySelectorAll('.contact__polish-number');


$.getJSON('https://api.db-ip.com/v2/free/self', function(data) {
  console.log(JSON.stringify(data, null, 2));
  if (data.countryName == 'Spain') {
       
       spanishNumber.forEach(element => element.style.display = 'block');

            } else {
               
               polishNumber.forEach(element => element.style.display = 'block');     
  }
});
