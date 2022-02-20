//haven't gotten tail to follow yet
let bgColor = 126;

let snake = [];

let gap = 15;
let y = 0;
let x = 0;

let headX;
let headY;

let score = 0;

let directions = [];

let restartButton;

let foodX;
let foodY;
let foodSize;

let foodBool;

function setup() {
    // Canvas size 400*400
    createCanvas(400, 400);
    textSize(50);
    noCursor();

    snake.push(1);
    snake.push(1);

    headX = width/2;
    headY = height/2;

    foodBool = true;
    createFood();

}

function draw() {
    // Background color gray
    background(bgColor);

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

    if(headX < width - 10 && headX > 10 && headY < height - 10 && headY > 10){
      for(let i = 0; i < snake.length; i++){
          headX = headX - x;
          headY = headY - y;
          circle(headX + gap * i, headY + gap * i, 20);

          if( (headX - 20 <= foodX && foodX + foodSize <= headX + 20) && (headY - 20 <= foodY && foodY + foodSize <= headY + 20) ){
            eatFood();
          }
      }

      if(keyCode === LEFT_ARROW || key =="a"){
          headX--;
          x = 0;
      }
      else if(keyCode === RIGHT_ARROW || key == "d"){
          headX++;
          x = 0;
      }
      else if(keyCode == UP_ARROW || key == "w"){
          headY--;
          y = 0;
      }
      else if(keyCode == DOWN_ARROW || key == "s"){
          headY++;
          y = 0;
      }
    }
    else{
      foodBool = false;
      textAlign(CENTER);
      text("Game Over!", width/2, height/2);

      restartButton = createButton("Restart");
      restartButton.position(0, 0);
      restartButton.mousePressed(restart);
      
    }
}

function keyPressed() {
  if (keyCode === LEFT_ARROW || key =="a") {
    x = -1;
    directions.push("L");
  } else if (keyCode === RIGHT_ARROW || key == "d") {
    x = 1;
    directions.push("R");
  } else if(keyCode == UP_ARROW || key == "w"){
    y = -1;
    directions.push("U");
  }
  else if(keyCode == DOWN_ARROW || key == "s"){
    y = 1;
    directions.push("D");
  }
  //print(directions);
}

function eatFood(){
  foodBool = false;
  score++;
  snake.push(1);

  createFood();
  print(score);
}

function createFood(){  
  foodBool = true;
  foodSize = 15;

  foodX = random(10, width-20);
  foodY = random(10,height-20);
  foodColor = color(random(0,255),random(0,255),random(0,255))
}

function restart(){
  restartButton.remove();
  headX = width/2;
  headY = height/2;

  snake = [];
  snake.push("1");
}
