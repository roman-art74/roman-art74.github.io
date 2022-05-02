
var ballx = 200;
var bally = 200;
var ballSize = 40;
var score = 0;
var img1, img2, img3, img4, img5, img6;
var gameState = "begin";

function preload(){
  img1 = loadImage('https://roman-art74.github.io/soccerfield.png');
  img2 = loadImage('https://roman-art74.github.io/soccerball.png');
  img3 = loadImage('https://roman-art74.github.io/Ronaldo.png');
  img4 = loadImage('https://roman-art74.github.io/trophy.png');
  img5 = loadImage('https://roman-art74.github.io/gamestart1.png');
  img6 = loadImage('https://roman-art74.github.io/gamewin.png');
}

function setup() {
  createCanvas(400,400);
  textAlign(CENTER);
  textSize(20);
  fill(255, 255, 255);
} // end of setup

function draw() {
  
  cursor('https://roman-art74.github.io/Ronaldo.png');
 
  if(gameState == "begin"){
  background(img5);
  levelBegin();
  }
  
  if(gameState == "L1"){
  background(img1);
  levelOne();
  }
  
  if(gameState == "L2"){
  background(img1);
  levelTwo();
  }
  
  if(gameState == "L3"){
  background(img1);
  levelThree();
  }
  
  if(gameState == "win"){
  background(img6);
  levelWin();
  }
  
  text(("Score: " + score), width/2, 40);
  
  
} // end of draw

function levelBegin(){
 text("Touch Ball to Begin", width/2, height-20);
  var distToBall = dist(ballx, bally, mouseX+20, mouseY+20);
  if(distToBall < ballSize/2+20){
    ballx = random(width - 10);
    bally = random(height - 10);
    score = score + 1;
  }
  
  if(score>= 1){
    gameState = "L1";
  }
  
  image(img2, ballx, bally, ballSize, ballSize);
  line(ballx + 20 , bally + 20 , mouseX+20, mouseY+20);
  }

function levelOne(){
  text("level 1", width/2, height-20);
  var distToBall = dist(ballx, bally, mouseX+20, mouseY+20);
  if(distToBall < ballSize/2+20){
    ballx = random(width - 10);
    bally = random(height - 10);
    score = score + 1;
  }
  
  if(score>= 10){
    gameState = "L2";
  }
  image(img2, ballx, bally, ballSize, ballSize);
  line(ballx + 20 , bally + 20 , mouseX+20, mouseY+20);
  //ellipse(ballx, bally, ballSize, ballSize);
  
} // end of level 1


function levelTwo(){
  text("level 2", width/2, height-20);
  var distToBall = dist(ballx, bally, mouseX+20, mouseY+20);
  if(distToBall < ballSize/2+20){
    ballx = random(width - 10);
    bally = random(height - 10);
    score = score + 1;
  }
  line(ballx + 20 , bally + 20 , mouseX+20, mouseY+20);
  image(img2, ballx, bally, ballSize, ballSize);
    
    if(score>= 20){
      gameState = "L3"
    }
} //end level 2

function levelThree(){
  text("level 3", width/2, height-20);
  var distToBall = dist(ballx, bally, mouseX+20, mouseY+20);
  if(distToBall < ballSize/2+20){
    ballx = random(width - 10);
    bally = random(height - 10);
    score = score + 1;
    ballSize = ballSize - 1;
  }
 image(img2, ballx, bally, ballSize, ballSize);
 
 if(score>= 50){
      gameState = "win"
 }
 
} //end level 3

function levelWin(){

  
} //end win
