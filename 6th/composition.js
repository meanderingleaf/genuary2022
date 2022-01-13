let img;

function preload() {
  img = loadImage('gen1.png');  
  img2 = loadImage('gen1.png');  
}

function curveyBoi(x1, y1, x2, y2) {

    let d = dist(x1,y1,x2,y2);
    d = x1 - x2;
    
    let cp = { x: x1 + d, y: y1};

    noStroke();
    beginShape();
    vertex(x1, y1);
    bezierVertex(x1 + d,  y1, x1-d, y1, x1, y1);
    bezierVertex(x2 + d,  y2, x2-d, y2, x2, y2);
    endShape();
   
}

function setup() {

createCanvas(1200, 800);

apply_sobel_filter(img);
    image(img, 0, 0);
    filter(THRESHOLD);
    filter(INVERT);

    blendMode(MULTIPLY);
    image(img2, 0, 0);

    for( var x = 0; x < 10000; x++) {
        let zx = Math.random() * 1200;
        let zy = Math.random() * 900;
        let c = get(zx, zy);
        let s = Math.random() * 50;
        fill(c);
      
        if(c[0] < 40) {
     //       curveyBoi(zx, zy, zx + s, zy + s)
        }
      }

}


function draw() {
    let zx = Math.random() * 1200;
    let zy = Math.random() * 900;
    let c = get(zx, zy);
    c.alpha = 50;
    let s = Math.random() * -50;
    fill(c);
   // curveyBoi(zx, zy, zx + s, zy + s)

    fill(255,255,255,50);
    //circle(Math.random() * 1200, Math.random() * 900, 20)
}



var xKernel = [
    [-1, 0, 1],
    [-1, 0, 1],
    [-1, 0, 1]
  ];
  var yKernel = [
    [-1, -1, -1],
    [0, 0, 0],
    [1, 1, 1]
  ];
  
  // Sobel
  // var xKernel = [
  //   [1, 0, -1],
  //   [2, 0, -2],
  //   [1, 0, -1]
  // ];
  // var yKernel = [
  //   [1, 2, 1],
  //   [0, 0, 0],
  //   [-1, -2, -1]
  // ];
  
  function apply_sobel_filter(img) {
    img.loadPixels();
    var n = img.width * img.height;
    var sobel_array = new Uint32Array(n);
  
    // compute the gradient in soble_array
    var index;
    var x, y;
    var xk, yk;
    var xGradient, xMultiplier;
    var yGradient, yMultiplier;
    var pixelValue;
    for (x = 1; x < img.width - 1; x++) {
      for (y = 1; y < img.height- 1; y++) {
        i = x + y * img.width;
        xGradient = 0;
        yGradient = 0;
        for (xk = -1; xk <= 1; xk ++) {
          for (yk = -1; yk <= 1; yk ++) {
            pixelValue = img.pixels[4 * ((x + xk) + (y + yk) * img.width)];
            xGradient += pixelValue * xKernel[yk + 1][xk + 1];
            yGradient += pixelValue * yKernel[yk + 1][xk + 1];
          }
        }
        sobel_array[i] = Math.sqrt(
          Math.pow(xGradient, 2) + Math.pow(yGradient, 2)
        );
      }
    }
  
    // copy sobel_array to image pixels;
    for (x = 0; x < img.width; x++) {
      for (y = 0; y < img.height; y++) {
        i = x + y * img.width;
        img.pixels[4 * i] = sobel_array[i];
        img.pixels[4 * i + 1] = sobel_array[i];
        img.pixels[4 * i + 2] = sobel_array[i];
      }
    }
    img.updatePixels();
  }