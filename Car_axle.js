function Car_AXLE(){

 var camera, scene, renderer, control;

  init();
  render();

  function init() {

    renderer = new THREE.WebGLRenderer();
    renderer.setSize( window.innerWidth, window.innerHeight );
    document.body.appendChild( renderer.domElement );



    camera = new THREE.PerspectiveCamera( 70, window.innerWidth / window.innerHeight, 1, 3000 );
    camera.position.set( 1000, 500, 1000 );
    camera.lookAt( new THREE.Vector3( 0, 200, 0 ) );

    scene = new THREE.Scene();

    var light = new THREE.AmbientLight( 0xffffff, 2 );
  
    scene.add( light );

    var wheel = new THREE.Mesh(  // This is the tire; the wheel object also contains the spokes
		new THREE.TorusGeometry(0.75, 0.25, 16, 32),
		new THREE.MeshLambertMaterial({ color: 0x0000A0 })
	);
	var yellow = new THREE.MeshPhongMaterial({
		    color: 0xffff00,
			specular: 0x101010,
			shininess: 16
		});
	var cylinder = new THREE.Mesh(  // a yellow cylinder with height 1 and diameter 1
	    new THREE.CylinderGeometry(0.5,0.5,1,32,1),
		yellow
	);
	cylinder.scale.set(0.15,1.2,0.15); // Make it thin and long for use as a spoke
	wheel.add(cylinder.clone());  // Add a copy of the cylinder
	cylinder.rotation.z = Math.PI/3;  // Add a rotation about the z-axis for the second spoke
	wheel.add(cylinder.clone());
	cylinder.rotation.z = -Math.PI/3; // For third spoke, use a negative rotation about z-axis
	wheel.add(cylinder.clone());
	
	axleModel = new THREE.Object3D();     // A model containing two wheels and a cylinder.
	cylinder.scale.set(0.2,4.3,0.2);  // scale the cylinder for use as an axle
	cylinder.rotation.set(Math.PI/2,0,0);     // rotate its axis onto the z-axis
	axleModel.add(cylinder);
	wheel.position.z = 2;          // the wheels are positioned at the top and bottom of cylinder
	axleModel.add(wheel.clone());
	wheel.position.z = -2;
	axleModel.add(wheel);
  }

  function render() {

   

    renderer.render( scene, camera );

  }
}





