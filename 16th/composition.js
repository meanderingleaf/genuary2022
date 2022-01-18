let colors = [];
let img;

let blobs = [];
let blobs2 = [];
let pg;
let buff;

function setup() {
  createCanvas(800, 600);
  
  /*
  colors[0] = color(0,255,255, 200);
  colors[1] = color(255,255,0, 200);
  colors[2] = color(255,0,255, 200);
  */

  pg = createGraphics(800,600);
  buff = createGraphics(800,10);

  colors[0] = color(0,255,255, 20);
  colors[1] = color(255,255,255, 30);
  colors[2] = color(255,0,255, 20);

  for(var i = 0; i < 30; i++) {
    for(var y = -2; y < 30; y+=2) {
      blobs.push({ x: i* 60 - 20, y: y* 20, color: Math.abs((y-i)%3) });
    }
  }

  for(var i = 0; i < 15; i++) {
    for(var y = -1; y < 30; y+=2) {
      blobs2.push({ x: i* 60 - 20, y: y* 20, color: Math.abs((y-i)%3) });
    }
  }
  
}

function draw() {
 
  //background(255,255,255,1);
  
  

  //shearX(Math.sin(frameCount/100) * .2);
  //shearY(Math.sin(frameCount/100) * .2);

  let dd = Math.sin(frameCount/100) * 4;

  pg.noStroke();

  blobs.forEach((blob, i) => {
    pg.fill(colors[blob.color]);
    pg.rect(blob.x, blob.y, 40, 30);
    blob.y += .5;

    if(frameCount % 90 ==0 ) blob.color ++;
    if(blob.color > 2) blob.color = 0;

    if(blob.y > 600) blob.y = -20;
  })

  scale( 1 + Math.abs(Math.sin(frameCount/1000)) )
 // shearX(Math.sin(frameCount/10000));
  blobs2.forEach((blob, i) => {
   
    pg.fill(colors[blob.color]);
    pg.rect(blob.x, blob.y, 40, 30+dd);
    blob.x += .2;

    //if(frameCount % 90 ==0 ) blob.color ++;
    if(blob.color > 2) blob.color = 0;

    if(blob.x > 800) blob.x = -80;
  })

  let frameJump = (Math.sin(frameCount)) * 2;
  let fOff = frameCount % 60;
  

  for(var j = 0; j < 15; j++) {
     let by = j * 30 + fOff;
    
     let xOff = Math.sin(frameCount/30 + j/20) * 5;
  
      buff.copy(pg, 0, by, 800, 10, xOff,0, 800,10);
      image(buff,0,by * 2);
  
 
  }
  
  //if(frameCount % 30 ==0) colors.unshift(colors.pop());
}