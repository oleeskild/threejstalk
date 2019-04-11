(function() {

  window.samples.light_cube= {

    initialize: function(canvas) {
      var scene = new THREE.Scene();
      scene.background = new THREE.Color( 'skyblue' );

      const fov = 35; // AKA Field of View
      const aspect = canvas.clientWidth/canvas.clientHeight;
      const near = 0.1; // the near clipping plane
      const far = 100; // the far clipping plane
      
      const camera = new THREE.PerspectiveCamera( fov, aspect, near, far );
      camera.position.set( 0, 0, 10 );
      var control = new THREE.OrbitControls(camera);

      const geometry = new THREE.BoxBufferGeometry( 1, 1, 1 );

      // create a default (white) Basic material
      const material = new THREE.MeshStandardMaterial({color: 0xff9866});

      // create a Mesh containing the geometry and material
      const mesh = new THREE.Mesh( geometry, material );

      // add the mesh to the scene
      scene.add( mesh );

      const light = new THREE.DirectionalLight( 0xffffff, 5.0 );

      // move the light back and up a bit
      light.position.set( 10, 10, 10 );
    
      // remember to add the light to the scene
      scene.add( light );

      // create the renderer
      const renderer = new THREE.WebGLRenderer({canvas: canvas, antialias: true, alpha: true});
      renderer.setSize( canvas.clientWidth, canvas.clientHeight );
      renderer.setPixelRatio( window.devicePixelRatio );

      var instance = { active: false };

      function animate() {
        requestAnimationFrame( animate );
        if(!instance.active || sample_defaults.paused) return;

        // render, or 'create a still image', of the scene
        // this will create one still image / frame each time the animate
        // function calls itself
        renderer.render( scene, camera );
      }

      animate();
      return instance;
      
    }
  };
})(); 