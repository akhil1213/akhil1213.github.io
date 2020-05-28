$(document).ready(function() {
    // $(window).resize(function(){
    //     var w = $(window).width();
    //     console.log(w)
    // });
    $('.nav-link').click(()=>{
        // $('#menu').toggleClass('in')
        if($('#menu').hasClass('in')){
            $('#menu').removeClass('in')
        }
    })
    var element = "#intro"
    var heightOfIntro = $(element).height(); // position = { left: 42, top: 567 }
    $(window).scroll(function(){
        // console.log($(window).scrollTop())
        if($(window).scrollTop() >= heightOfIntro){
            console.log('yes')
            $('#navbar').css({"background-color":"black"})
        }else{
            $('#navbar').css('background-color','')
        }
        // var bottomPos = $(window).scrollTop() + $(window).height()
        // //make the section initially hidden.
        // if(bottomPos >= position.top ){
        //     $('#slideInLeft').addClass("projectImage")
        //     $('#slideInLeft').removeClass("hidden")
        //     // console.log("bottomPos >= top pos of about me sec so trigger!")
        // }
    });
})
