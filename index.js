for (i = 0; i<document.querySelectorAll(".drum").length; i++){
    document.querySelectorAll(".drum")[i].addEventListener("click", function (){  
       var textOne = this.innerHTML;
       keyPress(textOne);
       animationOfButton(textOne);
    });}
   
    
  document.addEventListener("keydown",
  function(b){
    keyPress(b.key)
    animationOfButton(b.key);
  }
 );
function keyPress(textt) {  
    switch (textt) {
        case "w": 
         var audioOne = new Audio("sounds/tom-1.mp3");
               audioOne.play(); 
        break;
        case "a": 
         var audioTwo = new Audio('sounds/tom-2.mp3');
               audioTwo.play(); 
        break;
        case "s":
            var audioThree = new Audio('sounds/tom-3.mp3');
               audioThree.play(); 
        break;
        case "d":
            var audioFour = new Audio('sounds/tom-4.mp3');
               audioFour.play(); 
        break;
        case "j":
            var audioFive = new Audio('sounds/snare.mp3');
               audioFive.play(); 
        break;
        case "k":
            var audioSix = new Audio('sounds/kick-bass.mp3');
               audioSix.play(); 
        break;
        case "l":
            var audioSeven = new Audio('sounds/crash.mp3');
               audioSeven.play(); 
        break;
        default:
            console.log("click any one of the button")
        break;
    }}
function animationOfButton(thekey){ document.querySelector("."+thekey).classList.add("pressed");  setTimeout(function(){document.querySelector("."+thekey).classList.remove("pressed");},100)}