(function() {

  window.samples.animation_text= {

    initialize: function(canvas) {
      var scene = new THREE.Scene();

      var camera = new THREE.PerspectiveCamera( 30, 1, 1, 1000 );
      var control = new THREE.OrbitControls(camera);
      camera.position.set(0, 0, 400);
      camera.lookAt( new THREE.Vector3(0,0,0));
      control.update();
      var text = new THREE.Group();
      scene.add(text);

      var loader = new THREE.FontLoader();
      loader.load('fonts/helvetiker_regular.typeface.json', function(font){
        var geometry = new THREE.TextGeometry("Animasjon!", {
          font: font,
          size: 20,
          height: 1,
          curveSegments: 3,
          bevelEnabled: true,
          bevelThickness: 2,
          bevelSize: 2,
          bevelSegments: 1
        });
        var material = new THREE.MeshNormalMaterial();

        var mesh = new THREE.Mesh( geometry, material );
        text.add(mesh);
        text.position.x -= 60;
      });
      var renderer = new THREE.WebGLRenderer({canvas: canvas, antialias: true, alpha: true});
      renderer.setSize(700, 700);

      var instance = { active: false };
      var direction = true;
      function animate(time) {
        requestAnimationFrame( animate, canvas );
        if(!instance.active || sample_defaults.paused) return;
        
        if(direction){
          text.position.y += 1;
          text.position.x += 0.5;

          text.rotation.x += 0.01;
          text.rotation.y += 0.01;
        }else{
          text.position.y -= 1;
          text.position.x -= 0.5;

          text.rotation.x -= 0.01;
          text.rotation.y -= 0.01;
        }

        if(text.position.y > 60 ||text.position.y < -50){
          direction = !direction;
        }

        renderer.render( scene, camera );
      }

      animate();
      return instance;
    }
  };
})();
