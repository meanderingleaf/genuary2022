const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );

const color2 = new THREE.Color( 0xfcba03 );
scene.background = color2;
const renderer = new THREE.WebGLRenderer({ preserveDrawingBuffer: true } );


renderer.setSize( window.innerWidth, window.innerHeight );
//renderer.autoClear = false;
//renderer.autoClearColor = false;
document.body.appendChild( renderer.domElement );

camera.position.z = 20;
camera.position.y = 10;


const light2 = new THREE.PointLight( 0xFFFFFF, 1, 100 );
light2.position.set( -4, 7, 0 );
scene.add( light2 );

const light3 = new THREE.PointLight( 0xFFFFFF, 1, 100 );
light3.position.set( 0, 10, 5 );
scene.add( light3 );

var group = new THREE.Group();
scene.add(group);

let reels = [];

for(var i = 0; i < 5; i++) {
  let x = Math.sin(Math.random() * Math.PI);
  let z = Math.cos(Math.random() * Math.PI);
  let ps = [Math.random() * 20, Math.random() * -20];

  let dir = Math.random() > .5 ? 1 : -1;

  let curve = new THREE.CubicBezierCurve3(
    
    new THREE.Vector3( dir* 10 * x, 0, dir*z*10 ),
    new THREE.Vector3( ps[0], 15, 0 ),
    new THREE.Vector3( ps[1], 15, 0 ),
    new THREE.Vector3( dir*-10 * x, 0, dir*-z*10 )
  );

 // const path = new CustomSinCurve( 10 );
  let geometry = new THREE.TubeGeometry( curve, 20, 2, 2, false );
  let material = new THREE.MeshStandardMaterial( { color: 0x333333 } );
  let mesh = new THREE.Mesh( geometry, material );
  group.add( mesh );
  reels.push(mesh);
}

function animate() {
  //group.rotation.x += 0.01;
  group.rotation.y += 0.001;
  const now = Date.now();

  for(var i = 0; i < reels.length; i++) {
    let geom = reels[i].geometry;

    let c = geom.attributes.position.count;

    for(let n = 0; n < c; n++) {
      const y = geom.attributes.position.getY(n);
      const x = geom.attributes.position.getX(n);
      const ysin = Math.sin((renderer.info.render.frame+x+n)/10000)/100;
      geom.attributes.position.setY(n,y+ysin);

      geom.computeVertexNormals();
      geom.attributes.position.needsUpdate = true;
    }
    
  }

	requestAnimationFrame( animate );
	renderer.render( scene, camera );
}
animate();