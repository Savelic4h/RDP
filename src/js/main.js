$(function () {
  $('.popup-with-form').magnificPopup({
    type: 'inline',
    preloader: false,
    focus: '#name',
    callbacks: {
      beforeOpen: function () {
        if ($(window).width() < 700) {
          this.st.focus = false;
        } else {
          this.st.focus = '#name';
        }
      }
    }
  });
  $('.form-agree').on('click', function () {
    $(this).toggleClass('active')
  });
  $('.projects-slider__inner').slick({
    arrows: true,
    dots: true,
    fade: true,
    asNavFor: '.project__slider-thumbs',
  });
  $('.project__slider-thumbs').slick({
    arrows: false,
    dots: false,
    focusOnSelect: true,
    fade: true,
    asNavFor: '.projects-slider__inner',
  });
  $('.stepByStep__slider-inner').slick({
    arrows: false,
    dots: true,
    fade: true,
    asNavFor: '.stepByStep__slider-thumbs',
  });
  $('.stepByStep__slider-thumbs').slick({
    arrows: false,
    dots: false,
    fade: true,
    asNavFor: '.stepByStep__slider-inner',
  })
  new WOW().init();
});