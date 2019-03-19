(function() {

  window.samples.empty_scene = {

    initialize: function(canvas) {
      var scene = new THREE.Scene();

      var camera = new THREE.PerspectiveCamera( 30, sample_defaults.width / sample_defaults.height, 1, 1000 );
      camera.position.set(0, 3, 7);
      camera.lookAt( new THREE.Vector3(0,0,0));

      var renderer = new THREE.WebGLRenderer({canvas: canvas, antialias: true});
      renderer.setSize( sample_defaults.width, sample_defaults.height );

      var instance = { active: false };
      renderer.render( scene, camera );
      return instance;
    }
  };
})();
