var scene,sphere,geometry,material;
function Sun(){


    var scene = new THREE.Scene();
    var camera = new THREE.PerspectiveCamera(45, 900/400, 1, 10000);
    var renderer = new THREE.WebGLRenderer({ });
    renderer.setSize(1600,600);
    renderer.autoclear=true;
    renderer.dispose(sphere);
    document.body.appendChild(renderer.domElement);
     geometry = new THREE.SphereGeometry(30,32,32);
     material = new THREE.MeshPhongMaterial({
        map:new THREE.TextureLoader().load( "sunmap.jpg" ),
        shininess : 100

    });
     sphere = new THREE.Mesh( geometry, material );
    scene.add( sphere );

    camera.position.z = 500;

    orbitControl = new THREE.OrbitControls(camera, renderer.domElement);
    orbitControl.addEventListener('change', render);
    orbitControl.enableZoom = true;
    orbitControl.minDistance = 50;
    orbitControl.enableRotate = true;
    orbitControl.maxDistance=300;
    var light = new THREE.HemisphereLight( 'orange');

    scene.add(light);



    function render() {
        sphere.rotation.y +=0.0001;
        requestAnimationFrame(render);
        renderer.render(scene, camera);
    }
    render();

}

function Mercury(){

    var scene = new THREE.Scene();
    var camera = new THREE.PerspectiveCamera(45, 900/400, 1, 10000);
    var renderer = new THREE.WebGLRenderer({});
    renderer.setSize(1600,600);
    document.body.appendChild(renderer.domElement);
    var geometry = new THREE.SphereGeometry(30,32,32);
    var material = new THREE.MeshStandardMaterial({
        map:new THREE.TextureLoader().load( "mercurymap.jpg" ),
        bumpMap:new THREE.TextureLoader().load( "mercurybump.jpg" )
    });
    var sphere = new THREE.Mesh( geometry, material );
    scene.add( sphere );
    camera.position.z = 500;
    orbitControl = new THREE.OrbitControls(camera, renderer.domElement);
    orbitControl.addEventListener('change', render);
    orbitControl.enableZoom = true;
    orbitControl.minDistance = 50;
    orbitControl.enableRotate = true;
    orbitControl.maxDistance=300;
    var light = new THREE.DirectionalLight('white', 4);
    light.position.set(10,10,10);
    scene.add(light);

    function render() {
        sphere.rotation.x +=0.0001;
        requestAnimationFrame(render);
        renderer.render(scene, camera);
    }
    render();
}

function Venus() {


    var scene = new THREE.Scene();
    var camera = new THREE.PerspectiveCamera(45, 900/400, 1, 10000);
    var renderer = new THREE.WebGLRenderer({});
    renderer.setSize(1600,600);
    document.body.appendChild(renderer.domElement);
    var geometry = new THREE.SphereGeometry(30,32,32);
    var material = new THREE.MeshStandardMaterial({
        map:new THREE.TextureLoader().load( "venusmap.jpg" ),
        bumpMap:new THREE.TextureLoader().load( "venusbump.jpg" )
    });
    var sphere = new THREE.Mesh( geometry, material );
    scene.add( sphere );
    camera.position.z = 500;
    orbitControl = new THREE.OrbitControls(camera, renderer.domElement);
    orbitControl.addEventListener('change', render);
    orbitControl.enableZoom = true;
    orbitControl.minDistance = 50;
    orbitControl.enableRotate = true;
    orbitControl.maxDistance=300;
    var light = new THREE.DirectionalLight('white', 4);
    light.position.set(10,10,10);
    scene.add(light);

    function render() {
        sphere.rotation.x +=0.0001;
        requestAnimationFrame(render);
        renderer.render(scene, camera);
    }
    render();
}

