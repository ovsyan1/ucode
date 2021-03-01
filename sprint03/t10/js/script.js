let offset = 0;//смещение от левого края 
const sliderLine = document.querySelector('.slider-line');

document.querySelector('.slider-prev').addEventListener('click', prevSlider)
document.querySelector('.slider-next').addEventListener('click', nextSlider)

setInterval(nextSlider,3000)

function prevSlider() {
    offset -= 230;
    if(offset < 0){//когда заканчиается ширина блока блок возвращается на начало
        offset = 690;
    }
    sliderLine.style.left = -offset + 'px';
}

function nextSlider(){
    offset += 230;
    if(offset > 690){//когда заканчиается ширина блока блок возвращается на начало
        offset = 0;
    }
    sliderLine.style.left = -offset + 'px';
}