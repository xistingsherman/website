
//https://github.com/processing/p5.js/wiki/Positioning-your-canvas
let bgColor = 126;

let snake = [];
let cookieJar;

let gameHeight;
let gameWidth;

let gapX;
let gapY;
let y = 0;
let x = 0;

let headX;
let headY;

let ballSize = 20;

let score = 0;

let directions = [];

let restartButton;
let pauseButton;

let endGame = false;
let scoreIsUpdated = false;

let foodX;
let foodY;
let foodSize = 15;

let foodBool;

let previousX;
let previousY;

function setup() {
    points = getCookie("points");
    i = min(windowWidth/2, windowHeight/2)
    createCanvas(i,i);
    textSize(50);
    noCursor();
    frameRate(8);
    
    gameHeight = height - 65;
    gameWidth = width;

    headX = gameWidth/2;
    headY = gameHeight/2;

    score = 0;

    snake.push(createVector(headX,headY));

    foodBool = true;
    createFood();


    pauseButton = createButton("Pause");
    pauseButton.position(width/2 -20 - 40, height + 80);
    pauseButton.mousePressed(pause);

    restartButton = createButton("Restart");
    restartButton.position(width/2 -20 + 30, height+ 80);
    restartButton.mousePressed(restart);

}

function draw() {
    // Background color gray
    background(bgColor);

    push();
    fill(0,0,0,127);
    rect(0, 0, gameWidth, gameHeight);
    pop();

    push();    
    textSize(40);
    textAlign(CENTER);
    text('SCORE', width - 200, height - 20);
    text(score, width - 40, height - 20);
    pop();
    
    noStroke();

    if(foodBool){
      push();
      fill(foodColor);
      //noStroke();
      square(foodX,foodY,foodSize);
      pop();
    }
    else{
      createFood();
    }

    headX = headX - x;
    headY = headY - y;

    if(headX < width - ballSize/2 && headX > ballSize/2 && headY < gameHeight - ballSize/2 && headY > ballSize/2){
        snake.pop();
        snake.unshift(createVector(headX,headY));

        circle(snake[0].x, snake[0].y, ballSize)
         //draw head of the snake
  
        if( (headX - ballSize <= foodX && foodX + foodSize <= headX + ballSize) && (headY - ballSize <= foodY && foodY + foodSize <= headY + ballSize) ){
          eatFood(headX,headY);
        }

        for(let i = 0; i < snake.length -1; i++){
            
            previousX = snake[i+1].x;
            previousY = snake[i+1].y;
            circle(previousX, previousY, ballSize);
        }
    }
    else if(endGame){
        gameOver();
    }
    else{
        gameOver();
    }
    
    
}

function keyPressed() {
    //update this to change speed of the snake
    if((keyCode === LEFT_ARROW || key =="a") && x != -ballSize){
        print(x)
        
        x = ballSize;
        
        y = 0;
    }
    else if(keyCode === LEFT_ARROW || key =="a"){
        gameOver();
    }

    if((keyCode === RIGHT_ARROW || key == "d") && x != ballSize){
        x = -ballSize;
        y = 0;
    }
    else if(keyCode === RIGHT_ARROW || key == "d"){
        gameOver();
    }

    if((keyCode == UP_ARROW || key == "w") && y != -ballSize){
        y = ballSize;
        x = 0;
    }
    else if(keyCode == UP_ARROW || key == "w"){
        gameOver();
    }

    if((keyCode == DOWN_ARROW || key == "s") && y != ballSize){
        y = -ballSize;
        x = 0;
    }
    else if(keyCode == DOWN_ARROW || key == "s"){
        gameOver();
    }
}

function eatFood(headX,headY){
  foodBool = false;
  score++;
  snake.unshift([headX,headY]);

  createFood();
  //print(score);
}

function createFood(){  
  foodBool = true;
  foodX = random(10, gameWidth-foodSize);
  foodY = random(10, gameHeight-foodSize);
  foodColor = color(random(0,255),random(0,255),random(0,255))
}

function gameOver(){
    

    headX = gameWidth;
    headY = gameHeight;
    gameEnd = true;
    foodBool = false;
    textAlign(CENTER);
    text("Game Over!", gameWidth/2, gameHeight/2);

    print(points);
    if(scoreIsUpdated == false){
      points = parseInt(points);
      points += score;
      scoreIsUpdated = true;
    }
    
    print(score);
    print(points);
    setCookie("points",points,30);
}

function restart(){
  //restartButton.remove();
  headX = gameWidth/2;
  headY = gameHeight/2;

  scoreIsUpdated = false;

  snake = [];
  snake.push("1");
}

function pause(){
    noLoop();
}

function setCookie(cname, cvalue, exdays) {
    const d = new Date();
    d.setTime(d.getTime() + (exdays*24*60*60*1000));
    let expires = "expires="+ d.toUTCString();
    document.cookie = cname + "=" + cvalue +  ";visited=true;" + expires + ";path=/";
  }

//reference https://www.w3schools.com/js/js_cookies.asp
function getCookie(cname) {
    let name = cname + "=";
    let decodedCookie = decodeURIComponent(document.cookie);
    let ca = decodedCookie.split(';');
    for(let i = 0; i <ca.length; i++) {
      let c = ca[i];
      while (c.charAt(0) == ' ') {
        c = c.substring(1);
      }
      if (c.indexOf(name) == 0) {
        return c.substring(name.length, c.length);
      }
    }
    return "";
  }


