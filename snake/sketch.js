//haven't gotten tail to follow yet
let bgColor = 126;

let snake = [];

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

let foodX;
let foodY;
let foodSize = 15;

let foodBool;

let previousX;
let previousY;

function setup() {
    createCanvas(600, 600);
    textSize(50);
    noCursor();
    frameRate(8);
    

    headX = width/2;
    headY = height/2;

    snake.push(createVector(headX,headY));

    foodBool = true;
    createFood();


    pauseButton = createButton("Pause");
    pauseButton.position(width/2, 0);
    pauseButton.mousePressed(pause);

    restartButton = createButton("Restart");
    //restartButton.position(0, 0);
    restartButton.mousePressed(restart);


}

function draw() {
    // Background color gray
    background(bgColor);
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

    if(headX < width - ballSize/2 && headX > ballSize/2 && headY < height - ballSize/2 && headY > ballSize/2){
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
  foodX = random(10, width-foodSize);
  foodY = random(10, height-foodSize);
  foodColor = color(random(0,255),random(0,255),random(0,255))
}

function gameOver(){
    headX = width;
    headY = height;
    gameEnd = true;
    foodBool = false;
    textAlign(CENTER);
    text("Game Over!", width/2, height/2);
    //restartButton = createButton("Restart");
    //restartButton.position(0, 0);
    //restartButton.mousePressed(restart);
}

function restart(){
  //restartButton.remove();
  headX = width/2;
  headY = height/2;

  snake = [];
  snake.push("1");
}

function pause(){
    noLoop();
}
