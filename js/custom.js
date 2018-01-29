/*global $*/


$(function () {
   
    "use strict";
    
    $(window).scroll(function () {
        
        var navbar = $('.navbar');
        
        if ($(window).scrollTop() >= navbar.height()) {
            
            navbar.addClass('scrolled');
        } else {
            
            navbar.removeClass('scrolled');
        }
        
    });
    
    $('.tab li').click(function () {
        
        $(this).addClass('active').siblings().removeClass('active');
        
        $('.tab-content > div').hide();
        
        $($(this).data('class')).fadeIn(2000);
        
    });
    
    
    $("body").niceScroll({
        
        cursorcolor: '#ff9b51',
        cursorwidth: '7px',
        cursorborder: 'none'
    });
    
    
    $('nav .collapse ul li a').click(function () {
    
        $('html, body').animate({
            
            scrollTop: $('#' + $(this).data('value')).offset().top
            
        }, 1000);
    
    });
    
    
});