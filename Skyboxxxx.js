function Skybox1(){
		
		var scene,camera,renderer,geometry,materials;
		init();
		render();
		
		function init(){
			
		  scene = new THREE.Scene();
		  camera = new THREE.PerspectiveCamera( 75,1200/900, 1, 10000 );
		  camera.position.z=30	;
		  renderer = new THREE.WebGLRenderer({antialias: true,canvas:Can});
          renderer.setSize( 1200,900 );
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
			

		 
			
		light= new THREE.AmbientLight(0xFFFFFF, 0.3);
		scene.add(light);
		
		controls = new THREE.OrbitControls( camera, renderer.domElement );
				
				controls.target.set( 0, 10, 0 );
			
				controls.maxDistance = 50.0;
				camera.lookAt( controls.target );
			
		}
		
		
		function render() {
      requestAnimationFrame(render);
    
			
			
      renderer.render(scene, camera); 
        }
			
		
	}
	
	
	
	
	