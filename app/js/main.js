//dropdown menu in main-navigation
$('.main-nav-item').mouseenter(function () {
  if($(window).width() > 991) {
    $(this).addClass('active')
  }
});
$('.main-nav-item').mouseleave(function () {
  if($(window).width() > 991) {
    $(this).removeClass('active')
  }
});
$('.main-nav-item').click(function (){
  if ($(window).width() < 992) {
    $(this).toggleClass('active')
  }
})


//show mobile menu
$('.toggle-mobile-menu').click(function (){
  $(this).toggleClass('active');
  $('.header-main').toggleClass('show');
  $('body').toggleClass('scroll-locked');
  let height = $('.header').innerHeight();
  let menuHeight = $(window).height() - height;
  $('.header-main').css({
    'top': height,
    'height': menuHeight
  })
});


//switch lang
$('.switch-lang a').click(function () {
  $('.switch-lang a').removeClass('active');
  $(this).addClass('active');
})


//footer menu show on mobile
$('.footer-col-title p').click(function (){
  $(this).toggleClass('active')
  $(this).closest('.footer-col-title').next('.footer-col-list').slideToggle()
})


//phone-mask
$(document).ready(function () {
  $('.phone-mask').mask('+7 000 000 0000');
})


//input type file check
$('input:file').change(function () {
  if ($(this).val() !== '') {
    $(this).closest('.upload-form').addClass('loaded');
  } else {
    $(this).closest('.upload-form').removeClass('loaded');
  }
})