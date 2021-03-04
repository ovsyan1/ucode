const images = document.querySelectorAll('.slider .slider-line img');
const sliderLine = document.querySelector('.slider-line');
let count = 0;
let width;

function init() {
    width = document.querySelector('.slider').offsetWidth;//узнать ширину
    sliderLine.style.width = width * images.length + 'px';
    images.forEach(item => {
        item.style.width = width + 'px';
        item.style.height = 'auto';
    });
    rollSlider()
}
window.addEventListener('resize', init);//
init()
const sliderNext = document.querySelector('.slider-next')

function nextSlider(){
    count++;
    if (count >= images.length) {
                count = 0;
            }
            rollSlider()
}
function rollSlider() {
    sliderLine.style.transform = 'translate(-' + count * width + 'px)';
}
setInterval(nextSlider,5000)