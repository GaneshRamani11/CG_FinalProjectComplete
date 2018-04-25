function cone(){
    var element=document.getElementById("text")
    element.innerHTML="Please use mouse to Zoom in and Out ";
    var canv= document.createElement('canvas');
    canv.id = 'someId';
    canv.height=400;
    canv.width=1200;
    document.body.appendChild(canv);
    var scene = new THREE.Scene();
    var camera = new THREE.PerspectiveCamera(95, 1200/400, 1, 10000);
    var renderer = new THREE.WebGLRenderer({canvas:canv});
    renderer.setSize(1200,400);
    var geometry = new THREE.ConeGeometry(255, 500, 32,1,1,1);
    var material = new THREE.MeshBasicMaterial({color: "red", wireframe: true});
    var cone = new THREE.Mesh(geometry, material);
    scene.add(cone);
    camera.position.z = 1000;
    function render() {
        requestAnimationFrame(render);
        cone.rotation +=0.01;
        renderer.render(scene, camera);
    };

    render();

}