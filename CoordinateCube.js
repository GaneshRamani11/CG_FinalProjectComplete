function exp(){

    var element=document.getElementById("text")
    element.innerHTML="Please use mouse to Zoom in and Out "
   
	
	/*	var canvas= document.createElement('canvas');
        canvas.id = 'someId';
        canvas.height=400;
        canvas.width=1200;
        document.body.appendChild(canvas);*/
	var y = document.createElement("p");
	y.textContent="                Input the Width , Height , Length of the Cube";
	y.id = "inputText";
	y.setAttribute('class', 'textField');
    document.body.appendChild(y);
	
	var x = document.createElement("INPUT");
	x.setAttribute("type", "number");
	x.id = "inputField";
    document.body.appendChild(x);
	
		var z = document.createElement("INPUT");
	z.setAttribute("type", "number");
	z.id = "inputField2";
    document.body.appendChild(z);
	
		var a = document.createElement("INPUT");
	a.setAttribute("type", "number");
	a.id = "inputField1";
    document.body.appendChild(a);
	
	
	var button1 = document.createElement("Button");
	var t = document.createTextNode("SUBMIT");
	button1.setAttribute('class', 'note');
	button1.appendChild(t);
	
	document.body.appendChild(button1);	
	button1.id = "submit";
	button1.onclick= (function cocube(){
		var scene, camera,controls,renderer;
	init();
    animate();
    function init(){
        var value1 = document.getElementById('inputField').value;
		var value2 = document.getElementById('inputField2').value;
		var value3 = document.getElementById('inputField1').value;
        camera = new THREE.PerspectiveCamera(95, 1200/400, 1, 10000);
        camera.position.z = 1000;
        controls= new THREE.TrackballControls(camera);
        controls.addEventListener('change',render);
        scene = new THREE.Scene();
        renderer = new THREE.WebGLRenderer({canvas:Mycan});
        renderer.setSize(1200, 400);
        var geometry = new THREE.CubeGeometry(value1,value2,value3);
        var material = new THREE.MeshBasicMaterial( {color: "red"} );
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



})
}
