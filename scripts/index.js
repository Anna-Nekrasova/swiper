const mySwiper = new Swiper('.swiper', {
    direction: 'horizontal',
    loop: true,
    pagination: {
        el: '.swiper__pagination',
        clickable: true
    },

    navigation: {
        nextEl: '.swiper__button-next',
        prevEl: '.swiper__button-prev'
    }
});