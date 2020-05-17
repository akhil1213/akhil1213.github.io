$(document).ready(function() {
    var element = ".about"
    var position = $(element).offset(); // position = { left: 42, top: 567 }
    console.log(position)
    $(window).scroll(function(){
        console.log($(window).scrollTop())
        var bottomPos = $(window).scrollTop() + $(window).height()
        //make the section initially hidden.
        if(bottomPos >= position.top ){
            $('#slideInLeft').addClass("projectImage")
            console.log("bottomPos >= top pos of about me sec so trigger!")
        }
    });
})
