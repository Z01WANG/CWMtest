$(document).ready(function(){
    $('.hamburger-btn').on('click', function(){
        console.log("???");
        $('.nav-list').slideToggle();
    });
    $('.close-btn').on('click', function(){
        console.log("??");
        $('.nav-list').slideToggle();
    });
    $('.member-list').slick({
        prevArrow: '<div class="slick-prev"><i class="arrow left"></i></div>',
        nextArrow: '<div class="slick-next"><i class="arrow right"></i></div>',
        infinite: true,
        slidesToShow: 5,
        slidesToScroll: 5,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
    });
    $(window)
    .bind('resize', function () {
      if ($(this).width() < 768) {
        $('.nav-list').hide();
      } else {
        $('.nav-list').show();
      }
    })
    .trigger("resize");
});
