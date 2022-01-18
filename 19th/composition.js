let reps = [];
let phrase = "UseText";
let pwidth;
let c1, c2;

function setup() {
  createCanvas(800, 600);
  textSize(32);
  pwidth = textWidth(phrase);
  angleMode(DEGREES);

  c1 = color(255,0,0);
  c2 = color(255,255,0);

  for(let y = 0; y < 20; y++) {
    reps[y] = new Array();
    for(let i = 0; i < 15; i++) {
      reps[y][i] = i * pwidth;
    }
  }
}

function draw() {
  background(255,255,255,30);
 
  //rotate(45);
  for(let z = 0; z < 3; z++) {
    rotate(-45);
    translate(-400,200);
    for(let y = 0; y < reps.length; y++) {

      //rotate(180);
      fill(0,0,0,20);
      rect(0,y*30,1000,30);

      for(let i = 0; i < reps[y].length; i++) {
        
          
         

          fill(lerpColor(c1, c2, (i+1) / 20));
          text(phrase, reps[y][i], y * 30 + 30);
          reps[y][i] += y % 2 ? 1 : -1;

          if(reps[y][i] > 800) reps[y][i] = -pwidth;
          else if(reps[y][i] < -pwidth) reps[y][i] = 800;
      
      }
    }
  }
}