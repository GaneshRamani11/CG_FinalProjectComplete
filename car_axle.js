function Car_AXLE(){
	init();
	render();
	function init(){

 camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 1, 10000 );
    camera.position.z = 1000;

    scene = new THREE.Scene();

    geometry = new THREE.TorusGeometry( 200, 20, 20,20 );
    material = new THREE.MeshBasicMaterial( { color: 0xff0000, wireframe: true } );

    Cone = new THREE.Mesh( geometry, material );
    scene.add( Cone );
		
    geometry1 = new THREE.TorusGeometry( 200, 20, 20,20 );
    material1 = new THREE.MeshBasicMaterial( { color: 0xff0000, wireframe: true } );

    Cone1 = new THREE.Mesh( geometry1, material1 );
		Cone1.position.set(0,0,500);
    scene.add( Cone1 );
		

		   geometry2 = new THREE.CylinderGeometry( 200, 20, 20,20 );
    material2 = new THREE.MeshBasicMaterial( { color: 'blue', wireframe: true } );

    Cone2 = new THREE.Mesh( geometry2, material2 );
		Cone2.position.set(0,0,500);
		Cone2.rotation.set(Math.PI/2,0,0);
    scene.add( Cone2 );
		
		
		geometry3 = new THREE.CylinderGeometry( 200, 20, 20,20 );
    material3 = new THREE.MeshBasicMaterial( { color: 'blue', wireframe: true } );

    Cone3 = new THREE.Mesh( geometry3, material3 );
		Cone3.position.set(0,0,0);
		Cone3.rotation.set(Math.PI/2,0,0);
    scene.add( Cone3 );
		
	geometry4 =new THREE.CylinderGeometry(50,50,500,320,1);
	material4 = new THREE.MeshBasicMaterial( { color: 'blue', wireframe: true } );
		cone4= new THREE.Mesh(geometry4,material4);
			cone4.position.set(0,0,250);
		cone4.rotation.set(Math.PI/2,0,0);
		scene.add(cone4);


		// Second Axle




        geometry5 = new THREE.TorusGeometry( 200, 20, 20,20 );
        material5 = new THREE.MeshBasicMaterial( { color: 0xff0000, wireframe: true } );

        Cone5 = new THREE.Mesh( geometry5, material5 );
        Cone5.position.set(700,0,0);
        scene.add( Cone5 );

        geometry6 = new THREE.TorusGeometry( 200, 20, 20,20 );
        material6 = new THREE.MeshBasicMaterial( { color: 0xff0000, wireframe: true } );

        Cone6 = new THREE.Mesh( geometry1, material1 );
        Cone6.position.set(700,0,500);
        scene.add( Cone6 );


        geometry7 = new THREE.CylinderGeometry( 200, 20, 20,20 );
        material7 = new THREE.MeshBasicMaterial( { color: 'blue', wireframe: true } );

        Cone7 = new THREE.Mesh( geometry2, material2 );
        Cone7.position.set(700,0,500);
        Cone7.rotation.set(Math.PI/2,0,0);
        scene.add( Cone7 );


        geometry8 = new THREE.CylinderGeometry( 200, 20, 20,20 );
        material8 = new THREE.MeshBasicMaterial( { color: 'blue', wireframe: true } );

        Cone8 = new THREE.Mesh( geometry3, material3 );
        Cone8.position.set(700,0,0);
        Cone8.rotation.set(Math.PI/2,0,0);
        scene.add( Cone8 );

        geometry9 =new THREE.CylinderGeometry(50,50,500,320,1);
        material9 = new THREE.MeshBasicMaterial( { color: 'blue', wireframe: true } );
        cone9= new THREE.Mesh(geometry4,material4);
        cone9.position.set(700,0,250);
        cone9.rotation.set(Math.PI/2,0,0);
        scene.add(cone9);


        geometry10 =new THREE.BoxGeometry(600,50,450);
        material10 = new THREE.MeshBasicMaterial( { color: 'green', wireframe: false} );
        cube= new THREE.Mesh(geometry10,material10);
        cube.position.set(350,0,250);
        //cube.rotation.set(Math.PI/2,0,0);
        scene.add(cube);






        renderer = new THREE.WebGLRenderer({});
    renderer.setSize( window.innerWidth, window.innerHeight );

    document.body.appendChild( renderer.domElement );
						
	 orbitControl = new THREE.OrbitControls(camera, renderer.domElement);
        orbitControl.addEventListener('change', render);
        orbitControl.enableZoom = true;
			control = new THREE.TransformControls( camera, renderer.domElement );
				control.addEventListener( 'change', render );
	}
 function render() {

     requestAnimationFrame(render);
	 Cone1.rotation.z +=0.01;
	 Cone2.rotation.y +=0.01;
	 Cone3.rotation.y +=0.01;
	 cone4.rotation.y +=0.01;
     Cone5.rotation.z +=0.01;
     Cone6.rotation.z +=0.01;
     Cone7.rotation.y +=0.01;
     Cone8.rotation.y +=0.01;
     cone9.rotation.y +=0.01;
     renderer.render(scene, camera);
 }

}
