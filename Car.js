function Car(){



	var camera,scene,renderer,geometry,material,controls;
	init();
	render();

	function init(){

scene = new THREE.Scene();
camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 1, 10000 );
 camera.position.z=2000;
 camera.position.y=1000;
 camera.position.x=5000;
	}

	function render(){


	}


}
