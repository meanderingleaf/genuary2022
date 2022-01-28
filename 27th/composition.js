let c1, c2;
let d = 0;
let vx = 1;
let vy = 1;
let boxes = [];
let colors = ["#2E294E", "#541388", "#F1E9DA", "#FFD400", "#D90368"];
let c1s, c2s;
let ps;

function setup() {
  createCanvas(800, 200);
  angleMode(DEGREES);


  background(45);
  textSize(30);

  c1s = colors;
  c2s = [];
  ps = [];
  for(var i = 0; i < colors.length; i++) {
    c2s.push(random(colors));
    ps.push(0);
  }


  translate(20,20);
}

function draw() {
  
  //background(255,255,255);

  
  for(let x = 0; x < 10; x++) {
    for(let i = 0; i < colors.length; i++) {
      if(x % 2 == 0) {
        fill(colors[i]);
      } else {
        fill(c2s[i]);
      }
      
      text(colors[i], 120 * x, (40 * i) + ps[x]); 
    }
    ps[x] += x/3;
    if(ps[x] > 80) ps[x] = 0;
    colors.unshift(colors.pop());
  }

  if(frameCount % 10 == 0) {
    colors.unshift(colors.pop());
    //colors.unshift(c2s.pop());
    //c2s.unshift(colors.pop());
  }
  
}
