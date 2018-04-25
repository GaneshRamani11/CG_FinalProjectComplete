function Model() {

    var element=document.getElementById("text")
    element.innerHTML="Please use mouse to Zoom in and Out "
    var scene, camera,renderer;
    init();
    animate();
    render();
    function init(){
      /*  var canvas= document.createElement('canvas');
        canvas.id = 'someId';
        canvas.height=400;
        canvas.width=1200;
        document.body.appendChild(canvas);*/
        camera = new THREE.PerspectiveCamera(45, 1200/400, 1, 10000);
        camera.position.z = 1000;
        scene = new THREE.Scene();
        renderer = new THREE.WebGLRenderer({canvas:Mycan});
        renderer.setSize(1200,400);
        var geometry = new THREE.BoxGeometry( 700,700,700 ,20 ,20,20);
        var material = new THREE.MeshBasicMaterial( {color: "red", wireframe:false} );
        var cube = new THREE.Mesh( geometry, material );
        scene.add(cube);
        var geometry1 = new THREE.CylinderGeometry( 40,40,2000);
        var material1 = new THREE.MeshBasicMaterial( {color: "blue", wireframe:false} );
        var cylinder = new THREE.Mesh( geometry1, material1 );
        scene.add(cylinder);
        var geometry2 = new THREE.SphereGeometry( 40,40 ,20);
        var material2 = new THREE.MeshBasicMaterial( {color: "green", wireframe:false} );
        Sphere = new THREE.Mesh( geometry2, material2 );
        Sphere.position.x = 600;
        Sphere.position.y = 0;
        Sphere.position.z = 0;
        scene.add(Sphere);
        var geometry3 = new THREE.SphereGeometry( 40,40 ,20);
        var material3 = new THREE.MeshBasicMaterial( {color: "brown", wireframe:false} );
        Sphere1 = new THREE.Mesh( geometry3, material3 );
        Sphere1.position.x = 800;
        Sphere1.position.y = 0;
        Sphere1.position.z = 0;
        scene.add(Sphere1);
        orbit = new THREE.Group();
        orbit.add(Sphere);
        orbit.add(Sphere1);


        var orbitDir = new THREE.Group();
        orbitDir.rotation.x = 0.5;
        orbitDir.rotation.y = 0.5;
        orbitDir.rotation.z = 0;
        orbitDir.add(orbit);
        scene.add(orbitDir);

		

        orbitControl = new THREE.OrbitControls(camera, renderer.domElement);
        orbitControl.addEventListener('change', render);
        orbitControl.enableZoom = true;
    }

    function animate(){
        orbit.rotation.y += 0.01;
        render();
        requestAnimationFrame(animate);

    }

    function render() {

        renderer.render(scene, camera);

    }


}