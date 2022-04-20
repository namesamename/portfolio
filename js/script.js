$(window).scroll(function(){
    let sct=$(this).scrollTop();
    let offTop=$('#main').offset().top;

    if(sct>offTop-1000){
        $('#main').addClass('on')
        
    }else{
        $('#main').removeClass()
    }
});