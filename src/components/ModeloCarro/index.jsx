import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';

export const Carroca = () => {
  const mountRef = useRef(null);
  const [colorMode, setColorMode] = useState(0xffffff);

  useEffect(() => {
    const theme = localStorage.getItem('theme');
    setColorMode(theme === "dark" ? 0x333333 : 0xffffff);
  }, []);

  useEffect(() => {
    const renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.outputColorSpace = THREE.SRGBColorSpace;
    renderer.setSize(800, 300);
    renderer.setClearColor(colorMode);
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.shadowMap.enabled = false;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(12, 800 / 300, 1, 1000);
    camera.position.set(7, 3, 7);

    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true;
    controls.enablePan = false;
    controls.minDistance = 14;
    controls.maxDistance = 100;
    controls.minPolarAngle = 0.5;
    controls.maxPolarAngle = 1.5;
    controls.autoRotate = true;
    controls.target.set(0, 1.5, 0);
    controls.update();

    const directionalLight1 = new THREE.DirectionalLight(0xffffff, 10);
    directionalLight1.position.set(-10, 10, 5);
    directionalLight1.castShadow = true;
    scene.add(directionalLight1);

    const directionalLight2 = new THREE.DirectionalLight(0xffffff, 10);
    directionalLight2.position.set(10, 10, 5);
    directionalLight2.castShadow = true;
    scene.add(directionalLight2);

    const loader = new GLTFLoader().setPath('./car/');
    loader.load('Carro.gltf', (gltf) => {
      const mesh = gltf.scene;
      mesh.traverse((child) => {
        if (child.isMesh) {
          child.castShadow = true;
          child.receiveShadow = true;
        }
      });
      mesh.position.set(0, 1.05, -1);
      scene.add(mesh);
    });

    mountRef.current.appendChild(renderer.domElement);

    const animate = () => {
      requestAnimationFrame(animate);
      controls.update();
      renderer.render(scene, camera);
    };

    animate();

    return () => {
      if (mountRef.current) {
        mountRef.current.removeChild(renderer.domElement);
      }
      renderer.dispose();
    };
  }, [colorMode]);

  return <div ref={mountRef} />;
};
