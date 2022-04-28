$(window).scroll(function(){
    let sct=$(this).scrollTop();

    let offTop1=$('#main').offset().top;
    if(sct>offTop1-1000){
        $('body').addClass('on')
    }else{
        $('body').removeClass('on')
    }
    if(sct>offTop1){
        $('.scroll').addClass('on')
    }else{
        $('.scroll').removeClass('on')
    }

    $('.pj-info').each(function(){
        let offTop2=$(this).offset().top;
    
        if(sct>offTop2-700){
            $(this).addClass('on');
            $(this).siblings('.pj-main').addClass('on');
            $(this).siblings('.pj-main').find('.pj-link>a').addClass('on');
        }else{
            $(this).removeClass('on');
            $(this).siblings('.pj-main').removeClass('on');
            $(this).siblings('.pj-main').find('.pj-link>a').removeClass('on');
        }
    });

    let offTop3=$('#about').offset().top;
    if(sct>offTop3-300){
        $('#about').find('.tit-t').stop().animate({right: 0},1500);
        $('#about').find('.tit-b').stop().animate({right: 0, left: 0},1500);
    }else{
        $('#about').find('.tit-t').stop().animate({right: '-100%'},1500);
        $('#about').find('.tit-b').stop().animate({right: '-100%', left: '120%'},1500);
    }

    let offTop4=$('#contact').offset().top;
    if(sct>offTop4-200){
        $('body').removeClass('on');
        $('.scroll').removeClass('on');
        $('.contact').stop().animate({left: '-5%'},1500);
        $('.con-infos').stop().animate({right: '-5%'},1500);
    }else{
        $('.contact').stop().animate({left: '-100%'},1500);
        $('.con-infos').stop().animate({right: '-100%'},1500);
    }
});

