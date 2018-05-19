const modal = document.querySelector('.modal');
const btnFadeIn = document.getElementById('fadeIn');
const btnClose = document.querySelector('.modal__close');

btnFadeIn.addEventListener('click', fadeIn);
btnClose.addEventListener('click', close);

function fadeIn() {
    TweenMax.to(modal, .5, { autoAlpha: 1 });
}

function close() {
    TweenMax.to(modal, .5, { autoAlpha: 0 });
}