function Earth(){


    var scene = new THREE.Scene();
    var camera = new THREE.PerspectiveCamera(45, 900/400, 1, 10000);
    var renderer = new THREE.WebGLRenderer({});
    renderer.setSize(1600,600);
    document.body.appendChild(renderer.domElement);
    var geometry = new THREE.SphereGeometry(30,32,32);
    var material = new THREE.MeshStandardMaterial({
        map:new THREE.TextureLoader().load( "earthmap1k.jpg" ),
        bumpMap:new THREE.TextureLoader().load( "earthbump1k.jpg" )
    });
    var sphere = new THREE.Mesh( geometry, material );
    scene.add( sphere );
    camera.position.z = 500;
    orbitControl = new THREE.OrbitControls(camera, renderer.domElement);
    orbitControl.addEventListener('change', render);
    orbitControl.enableZoom = true;
    orbitControl.minDistance = 50;
    orbitControl.enableRotate = true;
    orbitControl.maxDistance=300;
    var light = new THREE.DirectionalLight('white', 4);
    light.position.set(10,10,10);
    scene.add(light);

    function render() {
        sphere.rotation.x +=0.0001;
        requestAnimationFrame(render);
        renderer.render(scene, camera);
    }
    render();
}

function Mars(){
    var scene = new THREE.Scene();
    var camera = new THREE.PerspectiveCamera(45, 900/400, 1, 10000);
    var renderer = new THREE.WebGLRenderer({});
    renderer.setSize(1600,600);
    document.body.appendChild(renderer.domElement);
    var geometry = new THREE.SphereGeometry(30,32,32);
    var material = new THREE.MeshStandardMaterial({
        map:new THREE.TextureLoader().load( "mars_1k_color.jpg" )

    });
    var sphere = new THREE.Mesh( geometry, material );
    scene.add( sphere );
    camera.position.z = 500;
    orbitControl = new THREE.OrbitControls(camera, renderer.domElement);
    orbitControl.addEventListener('change', render);
    orbitControl.enableZoom = true;
    orbitControl.minDistance = 50;
    orbitControl.enableRotate = true;
    orbitControl.maxDistance=300;
    var light = new THREE.DirectionalLight('white', 4);
    light.position.set(10,10,10);
    scene.add(light);

    function render() {
        sphere.rotation.x +=0.0001;
        requestAnimationFrame(render);
        renderer.render(scene, camera);
    }
    render();
}

function Jupiter(){

    var scene = new THREE.Scene();
    var camera = new THREE.PerspectiveCamera(45, 900/400, 1, 10000);
    var renderer = new THREE.WebGLRenderer({});
    renderer.setSize(1600,600);
    document.body.appendChild(renderer.domElement);
    var geometry = new THREE.SphereGeometry(30,32,32);
    var material = new THREE.MeshStandardMaterial({
        map:new THREE.TextureLoader().load( "jupitermap.jpg" )
    });
    var sphere = new THREE.Mesh( geometry, material );
    scene.add( sphere );
    camera.position.z = 500;
    orbitControl = new THREE.OrbitControls(camera, renderer.domElement);
    orbitControl.addEventListener('change', render);
    orbitControl.enableZoom = true;
    orbitControl.minDistance = 50;
    orbitControl.enableRotate = true;
    orbitControl.maxDistance=300;
    var light = new THREE.DirectionalLight('white', 4);
    light.position.set(10,10,10);
    scene.add(light);

    function render() {
        sphere.rotation.x +=0.0001;
        requestAnimationFrame(render);
        renderer.render(scene, camera);
    }
    render();
}

