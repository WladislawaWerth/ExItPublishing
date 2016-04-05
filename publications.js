console.log("publications.js loaded!!!"); 

$(document).ready(function(){
    
    
    
    
    $('#publications #portfolio>div>divimg').mouseleave(function(){
        $(this).siblings().animate({
            opacity: '0',
            right: '0'
        },{
            duration: 1000
        });
    });
        
    
    
    
});