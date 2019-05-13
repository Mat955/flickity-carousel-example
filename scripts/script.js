'use strict';
// const tabs = document.querySelectorAll('.nav-item');
// const tabsArray = [...tabs];
// tabsArray.forEach(tab => {
//     tab.addEventListener('click', (e) => {
//         const id = `carousel-${e.target.id}`;
//         var productCarousel = new Flickity(`#${id}`, {
//             pageDots: false,
//             prevNextButtons: false,
//             setGallerySize: false
//         });
//         registerDotListener(productCarousel);
//     });
// });

var productCarousel = new Flickity('.carousel-1', {
    pageDots: false,
    prevNextButtons: false,
    setGallerySize: false
});
registerDotListener(productCarousel);

function registerDotListener(productCarousel) {
    const firstDot = document.querySelector('.dot-F');
    const secondDot = document.querySelector('.dot-S');
    const thirdDot = document.querySelector('.dot-T');
    firstDot.addEventListener('click', e => {
        productCarousel.select(0);
        firstDot.classList.add('active');
        secondDot.classList.remove('active');
        thirdDot.classList.remove('active');
    });
    secondDot.addEventListener('click', () => {
        productCarousel.select(1);
        secondDot.classList.add('active');
        firstDot.classList.remove('active');
        thirdDot.classList.remove('active');
    });
    thirdDot.addEventListener('click', () => {
        productCarousel.select(2);
        thirdDot.classList.add('active');
        firstDot.classList.remove('active');
        secondDot.classList.remove('active');
    });
}