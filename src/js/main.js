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
    asNavFor: '.project__slider-thumbs',
    fade: true,
  });
  $('.project__slider-thumbs').slick({
    arrows: false,
    dots: false,
    asNavFor: '.projects-slider__inner',
    focusOnSelect: true,
    fade: true,
  });
  $('.stepByStep__slider-inner').slick({
    arrows: true,
    dots: true,
    fade: true,
    asNavFor: '.stepByStep__slider-thumbs',
  });
  $('.stepByStep__slider-thumbs').slick({
    arrows: false,
    asNavFor: '.stepByStep__slider-inner',
    fade: true,
  });
  new WOW().init();
});