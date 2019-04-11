(function() {

  window.samples.stationary_birds= {

    initialize: function(canvas) {
      let mixers = [];
      var clock = new THREE.Clock();
      var scene = new THREE.Scene();
      scene.background = new THREE.Color( 'skyblue' );

      const fov = 35; // AKA Field of View
      const aspect = canvas.clientWidth/canvas.clientHeight;
      const near = 1; // the near clipping plane
      const far = 100; // the far clipping plane
      
      const camera = new THREE.PerspectiveCamera( fov, aspect, near, far );
      camera.position.set( -1.5, 1.5, 6.5 );
      var control = new THREE.OrbitControls(camera);

      const light = new THREE.DirectionalLight( 0xffffff, 5.0 );
      // move the light back and up a bit
      light.position.set( 10, 10, 10 );
      scene.add( light);

      const ambientLight = new THREE.HemisphereLight(0xddeeff,0x202020, 5);
      scene.add(ambientLight);

      const loader = new THREE.GLTFLoader();

      const onLoad = ( gltf, position ) => {

        const model = gltf.scene.children[ 0 ];
        model.position.set( position.x, position.y, position.z);
        model.scale.set(0.05, 0.05, 0.05);
    
        const animation = gltf.animations[ 0 ];
    
        const mixer = new THREE.AnimationMixer( model );
        mixers.push( mixer );
    
        const action = mixer.clipAction( animation );
        action.play();
    
        scene.add( model );
    
      };
    
      // the loader will report the loading progress to this function
      const onProgress = () => {};
    
      // the loader will send any error messages to this function, and we'll log
      // them to to console
      const onError = ( errorMessage ) => { console.log( errorMessage ); };
    
      // load the first model. Each model is loaded asynchronously,
      // so don't make any assumption about which one will finish loading first
      const parrotPosition = new THREE.Vector3( 0, 0, 2.5 );
      loader.load( 'models/Parrot.glb', gltf => onLoad( gltf, parrotPosition ), onProgress, onError );
    
      const flamingoPosition = new THREE.Vector3( 7.5, 0, -10 );
      loader.load( 'models/Flamingo.glb', gltf => onLoad( gltf, flamingoPosition ), onProgress, onError );
    
      const storkPosition = new THREE.Vector3( 0, -2.5, -10 );
      loader.load( 'models/Stork.glb', gltf => onLoad( gltf, storkPosition ), onProgress, onError );
    
      // remember to add the light to the scene

      // create the renderer
      const renderer = new THREE.WebGLRenderer({canvas: canvas, antialias: true, alpha: true});
      renderer.setSize( canvas.clientWidth, canvas.clientHeight );
      renderer.setPixelRatio( window.devicePixelRatio );

      var instance = { active: false };
      function animate() {
        requestAnimationFrame( animate );
        if(!instance.active || sample_defaults.paused) return;

        //const delta = clock.getDelta();

        //mixers.forEach( ( mixer ) => { mixer.update( delta ); } );
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