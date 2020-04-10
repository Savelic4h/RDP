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
  new WOW().init();
  $('.form-agree').on('click', function () {
    $(this).toggleClass('active')
  });
  $('.projects-slider__inner').slick({
    arrows: false,
    dots: false,
    asNavFor: '.project__slider-thumbs',
  });
  $('.project__slider-thumbs').slick({
    arrows: false,
    dots: false,
    asNavFor: '.projects-slider__inner',
    focusOnSelect: true
  });
});