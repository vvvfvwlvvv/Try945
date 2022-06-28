let swiper = new Swiper('.swiper', {
 
  direction: 'horizontal',
  loop: true,

  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },

  slidesPerView: 1.3,

  spaceBetween: 16,
});

if(matchMedia){
  var screen = window.matchMedia("(max-width: 767px)");
  screen.addListener(changes);
  changes(screen);
}
function changes(screen){
  if (screen.matches){
    swiper = new Swiper('.swiper', {
 
      direction: 'horizontal',
      loop: true,
    
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
    
      slidesPerView: 1.3,
    
      spaceBetween: 16,
    }); 
  }
  else{
    swiper.destroy();
  }
}
