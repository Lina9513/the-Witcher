const swiper = new Swiper('.swiper', {
    // Настройки Swiper
    slidesPerView: 1,
    loop:true,
    pagination: {
        el: '.swiper-pagination',
        clickable: true, // Делает пагинацию кликабельной
    },
    navigation: {
        nextEl: '.arrow'
    },
    breakpoints: {
       540: {
        slidesPerView: 2
       } 
    }
});

var menuButton = document.querySelector('.menu-button');
var menu = document.querySelector('.header');
menuButton.addEventListener('click', function() {
menuButton.classList.toggle('menu-button-active');
menu.classList.toggle('header-active');
});