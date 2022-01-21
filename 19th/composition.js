let reps = [];
let phrase = "UseText";
let pwidth;
let c1, c2;

function setup() {
  createCanvas(800, 600);
  textSize(32);
  pwidth = textWidth(phrase);
  angleMode(DEGREES);

  c1 = color(235, 255, 255);
  c2 = color(21, 200, 0);

  for(let y = 0; y < 20; y++) {
    reps[y] = new Array();
    for(let i = 0; i < 15; i++) {
      reps[y][i] = i * pwidth  - y*30;
    }
  }
}

function draw() {
  background(255,255,255, 10);
 
  //rotate(45);
  for(let z = 0; z < 3; z++) {
    rotate(-45);
    translate(-350,150);
    for(let y = 0; y < reps.length; y++) {

      //rotate(180);
      fill(0,0,0,20);
      noFill()
      strokeWeight(1)
      //rect(0,y*30,1000,30);

      for(let i = 0; i < reps[y].length; i++) {
        
          
          fill(lerpColor(c1, c2, (i) / 10));
          text(phrase, reps[y][i], y * 30 + 30);
          reps[y][i] += y % 2 ? .5 : -.5;

          if(reps[y][i] > 800) reps[y][i] = -pwidth;
          else if(reps[y][i] < -pwidth) reps[y][i] = 800;
      
      }
    }
  }
}