import { useEffect } from 'react';
import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import { TextGeometry } from 'three/examples/jsm/geometries/TextGeometry.js';
import { FontLoader } from 'three/examples/jsm/loaders/FontLoader';
import { TTFLoader } from 'three/examples/jsm/loaders/TTFLoader';
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
    let tree;
    let score = 0;

    const dlLight = new THREE.DirectionalLight(0xffffff, 1);
    dlLight.position.set(10, 10, 10).normalize();
    theHunt.scene.add(dlLight);

    
    const bgGeo = new THREE.BoxGeometry(300, 200, 200);
    const bgMat = new THREE.MeshPhongMaterial({color: 0x87ceeb});
    const bgMesh = new THREE.Mesh(bgGeo, bgMat);
    bgMesh.position.z = -200;
    theHunt.scene.add(bgMesh);

    const grndGeo = new THREE.BoxGeometry(300, 50, 100);
    const grndMat = new THREE.MeshPhongMaterial({color: 0x00ff00});
    const grndMesh = new THREE.Mesh(grndGeo, grndMat);
    grndMesh.position.z = -100;
    grndMesh.position.y = -50;
    theHunt.scene.add(grndMesh);

    const cloudGeo = new THREE.SphereGeometry(10);
    const cloudMat = new THREE.MeshPhongMaterial({color: 0xffffff});
    const cloudMesh = new THREE.Mesh(cloudGeo, cloudMat);
    cloudMesh.position.z = -25;
    cloudMesh.position.y = 30;
    cloudMesh.position.x = 30;
    cloudMesh.scale.x = 2;
    theHunt.scene.add(cloudMesh);  

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

    gltfLoader.load('./assets/laurel_tree_-_low_poly/scene.gltf', (gltfScene) => {
      tree = gltfScene;
      gltfScene.scene.rotation.y = Math.PI / 16;
      gltfScene.scene.position.y = -28;
      gltfScene.scene.position.z = -75;
      gltfScene.scene.position.x = -50;
      gltfScene.scene.scale.set(0.2, 0.2, 0.2);
      theHunt.scene.add(gltfScene.scene);
    });

    const fontLoader = new FontLoader();
    const ttfLoader = new TTFLoader();
    ttfLoader.load('fonts/jet_brains_mono_regular.ttf', (json) => {
      // parses font
      const jetBrainsFont = fontLoader.parse(json);
      // use parsed font as a normal
      const textGeo = new TextGeometry(score, {
        height: 2,
        size: 40,
        font: jetBrainsFont,
      });
      const textMat = new THREE.MeshPhongMaterial({color: 0xff0000});
      const textMesh = new THREE.Mesh(textGeo, textMat);
      textMesh.position.set(-3, -10, 0);
      theHunt.scene.add(textMesh);
    });

    
    const mouse = new THREE.Vector2();
    const raycaster = new THREE.Raycaster();
    const gunPos = new THREE.Vector3();
    const lerpSpeed = 0.1; //  lerp = linear interpolation

    document.addEventListener('mousemove', (event) => {
      // mouse pos in NDS
      mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
      mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;
    });

    document.addEventListener('click', onMouseClick, false); 

    function onMouseClick(event) {
      event.preventDefault();

      mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
      mouse.y = - (event.clientY / window.innerHeight) * 2 + 1;

    raycaster.setFromCamera(mouse, theHunt.camera);
    const intersects = raycaster.intersectObject(theHunt.scene);
    const object = intersects[0].object;

    if (intersects.length > 0) {

        console.log(object);

        if(object != bgMesh && object != tree && object != gun && object != grndMesh){
          object.visible = false;
        }
    }
  }

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
      if(cloudMesh.position.x == -100){
        cloudMesh.position.x = 100;
      }
      cloudMesh.position.x -= 1;
      score++;
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
