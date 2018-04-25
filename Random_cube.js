function Random_cube(){
	var object = document.getElementById('Object');
	 var text= object.options[object.selectedIndex].text;
	var colour = document.getElementById('Colour').value;
	
	var Value= document.getElementById('Iterations').value;
	if(text == "Cube"){
	var scene,camera;
	var renderer;
	var initial_position=50;
	init();

	update();
	
	function init(){
		
		scene = new THREE.Scene();
		camera = new THREE.PerspectiveCamera(45,1600/600,0.1,1000);
		camera.position.z=500;
		renderer = new THREE.WebGLRenderer({canvas: Mycanvas , alpha: true});
		renderer.setSize(1600, 600);
		for(var i=0;i<Value;i++){
			var geometry = new THREE.CubeGeometry(10,10,10);
			var Material = new THREE.MeshPhongMaterial({color:"colour.value", wireframe: false});
			cube = new THREE.Mesh(geometry,Material);
			cube.position.x =initial_position;
			cube.position.y =initial_position;
			cube.position.z =initial_position;
			initial_position=initial_position+10;
			 cube.rotation.x += 0.01;
            cube.rotation.y += 0.01;
			scene.add(cube);
		}
		var light = new THREE.DirectionalLight(0xffffff, 0.8);
		light.position.set(0,4,1);
		
		scene.add(light);
		var light1 = new THREE.DirectionalLight(0xffffff, 0.8);
		light.position.set(4,0,1);
		scene.add(light1);
		//var light2 = new THREE.DirectionalLight(0xffffff, 0.8);
		//light.position.set(1,1,4);
		//scene.add(light2);
		
		orbitControl = new THREE.OrbitControls(camera, renderer.domElement);
            orbitControl.addEventListener('change', render);
           
            orbitControl.enableZoom = true;
	}
	

 function update() {
            render();
	  
            requestAnimationFrame(update);
	 cube.rotation.x += 0.01;
            cube.rotation.y += 0.01;
        }
 function render() {
            renderer.render(scene, camera);
        }
}
else if(text == "Cylinder"){
		var scene,camera;
	var renderer;
	var initial_position=50;
	init();

	update();
	
	function init(){
		
		scene = new THREE.Scene();
		camera = new THREE.PerspectiveCamera(45,1600/600,0.1,1000);
		camera.position.z=500;
		renderer = new THREE.WebGLRenderer({canvas: Mycanvas , alpha: true});
		renderer.setSize(1600, 600);
		for(var i=0;i<Value;i++){
			var geometry = new THREE.CylinderGeometry(10,10,10);
			var Material = new THREE.MeshPhongMaterial({color: "red", wireframe: false});
			cube = new THREE.Mesh(geometry,Material);
			cube.position.x =initial_position;
			cube.position.y =initial_position;
			cube.position.z =initial_position;
			initial_position=initial_position+10;
			 cube.rotation.x += 0.01;
            cube.rotation.y += 0.01;
			scene.add(cube);
		}
		var light = new THREE.DirectionalLight(0xffffff, 0.8);
		light.position.set(0,4,1);
		
		scene.add(light);
		var light1 = new THREE.DirectionalLight(0xffffff, 0.8);
		light.position.set(4,0,1);
		scene.add(light1);
		var light2 = new THREE.DirectionalLight(0xffffff, 0.8);
		light.position.set(1,1,4);
		scene.add(light2);
		
		orbitControl = new THREE.OrbitControls(camera, renderer.domElement);
            orbitControl.addEventListener('change', render);
           
            orbitControl.enableZoom = true;
	}
	

 function update() {
            
            
            render();
	  
            requestAnimationFrame(update);
	 cube.rotation.x += 0.01;
            cube.rotation.y += 0.01;
        }
 function render() {
            renderer.render(scene, camera);
        }
}else if(text == "Cone"){
		 	var scene,camera;
	var renderer;
	var initial_position=50;
	init();

	update();
	
	function init(){
		
		scene = new THREE.Scene();
		camera = new THREE.PerspectiveCamera(45,1600/600,0.1,1000);
		camera.position.z=500;
		renderer = new THREE.WebGLRenderer({canvas: Mycanvas , alpha: true});
		renderer.setSize(1600, 600);
		for(var i=0;i<Value;i++){
			var geometry = new THREE.ConeGeometry(10,10,10);
			var Material = new THREE.MeshPhongMaterial({color: "red", wireframe: false});
			cube = new THREE.Mesh(geometry,Material);
			cube.position.x =initial_position;
			cube.position.y =initial_position;
			cube.position.z =initial_position;
			initial_position=initial_position+10;
			 cube.rotation.x += 0.01;
            cube.rotation.y += 0.01;
			scene.add(cube);
		}
		var light = new THREE.DirectionalLight(0xffffff, 0.8);
		light.position.set(0,4,1);
		
		scene.add(light);
		var light1 = new THREE.DirectionalLight(0xffffff, 0.8);
		light.position.set(4,0,1);
		scene.add(light1);
		var light2 = new THREE.DirectionalLight(0xffffff, 0.8);
		light.position.set(1,1,4);
		scene.add(light2);
		
		orbitControl = new THREE.OrbitControls(camera, renderer.domElement);
            orbitControl.addEventListener('change', render);
           
            orbitControl.enableZoom = true;
	}
	

 function update() {
           
            
            render();
	  
            requestAnimationFrame(update);
	 cube.rotation.x += 0.01;
            cube.rotation.y += 0.01;
        }
 function render() {
            renderer.render(scene, camera);
        }
		 }else if(text == "Sphere"){
			 	var scene,camera;
	var renderer;
	var initial_position=50;
	init();

	update();
	
	function init(){
		
		scene = new THREE.Scene();
		camera = new THREE.PerspectiveCamera(45,1600/600,0.1,1000);
		camera.position.z=500;
		renderer = new THREE.WebGLRenderer({canvas: Mycanvas , alpha: true});
		renderer.setSize(1600, 600);
		for(var i=0;i<Value;i++){
			var geometry = new THREE.SphereGeometry(10,10,10);
			var Material = new THREE.MeshPhongMaterial({color: "red", wireframe: false});
			cube = new THREE.Mesh(geometry,Material);
			cube.position.x =initial_position;
			cube.position.y =initial_position;
			cube.position.z =initial_position;
			initial_position=initial_position+10;
			 cube.rotation.x += 0.01;
            cube.rotation.y += 0.01;
			scene.add(cube);
		}
		var light = new THREE.DirectionalLight(0xffffff, 0.8);
		light.position.set(0,4,1);
		
		scene.add(light);
		var light1 = new THREE.DirectionalLight(0xffffff, 0.8);
		light.position.set(4,0,1);
		scene.add(light1);
		var light2 = new THREE.DirectionalLight(0xffffff, 0.8);
		light.position.set(1,1,4);
		scene.add(light2);
		
		orbitControl = new THREE.OrbitControls(camera, renderer.domElement);
            orbitControl.addEventListener('change', render);
           
            orbitControl.enableZoom = true;
	}
	

 function update() {
      
            
            render();
	  
            requestAnimationFrame(update);
	 cube.rotation.x += 0.01;
            cube.rotation.y += 0.01;
        }
 function render() {
            renderer.render(scene, camera);
        }
			 
		 }else{
			 alert("please select a Design");
		 }
}