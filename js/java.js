$(document).ready(function(){
    
    $(".header").height($(window).height());
    
    $(window).resize(function(){
        
         $(".header").height($(window).height());
        $('.bxslider').css('paddingTop', ($(window).height()-$('.bxslider li').height())/2)
    });
   
  $(".links li ").on("click",function(){
      
      $(this).addClass("active").siblings().removeClass('active');
  })
    
    $('.bxslider').bxSlider({
        
      speed:1000,
        slideMargin: 5,
            pager:false,
     
            
    });
    $('.bxslider').each(function(){
        
        $(this).css('paddingTop', ($(window).height()-$('.bxslider li').height())/2) ;    
        
    });
      /* ------------------------------------------------------------------------------------------------------------------------------------------------*/
    /* smooth scroll start*/
    $(".links li a ").on("click",function(){
       
        $("html,body").animate({
            
            scrollTop:$("#"+$(this).data('value')).offset().top
        },$(this).data('spd'));// responce time
        
    });
    /* smooth scroll end*/
     /* ------------------------------------------------------------------------------------------------------------------------------------------------*/
    /* testmon auto slider start*/
    
    (function autoSlider(){  /// called self invok function (meens that it auto run by it's self and no need to call it and can be named any thing) 
    
        $('.testmon .active').each(function(){
                                
                if(!$(this).is(":last-child"))
                {
                    $(this).delay(3000).fadeOut(1000,function()
                    {
                    $(this).removeClass("active").next().fadeIn(2000).addClass('active');
                     autoSlider(); 
                    })
                }else
                { 
                    $(this).delay(3000).fadeOut(1000,function()
                    {
                        $(this).removeClass("active");
                        $('.comments div:first-child').fadeIn(2000).addClass('active');
                            autoSlider();
                    });
                };
                                            });  
                            }());
    
    /* testmon auto slider end*/
    /* ------------------------------------------------------------------------------------------------------------------------------------------------*/
    /* start mixitup */
        /*var mixer = mixitup('.sambles');*/
    /* end mixitup */
    /* ------------------------------------------------------------------------------------------------------------------------------------------------*/
    /* start prjects */
    $('.pro-list li').click(function(){
                            
            $(this).addClass('active').siblings().removeClass("active");
            $($(this).data('filter')).addClass('act').siblings().not($(this).data('filter')).removeClass('act');
                            
                            });
     /* ------------------------------------------------------------------------------------------------------------------------------------------------*/
    /* start nice scroll */
    $('html').niceScroll({
       cursorwidth:12,
        cursoropacitymin:0.4,
        cursorcolor:'#6e8cb6',
        cursorborder:'none',
        cursorborderradius:4,
        autohidemode:'leave'
    });


});
    
    
    

 