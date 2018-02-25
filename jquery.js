$(document).ready(function(){

  var slides = $('.slideshow>li');
  var slideCount = 0;
  var totalSlides = slides.length;
  var slideCache = [];

  (function preloader(){
    if(slideCount < totalSlides){
      slideCache[slideCount] = new Image();
      slideCache[slideCount].src = slides.eq(slideCount).find('img').attr('src');
      slideCache[slideCount].onload = function(){
        slideCount++;
        preloader();
      }
    } else {
      slideCount = 0;
      slideshow();
    }
  }());

  function slideshow(){
    slides.eq(slideCount).fadeIn(1000).delay(4000).fadeOut(1000, function(){
      slideCount < totalSlides - 1 ? slideCount ++ : slideCount = 0;
      slideshow();
    });
  }


});
