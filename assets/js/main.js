// header-slider
var headerSliderIndex = 1;
var headerSliderTime ;
var headerSliderPrev = document.querySelector('.header_slider_container__btn--prev');
var headerSliderNext = document.querySelector('.header_slider_container__btn--next');
showHeaderSlider(headerSliderIndex);
headerSliderPrev.addEventListener('click', (e) => {
    showHeaderSlider(--headerSliderIndex);
})
headerSliderNext.addEventListener('click', (e) => {
    showHeaderSlider(++headerSliderIndex);
})
function showHeaderSlider(n) {
    clearTimeout(headerSliderTime);
    var headerSlider = document.querySelectorAll('.header_slider_container__content');
    var i;
    if(n == undefined) {
        n = ++headerSliderIndex; 
    }
    if(n < 1) {headerSliderIndex = headerSlider.length}
    if(n > headerSlider.length) {headerSliderIndex = 1}
    for(i=0;i<headerSlider.length;i++) {
        headerSlider[i].style.display = 'none';
    }
    headerSlider[headerSliderIndex - 1].style.display = 'block';
    headerSliderTime = setTimeout(() => {
        showHeaderSlider();
    }, 5000);
}