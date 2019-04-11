(function() {

  window.samples.effect_of_light= {

    initialize: function(canvas) {
      var scene = new THREE.Scene();
      scene.background = new THREE.Color( 'skyblue' );

      const fov = 35; // AKA Field of View
      const aspect = canvas.clientWidth/canvas.clientHeight;
      const near = 0.1; // the near clipping plane
      const far = 100; // the far clipping plane
      
      const camera = new THREE.PerspectiveCamera( fov, aspect, near, far );
      camera.position.set( 0, 0, 10 );

      const geometry = new THREE.BoxBufferGeometry( 1, 1, 1 );

      // create a default (white) Basic material
      const material = new THREE.MeshStandardMaterial({color: 0xff9866});
      const basicMaterial = new THREE.MeshBasicMaterial({color: 0xff9866});

      // create a Mesh containing the geometry and material
      const mesh = new THREE.Mesh( geometry, material );
      const basicMesh = new THREE.Mesh( geometry, basicMaterial);
      mesh.position.x = 1;
      basicMesh.position.x = -1;

      // add the mesh to the scene
      scene.add( mesh );
      scene.add( basicMesh );

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

        // increase the mesh's rotation each frame
        mesh.rotation.z += 0.01;
        mesh.rotation.x += 0.01;
        mesh.rotation.y += 0.01;

        basicMesh.rotation.z += 0.01;
        basicMesh.rotation.x += 0.01;
        basicMesh.rotation.y += 0.01;
      
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

