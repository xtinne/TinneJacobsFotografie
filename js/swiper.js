var swiper = new Swiper('.swiper-container', {
    pagination: '.swiper-pagination',
    slidesPerView: 3,
    paginationClickable: true,
    spaceBetween: 30,
    breakpoints: {
        // when window width is <= 640px
        640: {
            slidesPerView: 1,
            spaceBetween: 30
        },
        920: {
            slidesPerView: 2,
            spaceBetween: 30
        }
    }
});