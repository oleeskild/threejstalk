(function() {

  window.samples.sky_blue_scene= {

    initialize: function(canvas) {
      var scene = new THREE.Scene();
      scene.background = new THREE.Color( 'skyblue' );

      const fov = 35; // AKA Field of View
      const aspect = sample_defaults.width/sample_defaults.height;
      const near = 0.1; // the near clipping plane
      const far = 100; // the far clipping plane
      
      const camera = new THREE.PerspectiveCamera( fov, aspect, near, far );
      camera.position.set( 0, 0, 10 );

      const geometry = new THREE.BoxBufferGeometry( 2, 2, 2 );

      // create a default (white) Basic material
      const material = new THREE.MeshBasicMaterial();

      // create a Mesh containing the geometry and material
      const mesh = new THREE.Mesh( geometry, material );

      // add the mesh to the scene
      scene.add( mesh );

      // create the renderer
      const renderer = new THREE.WebGLRenderer({canvas: canvas, antialias: true, alpha: true});
      renderer.setSize( sample_defaults.width, sample_defaults.height );
      renderer.setPixelRatio( window.devicePixelRatio );

      var instance = { active: false };

      renderer.render( scene, camera );
      
      return instance;
    }
  };
})();