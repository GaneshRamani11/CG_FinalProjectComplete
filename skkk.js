	function Skybox(){
		
		var scene,camera,renderer,geometry,materials;
		init();
		render();
		
		function init(){
			
		  scene = new THREE.Scene();
		  camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 1, 10000 );
		  camera.position.z=30	;
		  renderer = new THREE.WebGLRenderer({antialias: true});
          renderer.setSize( window.innerWidth, window.innerHeight );
		  document.body.appendChild( renderer.domElement );
	      geometry = new THREE.CubeGeometry( 100, 100, 100 );
          material = [
		    new THREE.MeshBasicMaterial( { map: new THREE.TextureLoader().load("blood-valley_ft.png"),side:THREE.DoubleSide } ),
		    new THREE.MeshBasicMaterial( { map: new THREE.TextureLoader().load("blood-valley_bk.png"),side:THREE.DoubleSide } ),
		    new THREE.MeshBasicMaterial( { map: new THREE.TextureLoader().load("blood-valley_up.png"),side:THREE.DoubleSide } ),
		    new THREE.MeshBasicMaterial( { map: new THREE.TextureLoader().load("blood-valley_dn.png"),side:THREE.DoubleSide } ),
	     	new THREE.MeshBasicMaterial( { map: new THREE.TextureLoader().load("blood-valley_rt.png"),side:THREE.DoubleSide } ),
	    	new THREE.MeshBasicMaterial( { map: new THREE.TextureLoader().load("blood-valley_lf.png"),side:THREE.DoubleSide } ),
		];
		
          material1 =new THREE.MeshFaceMaterial(material);
          cube = new THREE.Mesh( geometry, material1 );
          scene.add( cube );
			

		  cubegeometry = new THREE.SphereGeometry(10,20,40);
		  mirrorCubeCamera = new THREE.CubeCamera( 0.1, 5000, 512 );
		  material2 = new THREE.MeshBasicMaterial({envMap: mirrorCubeCamera.renderTarget,reflectivity:1});
		  cube1 = new THREE.Mesh( cubegeometry, material2 );
		  scene.add(cube1);				
		  cube1.position.set(1,0,0);
			
			light= new THREE.AmbientLight(0xFFFFFF, 0.3);
			scene.add(light);
		
		 controls = new THREE.OrbitControls( camera, renderer.domElement );
				
				controls.target.set( 0, 10, 0 );
				controls.minDistance = 40.0;
				controls.maxDistance = 50.0;
				camera.lookAt( controls.target );
			
		}
		
		
		function render() {
      requestAnimationFrame(render);
      mirrorCubeCamera.update( renderer, scene );
			cube1.rotation.x +=0.01;
			cube1.rotation.y +=0.01;
			cube1.rotation.z +=0.01;
			cube.rotation.y +=0.01;
      renderer.render(scene, camera); 
        }
			
		
	}
	
	
	
	
	
	