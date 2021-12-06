"use strict";
let offsetTs = 0;
const sliderlineTs = document.querySelector('.slider-line');
const nextButton = document.querySelector('.slider-next');
const prevButton = document.querySelector('.slider-prev');
nextButton.onclick = (e) => {
    e.preventDefault();
    offsetTs = offsetTs + 256;
    if (offsetTs > 768) {
        offsetTs = 0;
    }
    sliderlineTs.style.left = -offsetTs + 'px';
};
prevButton.onclick = (e) => {
    e.preventDefault();
    offsetTs = offsetTs - 256;
    if (offsetTs < 0) {
        offsetTs = 768;
    }
    sliderlineTs.style.left = -offsetTs + 'px';
};
