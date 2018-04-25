function Models(){
	
	var element=document.getElementById("text");
		element.innerHTML="Please use mouse to Zoom in and Out ";
	var scene, camera,controls,renderer;
        init();
        animate();
	function init(){
		
		var InputElement=document.createElement('input');
		InputElement.type='Number'
			InputElement.id='Cube_Size'
		InputElement.value='Ganesh'
		document.body.appendChild(InputElement);
		var Cube_size=document.getElementById('Cube_Size').value
		
		
		/*var canvas= document.createElement('canvas');
			canvas.id = 'someId';
			canvas.height=400;
			canvas.width=1200;
			document.body.appendChild(canvas); */
            camera = new THREE.PerspectiveCamera(105, 1200/400, 1, 10000);
            camera.position.z = 1000;
		    scene = new THREE.Scene();
            renderer = new THREE.WebGLRenderer({canvas:Mycan});
            renderer.setSize(1200,400);
		     var geometry = new THREE.BoxGeometry( 700,700,700 ,20 ,20,20);
            var material = new THREE.MeshBasicMaterial( {color: "red", wireframe:true} );
            var cube = new THREE.Mesh( geometry, material );
            scene.add( cube );
		
	}
	function animate(){
            requestAnimationFrame(animate);
            
        }

        function render() {

            renderer.render(scene, camera);

        };
		
		
	}
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
