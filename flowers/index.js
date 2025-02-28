const swiper = new Swiper('.swiper',{
    // Основные методы:
    direction: 'horizontal',
    loop: true,
    freeMode: false,
    spaceBetween: 30,
    slidesPerView: 'auto',


    breakpoints: {
        0: { slidesPerView: 0 },
        320: { slidesPerView: 1 },
        630: { slidesPerView: 2 },
        1000: { slidesPerView: 3 },
        1360: { slidesPerView: 4 },
    },

    
    pagination:{
        el:'.swiper-pagination',
        clickable: true,
    },


})