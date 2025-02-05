// JavaScript Document
var mySwiper = new Swiper('.swiper-container', {
    slidesPerView: 'auto',
    centeredSlides: true,
    watchSlidesProgress: true,
    pagination: '.swiper-pagination',
    paginationClickable: true,
    onProgress: function (swiper) {
        for (var i = 0; i < swiper.slides.length; i++) {
            var slide = swiper.slides[i];
            var progress = slide.progress;
            scale = 1 - Math.min(Math.abs(progress * 0.2), 1);
            es = slide.style;
            es.opacity = 1 - Math.min(Math.abs(progress / 2), 1);
            es.webkitTransform = es.MsTransform = es.msTransform = es.MozTransform = es.OTransform = es.transform = 'translate3d(0px,0,' + (-Math.abs(progress * 150)) + 'px)';
        }
    },
});