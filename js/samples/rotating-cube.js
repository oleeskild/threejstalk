(function() {

  window.samples.rotating_cube = {

    initialize: function(canvas) {
      var scene = new THREE.Scene();

      var camera = new THREE.PerspectiveCamera( 30, sample_defaults.width / sample_defaults.height, 1, 1000 );
      var control = new THREE.OrbitControls(camera);
      camera.position.set(0, 0, 20);
      camera.lookAt( new THREE.Vector3(0,0,0));
      control.update();

      var scale = 2.5;
      var geometry = new THREE.CubeGeometry( scale, scale, scale );
      var material = new THREE.MeshNormalMaterial( { color: 0xdddddd } );

      var mesh = new THREE.Mesh( geometry, material );
      scene.add( mesh );

      var renderer = new THREE.WebGLRenderer({canvas: canvas, antialias: true});
      renderer.setSize( sample_defaults.width, sample_defaults.height );

      var instance = { active: false };
      function animate() {
        requestAnimationFrame( animate, canvas );
        if(!instance.active || sample_defaults.paused) return;

        mesh.rotation.y += 0.08;

        renderer.render( scene, camera );
      }

      animate();
      return instance;
    }
  };
})();
