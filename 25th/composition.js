let c1, c2;
let d = 0;
let vx = 1;
let vy = 1;
let boxes = [];
let colors = ["#001219", "#005F73", "#0A9396", "#94D2BD", "#E9D8A6", "#EE9B00", "#CA6702", "#BB3E03", "#BB3E03", "#AE2012", "#9B2226"]

function setup() {
  createCanvas(1200, 722);
  angleMode(DEGREES);

  c1 = color(27, 24, 200);
  c2 = color(3, 177, 252);
  
  for(var i = 0; i < 10; i++) {
    boxes[i] = { x: 1, y: 1, vx: random(-10, 10), 
      vy: random(-10, 10), size: 0, life: random(10,400),
      fill: random(colors),
      bg: random(colors)
    };
  }

  background(45);

}

function draw() {
  
  //background(255,255,255,.7);

  translate(300,300);
  push();

  //rotate(frameCount)

  noStroke();
  for(let  i = 0; i < 5; i++) {
    fill(boxes[i].bg);
    square(boxes[i].x, boxes[i].y, boxes[i].size);

    fill(boxes[i].fill);
    square(boxes[i].x + boxes[i].vx, boxes[i].y + boxes[i].vy, boxes[i].size);
    
    boxes[i].size += boxes[i].vx;
    boxes[i].x += boxes[i].vx;
    boxes[i].y += boxes[i].vy;

    boxes[i].life --;

    if(boxes[i].life <= 0) {
      boxes[i].size = 0;
      boxes[i].x = 0;
      boxes[i].y = 0;
      boxes[i].vx = random(-3,3);
      boxes[i].vy = random(-3,3);
      boxes[i].life = random(10,400);
      boxes[i].fill = random(colors);
      boxes[i].bg = random(colors);
    }
  }
 
  translate(600,0);

  for(i = 5; i < 10; i++) {
    fill(boxes[i].bg);
    square(boxes[i].x, boxes[i].y, boxes[i].size);

    fill(boxes[i].fill);
    square(boxes[i].x + boxes[i].vx, boxes[i].y + boxes[i].vy, boxes[i].size);
    
    boxes[i].size += boxes[i].vx;
    boxes[i].x += boxes[i].vx;
    boxes[i].y += boxes[i].vy;

    boxes[i].life --;

    if(boxes[i].life <= 0) {
      boxes[i].size = 0;
      boxes[i].x = 0;
      boxes[i].y = 0;
      boxes[i].vx = random(-3,3);
      boxes[i].vy = random(-3,3);
      boxes[i].life = random(10,400);
      boxes[i].fill = random(colors);
      boxes[i].bg = random(colors);
    }
  }
  
}
