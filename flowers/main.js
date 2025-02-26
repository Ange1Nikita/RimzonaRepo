$(document).ready(function () {
  // Переменная для отслеживания состояния меню
  let menuOpen = false;

  // Обработчик клика на бургер-кнопку
  $(".menu-button").on("click", function () {
      if (!menuOpen) {
          // Открыть меню
          $(".mobile-menu").fadeIn();
          $(this).addClass("active"); // Добавляем класс active для анимации крестика
          menuOpen = true;
      } else {
          // Закрыть меню
          $(".mobile-menu").fadeOut();
          $(this).removeClass("active"); // Убираем класс active
          menuOpen = false;
      }
  });

  // Закрыть меню при клике вне его области
  $(document).on("click", function (e) {
      if (
          !$(e.target).closest(".menu-button").length &&
          !$(e.target).closest(".mobile-menu").length &&
          menuOpen
      ) {
          $(".mobile-menu").fadeOut();
          $(".menu-button").removeClass("active");
          menuOpen = false;
      }
  });

  // Обработчик изменения размера окна
  $(window).on("resize", function () {
      const windowWidth = $(window).width();

      if (windowWidth > 600) {
          // Если ширина больше 600px, закрываем меню
          if (menuOpen) {
              $(".mobile-menu").fadeOut();
              $(".menu-button").removeClass("active");
              menuOpen = false;
          }
      } else {
          // Если ширина меньше или равна 600px, закрываем меню, если оно открыто
          if (menuOpen) {
              $(".mobile-menu").fadeOut();
              $(".menu-button").removeClass("active");
              menuOpen = false;
          }
      }
  });

  // Инициализация Owl Carousel
  if ($('.owl-carousel').length) {
    $('.owl-carousel').owlCarousel({
        loop: true,
        margin: 30, // Отступ между элементами
        stagePadding: 0,
        autoWidth: false,
        autoplay: true,
        autoplayTimeout: 2000,
        autoplayHoverPause: true,
        nav: true,
        dots: true,
        responsive: {
            0: {
                items: 1
            },
            400: {
                items: 2
            },
            610: {
                items: 4
            }
        }
    });
}
});