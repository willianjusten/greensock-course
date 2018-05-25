// Modal Elements
const modal = document.querySelector('.modal');
const modalBox = document.querySelector('.modal__box');

// Buttons
const btnClose = document.querySelector('.modal__close');
const btnFadeIn = document.getElementById('fade-in');
const btnFadeInScale = document.getElementById('fade-in-scale');
const btnSlideIn = document.getElementById('slide-in');

// Events
btnClose.addEventListener('click', close);
btnFadeIn.addEventListener('click', fadeIn);
btnFadeInScale.addEventListener('click', fadeInScale);
btnSlideIn.addEventListener('click', slideIn);

// Animation Functions
function fadeIn() {
    TweenMax.to(modal, .5, { autoAlpha: 1 });
}

function fadeInScale() {
    TweenMax.set(modalBox, { scale: 0 });
    TweenMax.to(modal, .5, { autoAlpha: 1 });
    TweenMax.to(modalBox, 1, { scale: 1, delay: .5, ease: Elastic.easeOut });
}

function slideIn() {
    TweenMax.to(modal, .5, { autoAlpha: 1 });
    TweenMax.from(modalBox, .5, { autoAlpha: 0, left: -300, top: 200 });
}

function close() {
    TweenMax.to(modal, .5, { autoAlpha: 0 });
}
