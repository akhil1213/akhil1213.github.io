$(document).ready(function() {
    console.log("idk")
    $('#intro').backstretch([
        'assets/images/pexels-photo-165754.jpeg',
        [
            {width:1030,url:'assets/images/scarf.png'}
        ],
        'assets/images/drone-photography-of-a-city-during-sunset-3559235.jpg'
    ], {duration: 3000, fade: 750});
})
$(window).resize(function () { 
    $('body').css('margin-top', parseInt($('#main-navbar').css("height"))-1000);
});

