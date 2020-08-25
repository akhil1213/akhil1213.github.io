//once all the libraries load, put display of loader-wrapper to none.
// $(window).load(function() {
//    $('#loader-wrapper').css('display','none');
//    $('#navbar').addClass('fixed-top')//navbar is initially hidden when website is loading 
// });
$(document).ready(function() {
    // $('#navbar').addClass('fixed-top')
    // $(window).on("load", function() {
    //     console.log("everytihng loaded.")
    // });
    $('#intro').backstretch([
        'assets/images/pexels-photo-165754.jpeg',
        [
            {height:'100%',url:'assets/images/scarf.png'}
        ],
        'assets/images/drone-photography-of-a-city-during-sunset-3559235.jpg'
    ], {duration: 3000, fade: 750});
    $("#js-rotating").Morphext({
        // The [in] animation type. Refer to Animate.css for a list of available animations.
        animation: "bounceIn",
        // An array of phrases to rotate are created based on this separator. Change it if you wish to separate the phrases differently (e.g. So Simple | Very Doge | Much Wow | Such Cool).
        separator: ",",
        // The delay between the changing of each phrase in milliseconds.
        speed: 2000,
        complete: function () {
            // Called after the entrance animation is executed.
        }
    });
})
// $(window).resize(function () { 
//     $('body').css('margin-top', parseInt($('#main-navbar').css("height"))-1000);
// });


