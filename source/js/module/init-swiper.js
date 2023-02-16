// 
//Модуль настройки и подключения карусели SwiperJS
//

const initSwiper = () => {
    
    const swiper = new Swiper('.swiper', {
        direction: 'horizontal',
        loop: true,
        autoplay: {
          delay: 7500,
          pauseOnMouseEnter: true,    
        },
        centeredSlides: true,
      
        pagination: {
          el: '.swiper-pagination',
          clickable: true,
        },
      
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
      });

      return swiper;
};

  export { initSwiper };
  