(function() {

  window.samples.spinning_mars = {

    initialize: function(canvas) {
      var scene = new THREE.Scene();

      var camera = new THREE.PerspectiveCamera( 30, sample_defaults.width / sample_defaults.height, 1, 1000 );
      camera.position.set(0, 0, 250);
      camera.lookAt( new THREE.Vector3(0,0,0));
      var control = new THREE.OrbitControls(camera);

      var scale = 2.5;
      const globe = new THREE.Group();
      scene.add(globe);

      var loader = new THREE.TextureLoader();

      loader.load('img/mars.jpg', function(texture){

        var material = new THREE.MeshBasicMaterial( { map: texture } );
        var sphereGeo = new THREE.SphereGeometry(50, 50, 50);
        var sphereMesh = new THREE.Mesh(sphereGeo, material);
        globe.add(sphereMesh);
      });

      var renderer = new THREE.WebGLRenderer({canvas: canvas, antialias: true, alpha: true});
      renderer.setSize( sample_defaults.width, sample_defaults.height );

      var instance = { active: false };
      function animate() {
        requestAnimationFrame( animate, canvas );
        if(!instance.active || sample_defaults.paused) return;

        globe.rotation.y += 0.01;

        renderer.render( scene, camera );
      }

      animate();
      return instance;
    }
  };
})();
