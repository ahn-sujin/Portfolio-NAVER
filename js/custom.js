$(function(){

    var win_w = $(window).width();

    $(window).on('resize',function(){
        win_w = $(this).width();
        if(win_w >= 768){
            $('.submenu').hide();
            $('#gnb_wrap').removeAttr('style');
            $('.toggle').removeAttr('style');
            $('.cancle').removeAttr('style');
        }
    });
    
/*---------gnb메뉴------------------------------------------------------*/    
    $('#gnb').on('mouseenter',function(){
        if(win_w >= 768){
            $('.submenu, .bgGnb').stop(true,true).slideDown();
        } else {
            $('#gnb>li').off('click');
            $('#gnb>li').on('click',function(){
                $('.submenu').stop().slideUp();
                $(this).children('.submenu').stop().slideToggle();
            });
        }
        
    });
    $('#header .inner').on('mouseleave',function(){
        if(win_w >=768){
            $('.submenu').stop(true,true).slideUp();
            $('.bgGnb').stop(true,true).slideUp();
        } 
    });
    
    if(win_w >=768){
        $('#gnb>li').on('mouseenter',function(){
            $(this).children().addClass('on');
            $(this).addClass('on');
        });
    
        $('#gnb>li').on('mouseleave',function(){
            $(this).children().removeClass('on');
            $(this).removeClass('on');
        });
    }

    $('#header .toggle').on('click',function(){
        $('#gnb_wrap, .toggle, .cancle').addClass('on');
    });
    $('#header .cancle').on('click',function(){
        $('#gnb_wrap, .toggle, .cancle').removeClass('on');
    });
    
    
/*---------visual_swiper------------------------------------------------------*/     
    
    var mySwiper = new Swiper('#visual .swiper-container', {    
          loop: true, // 무한반복
          pagination: {
            el: '#visual .swiper-pagination',
            type: 'progressbar',
          },
          navigation: {
            nextEl: '#visual .swiper-button-next',
            prevEl: '#visual .swiper-button-prev',
          },
          autoplay: {
            delay: 3000,
          }, 

    });
   


/*---------sevices_swiper------------------------------------------------------*/   
    var swiper = new Swiper('#services .swiper-container', {
        
        slidesPerView: 1,
        spaceBetween: 20,
        slidesPerGroup: 1,
        loop: true,

        
        pagination: {
          el: '#services .swiper-pagination',
          clickable: true,
        },
        navigation: {
          nextEl: '#services .swiper-button-next',
          prevEl: '#services .swiper-button-prev',
        },
        
        breakpoints: {
        640: {
          slidesPerView: 2,
          spaceBetween: 20,
            slidesPerGroup: 2,
        },
        768: {
          slidesPerView: 3,
          spaceBetween: 25,
          slidesPerGroup: 3,
        },
        1024: {
          slidesPerView: 4,
          spaceBetween: 25,
          slidesPerGroup: 4,
        },
      }
        
      });
    
/*---------tab_menu------------------------------------------------------*/
        $('.tab_menu>li').on('click',function(){
        var i = $(this).index();

        $(this).addClass('on').siblings().removeClass('on');
        $('.tab_pannel>li').eq(i).fadeIn().siblings().fadeOut();
        $('.tab_pannel>li').eq(i).addClass('on').siblings().removeClass('on');

        });

        $('.tab_menu>li').first().trigger('click')



/*---------clova------------------------------------------------------*/
        var mySwiper = new Swiper('#clova .swiper-container', {
            loop: true,
            pagination: {
              el: '#clova .swiper-pagination',
            },

        });

        $('#clova .msg .sub_title').off('click');
        $('#clova .msg .sub_title').on('click',function(){
            $('#clova .product .msg .txt').stop().slideUp();
            $(this).siblings('.txt').stop().slideToggle();
        });
        

    
/*---------scroll motion------------------------------------------------------*/
        var last = 0;
        var sec_pos = [];
        var base_line = -500;

       $('section').each(function(){
           var this_offset = $(this).offset().top;
           sec_pos.push(this_offset); // 현재 위치값을 배열변수 마지막에 추가
       });

       last = $('section').last().offset().top + $('section').last().height();
       sec_pos.push(last);

     
    // 스크롤 모션
       $(window).on('scroll', function(){    
           var scroll = $(this).scrollTop();

           $('section').each(function(index){
               if(scroll >=sec_pos[index] + base_line && scroll<sec_pos[index+1]){
                   
                   $('section').eq(index).addClass('on');
               }
           });


       });


});