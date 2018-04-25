function transformation(){

    var type=document.getElementById('GROUP1').selectedIndex;
    type1=document.getElementsByTagName("option")[type].value;
       if (type1=="CUBE") {
           var camera, scene, renderer, control;

           init();
           render();

           function init() {

               renderer = new THREE.WebGLRenderer({canvas:Mycanvas});
               renderer.setPixelRatio(window.devicePixelRatio);
               renderer.setSize(window.innerWidth, window.innerHeight);
               document.body.appendChild(renderer.domElement);

               //

               camera = new THREE.PerspectiveCamera(70, window.innerWidth / window.innerHeight, 1, 3000);
               camera.position.set(1000, 500, 1000);
               camera.lookAt(new THREE.Vector3(0, 200, 0));

               scene = new THREE.Scene();


               var light = new THREE.DirectionalLight(0xffffff, 2);
               light.position.set(1, 1, 1);
               scene.add(light);



               var geometry = new THREE.BoxGeometry(200, 200, 200);
               var material = new THREE.MeshLambertMaterial({color:'pink'});

               control = new THREE.TransformControls(camera, renderer.domElement);
               control.addEventListener('change', render);

               var mesh = new THREE.Mesh(geometry, material);
               scene.add(mesh);

               control.attach(mesh);
               scene.add(control);


           }

           function render() {

               control.update();

               renderer.render(scene, camera);

           }
       }
       else if(type1 == "SPHERE"){

           var camera, scene, renderer, control;

           init();
           render();

           function init() {

               renderer = new THREE.WebGLRenderer({canvas:Mycanvas});
               renderer.setPixelRatio(window.devicePixelRatio);
               renderer.setSize(window.innerWidth, window.innerHeight);
               document.body.appendChild(renderer.domElement);

               //

               camera = new THREE.PerspectiveCamera(70, window.innerWidth / window.innerHeight, 1, 3000);
               camera.position.set(1000, 500, 1000);
               camera.lookAt(new THREE.Vector3(0, 200, 0));

               scene = new THREE.Scene();


               var light = new THREE.DirectionalLight(0xffffff, 2);
               light.position.set(1, 1, 1);
               scene.add(light);



               var geometry = new THREE.SphereGeometry(200, 200, 200);
               var material = new THREE.MeshLambertMaterial({color:'blue'});

               control = new THREE.TransformControls(camera, renderer.domElement);
               control.addEventListener('change', render);

               var mesh = new THREE.Mesh(geometry, material);
               scene.add(mesh);

               control.attach(mesh);
               scene.add(control);


           }

           function render() {

               control.update();

               renderer.render(scene, camera);

           }
	   }
	   else if(type1 == "CONE"){

           var camera, scene, renderer, control;

           init();
           render();

           function init() {

               renderer = new THREE.WebGLRenderer({canvas:Mycanvas});
               renderer.setPixelRatio(window.devicePixelRatio);
               renderer.setSize(window.innerWidth, window.innerHeight);
               document.body.appendChild(renderer.domElement);

               //

               camera = new THREE.PerspectiveCamera(70, window.innerWidth / window.innerHeight, 1, 3000);
               camera.position.set(1000, 500, 1000);
               camera.lookAt(new THREE.Vector3(0, 200, 0));

               scene = new THREE.Scene();


               var light = new THREE.AmbientLight(0xffffff, 2);
               light.position.set(1, 1, 1);
               scene.add(light);



               var geometry = new THREE.ConeGeometry(200, 200, 200);
               var material = new THREE.MeshLambertMaterial({color:'red'});

               control = new THREE.TransformControls(camera, renderer.domElement);
               control.addEventListener('change', render);

               var mesh = new THREE.Mesh(geometry, material);
               scene.add(mesh);

               control.attach(mesh);
               scene.add(control);


           }

           function render() {

               control.update();

               renderer.render(scene, camera);

           }
	   }
	   else if (type1== "CYLINDER"){

           var camera, scene, renderer, control;

           init();
           render();

           function init() {

               renderer = new THREE.WebGLRenderer({canvas:Mycanvas});
               renderer.setPixelRatio(window.devicePixelRatio);
               renderer.setSize(window.innerWidth, window.innerHeight);
               document.body.appendChild(renderer.domElement);

               //

               camera = new THREE.PerspectiveCamera(70, window.innerWidth / window.innerHeight, 1, 3000);
               camera.position.set(1000, 500, 1000);
               camera.lookAt(new THREE.Vector3(0, 200, 0));

               scene = new THREE.Scene();


               var light = new THREE.DirectionalLight(0xffffff, 2);
               light.position.set(1, 1, 1);
               scene.add(light);



               var geometry = new THREE.CylinderGeometry(200, 200, 200);
               var material = new THREE.MeshLambertMaterial({color:'White'});

               control = new THREE.TransformControls(camera, renderer.domElement);
               control.addEventListener('change', render);

               var mesh = new THREE.Mesh(geometry, material);
               scene.add(mesh);

               control.attach(mesh);
               scene.add(control);


           }

           function render() {

               control.update();

               renderer.render(scene, camera);

           }
	   }
}


