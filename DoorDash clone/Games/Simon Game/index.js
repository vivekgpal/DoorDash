
var level =0;
var started = false;
var buttonColors =["red","green" ,"blue","yellow"];
var index = 0;
var gamePattern = [];

var userClickedPattern = [];
$(document).keypress(function(event){
    if (!started) {

        $("#level-title").text("Level " + level);
        nextSequence();
        started = true;
      }
})





$(".btn").click(function(){
   var userChosenColor = $(this).attr("id");
   userClickedPattern.push(userChosenColor);
   playSound(userChosenColor);
   animatePress(userChosenColor);
   
   
   checkAnswer(index++);
   
   
})
function checkAnswer(number)
{
   
    if(gamePattern.length<userClickedPattern.length)
    gameOver();
    
   if(gamePattern[number]!=userClickedPattern[number]){
       gameOver();
       
        
   }
   if(number==(gamePattern.length-1))
   {
       setTimeout(nextSequence,400);
   }
}


function nextSequence(){
    level++;
    $("#level-title").text("Level " + level);
    
  
    var randomNumber = Math.floor(Math.random()*4);
    var randomChosenColour =buttonColors[randomNumber] ;
    gamePattern.push(randomChosenColour);
    $("#"+randomChosenColour).fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100);
    playSound(randomChosenColour);
    index =0;
    userClickedPattern =[];
    console.log("original"+ gamePattern);

    
}
function gameOver()
{
    userClickedPattern=[];
    gamePattern =[];
    started=false;
    level  = 0;
    
    $("#level-title").text("Game Over,Press any key to restart");
    playSound("wrong");

    $("body").addClass("game-over");
    setTimeout(() => {
        $("body").removeClass("game-over");
    }, 100);
}
function playSound(name){
    var sound = new Audio("sounds/"+name+".mp3");
    sound.play();
}

function animatePress(name){
  
    $("."+name).addClass("pressed");
   
    setTimeout(() => {
        $("#"+name).removeClass("pressed");
    }, 100);
}

