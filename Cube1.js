function drawCube(){

    var element=document.getElementById("text")
    element.innerHTML="Please use mouse to Zoom in and Out "
    var scene, camera,controls,renderer;
    init();
    animate();
    function init(){
        var canv= document.createElement('canvas');
        canv.id = 'someId';
        canv.height=400;
        canv.width=1200;
        document.body.appendChild(canv);
        camera = new THREE.PerspectiveCamera(95, 1200/400, 1, 10000);
        camera.position.z = 1000;
        controls= new THREE.TrackballControls(camera);
        controls.addEventListener('change',render);
        scene = new THREE.Scene();
        renderer = new THREE.WebGLRenderer({canvas:canv});
        renderer.setSize(1200,400);
        // document.body.appendChild(renderer.domElement);
        var geometry = new THREE.BoxGeometry( 700,700,700 ,20 ,20,20);
        var material = new THREE.MeshBasicMaterial( {color: "red", wireframe:true} );
        var cube = new THREE.Mesh( geometry, material );
        scene.add( cube );

    }

    function animate(){
        requestAnimationFrame(animate);
        controls.update();
    }

    function render() {

        renderer.render(scene, camera);

    };



}
