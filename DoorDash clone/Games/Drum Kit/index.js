var noOfButton = document.querySelectorAll(".drum").length;
//document.querySelector(".w").classList.add(".pressed");




//ye loop phele hi run hoke saare buton pe event listner laga dega or fir jb click krenge button pe
// toh vo vala event listner kaam karega

// this  => document.querySelectorAll(.drum)[i]   
//this ussi elt ko target karega jispe query selector laga hai

for (var i = 0; i < noOfButton; i++) {
    document.querySelectorAll(".drum")[i].addEventListener("click", function () {

        var buttonInnerHtml = this.innerHTML;
        makeSound(buttonInnerHtml);      //iske andar letter aayega

       highlight(buttonInnerHtml);

    })
}



//keyboard button click 


document.addEventListener("keydown" , function(event) {

    makeSound(event.key);
    highlight(event.key);
})

// to highlight the drum by add pressed class 

function highlight(e){
    document.querySelector("."+e).classList.add("pressed");
    setTimeout(function(){document.querySelector("."+e).classList.remove("pressed");},100);
}



function makeSound(key){

    switch (key) {
        case 'w':
            var crash = new Audio("sounds/crash.mp3");
            crash.play();
            break;

        case 'a':
            var kickbas = new Audio("sounds/kick-bass.mp3");
            kickbas.play();
            break;


        case 's':
            var crash = new Audio("sounds/snare.mp3");
            crash.play();
            break;

        case 'd':
            var crash = new Audio("sounds/tom-1.mp3");
            crash.play();
            break;
        case 'l':
            var crash = new Audio("sounds/tom-2.mp3");
            crash.play();
            break;
        case 'j':
            var crash = new Audio("sounds/tom-3.mp3");
            crash.play();
            break;
        case 'k':
            var crash = new Audio("sounds/tom-4.mp3");
            crash.play();
            break;

        default: console.log("not working");
            break;
    }
}