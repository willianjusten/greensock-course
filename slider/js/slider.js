// Selectors
const sliderItems = document.querySelectorAll('.slider__item');

// Slider
const Slider = {
    in: (index) => {
        const item = sliderItems[index];
        const texts = item.querySelectorAll('p')
        const timeline = new TimelineMax();
        
        TweenMax.set(item, { scale: .9 });
        timeline
            .to(item, .5, { left: 0, delay: 1 })
            .to(item, .5, { scale: 1 })
            .staggerFrom(texts, .5, { y: 300, autoAlpha: 0, ease: Back.easeOut }, 0.2)
    },
    out: (index) => {
        const item = sliderItems[index];
        const texts = item.querySelectorAll('p')
        const timeline = new TimelineMax();
        timeline
            .staggerTo(texts, .5, { y: 300, autoAlpha: 0, ease: Back.easeIn }, '-0.5')
            .to(item, .5, { scale: .9 })
            .to(item, .5, { left: '100vw' })
    },
}

Slider.in(0);