var p1;
var p2;

var play1_name;
var play2_name;
var player1_turn=true;
var player2_turn = false;
function onclic(){
     play1_name =  prompt("Enter player 1 name");
     play2_name =  prompt("Enter player 2 name");
    $(".player1-name").text(play1_name);       //player 1 name
    $(".player2-name").text(play2_name);       //player 2 name

    $(".player1").text(play1_name);  //button name
    
    $(".player2").text(play2_name);  //button naming

    $(".start").hide();
    $(".player1").show();
    $(".player2").show();
    $(".turn").text("it's your turn " + play1_name);
       
}

function player1_click()
{

  if(player1_turn){
    $(".turn").text("it's your turn " + play2_name);

    var crash = new Audio("sound/dice-sound.mp3");
    crash.play();
    p1 = Math.floor(Math.random()*5);
    p1+=1;
   document.querySelector(".img1").setAttribute("src","images/dice"+p1+".png");
    player1_turn=false;
    player2_turn = true;
  }
}

function player2_click()
{
    if (player2_turn) {
        
        var crash = new Audio("sound/dice-sound.mp3");
        crash.play();
        p2 = Math.floor(Math.random()*5);
        p2+=1;
        document.querySelector(".img2").setAttribute("src","images/dice"+p2+".png");    
    setTimeout(winner,2000);
    }  
    
}

function winner(){
    if(p1==p2)  document.querySelector("h1").innerHTML="It's draw";

    else if(p1>p2)
    {
        document.querySelector("h1").innerHTML=play1_name +" is a winner";
    }
    else document.querySelector("h1").innerHTML=play2_name +" is a  winner";


    $(".turn").text("it's your turn " + play1_name);
    player1_turn=true;
    player2_turn = false;
}