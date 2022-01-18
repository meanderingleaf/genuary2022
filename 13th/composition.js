
let ticles = [];
let c1, c2;

function setup() {
  createCanvas(800, 81);
  angleMode(DEGREES);

  c1 = color(27, 24, 133);
  c2 = color(40, 199, 74);

  //initialize particles
  for(var i = 0; i < 200; i++) {
    
    let c = lerpColor(c1, c2, Math.random());
    c.alpha = Math.random() * 255;

    let pulsing = false;
    if(i%10 == 0) { 
      c = color(255, 196, 46)
      c.alpha = 255;
      pulsing = true;
    }
    
    ticles.push({ x: i * 3, y: i, size: i* 33, color: c, life: Math.random() * 30, pulsing: pulsing });
  }
}

function draw() {
  //background(45);

  translate(400,40);
  //rotate(frameCount);
  //ticles.map(ticleUpate);

  for(var i = ticles.length-1; i >=0; i--) {
 
    ticleUpate(ticles[i]);
  }
  
  let ticl = ticles[ticles.length-1];
  if(ticl.size > 2000) {
    ticl.size = 1;
    ticles.unshift(ticles.pop());
    ticl.x = 0;
    ticl.y = 0;
  }
}

function ticleUpate(ticl) {
  push();
  rotate(ticl.x);
  translate(0, ticl.size / 10);
  stroke(255, 196, 46);
  strokeWeight(2);

  //if(ticl.pulsing) {
   
    ticl.color.alpha -= 2;
    ticl.color.setAlpha(ticl.color.alpha );

    if(ticl.color.alpha < 0) ticl.color.alpha = 255;
  //}

  fill(ticl.color);
  rect(ticl.x, ticl.y, ticl.size, ticl.size);
  ticl.x -= .2;
  ticl.y -= .2;
  ticl.size += .5;

  

  pop();
}