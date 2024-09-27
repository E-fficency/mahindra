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
    renderer.setSize(600, 300);
    renderer.setClearColor(colorMode);
    renderer.setPixelRatio(2);
    renderer.shadowMap.enabled = false;
    renderer.shadowMap.type = THREE.PCFSoftShadowMap;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(15, 400 / 200, 1, 1000);
    camera.position.set(7, 3, 7);

    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true;
    controls.enablePan = false;
    controls.minDistance = 5;
    controls.maxDistance = 200;
    controls.minPolarAngle = 0.5;
    controls.maxPolarAngle = 1.5;
    controls.autoRotate = false;
    controls.target.set(0, 1.5, 0);
    controls.update();

    const groundGeometry = new THREE.PlaneGeometry(20, 20);
    groundGeometry.rotateX(-Math.PI / 2);

    const directionalLight1 = new THREE.DirectionalLight(0xffffff, 10);
    directionalLight1.position.set(-10, 10, 5);
    directionalLight1.castShadow = true;
    scene.add(directionalLight1);

    const directionalLight2 = new THREE.DirectionalLight(0xffffff, 10);
    directionalLight2.position.set(10, 10, 5);
    directionalLight2.castShadow = true;
    scene.add(directionalLight2);

    const loader = new GLTFLoader().setPath('./car/');
    loader.load('fe.gltf', (gltf) => {
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

    const animate = () => {
      requestAnimationFrame(animate);
      controls.update();
      renderer.render(scene, camera);
    };

    animate();

    mountRef.current.appendChild(renderer.domElement);

    const handleResize = () => {
      camera.aspect = 400 / 200;
      camera.updateProjectionMatrix();
      renderer.setSize(400, 200);
      window.location.reload()
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      mountRef.current.removeChild(renderer.domElement);
      renderer.dispose();
    };
  });

  return <div ref={mountRef} />;
};
