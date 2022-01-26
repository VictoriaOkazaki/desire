$(function () {
  $(".header__btn").on("click", function () {
    $(".rightside-menu").removeClass("rightside-menu--close");
  });

  $(".rightside-menu__close").on("click", function () {
    $(".rightside-menu").addClass("rightside-menu--close");
  });

  $(".header__btn-menu").on("click", function () {
    $(".menu").toggleClass("menu--open");
  });

  if ($(window).width() < 651) {
    $('.works-path__item--measurements').appendTo($('.works-path__items-box'));
  }

  $(".top__slider").slick({
    dots: true,
    arrows: false,
    fade: true,
    autoplay: true,
  });

  function createSlider(slidesToShow, slidesToScroll) {
    $(".contact-slider").slick({
      slidesToShow: slidesToShow,
      slidesToScroll: slidesToScroll,
      dots: true,
      arrows: false,
    });
  }

  const width = $(window).width()
  if (width > 1700) {
    createSlider(10, 10)
  } else if (width > 1511) {
    createSlider(8, 8)
  } else if (width > 1201) {
    createSlider(6, 6)
  } else if (width > 841) {
    createSlider(4, 4)
  } else if (width > 551) {
    createSlider(3, 3)
  } else if (width > 376) {
    createSlider(2, 2)
  } else {
    $(".contact-slider").slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      dots: false,
      arrows: false,
    });
  }

  $(".article-slider__box").slick({
    prevArrow: '<button type="button" class="article-slider__arrow article-slider__arrowleft"><img src="images/arrow-slide-left.svg" alt="arrow slide left"></button>',
    nextArrow: '<button type="button" class="article-slider__arrow article-slider__arrowright"><img src="images/arrow-slide-right.svg" alt="arrow slide right"></button>',
  });

  var mixer = mixitup('.gallery__inner', {
    load: {
      filter: '.living'
    }
  });
});
