let c1, c2;
let d = 0;
let vx = 1;
let vy = 1;
let boxes = [];
let colors = ["#2E294E", "#541388", "#F1E9DA", "#FFD400", "#D90368"];

function setup() {
  createCanvas(1200, 722);
  angleMode(DEGREES);


  background(45);


}

function draw() {
  
  //background(255,255,255,.7);

  translate(20,20);

  for(let x = 0; x < 10; x++) {
    for(let i = 0; i < colors.length; i++) {
      fill(colors[i]);
      text(colors[i], 80 * x, 40 * i); 
    }
  }

  
}
