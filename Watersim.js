function Skybox2(){
		
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
	    
		

		  cubegeometry = new THREE.SphereGeometry(10,20,40);
		  mirrorCubeCamera = new THREE.CubeCamera( 0.1, 5000, 512 );
		  material2 = new THREE.MeshBasicMaterial({color:'gold'});
		  cube1 = new THREE.Mesh( cubegeometry, material2 );
		  scene.add(cube1);				
		  cube1.position.set(1,0,0);
			cube2 = new THREE.Mesh( cubegeometry, material2 );
			cube2.position.set(0,1,1);
			scene.add(cube2);
			
		
		
		 	controls = new THREE.OrbitControls( camera, renderer.domElement );
			
				controls.target.set( 0, 100, 0 );
				controls.minDistance = 20.0;
				controls.maxDistance = 200.0;
				camera.lookAt( controls.target );
var waterGeometry = new THREE.PlaneBufferGeometry( 1000, 1000 );

				water = new THREE.Water(
					waterGeometry,
					{
						
						waterNormals: new THREE.TextureLoader().load( 'as.jpg', function ( texture ) {
							texture.wrapS = texture.wrapT = THREE.RepeatWrapping;
							
						}),side:THREE.DoubleSide,waterColor: 0x82b7e5,
						distortionScale:  3.7,
						alpha:1.0,textureWidth: 512,
						textureHeight: 512
					
					}
				);

				water.rotation.x = - Math.PI / 2;

				scene.add( water );
			
			light = new THREE.AmbientLight('white',1);
			
			scene.add(light);
		}
		
		
		function render() {
      requestAnimationFrame(render);
			 mirrorCubeCamera.update( renderer, scene );
				var time = performance.now() * 0.001;
			camera.lookAt(scene.position);
  
			cube1.position.y =20*Math.cos(time) + 0;
			cube1.position.x =30*Math.cos(time) + 0;
			cube1.position.z =30*Math.cos(time) + 0;
			
				cube2.position.y =-20*Math.cos(time) + 0;
			cube2.position.x =-30*Math.cos(time) + 0;
			cube2.position.z =-30*Math.cos(time) + 0;
			
			water.material.uniforms.time.value += 1.0 / 20.0;
      renderer.render(scene, camera); 
        }
			
		
	}
	