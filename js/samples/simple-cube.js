(function () {

  window.samples.simple_cube = {

    initialize: function (canvas) {
      var scene = new THREE.Scene();
      var aspect = sample_defaults.width / sample_defaults.height;
      var camera = new THREE.PerspectiveCamera(75, aspect, 0.1, 1000);
      var control = new THREE.OrbitControls(camera);
      
      var renderer = new THREE.WebGLRenderer({canvas: canvas, antialias: true});
      renderer.setSize( sample_defaults.width, sample_defaults.height );

      var geometry = new THREE.BoxGeometry(1,1,1);
      var material = new THREE.MeshBasicMaterial({color: 0xffff00});
      material.wireframe = true;
      var cube = new THREE.Mesh(geometry, material);
      scene.add(cube);
      camera.position.z = 5;
      control.update();

      var instance = { active: false };
      var direction = true;
      function animate(time) {
        requestAnimationFrame(animate, canvas);
        if (!instance.active || sample_defaults.paused) return;

        cube.rotation.x += 0.1;
        if(direction){
          cube.position.y += 0.1;
        }else{
          cube.position.y -= 0.1;
        }

        if(cube.position.y >5 || cube.position.y < -5){
          direction = !direction;
        }
        renderer.render(scene, camera);
      }

      animate();
      return instance;
    }
  };
})();