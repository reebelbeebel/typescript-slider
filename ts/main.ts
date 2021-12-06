let offsetTs: number = 0;
const sliderlineTs = document.querySelector('.slider-line') as HTMLElement;
const nextButton = document.querySelector('.slider-next') as HTMLElement;
const prevButton = document.querySelector('.slider-prev') as HTMLElement;

nextButton.onclick = (e: MouseEvent) => {
    e.preventDefault;
    offsetTs = offsetTs + 256;
     if (offsetTs > 768) {
         offsetTs = 0;
     }
     sliderlineTs.style.left = -offsetTs + 'px';

}

prevButton.onclick = (e: MouseEvent) => {
    e.preventDefault;
    offsetTs = offsetTs - 256;
    if (offsetTs < 0) {
        offsetTs = 768;
    }
    sliderlineTs.style.left = -offsetTs + 'px';
}