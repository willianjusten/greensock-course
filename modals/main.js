// Modal Elements
const modal = document.querySelector('.modal');

// Buttons
const btnClose = document.querySelector('.modal__close');
const btnFadeIn = document.getElementById('fade-in');

// Events
btnClose.addEventListener('click', close);
btnFadeIn.addEventListener('click', fadeIn);

// Animation Functions
function fadeIn() {
    TweenMax.to(modal, .5, { autoAlpha: 1 });
}

function close() {
    TweenMax.to(modal, .5, { autoAlpha: 0 });
}
