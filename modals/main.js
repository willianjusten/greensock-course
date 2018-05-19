// Modal Elements
const modal = document.querySelector('.modal');
const modalBox = document.querySelector('.modal__box');

// Buttons
const btnClose = document.querySelector('.modal__close');
const btnFadeIn = document.getElementById('fade-in');
const btnFadeInScale = document.getElementById('fade-in-scale');


// Events
btnClose.addEventListener('click', close);
btnFadeIn.addEventListener('click', fadeIn);
btnFadeInScale.addEventListener('click', fadeInScale)

// Animation Functions
function fadeIn() {
    TweenMax.to(modal, .5, { autoAlpha: 1 });
}

function fadeInScale() {
    TweenMax.set(modalBox, { scale: 0 });
    TweenMax.to(modal, .5, { autoAlpha: 1 });
    TweenMax.to(modalBox, 1, { scale: 1, delay: .5, ease: Elastic.easeOut });
}

function close() {
    TweenMax.to(modal, .5, { autoAlpha: 0 });
}
