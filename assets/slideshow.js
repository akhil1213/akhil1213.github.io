//once all the libraries load, put display of loader-wrapper to none.
$(window).load(function() {
   $('#loader-wrapper').css('display','none');
   $('#navbar').addClass('fixed-top')//navbar is initially hidden when website is loading 
});
$(document).ready(function() {
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
// $(window).resize(function () { 
//     $('body').css('margin-top', parseInt($('#main-navbar').css("height"))-1000);
// });


