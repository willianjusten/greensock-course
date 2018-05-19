const modal = document.querySelector('.modal');
const btnFadeIn = document.getElementById('fadeIn');

btnFadeIn.addEventListener('click', fadeIn);

function fadeIn() {
    TweenMax.to(modal, .5, { autoAlpha: 1 });
}
