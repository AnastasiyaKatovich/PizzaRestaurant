
    
$(document).ready(function(){

    $('body').append('<div class="upbtn"></div>');
    $(window).scroll(function() {
    if ($(this).scrollTop() > 100) {
    $('.upbtn').css({
    transform: 'scale(1)'
    });
    } else {
    $('.upbtn').css({
    transform: 'scale(0)'
    });
    }
    });
    $('.upbtn').on('click',function() {
    $('html, body').animate({
    scrollTop: 0
    }, 500);
    return false;
    });

$('.links').mouseover(function(){
    var collor = $(this).attr('data-color');
    var title = $(this).attr('data-title');
    $('bg-transparenter').css('background',collor);
    $('.header-empty')
    )
});

});
