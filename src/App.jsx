import { useEffect, useRef } from 'react'
import * as THREE from 'three';

function App() {
  const camera = useRef();
  const scene = useRef();
  const renderer = useRef();
  const mesh = useRef();
  const thisComp = useRef();

  const init = () => {
    camera.current = new THREE.PerspectiveCamera(70, window.innerWidth / window.innerHeight, 0.01, 10);
    camera.current.position.z = 1;
   
    scene.current = new THREE.Scene();

    const geometry = new THREE.BoxGeometry(0.2, 0.2, 0.2);
    const material = new THREE.MeshNormalMaterial();

    mesh.current = new THREE.Mesh(geometry, material);
    scene.current.add(mesh.current);

    renderer.current = new THREE.WebGLRenderer({ antialias: true });
    renderer.current.setSize(window.innerWidth, window.innerHeight);
    renderer.current.setAnimationLoop(animation);
    thisComp.current.appendChild(renderer.current.domElement);
  }

  const animation = (time) => {
    mesh.current.rotation.x = time / 2000;
    mesh.current.rotation.y = time / 1000;
    renderer.current.render(scene.current, camera.current);
  }

  useEffect(() => {
    init();
  }, [])

  return (
    <div ref={thisComp}>
    </div>
  )
}

export default App
