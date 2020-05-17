function displayExplanation(id){
    document.getElementById(id).style.display = "block";
    switch(id){
        case 'velocityexplanation':
            document.getElementById('csexplanation').style.display = "none";
            document.getElementById('dentistexplanation').style.display = "none";
            break;
        case 'csexplanation':
            document.getElementById('velocityexplanation').style.display = "none";
            document.getElementById('dentistexplanation').style.display = "none";
            break;
        case 'dentistexplanation':
            document.getElementById('velocityexplanation').style.display = "none";
            document.getElementById('csexplanation').style.display = "none";
            break;
    }
}
var images;
var imageStack;
function loopImages(){
    setTimeout(function(){
        imageStack.innerHTML=""
        popped = images.pop()
        images[3] = images[2]
        images[2] = images[1]
        images[1] = images[0]
        images[0] = popped
        images[3].classList.add("top");
        console.log(popped)
        for(var i = 0; i < 3; i++){
            imageStack.appendChild(images[0])
            images[i].classList.remove("top")
        }
        imageStack.appendChild(images[3])
        console.log(imageStack)
        loopImages()
    }, 4500)
}
function loaded(){
    console.log("loaded yes sir")
    images = document.getElementsByClassName("images")
    images = Array.prototype.slice.call( images )
    loopImages()
    imageStack = document.getElementById("imageStack")
    console.log(imageStack)
}