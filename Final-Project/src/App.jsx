import { useEffect } from 'react';
import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import SceneInit from './lib/SceneInit';

function App() {
  useEffect(() => {
    
    const theHunt = new SceneInit('myThreeJsCanvas');
    theHunt.initialize();
    theHunt.animate();

    const gltfLoader = new GLTFLoader();
    let duck;
    let goose;
    let gun;

    gltfLoader.load('./assets/banana_duck/scene.gltf', (gltfScene) => {
      duck = gltfScene;
      gltfScene.scene.rotation.y = Math.PI / 8;
      gltfScene.scene.position.y = -3;
      gltfScene.scene.position.x = -10;
      gltfScene.scene.scale.set(2, 2, 2);
      theHunt.scene.add(gltfScene.scene);
    });

    gltfLoader.load('./assets/goose_low_poly/scene.gltf', (gltfScene) => {
      goose = gltfScene;
      gltfScene.scene.rotation.y = Math.PI / 8;
      gltfScene.scene.position.y = 3;
      gltfScene.scene.position.x = 10;
      gltfScene.scene.scale.set(0.02, 0.02, 0.02);
      theHunt.scene.add(gltfScene.scene);
    });

    gltfLoader.load('./assets/low-poly_bren_gun/scene.gltf', (gltfScene) => {
      gun = gltfScene;
      gltfScene.scene.rotation.y = Math.PI / 1.9;
      gltfScene.scene.position.set(-1, -3, 30);
      gltfScene.scene.scale.set(15, 15, 15);
      theHunt.scene.add(gltfScene.scene);
    });

    const mouse = new THREE.Vector2();
    const raycaster = new THREE.Raycaster();
    const gunPos = new THREE.Vector3();
    const lerpSpeed = 0.1; //  lerp = linear interpolation

    document.addEventListener('mousemove', (event) => {
      mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
      mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;
    });

    function animate() {
      requestAnimationFrame(animate);

      if (gun && theHunt.camera) {
        raycaster.setFromCamera(mouse, theHunt.camera);

        const intersects = raycaster.intersectObject(theHunt.scene, true);

        if (intersects.length > 0) {
          // move the gun
          gun.scene.position.copy(intersects[0].point);
          gun.scene.position.z = 30;
        }
        gun.scene.position.lerp(gunPos, lerpSpeed);
      }

      // Render the scene
      theHunt.renderer.render(theHunt.scene, theHunt.camera);

      if(duck){
        duck.scene.rotation.x += 0.01;
        duck.scene.rotation.y += 0.01;
        duck.scene.rotation.z += 0.01;
      }
      if(goose){
        goose.scene.rotation.x -= 0.01;
        goose.scene.rotation.y -= 0.01;
        goose.scene.rotation.z -= 0.01;
      }
    }

    animate(); 
  }, []); 
  
  return (
    <div>
      <canvas id="myThreeJsCanvas" />
    </div>
  );
}

export default App;
