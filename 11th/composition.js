let font;

let c1, c2;

function preload() {
  font = loadFont('LandasansMedium.otf')
}

function setup() {

  createCanvas(1200, 800);
            
  fSize = 900
  textFont(font)
  textSize(fSize)
  msg = 'no'
  pts = font.textToPoints(msg, 0, 0, fSize, {
      sampleFactor: 0.03, // increase for more points
      simplifyThreshold: 0.0 // increase to remove collinear points
  })
  //console.log(pts) // { x, y, path angle }

  c1 = color(247, 47, 217);
  c2 = color(85, 46, 153);
 
  //noFill();
  oh();
}


function oh() {
  
  background(255);


  for(var i = 0; i < 100; i++) {
    let yy = Math.random() * 800;
    let f = lerpColor(c1, c2, i/100);
    f.setAlpha(20);
    fill(f);
    noStroke();
   // rect(0, yy, width, 40 );
  }

  translate(40, 600);
  angleMode(DEGREES);

  
  pts.forEach((point, i) => {
    fill(lerpColor(c1, c2, i/pts.length));

    if(i%12 == 0) {
      fill(255);
    }
    //console.log(point);
    push();
    translate(point.x, point.y);
    rotate(point.alpha );
    rotate( i%10 * 45 );
    //circle(point.x, point.y, 5);


    textSize(18)
    text("computer", 0, 0);
    pop();
  })
  
}