function car() {
        var scene, camera, renderer, geometry, group;
        init();
        render();
        update();

        function init() {

            scene = new THREE.Scene();
            camera = new THREE.PerspectiveCamera(45, 1600 / 600, 0.1, 1000);
            camera.position.z = 500;
            renderer = new THREE.WebGLRenderer({canvas: Mycanvas , alpha: true});
          
            renderer.setSize(1600, 600);
            dom = document.getElementById('Mycanvas');
            //dom.appendChild(renderer.domElement);

            var CarGeometry = new THREE.CubeGeometry(1,1,1,10);//cube
            var CarMaterial = new THREE.MeshStandardMaterial({color: "green"});
            Car = new THREE.Mesh(CarGeometry,CarGeometry);
			Car.castShadow = false;
           Car.receiveShadow = false;
            Car.position.y = 0.5;
			scene.add(Car);
            var CarBaseGeometry = new THREE.CubeGeometry(0.1,0.1,0.1);
            var CarBaseMaterial = new THREE.MeshStandardMaterial({color: "red"})
            CarBase = new THREE.Mesh(CarBaseGeometry, CarBaseMaterial);
			CarBase.receiveShadow = false;
            CarBase.castShadow = false;
            CarBase.rotation.x = -Math.PI / 20;
            scene.add(CarBase);

            camera.position.z = 5;
            camera.position.y = 1;

            sun = new THREE.DirectionalLight(0xffffff, 0.8);
            sun.position.set(0, 4, 1);
            sun.castShadow = true;
            scene.add(sun);
           

            orbitControl = new THREE.OrbitControls(camera, renderer.domElement);//helper to rotate around in scene
            orbitControl.addEventListener('change', render);
           
            orbitControl.enableZoom = true;
            window.addEventListener('resize', onWindowResize, false);//resize callback
        }

        function update() {
            //animate
            
            render();
            requestAnimationFrame(update);//request next update
        }

        function render() {
            renderer.render(scene, camera);//draw
        }

        function onWindowResize() {
            //resize & align
            sceneHeight = window.innerHeight;
            sceneWidth = window.innerWidth;
            renderer.setSize(sceneWidth, sceneHeight);
            camera.aspect = sceneWidth / sceneHeight;
            camera.updateProjectionMatrix();
        }
    }