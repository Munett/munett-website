$(document).ready(function () {
  var apiSlider = $('.apiReference-slider').unslider({ nav: false, arrows: false, infinite: true, keys: false});
  
  $('.apiSlider-curp').unslider({
    arrows: false
  });

  $('.apiSlider-info').unslider({
    arrows: false
  });

  $('#action-curp').click(function () {
    apiSlider.data('unslider').animate('0');
  });

  $('#action-info').click(function () {
    apiSlider.data('unslider').animate('1');
  });

  $('.action').click(function() {
    $('.action').removeClass('action--active');
    $(this).addClass('action--active');
  });
});