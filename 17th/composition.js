
let ticles = [];
let b1, b2, c1, c2;
let size = 150;
let cen = { x: 400, y: 300 };

let g1 = [];
let g2 = [];

function setup() {
  createCanvas(1200, 720);
  c1 = color(53, 23, 110);
  c2 = color(156, 224, 255);

  b1 = color(255, 113, 31);
  b2 = color(145, 1, 21);

  angleMode(DEGREES);
 
  let samps = 500;
  for(var i = 0; i < samps; i++) {
    g1.push(lerpColor(b1, b2, i/samps));
    g2.push(lerpColor(c1, c2, i/samps));
  }

}

function draw() {
 
  background(0,0,0, 15);

  translate (400,300);
  rotate(frameCount/2);
  push();

 let y = 20;
 let h = 400;
 let x = 20;
 let w = 100;

 for (let i = y; i <= y + h; i++) {
   rotate(i);
   //let inter = map(i, y, y + h, 0, 1);

   let c = (i%5==0) ? g1[i] : g2[i];
   stroke(c);
   line(x, i, x + w, i);

   if(i%40==0)  {
    g1.unshift(g2.pop());
    g2.unshift(g1.pop());
   }
 }
  

}