// 
//Модуль управления бургер-меню в мобильной версии сайта
//По-умолчанию меню открыто и находится в потоке. Кнопка скрыта.
//После загрузки скрипта управление меню осуществляется по кнопке с помощью классов и стилей 
//

const initMenu = () => {
    
    const menuButton = document.querySelector('.header__button');
    const menuContainer = document.querySelector('.site-navigation__list');
    const header = document.querySelector('.header--nojs')
    const burgerButton = document.querySelector('.menu-button');
    
    menuButton.classList.toggle('header__button--nojs');
    menuContainer.classList.remove('site-navigation__list--nojs');
    header.classList.remove('header--nojs');
    
    function menuToggle() {
      burgerButton.classList.toggle('menu-button--opened');
      menuContainer.classList.toggle('site-navigation__list--opened');
    }
    
    menuButton.addEventListener('click', menuToggle);
    menuContainer.addEventListener('click', menuToggle);
};

export { initMenu };