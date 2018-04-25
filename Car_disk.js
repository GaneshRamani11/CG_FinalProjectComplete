function Car_AXLE(){
	init();
	render();
var  box, spline, counter = 0;
	var tangent = new THREE.Vector3();
var axis = new THREE.Vector3();
var up = new THREE.Vector3(0, 0, 1);
	function init(){

		var wire = document.getElementById("Wireframe").checked;
		if (wire == true){
			TYPE = true;	
		}else{
			TYPE = false;
		}
	
	  
 camera = new THREE.PerspectiveCamera( 75, 1200/900, 1, 10000 );
  camera.position.z=2000;
		  camera.position.y=1000;
		camera.position.x=5000;

texture = new THREE.TextureLoader().load("blood-valley_ft.png");

    scene = new THREE.Scene();

    geometry = new THREE.TorusGeometry( 200, 20, 20,20 );
    material = new THREE.MeshBasicMaterial( { color: 0xff0000, wireframe: TYPE} );

    Cone = new THREE.Mesh( geometry, material );
   // scene.add( Cone );

    geometry1 = new THREE.TorusGeometry( 200, 20, 20,20 );
    material1 = new THREE.MeshBasicMaterial( { color: 0xff0000, wireframe: TYPE } );

    Cone1 = new THREE.Mesh( geometry1, material1 );
		Cone1.position.set(0,0,500);
   // scene.add( Cone1 );


		   geometry2 = new THREE.CylinderGeometry( 200, 20, 20,20 );
    material2 = new THREE.MeshBasicMaterial( { color: 'blue', wireframe: TYPE } );

    Cone2 = new THREE.Mesh( geometry2, material2 );
		Cone2.position.set(0,0,500);
		Cone2.rotation.set(Math.PI/2,0,0);
   // scene.add( Cone2 );


		geometry3 = new THREE.CylinderGeometry( 200, 20, 20,20 );
    material3 = new THREE.MeshBasicMaterial( { color: 'blue', wireframe: TYPE } );

    Cone3 = new THREE.Mesh( geometry3, material3 );
		Cone3.position.set(0,0,0);
		Cone3.rotation.set(Math.PI/2,0,0);
   // scene.add( Cone3 );

	geometry4 =new THREE.CylinderGeometry(50,50,500,320,1);
	material4 = new THREE.MeshBasicMaterial( { color: 'blue', wireframe: TYPE } );
		cone4= new THREE.Mesh(geometry4,material4);
			cone4.position.set(0,0,250);
		cone4.rotation.set(Math.PI/2,0,0);
	//	scene.add(cone4);


		// Second Axle




        geometry5 = new THREE.TorusGeometry( 200, 20, 20,20 );
        material5 = new THREE.MeshBasicMaterial( { color: 0xff0000, wireframe: TYPE } );

        Cone5 = new THREE.Mesh( geometry5, material5 );
        Cone5.position.set(700,0,0);
     //   scene.add( Cone5 );

        geometry6 = new THREE.TorusGeometry( 200, 20, 20,20 );
        material6 = new THREE.MeshBasicMaterial( { color: 0xff0000, wireframe: TYPE } );

        Cone6 = new THREE.Mesh( geometry1, material1 );
        Cone6.position.set(700,0,500);
     //   scene.add( Cone6 );


        geometry7 = new THREE.CylinderGeometry( 200, 20, 20,20 );
        material7 = new THREE.MeshBasicMaterial( { color: 'blue', wireframe: TYPE } );

        Cone7 = new THREE.Mesh( geometry2, material2 );
        Cone7.position.set(700,0,500);
        Cone7.rotation.set(Math.PI/2,0,0);
      //  scene.add( Cone7 );


        geometry8 = new THREE.CylinderGeometry( 200, 20, 20,20 );
        material8 = new THREE.MeshBasicMaterial( { color: 'blue', wireframe: TYPE } );

        Cone8 = new THREE.Mesh( geometry3, material3 );
        Cone8.position.set(700,0,0);
        Cone8.rotation.set(Math.PI/2,0,0);
      //  scene.add( Cone8 );

        geometry9 =new THREE.CylinderGeometry(50,50,500,320,1);
        material9 = new THREE.MeshBasicMaterial( { color: 'blue', wireframe: TYPE } );
        cone9= new THREE.Mesh(geometry4,material4);
        cone9.position.set(700,0,250);
        cone9.rotation.set(Math.PI/2,0,0);
     //   scene.add(cone9);


        geometry10 =new THREE.BoxGeometry(600,50,450);
        material10 = new THREE.MeshBasicMaterial( { color: 'green', wireframe: TYPE} );
        cube= new THREE.Mesh(geometry10,material10);
        cube.position.set(350,0,250);
        //cube.rotation.set(Math.PI/2,0,0);
      //  scene.add(cube);

		// Body of Car

		bodygeometry10 =new THREE.BoxGeometry(1400,250,450);
        bodymaterial10 = new THREE.MeshBasicMaterial( { color: 'pink', wireframe: TYPE} );
        bodycube= new THREE.Mesh(bodygeometry10,bodymaterial10);
        bodycube.position.set(350,120,250);
        //cube.rotation.set(Math.PI/2,0,0);
      //  scene.add(bodycube);

		bodygeometry12 =new THREE.BoxGeometry(1000,350,450);
        bodymaterial12 = new THREE.MeshBasicMaterial( { color: 'orange', wireframe: TYPE} );
        bodycube1= new THREE.Mesh(bodygeometry12,bodymaterial12);
        bodycube1.position.set(550,420,250);
        //cube.rotation.set(Math.PI/2,0,0);
     //   scene.add(bodycube1);

		//window

		bodygeometry13 =new THREE.BoxGeometry(5,300,450);
        bodymaterial13 = new THREE.MeshBasicMaterial( { color: 'white', wireframe: TYPE} );
        bodycube2= new THREE.Mesh(bodygeometry13,bodymaterial13);
        bodycube2.position.set(50,420,250);
        //cube.rotation.set(Math.PI/2,0,0);
       // scene.add(bodycube2);


		//Lights


		bodygeometry14 =new THREE.SphereGeometry(50);
        bodymaterial14 = new THREE.MeshPhongMaterial( { color: 'white', wireframe: TYPE} );
        bodycube3= new THREE.Mesh(bodygeometry14,bodymaterial14);
        bodycube3.position.set(-350,120,350);
        //cube.rotation.set(Math.PI/2,0,0);
       // scene.add(bodycube3);


        bodycube4= new THREE.Mesh(bodygeometry14,bodymaterial14);
        bodycube4.position.set(-350,120,150);
        //cube.rotation.set(Math.PI/2,0,0);
        //scene.add(bodycube4);

		lights = new THREE.DirectionalLight('orange');
		lights.position.set(-200,0,0);
		//scene.add(lights);

		//road


		

		bodygeometry17 =new THREE.CubeGeometry(13000,1000);
        bodymaterial17 = new THREE.MeshBasicMaterial( { color: 'orange',side: THREE.DoubleSide,map:texture} );
        bodycube7= new THREE.Mesh(bodygeometry17,bodymaterial17);
        bodycube7.position.set(-350,-220,350);
		bodycube7.rotation.x=Math.PI/2;
        //cube.rotation.set(Math.PI/2,0,0);
        scene.add(bodycube7);


		

		
		light12= new THREE.AmbientLight('white',0.3);
		scene.add(light12);

		 group = new THREE.Group();
		group.add(Cone);
		group.add(Cone1);
		group.add(Cone2);
		group.add(Cone3);
		group.add(cone4);
		group.add(Cone5);
		group.add(Cone6);
		group.add(Cone7);
		group.add(Cone8);
		group.add(cone9);
		group.add(cube);
		group.add(bodycube);
		group.add(bodycube1);
		group.add(bodycube2);
		group.add(bodycube3);
		group.add(bodycube4);
	    group.add(lights);



		group1 = new THREE.Group();
		group1.add(bodycube7);
		group1.add(group);

		scene.add(group1);

		 camera.lookAt(scene.position);
        renderer = new THREE.WebGLRenderer({canvas:Can});
    renderer.setSize(1200,900);

    document.body.appendChild( renderer.domElement );

	 orbitControl = new THREE.OrbitControls(camera, renderer.domElement);
        orbitControl.addEventListener('change', render);
        orbitControl.enableZoom = true;

// DAT GUI 
		var gui = new dat.GUI();
	

var cam = gui.addFolder('speed');
cam.add(group.position, 'x', -0.0001, 0.01).listen();
cam.add(camera.position, 'y', -1000, 1000).listen();
cam.add(camera.position, 'z', -1000, 1000).listen();
cam.open();


}
	


 function render() {
     requestAnimationFrame(render);
//	group1.rotation.x +=0.005;
	 group.position.x +=0.5;
	 Cone.rotation.z -=0.01;
	 Cone1.rotation.z -=0.01;
	 Cone2.rotation.y -=0.01;
	 Cone3.rotation.y -=0.01;
	 cone4.rotation.y -=0.01;
	 Cone5.rotation.z -=0.01;
	 Cone6.rotation.z -=0.01;
	 Cone7.rotation.y -=0.01;
	 Cone8.rotation.y -=0.01;
	 camera.lookAt(group.position);
	
     renderer.render(scene, camera);
 }
		
}
