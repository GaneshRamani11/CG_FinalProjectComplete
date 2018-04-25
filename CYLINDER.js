function Cylinder() {

    var element=document.getElementById("text")
    element.innerHTML="Please use mouse to Zoom in and Out "
	var canv = document.createElement('canvas');
    canv.id = 'someId';
    canv.height = 400;
    canv.width = 1200;
    document.body.appendChild(canv);
    var scene = new THREE.Scene();
    var camera = new THREE.PerspectiveCamera(45, 1200/400, 1, 10000);
    var renderer = new THREE.WebGLRenderer({canvas: canv});
    renderer.setSize(1200, 400);
    //document.body.appendChild(renderer.domElement);
    var geometry = new THREE.CylinderGeometry(30, 30, 100);
    var material = new THREE.MeshBasicMaterial({color: "yellow", wireframe: true});
    var cylinder = new THREE.Mesh(geometry, material);
    scene.add(cylinder);
    camera.position.z = 1000;

    function render() {
        requestAnimationFrame(render);
        cylinder.rotation.x += 0.01;


        renderer.render(scene, camera);
    };
    render();

}