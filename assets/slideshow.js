$(window).load(function() {
   $('#loader-wrapper').css('z-index','-100000');
   $('#navbar').addClass('fixed-top')
});
$(document).ready(function() {
    console.log("idk")
    $(window).on("load", function() {
        console.log("everytihng loaded.")
    });
    $('#intro').backstretch([
        'assets/images/pexels-photo-165754.jpeg',
        [
            {height:'100%',url:'assets/images/scarf.png'}
        ],
        'assets/images/drone-photography-of-a-city-during-sunset-3559235.jpg'
    ], {duration: 3000, fade: 750});
})
$(window).resize(function () { 
    $('body').css('margin-top', parseInt($('#main-navbar').css("height"))-1000);
});


