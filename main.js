$(function(){
  $('.jsAccordionTitle').on('click', function () {
    $(this).next().toggleClass('is-open');
    $(this).toggleClass('is-active');
  }).eq(0).trigger('click');
});



$(function(){
  const swiper = new Swiper(".swiper", {
    loop: true,
    loopAdditionalSlides: 1,
    autoplay: {
      delay: 4000,
      disableOnInteraction: false,
    },
    speed: 800,
    grabCursor: true,
    centeredSlides: true,
    spaceBetween: 56,
    loopedSlides: 3,
    breakpoints: { 
      0: {
        slidesPerView: 1.2,
      },
      700: {
        slidesPerView: 'auto',
      },
    }
  });
});




$(function(){
  AOS.init();
});


$(function(){
  $(".hamburger-btn,.gnav a").on("click",function(){
    $(".hamburger-btn,.gnav").toggleClass("active")
  });
});




