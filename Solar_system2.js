function solar() {
    var canv = document.createElement('canvas');
    canv.id = 'someId';
    canv.height = 400;
    canv.width = 1200;
    document.body.appendChild(canv);
    //Rendering Scene
    var scene, camera, controls, renderer;
    init();
    animate();
    render();

    function init() {
        camera = new THREE.PerspectiveCamera(95, 1200/400, 1, 10000);
        camera.position.z = 1000;
        scene = new THREE.Scene();
        renderer = new THREE.WebGLRenderer({canvas: Mycan});
        renderer.setSize(1200,400);

        var starsGeometry = new THREE.CircleGeometry(0.1, 20);

        for (var i = 0; i < 10000; i++) {

            var star = new THREE.Vector3();
            star.x = THREE.Math.randFloatSpread(2000);
            star.y = THREE.Math.randFloatSpread(2000);
            star.z = THREE.Math.randFloatSpread(2000);
            starsGeometry.vertices.push(star);
        }
        var starsMaterial = new THREE.ParticleBasicMaterial({color: "yellow" , size: 1});
        var starField = new THREE.ParticleSystem(starsGeometry, starsMaterial);
        scene.add(starField);

        var SunGeometry = new THREE.SphereGeometry(3, 50, 50);
        var SunMaterial = new THREE.MeshLambertMaterial({color: "orange"});
        var Sun = new THREE.Mesh(SunGeometry, SunMaterial);
        Sun.position.set(0,0,0);


        var MercuryGeometry = new THREE.SphereGeometry(0.3, 10, 10);
        var MercuryMaterial = new THREE.MeshLambertMaterial({color: "gray"});
        var Mercury = new THREE.Mesh(MercuryGeometry, MercuryMaterial);
        Mercury.position.set(-5, 0, -5);



        var VenusGeometry = new THREE.SphereGeometry(0.4, 20, 20);
        var VenusMaterial = new THREE.MeshLambertMaterial({color: "aqua"});
        var Venus = new THREE.Mesh(VenusGeometry, VenusMaterial);
        Venus.position.set(-7, 0, 7);


        var EarthGeometry = new THREE.SphereGeometry(0.6, 20, 20);
        var EarthMaterial = new THREE.MeshLambertMaterial({color: "blue"});
        var Earth = new THREE.Mesh(EarthGeometry, EarthMaterial);
        Earth.position.set(20, 0, -20);


        var MarsGeometry = new THREE.SphereGeometry(0.5, 20, 20);
        var MarsMaterial = new THREE.MeshLambertMaterial({color: "red"});
        var Mars = new THREE.Mesh(VenusGeometry, VenusMaterial);
        Mars.position.set(10, 0, 10);


        var JupiterGeometry = new THREE.SphereGeometry(2, 20, 20);
        var JupiterMaterial = new THREE.MeshLambertMaterial({color: "green"});
        var Jupiter = new THREE.Mesh(JupiterGeometry, JupiterMaterial);
        Jupiter.position.set(20, 0, -20);


        var SaturnGeometry = new THREE.SphereGeometry(1.2, 20, 20);
        var SaturnMaterial = new THREE.MeshLambertMaterial({color: "blue"});
        Saturn = new THREE.Mesh(SaturnGeometry, SaturnMaterial);
        Saturn.position.set(-10, 0, -20);


        var UranusGeometry = new THREE.SphereGeometry(1, 20, 20);
        var UranusMaterial = new THREE.MeshLambertMaterial({color: "white"});
        var Uranus = new THREE.Mesh(UranusGeometry, UranusMaterial);
        Uranus.position.set(20, 0, -20);



        var NeptuneGeometry = new THREE.SphereGeometry(1, 20, 20);
        var NeptuneMaterial = new THREE.MeshLambertMaterial({color: "red"});
        var Neptune = new THREE.Mesh(NeptuneGeometry, NeptuneMaterial);
        Neptune.position.set(50, 0, -20);


        var PlutoGeometry = new THREE.SphereGeometry(1, 20, 20);
        var PlutoMaterial = new THREE.MeshLambertMaterial({color: "gray"});
        var Pluto = new THREE.Mesh(PlutoGeometry, PlutoMaterial);
        Pluto.position.set(70 ,0, -70);

        var geometry = new THREE.CircleGeometry(-7, 1000);
        geometry.vertices.shift();
        var circle = new THREE.Line(
            geometry,
            new THREE.LineDashedMaterial({color: 'gray'})
        );
        circle.rotation.x = Math.PI * 0.5;

        var geometry1 = new THREE.CircleGeometry(-10, 1000);
        geometry1.vertices.shift();
        var circle1 = new THREE.Line(
            geometry1,
            new THREE.LineDashedMaterial({color: 'gray'})
        );
        circle1.rotation.x = Math.PI * 0.5;

        var geometry2 = new THREE.CircleGeometry(-14, 1000);
        geometry2.vertices.shift();
        var circle2 = new THREE.Line(
            geometry2,
            new THREE.LineDashedMaterial({color: 'gray'})
        );
        circle2.rotation.x = Math.PI * 0.5;

        var geometry4 = new THREE.CircleGeometry(-22, 1000);
        geometry4.vertices.shift();
        var circle4 = new THREE.Line(
            geometry4,
            new THREE.LineDashedMaterial({color: 'gray'})
        );
        circle4.rotation.x = Math.PI * 0.5;

        var geometry5 = new THREE.CircleGeometry(-28, 1000);
        geometry5.vertices.shift();
        var circle5 = new THREE.Line(
            geometry5,
            new THREE.LineDashedMaterial({color: 'gray'})
        );
        circle5.rotation.x = Math.PI * 0.5;

        var geometry6 = new THREE.CircleGeometry(-54, 1000);
        geometry6.vertices.shift();
        var circle6 = new THREE.Line(
            geometry6,
            new THREE.LineDashedMaterial({color: 'gray'})
        );
        circle6.rotation.x = Math.PI * 0.5;

        var geometry7 = new THREE.CircleGeometry(-99, 1000);
        geometry7.vertices.shift();
        var circle7 = new THREE.Line(
            geometry7,
            new THREE.LineDashedMaterial({color: 'gray'})
        );
        circle7.rotation.x = Math.PI * 0.5;



        orbit = new THREE.Group();
        orbit.add(circle);
        orbit.add(Sun);
        orbit.add(circle1);
        orbit.add(circle2);
        orbit.add(circle4);
        orbit.add(circle5);
        orbit.add(circle6);
        orbit.add(circle7);
        orbit.add(Mercury);
        orbit.add(Venus);
        orbit.add(Earth);
        orbit.add(Mars);
        orbit.add(Jupiter);
        orbit.add(Saturn);
        orbit.add(Uranus);
        orbit.add(Neptune);
        orbit.add(Pluto);

        orbitDir = new THREE.Group();
        orbitDir.rotation.x =0.01;

        orbitDir.add(orbit);
        scene.add(orbitDir);


        orbitControl = new THREE.OrbitControls(camera, renderer.domElement);
        orbitControl.addEventListener('change', render);
        orbitControl.enableZoom = true;

        var light = new THREE.AmbientLight(0xffffff); // soft white light
        scene.add( light );
        var directionalLight = new THREE.DirectionalLight( 0xffffff, 0.5 );
        scene.add( directionalLight );
    }

    function animate() {
        orbit.rotation.y += 0.01;
        orbit.rotation.x +=0.001;
        orbit.rotation.z +=0.001;
        render();
        requestAnimationFrame(animate);

    }

    function render() {

        renderer.render(scene, camera);

    };
}