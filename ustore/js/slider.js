function init() {
    width = document.querySelector('.slider').offsetWidth;//узнать ширину
    sliderLine.style.width = width * images.length + 'px';
    images.forEach(item => {
        item.style.width = width + 'px';
        item.style.height = 'auto';
    });
    rollSlider()
}
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