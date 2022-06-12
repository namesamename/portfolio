let winW=$(window).width();

$(window).scroll(function(){
    let sct=$(this).scrollTop();
    
    let offTop1=$('#main').offset().top;
    if(winW<800){
        if(sct>offTop1-400){
            $('body').addClass('on');
        }else{
            $('body').removeClass('on');
        }
    }else{
        if(sct>offTop1-1000){
            $('body').addClass('on');
        }else{
            $('body').removeClass('on');
        }
    }
    if(sct>offTop1){
        $('.scroll').addClass('on');
        $('#main .top-btn').show();
    }else{
        $('.scroll').removeClass('on');
        $('#main .top-btn').hide();
    }


    let scrH=($(window).scrollTop()/($(document).height()-$(window).height()))*100;
    // console.log(srcH);
    $('.scr-now').stop().animate({height: scrH+'%'},1);


    $('.pj-info').each(function(){
        let offTop2=$(this).offset().top;
    
        if(winW<800){
            if(sct>offTop1-300){
                $(this).addClass('on');
                $(this).siblings('.pj-main').addClass('on');
                $(this).siblings('.pj-main').find('.pj-link>a').addClass('on');
            }else{
                $(this).removeClass('on');
                $(this).siblings('.pj-main').removeClass('on');
                $(this).siblings('.pj-main').find('.pj-link>a').removeClass('on');
            }
        }else{
            if(sct>offTop2-700){
                $(this).addClass('on');
                $(this).siblings('.pj-main').addClass('on');
                $(this).siblings('.pj-main').find('.pj-link>a').addClass('on');
            }else{
                $(this).removeClass('on');
                $(this).siblings('.pj-main').removeClass('on');
                $(this).siblings('.pj-main').find('.pj-link>a').removeClass('on');
            }
        }
    });

    let offTop3=$('#about').offset().top;
    if(sct>offTop3-300){
        $('#about').find('.tit-t').stop().animate({right: 0},1500);
        $('#about').find('.tit-b').stop().animate({right: 0, left: 0},1500);
    }else{
        $('#about').find('.tit-t').stop().animate({right: '-100%'},1500);
        $('#about').find('.tit-b').stop().animate({right: '-100%', left: '110%'},1500);
    }

    let offTop4=$('#contact').offset().top;
    
    if(sct>offTop4-200){
        $('body').removeClass('on');
        $('.scroll').removeClass('on');
        $('.contact').stop().animate({left: '-5%'},1500);
        $('.info-t').stop().animate({right: '-5%'},1500);
        $('.info-b').stop().animate({left: '-5%'},1500);
        $('#contact .top-btn').show();
    }else{
        $('.contact').stop().animate({left: '-150%'},1500);
        $('.info-t').stop().animate({right: '-150%'},1500);
        $('.info-b').stop().animate({left: '-150%'},1500);
        $('#contact .top-btn').hide();
    }

    $('.top-btn').click(function(){
        $('html, body').stop().animate({scrollTop: $('#cover').offset().top},700);
    });
});

