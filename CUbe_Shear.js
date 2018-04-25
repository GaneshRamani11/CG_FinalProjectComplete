function shear(){
	
	var type=document.getElementById('GROUP1').selectedIndex;
	type1=document.getElementsByTagName("option")[type].value;
	
	if(type1=="CUBE"){
	
var container = document.createElement( 'div' );
document.body.appendChild( container );

// renderer
var renderer = new THREE.WebGLRenderer( );
renderer.setSize( window.innerWidth, window.innerHeight );
container.appendChild( renderer.domElement );

// scene
var scene = new THREE.Scene();

// camera
var camera = new THREE.PerspectiveCamera( 40, window.innerWidth / window.innerHeight, 1, 1000 );
camera.position.set( 0, 6, 20 ); 
camera.lookAt( scene.position );

// material
var material = new THREE.MeshBasicMaterial( { color: 0xff0000, wireframe: true } );

// geometry
var geometry = new THREE.BoxGeometry( 5, 5, 5 );

// mesh
var mesh = new THREE.Mesh( geometry, material );
scene.add( mesh );



var Syx = document.getElementById('Y').value,
    Szx = document.getElementById('X').value,
    Sxy = 0,
    Szy = 0,
    Sxz = 0,
    Syz = document.getElementById('Z').value;

var matrix = new THREE.Matrix4();

matrix.set(   1,   Syx,  Szx,  0,
            Sxy,     1,  Szy,  0,
            Sxz,   Syz,   1,   0,
              0,     0,   0,   1  );

// apply shear matrix to geometry                  
mesh.geometry.applyMatrix( matrix );
		

// render
renderer.render( scene, camera );

document.addEventListener( 'mousemove', onDocumentMouseMove, false );

function onDocumentMouseMove( event ) {

    var mouseX = event.clientX;
    
    mesh.rotation.y = mouseX * 0.01;
    
    renderer.render( scene, camera );

}
	

}
	else if(type1 == "SPHERE"){
		var container = document.createElement( 'div' );
document.body.appendChild( container );


var renderer = new THREE.WebGLRenderer( );
renderer.setSize( window.innerWidth, window.innerHeight );
container.appendChild( renderer.domElement );

// scene
var scene = new THREE.Scene();

// camera
var camera = new THREE.PerspectiveCamera( 40, window.innerWidth / window.innerHeight, 1, 1000 );
camera.position.set( 0, 6, 20 ); 
camera.lookAt( scene.position );

// material
var material = new THREE.MeshBasicMaterial( { color: 0xff0000, wireframe: true } );

// geometry
var geometry = new THREE.SphereGeometry( 5, 5, 5 );

// mesh
var mesh = new THREE.Mesh( geometry, material );
scene.add( mesh );

// shear matrix
// ref: http://www.flipcode.com/documents/matrfaq.html#Q43
//        | 1    Syx  Szx  0 |
//        |                  |
//        | Sxy  1    Szy  0 |
//    M = |                  |
//        | Sxz  Syz  1    0 |
//        |                  |
//        | 0    0    0    1 |
//        |                  |

var Syx = document.getElementById('Y').value,
    Szx = document.getElementById('X').value,
    Sxy = 0,
    Szy = 0,
    Sxz = 0,
    Syz = document.getElementById('Z').value;

var matrix = new THREE.Matrix4();

matrix.set(   1,   Syx,  Szx,  0,
            Sxy,     1,  Szy,  0,
            Sxz,   Syz,   1,   0,
              0,     0,   0,   1  );

// apply shear matrix to geometry                  
mesh.geometry.applyMatrix( matrix );

// render
renderer.render( scene, camera );

document.addEventListener( 'mousemove', onDocumentMouseMove, false );

function onDocumentMouseMove( event ) {

    var mouseX = event.clientX;
    
    mesh.rotation.y = mouseX * 0.01;
    
    renderer.render( scene, camera );

}
	}
		else if(type1 == "CYLINDER"){
		var container = document.createElement( 'div' );
document.body.appendChild( container );

// renderer
var renderer = new THREE.WebGLRenderer( );
renderer.setSize( window.innerWidth, window.innerHeight );
container.appendChild( renderer.domElement );

// scene
var scene = new THREE.Scene();

// camera
var camera = new THREE.PerspectiveCamera( 40, window.innerWidth / window.innerHeight, 1, 1000 );
camera.position.set( 0, 6, 20 ); 
camera.lookAt( scene.position );

// material
var material = new THREE.MeshBasicMaterial( { color: 0xff0000, wireframe: true } );

// geometry
var geometry = new THREE.CylinderGeometry( 5, 5, 5 );

// mesh
var mesh = new THREE.Mesh( geometry, material );
scene.add( mesh );

// shear matrix
// ref: http://www.flipcode.com/documents/matrfaq.html#Q43
//        | 1    Syx  Szx  0 |
//        |                  |
//        | Sxy  1    Szy  0 |
//    M = |                  |
//        | Sxz  Syz  1    0 |
//        |                  |
//        | 0    0    0    1 |
//        |                  |

var Syx = document.getElementById('Y').value,
    Szx = document.getElementById('X').value,
    Sxy = 0,
    Szy = 0,
    Sxz = 0,
    Syz = document.getElementById('Z').value;

var matrix = new THREE.Matrix4();

matrix.set(   1,   Syx,  Szx,  0,
            Sxy,     1,  Szy,  0,
            Sxz,   Syz,   1,   0,
              0,     0,   0,   1  );

// apply shear matrix to geometry                  
mesh.geometry.applyMatrix( matrix );

// render
renderer.render( scene, camera );

document.addEventListener( 'mousemove', onDocumentMouseMove, false );

function onDocumentMouseMove( event ) {

    var mouseX = event.clientX;
    
    mesh.rotation.y = mouseX * 0.01;
    
    renderer.render( scene, camera );

}
		}
			
			else if(type1 == "CONE"){
		var container = document.createElement( 'div' );
document.body.appendChild( container );

// renderer
var renderer = new THREE.WebGLRenderer( );
renderer.setSize( window.innerWidth, window.innerHeight );
container.appendChild( renderer.domElement );

// scene
var scene = new THREE.Scene();

// camera
var camera = new THREE.PerspectiveCamera( 40, window.innerWidth / window.innerHeight, 1, 1000 );
camera.position.set( 0, 6, 20 ); 
camera.lookAt( scene.position );

// material
var material = new THREE.MeshBasicMaterial( { color: 0xff0000, wireframe: true } );

// geometry
var geometry = new THREE.ConeGeometry( 5, 5, 5 );

// mesh
var mesh = new THREE.Mesh( geometry, material );
scene.add( mesh );

// shear matrix
// ref: http://www.flipcode.com/documents/matrfaq.html#Q43
//        | 1    Syx  Szx  0 |
//        |                  |
//        | Sxy  1    Szy  0 |
//    M = |                  |
//        | Sxz  Syz  1    0 |
//        |                  |
//        | 0    0    0    1 |
//        |                  |

var Syx = document.getElementById('Y').value,
    Szx = document.getElementById('X').value,
    Sxy = 0,
    Szy = 0,
    Sxz = 0,
    Syz = document.getElementById('Z').value;

var matrix = new THREE.Matrix4();

matrix.set(   1,   Syx,  Szx,  0,
            Sxy,     1,  Szy,  0,
            Sxz,   Syz,   1,   0,
              0,     0,   0,   1  );

// apply shear matrix to geometry                  
mesh.geometry.applyMatrix( matrix );

// render
renderer.render( scene, camera );

document.addEventListener( 'mousemove', onDocumentMouseMove, false );

function onDocumentMouseMove( event ) {

    var mouseX = event.clientX;
    
    mesh.rotation.y = mouseX * 0.01;
    
    renderer.render( scene, camera );

}
			}
	
}

