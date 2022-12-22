var speed = .1;
var ballSize = 20;
var shipSpeed = 4;
var width,height;
var missiles = [];
var totalballs = 3;
var ship;
var skore = 0;
var hits = 0;
var highscore = 0;

function missile(x,y){
  this.x = x;
  this.y = y;
  this.lifespan = random(1,3)*255;
  this.speed = random(1,10)*0.005;
}

function spaceship(x,y){
  this.x = x;
  this.y = y;
  this.vx = 0;
  this.vy = 0;
  this.h = 15;
  this.w = 15;
  this.angle = Math.PI/2;
  this.crashed = false;
  this.color = 255;

}

function setup() {

  width = 700;
  height = 700;
  createCanvas(500, 500);
  fill(255);
  ship = new spaceship(width/2,height/2);
  drawSpaceship();
  for (var i=0;i<100;i++){
    missiles.push(newMissile());
  }
  console.log(missiles);

}

function draw() {
  background(51);
  spawn();
  drawSpaceship();
  count();
}

function spawn(item,index){

  // Map function implementation

  for (var i=0;i<totalballs;i++){
    m=missiles[i];
    if (!(m.lifespan>51)){
      idx = missiles.indexOf(m);
      m = newMissile();
    }
    else{
      m.x = (500 + m.x + (ship.x-m.x)*m.speed)%500;
      m.y = (500 + m.y + (ship.y-m.y)*m.speed)%500;
      m.lifespan -=2;
      fill(m.lifespan);
      stroke(51);
      ellipse(m.x,m.y, ballSize, ballSize);
      // console.log("Bye");
      // console.log(m.lifespan);
    }
    missiles[i] = m;
    if(detect_collision(m.x, m.y)){
      missiles[i].lifespan = 0;
    }
  }

}

function detect_collision(x,y){
    if (Math.sqrt(Math.pow((x-ship.x),2)+Math.pow((y-ship.y),2)) <= ballSize){
      hits ++;
      boom();
      return true;
    }
    return false;
}

function newMissile(){
    fx = random(0,width);
    fy = random(0,height);
    m = new missile(fx,fy);
    return m;
}

function drawSpaceship(){
  updateShip();
  rectMode(CENTER);
  fill(ship.color);
  rect(ship.x, ship.y, ship.w, ship.h);
}

function updateShip(){
  if (keyIsDown(LEFT_ARROW)) {
    ship.x = (500 + ship.x - shipSpeed)%500;
    fill("ORANGE");
    triangle(ship.x-ship.w/2    , ship.y-ship.h/2,
             ship.x-ship.w/2    , ship.y+ship.h/2,
             ship.x+ship.w/2+20 , ship.y);
  } else if (keyIsDown(RIGHT_ARROW)) {
    ship.x = (500 + ship.x + shipSpeed)%500;
    fill("ORANGE");
    triangle(ship.x+ship.w/2    , ship.y-ship.h/2,
             ship.x+ship.w/2    , ship.y+ship.h/2,
             ship.x-ship.w/2-20 , ship.y);
  }
  if (keyIsDown(UP_ARROW)){
    ship.y = (500 + ship.y - shipSpeed)%500;
    fill("ORANGE");
    triangle(ship.x-ship.w/2    , ship.y-ship.h/2,
             ship.x+ship.w/2    , ship.y-ship.h/2,
             ship.x             , ship.y+ship.h/2+20);
  } else if (keyIsDown(DOWN_ARROW)){
    ship.y = (500 + ship.y + shipSpeed)%500;
    fill("ORANGE");
    triangle(ship.x-ship.w/2    , ship.y+ship.h/2,
             ship.x+ship.w/2    , ship.y+ship.h/2,
             ship.x             , ship.y-ship.h/2-20);
  }
}

function count() {
  skore += 1/30;
  highscore = highscore>skore?highscore:skore;
  totalballs = Math.ceil(skore/10);
  fill("WHITE");
  text('Score : '+Math.ceil(skore),20,20);
  text("Highscore : "+Math.ceil(highscore), 20,40);
  if (11 - hits > 0){
    rectMode(CORNER);
    fill("WHITE");
    stroke("WHITE");
    rect(width - 150, 20 , 100 , 10);
    fill("RED");
    stroke("WHITE");
    rect(width - 150, 20 , 10*(10-hits), 10 );
    fill("WHITE");
    text(10-hits,width - 45, 30);
  }
  if (hits == 11){
    hits++;
    alert("Game Over !"+"\nYour Score is : "+Math.ceil(skore));
    refresh();
  }
}

function refresh(){
  speed = .09;
  ballSize = 20;
  shipSpeed = 4;
  missiles = [];
  totalballs = 3;
  ship;
  skore = 0;
  hits = 0;
  setup();
}

function boom(){
  background("RED");
}
