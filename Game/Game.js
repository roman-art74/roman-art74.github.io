var ballx =  200;
var bally = 200;
var ballSize = 40;
var score = 0;
let button;

function setup() {
  createCanvas(400, 400);
  textAlign(CENTER);
  textSize(20);
  button = createButton('Restart')
  button.position(20, 20);
  button.mousePressed();
} // end of setup


function draw() {
  background('https://roman-schrock2.github.io/ryanscar.jpg');
  
  levelOne();
  
  cursor('https://roman-schrock2.github.io/mario.png');
  text(("Score: " + score),width/2,40);
} // end of draw

function levelOne(){
  text("Level 1", width/2,height-20);
  var distToBall = dist(ballx,bally,mouseX,mouseY);
  if(distToBall < ballSize/2){
    ballx = random(width);
    bally = random(height);
    score = score + 1;
  }
  line(ballx,bally, mouseX, mouseY);
  ellipse(ballx,bally, ballSize, ballSize);
} // end of level
