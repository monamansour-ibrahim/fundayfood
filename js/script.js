$(document).ready(function(){
   $(".slick-main").slick({
        autoplay:true, 
         autoplaySpeed: 3000, 
        slidesToShow:3,
        slidesToScroll:2,
       nextArrow:'false',
         prevArrow:'false',
       dots:'true',
         responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 3
        
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
    $(".tabs-list li").on("click",function(){
        $(this).addClass("active").siblings().removeClass("active");
        $(".content-list > div").hide();
        $($(this).data("content")).fadeIn();
    });
    $(".navbar .nav-item .nav-link").on("click",function(event){
        event.preventDefault();
        $("html,body").animate({
            scrollTop:$("#"+$(this).data("scroll")).offset().top+1
        },1000);
        $(".navbar .nav-item").removeClass("active");
        $(this).parent().addClass("active");
    });
    $(window).scroll(function(){
        var scrollToTop=$(".scroll-to-top");
        if($(window).scrollTop()>=1000){
            scrollToTop.fadeIn(400);
            
        } else{
             scrollToTop.fadeOut(400);
        }
    });
    $(".scroll-to-top").click(function(e){
        e.preventDefault();
        $("html,body").animate({
            scrollTop:0
        },1000)
    })
});