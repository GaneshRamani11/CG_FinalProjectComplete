function sphere(){

    var element=document.getElementById("text")
    element.innerHTML="Please use mouse to Zoom in and Out "
	var canv= document.createElement('canvas');
        canv.id = 'someId';
        canv.height=400;
        canv.width=1200;
        document.body.appendChild(canv);
    var scene = new THREE.Scene();
    var camera = new THREE.PerspectiveCamera(95, 1200/400, 1, 10000);
    var renderer = new THREE.WebGLRenderer({canvas:canv});
    renderer.setSize(1200,400);
    //document.body.appendChild(renderer.domElement);
    var geometry = new THREE.SphereGeometry( 390,32,20 );
    var material = new THREE.MeshBasicMaterial( {color: "green",wireframe: true} );
    var sphere = new THREE.Mesh( geometry, material );
    scene.add( sphere );
    camera.position.z = 1000;

    function render() {
        requestAnimationFrame(render);
        sphere.rotation.x += 0.01;
        sphere.rotation.y += 0.01;


        renderer.render(scene, camera);
    };
    render();

}