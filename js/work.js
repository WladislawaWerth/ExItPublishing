console.log("work.js loaded!!!"); 

$(document).ready(function(){
    
    //when event a happens to object alpha, kick off event b for object beta
    $('.carousel').carousel({
        interval: 3000
    });
    
    //when mouse enters lily-test image, make opacity of lily-test h5 go back to 1
    $('#work #portfolio>div>divimg').mouseenter(function(){
        $(this).animate({
            opacity: '1',
            right: '50px'
        },{
            duration: 1000
        });
    });
    $('#work #portfolio>div>divimg').mouseleave(function(){
        $(this).siblings().animate({
            opacity: '0',
            right: '0'
        },{
            duration: 1000
        });
    });
        
    
    
    
});