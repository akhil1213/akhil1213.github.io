
$(document).ready(function() {
    // $(window).resize(function(){
    //     var w = $(window).width();
    //     console.log(w)
    // });
    $('#cursorfollower').css({"display":"none"})
    $('#cursorfollower').css({position:"absolute","z-index":"1"})
    $('.nav-link').click(()=>{
        // $('#menu').toggleClass('in')
        if($('#menu').hasClass('in')){
            $('#menu').removeClass('in')
        }
    })
    $(window).mousemove((e)=>{
        $('#cursorfollower').css({"display":"block"})
        $('#cursorfollower').css({"top":e.pageY-10,"left":e.pageX-20})
    })
    var element = "#intro"
    var heightOfIntro = $(element).height(); // position = { left: 42, top: 567 }
    //code to change background color of navbar after user passes about section.
    $(window).scroll(function(){
        // console.log($(window).scrollTop())
        if($(window).scrollTop() >= heightOfIntro){
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
    //turn width of description which has position:absolute to the width of the parent image.
    //need a listener that listens to width changes of the document because width of parent images will change so
    //width of description needs to change.
    changeWidthOfProjectDescription = () =>{
        widthOfProjectImages = $('.projinfo').width()
        $('.description').each(function(item){
            $(this).css('width',widthOfProjectImages);
        })    
    }
    changeWidthOfProjectDescription()//initially the window size doesnt change so we have to set the width of descriptions to parent images
    //now everytime the window resizes, set the width of the description to be width of parent images. each parent image will always have the same width cause of bootstrap.
    $( window ).resize(function() {
        changeWidthOfProjectDescription()
    })
    //code for project hovering so you can see description
    $('.projinfo').mouseenter(function(){
        description = $(this).find($('.description'))
        description.css('display','block')
        description.css({
            'animation-name': 'fadeIn',
            'animation-timing-function': 'ease-in-out',
            'animation-duration': '1s',
        })
    }).mouseleave(()=>{
        description = $(this).find($('.description'))
        // if(description.css('display') == 'block')
        // {
        //     description.css({
        //         'animation-name': 'fadeOut',
        //         'animation-timing-function': 'ease-in-out',
        //         'animation-duration': '1s',
        //     })   
        // }
        
        // animating out is too buggy.
        description.css('display','none')
    })
})
