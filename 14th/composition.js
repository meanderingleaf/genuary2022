
let ticles = [];
let b1, b2, c1, c2;
let size = 150;
let cen = { x: 400, y: 300 };

function setup() {
  createCanvas(1200, 720);
  c1 = color(204, 102, 0);
  c2 = color(0, 102, 153);
  angleMode(DEGREES);
}

function draw() {
  background(50,50,50,30);
  
  
 // translate (400,300);

  fill(255,255,255,10);

  let s = size + Math.sin(frameCount) * 15;
  noStroke();
  circle(cen.x, cen.y, s);

  fill(255,0,0,200);

  circle(cen.x + Math.sin(frameCount/30)*size/1.5, cen.y + Math.cos(frameCount/10) * size/1.5, 10);
  circle(cen.x + Math.sin(frameCount/10)*size/1.5, cen.y + Math.cos(frameCount/30) * size/1.5, 10);


  let r1 = Math.random()*Math.PI*2;
  let r2 = Math.random()*Math.PI * 2;
  let p1 = { x: cen.x + Math.cos(r1) * s, y: cen.y + Math.sin(r1) * size};
  let p2 = { x: cen.x + Math.cos(r2) * s, y: cen.y + Math.sin(r2) * size};
  stroke(0);
  strokeWeight(1);
  line (p1.x, p1.y, p2.x, p2.y);

  r1 = Math.random()*Math.PI*2;
  r2 = Math.random()*Math.PI * 2;
  p1 = { x: cen.x + Math.cos(r1) * s, y: cen.y + Math.sin(r1) * size};
  p2 = { x: cen.x + Math.cos(r2) * s, y: cen.y + Math.sin(r2) * size};
  stroke(Math.random() * 150);
  line (p1.x, p1.y, p2.x, p2.y);

  r1 = Math.random()*Math.PI*2;
  r2 = Math.random()*Math.PI * 2;
  p1 = { x: cen.x + Math.cos(r1) * s, y: cen.y + Math.sin(r1) * size};
  p2 = { x: cen.x + Math.cos(r2) * s, y: cen.y + Math.sin(r2) * size};
  if(p1.y < 300) {
    stroke(0);
    strokeWeight(2);
    line (p1.x, p1.y, Math.random() * 800, 0);
  }

  r1 = Math.random()*Math.PI*2;
  r2 = Math.random()*Math.PI * 2;
  p1 = { x: cen.x + Math.cos(r1) * s, y: cen.y + Math.sin(r1) * size};
  p2 = { x: cen.x + Math.cos(r2) * s, y: cen.y + Math.sin(r2) * size};
  if(p1.y > 300) {
    stroke(200);
    strokeWeight(2);
    line (p1.x, p1.y, Math.random() * 800, 700);
  }

}