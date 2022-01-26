let c1, c2;
let oX = oY = 0;

function setup() {
  createCanvas(1200, 722);
  angleMode(DEGREES);

  c1 = color(0);
  c2 = color(3, 177, 252);
  stroke(255);

  background(45);
  

}

function draw() {
  //background(45);

  oX += .02;
  oY += Math.sin(frameCount/60) * .05;
  let nn = (noise(frameCount / 20) - 1) * 20;

  for(var i = 0; i < 30; i++) {
    let e = Math.log(i)/Math.log(1.2)

    for(var x = 0; x < 30; x++) {
      let n = noise((x+oX)/20, (oY+i)/20, x/20);
      nn = n * 50;
      if(n>.65) {

        let c = lerpColor(c2,c1, n);
        c = color(255, 246, 209);
        c.setAlpha( 10 );
        fill(c);
       // strokeWeight(2);
        
        circle(x*20 + nn, e*25 + nn, e*4 );
      } else if(n > .3) {
        let c = lerpColor(c1,c2, n);
        fill(c);
        stroke(255, 246, 209);
        //noStroke();
        //strokeWeight(n*2);
        circle(x*20 + nn, e*25 + nn, e*4 );
      } else {
        let c = lerpColor(c1,c2, n);
        fill(c);
        //noStroke();
        circle(x*20 + nn, e*25 + nn, e*4 );
      }
    }
  }

}
