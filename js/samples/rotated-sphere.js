(function() {

  window.samples.rotated_sphere= {

    initialize: function(canvas) {
      var scene = new THREE.Scene();

      var camera = new THREE.PerspectiveCamera( 30, sample_defaults.width / sample_defaults.height, 1, 1000 );
      camera.position.set(0, 0, 10);
      camera.lookAt( new THREE.Vector3(0,0,0));

      var geometry = new THREE.SphereGeometry();
      var material = new THREE.MeshNormalMaterial( { color: 0xdddddd } );
      material.wireframe = true;

      var mesh = new THREE.Mesh( geometry, material );
      scene.add(mesh);

      var renderer = new THREE.WebGLRenderer({canvas: canvas, antialias: true});
      renderer.setSize( sample_defaults.width, sample_defaults.height );

      var instance = { active: false };

      mesh.rotation.y += 0.8;
      mesh.rotation.x += 0.8;

      renderer.render( scene, camera );
      
      return instance;
    }
  };
})();
