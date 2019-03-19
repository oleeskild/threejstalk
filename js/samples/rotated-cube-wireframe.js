(function() {

  window.samples.rotated_cube_wireframe= {

    initialize: function(canvas) {
      var scene = new THREE.Scene();

      var camera = new THREE.PerspectiveCamera( 30, sample_defaults.width / sample_defaults.height, 1, 1000 );
      var control = new THREE.OrbitControls(camera);
      camera.position.set(0, 0, 10);
      camera.lookAt( new THREE.Vector3(0,0,0));
      control.update();

      var scale = 2.5;
      var geometry = new THREE.CubeGeometry( scale, scale, scale );
      var material = new THREE.MeshNormalMaterial( { color: 0xdddddd } );
      material.wireframe = true;

      var cube = new THREE.Mesh( geometry, material );
      scene.add(cube);

      var renderer = new THREE.WebGLRenderer({canvas: canvas, antialias: true});
      renderer.setSize( sample_defaults.width, sample_defaults.height );

      var instance = { active: false };

      cube.rotation.y += 0.8;
      cube.rotation.x += 0.8;

      renderer.render( scene, camera );
      
      return instance;
    }
  };
})();
