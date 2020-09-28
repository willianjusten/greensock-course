// Modal Elements
const modal = document.querySelector('.modal');
const modalBox = document.querySelector('.modal__box');
const modalHeader = document.querySelector('.modal__header');
const modalTitle = document.querySelector('.modal__title');
const modalClose = document.querySelector('.modal__close');

// Buttons
const btnClose = document.querySelector('.modal__close');
const btnFadeIn = document.getElementById('fade-in');
const btnFadeInScale = document.getElementById('fade-in-scale');
const btnSlideIn = document.getElementById('slide-in');
const btnFullScreen = document.getElementById('fullscreen');

// Events
btnClose.addEventListener('click', close);
btnFadeIn.addEventListener('click', fadeIn);
btnFadeInScale.addEventListener('click', fadeInScale);
btnSlideIn.addEventListener('click', slideIn);
btnFullScreen.addEventListener('click', fullScreen);

// Animation Functions
function fadeIn() {
    gsap.to(modal, { duration: .5, autoAlpha: 1 });
}

function fadeInScale() {
    gsap.set(modalBox, { scale: 0 });
    gsap.to(modal, { duration: .5, autoAlpha: 1 });
    gsap.to(modalBox, { duration: 1, scale: 1, delay: .5, ease: "elastic.out" });
}

function slideIn() {
    gsap.to(modal, { duration: 0.5, autoAlpha: 1 });
    gsap.from(modalBox, { duration: 0.5, autoAlpha: 0, top: 300 });
}

function fullScreen() {
    gsap.set(modal, { backgroundColor: '#fff', scale: 0 });
    gsap.set(modalClose, { color: '#333' });
    gsap.set([modalHeader, modalBox], { position: 'initial' });
    gsap.set(modalTitle, { color: '#333', backgroundColor: '#fff' });
    gsap.to(modal, { duration: .2, autoAlpha: 1, scale: 1 });
}

function close() {
    gsap.set([modal, modalClose, modalBox, modalHeader, modalTitle], { clearProps: 'all' });
    gsap.to(modal, { duration: .5, autoAlpha: 0 });
}
