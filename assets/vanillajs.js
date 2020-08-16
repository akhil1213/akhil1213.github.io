function displayExplanation(toshow){
    console.log(toshow)
    showing = document.querySelectorAll(toshow)
    var firstBottom = true
    showing.forEach(element => {
        element.style.display = "block"
        firstBottom ? element.classList.add("fadeInForResume") : element.classList.add("fromRight")
        firstBottom = false
    })
    var jobInfos;
    switch(toshow){
        case '.velocityexplanation':
            jobInfos = document.querySelectorAll('.csexplanation')
            jobInfos.forEach(element => element.style.display = "none")
            jobInfos = document.querySelectorAll('.dentistexplanation')
            jobInfos.forEach(element => element.style.display = "none");
            break;
        case '.csexplanation':
            jobInfos = document.querySelectorAll('.velocityexplanation')
            jobInfos.forEach(element => element.style.display = "none")
            jobInfos = document.querySelectorAll('.dentistexplanation')
            jobInfos.forEach(element => element.style.display = "none");
            break;
        case '.dentistexplanation':
            jobInfos = document.querySelectorAll('.velocityexplanation')
            jobInfos.forEach(element => element.style.display = "none")
            jobInfos = document.querySelectorAll('.csexplanation')
            jobInfos.forEach(element => element.style.display = "none");
            break;
    }
}
// var images;
// var imageStack;
// function loopImages(){
//     setTimeout(function(){
//         imageStack.innerHTML=""
//         popped = images.pop()
//         images[3] = images[2]
//         images[2] = images[1]
//         images[1] = images[0]
//         images[0] = popped
//         images[3].classList.add("top");
//         console.log(popped)
//         for(var i = 0; i < 3; i++){
//             imageStack.appendChild(images[0])
//             images[i].classList.remove("top")
//         }
//         imageStack.appendChild(images[3])
//         console.log(imageStack)
//         loopImages()
//     }, 4500)
// }
// function loaded(){
//     images = document.getElementsByClassName("images")
//     images = Array.prototype.slice.call( images )
//     loopImages()
//     imageStack = document.getElementById("imageStack")
//     console.log(imageStack)
// }