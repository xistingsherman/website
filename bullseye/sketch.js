let rings = 6;
let ringGap = 15;
let maxRingSize = 100;

let white;
let red;
let black;

let bgColor = "white";

let angle;
let arrowLength;
let v;

function setup() {
    createCanvas(600, 600);
    textSize(50);
    noCursor();
    frameRate(8);

    angleMode(degrees);

    angle = 0;
    arrowLength = 100;

    white = color(255,255,255);
    red = color(255,0,0);
    black = color(0,0,0);

    vector = createVector(0,0,1);
}

function draw() {
    // Background color gray
    background(bgColor);
    noStroke();
    
    //construct bullseye
    for(let i = 0; i < rings; i++){
        push();
        rotate();
        if(i % 2 == 1){
            fill(white);
            ellipse(width - width/4, height-height/2, maxRingSize - 10 - ringGap * i, maxRingSize - ringGap * i);
        }
        else{
            fill(red);
            ellipse(width - width/4, height-height/2, maxRingSize - 10 - ringGap * i, maxRingSize - ringGap * i);
        }
        pop();
    }

    //arrow
    push();
    stroke(black);
    strokeWeight(5);
    fill(black);
    line(50, 500, 50 + arrowLength, 500 + Math.sin(angle)*arrowLength);
    triangle(152, 502, 152, 498, 156, 500);
    pop();

    //user input

    angle = toDegrees(angle);
    if(keyIsPressed && (keyCode === UP_ARROW || key == "w")){
        angle -= 5;
        print(angle);
    }
    if(keyIsPressed && (keyCode === DOWN_ARROW || key == "s")){
        angle += 5;
        print(angle);
    } 
    // if(angle < 0){
    //     angle = 0;
    // }
    // else if(angle > 180){
    //     angle = 180;
    // }
    angle = toRadians(angle);
    
}

function keyPressed() {
    
}

function toDegrees (angle) {
    return angle * (180 / Math.PI);
}
function toRadians (angle) {
    return angle * (Math.PI / 180);
}