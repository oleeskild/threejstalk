(function () {

  window.samples.teapot= {

    initialize: function (canvas) {
      var scene = new THREE.Scene();
      var aspect = sample_defaults.width / sample_defaults.height;
      var camera = new THREE.PerspectiveCamera(75,500/400, 0.1, 1000);
      camera.position.set(0, 0, 5);
      camera.lookAt( new THREE.Vector3(0,0,0));
      var control = new THREE.OrbitControls(camera);
      
      var renderer = new THREE.WebGLRenderer({canvas: canvas, antialias: true});
      renderer.setSize(500, 400);
      const group = new THREE.Group();
      scene.add(group);

      var instance = { active: false };
      function animate(time) {
        requestAnimationFrame(animate, canvas);
        if (!instance.active || sample_defaults.paused) return;
        group.rotation.y += 0.01;
        renderer.render(scene, camera);
      }

      var loader = new THREE.ObjectLoader();
      loader.load("meshes/teapot.json", function(obj) {
        var material = new THREE.MeshNormalMaterial();
        obj.material = material;
        group.add(obj);

        animate();
      });

      return instance;
    }
  };
})();