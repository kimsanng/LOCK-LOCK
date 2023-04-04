var swiper = new Swiper('.swiper-container', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
    spaceBetween: 30,
    effect: 'fade',
  
    autoplay: {
      delay: 3000,
    },
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
      clickable: true
    },
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    }
  });
  
  $(function() {
    var $firstMenu = $('.gnb > ul > li'),
        $header = $('header');
  
    $firstMenu.mouseover(function() {
      $header.stop().animate({height: '400px'},300);
    })
    .mouseout(function() {
      $header.stop().animate({height: '137px'},400);
    });
  });
  

  
