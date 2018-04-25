function tree() {
    var element=document.getElementById("text")
    element.innerHTML="Please use mouse to Zoom in and Out "
    var scene, camera, renderer, geometry, group;
    init();
    render();
    update();

    function init() {

		var canv= document.createElement('canvas');
        canv.id = 'someId';
        canv.height=400;
        canv.width=1200;
        document.body.appendChild(canv);
        scene = new THREE.Scene();
        camera = new THREE.PerspectiveCamera(45, 1200/400, 0.1, 1000);
        camera.position.z = 500;
        renderer = new THREE.WebGLRenderer({canvas: canv });

        renderer.setSize(1200,400);
        //dom = document.getElementById('Mycanvas');
        //dom.appendChild(renderer.domElement);

        var heroGeometry = new THREE.ConeGeometry(1, 1, 32);//cube
        var heroMaterial = new THREE.MeshStandardMaterial({color: "green"});
        hero = new THREE.Mesh(heroGeometry, heroMaterial);
        hero.castShadow = false;
        hero.receiveShadow = false;
        hero.position.y = 0.5;
        scene.add(hero);
        var planeGeometry = new THREE.CylinderGeometry(0.1,0.1,1.5,10);
        var planeMaterial = new THREE.MeshStandardMaterial({color: "red"})
        ground = new THREE.Mesh(planeGeometry, planeMaterial);
        ground.receiveShadow = false;
        ground.castShadow = false;
        ground.rotation.x = -Math.PI / 20;
        scene.add(ground);

        camera.position.z = 5;
        camera.position.y = 1;

        var heroGeometry1 = new THREE.ConeGeometry(1, 1, 32);//cube
        var heroMaterial1 = new THREE.MeshStandardMaterial({color: "green"});
        hero1 = new THREE.Mesh(heroGeometry1, heroMaterial1);
        hero1.castShadow = false;
        hero1.receiveShadow = false;
        hero1.position.y = 0.9;
        hero1.position.x = 1.5;
        scene.add(hero1);
        var planeGeometry1 = new THREE.CylinderGeometry(0.1,0.1,1.5,10);
        var planeMaterial1 = new THREE.MeshStandardMaterial({color: "red"})
        ground1 = new THREE.Mesh(planeGeometry1, planeMaterial1);
        ground1.receiveShadow = false;
        ground1.position.x = 1.5;
        ground1.castShadow = false;
        ground1.rotation.x = -Math.PI / 20 ;
        scene.add(ground1);

        camera.position.z = 5;
        camera.position.y = 1;

        sun = new THREE.DirectionalLight(0xffffff, 0.8);
        sun.position.set(0, 4, 1);
        sun.castShadow = true;
        scene.add(sun);
        sun.shadow.mapSize.width = 256;
        sun.shadow.mapSize.height = 256;
        sun.shadow.camera.near = 0.5;
        sun.shadow.camera.far = 50;

        orbitControl = new THREE.OrbitControls(camera, renderer.domElement);
        orbitControl.addEventListener('change', render);

        orbitControl.enableZoom = true;



    }

    function update() {
        //animate
        hero.rotation.y += 0.01;
        hero1.rotation.y += 0.01;
        render();
        requestAnimationFrame(update);
    }

    function render() {
        renderer.render(scene, camera);
    }


}