function Saturn(){

    var scene = new THREE.Scene();
    var camera = new THREE.PerspectiveCamera(45, 720/400, 1, 10000);
    var renderer = new THREE.WebGLRenderer({});
    renderer.setSize(1600,600);
    document.body.appendChild(renderer.domElement);
    var geometry = new THREE.SphereGeometry(30,32,32);
    var material = new THREE.MeshStandardMaterial({
        map:new THREE.TextureLoader().load( "saturnmap.jpg" ),
        shininess:50
    });
    var sphere = new THREE.Mesh( geometry, material );
    scene.add( sphere );
    var geometry1 = new THREE.RingGeometry( 1.2*32, 2*32,100 );
    var material1 = new THREE.MeshPhongMaterial( {  map: new THREE.TextureLoader().load( "saturnringcolo.jpg" ) ,
        side :THREE.DoubleSide , wrapT : THREE.RepeatWrapping ,bumpMap:new THREE.TextureLoader().load( "saturnringpattern.gif" ) } );
    var torus1 = new THREE.Mesh( geometry1, material1 );
    scene.add( torus1 );
    camera.position.z = 500;
    camera.position.x=500;
    orbitControl = new THREE.OrbitControls(camera, renderer.domElement);
    orbitControl.addEventListener('change', render);
    orbitControl.enableZoom = true;
    orbitControl.minDistance = 50;
    orbitControl.enableRotate = true;
    orbitControl.maxDistance=300;
    var light = new THREE.HemisphereLight( 0xffffbb, 0x080820, 1 );

    scene.add(light);

    function render() {
        sphere.rotation.z +=0.0001;
        requestAnimationFrame(render);
        renderer.render(scene, camera);
    }
    render();
}

function Neptune(){

    var scene = new THREE.Scene();
    var camera = new THREE.PerspectiveCamera(45, 720/400, 1, 10000);
    var renderer = new THREE.WebGLRenderer({});
    renderer.setSize(1600,600);
    document.body.appendChild(renderer.domElement);
    var geometry = new THREE.SphereGeometry(30,32,32);
    var material = new THREE.MeshStandardMaterial({
        map:new THREE.TextureLoader().load( "neptunemap.jpg" )
    });
    var sphere = new THREE.Mesh( geometry, material );
    scene.add( sphere );


    orbitControl = new THREE.OrbitControls(camera, renderer.domElement);
    orbitControl.addEventListener('change', render);
    orbitControl.enableZoom = true;
    orbitControl.minDistance = 50;
    orbitControl.enableRotate = true;
    orbitControl.maxDistance=300;
    var light = new THREE.DirectionalLight('white', 4);
    light.position.set(10,10,10);
    scene.add(light);

    function render() {
        sphere.rotation.x +=0.0001;
        requestAnimationFrame(render);
        renderer.render(scene, camera);
    }
    render();
}

function Uranus(){

    var scene = new THREE.Scene();
    var camera = new THREE.PerspectiveCamera(45, 1600/600, 1, 10000);
    var renderer = new THREE.WebGLRenderer({});
    renderer.setSize(1600,600);
    document.body.appendChild(renderer.domElement);
    var geometry = new THREE.SphereGeometry(30,32,32);
    var material = new THREE.MeshStandardMaterial({
        map:new THREE.TextureLoader().load( "uranusmap.jpg" )
    });
    var sphere = new THREE.Mesh( geometry, material );
    scene.add( sphere );

    var geometry1 = new THREE.RingGeometry( 1.2*32, 2*32,100 );
    var material1 = new THREE.MeshPhongMaterial( {  map: new THREE.TextureLoader().load( "uranusringcolour.jpg" ) ,
        side :THREE.DoubleSide , wrapT : THREE.RepeatWrapping ,bumpMap:new THREE.TextureLoader().load( "uranusringtrans.gif" ) } );
    var torus1 = new THREE.Mesh( geometry1, material1 );
    scene.add( torus1 );
    camera.position.z = 500;
    camera.position.x=500;

    orbitControl = new THREE.OrbitControls(camera, renderer.domElement);
    orbitControl.addEventListener('change', render);
    orbitControl.enableZoom = true;
    orbitControl.minDistance = 50;
    orbitControl.enableRotate = true;
    orbitControl.maxDistance=300;
    var light = new THREE.DirectionalLight('white', 4);
    light.position.set(10,10,10);
    scene.add(light);

    function render() {
        sphere.rotation.x +=0.0001;
        requestAnimationFrame(render);
        renderer.render(scene, camera);
    }
    render();
}
