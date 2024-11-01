import React, { Suspense, useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";

import CanvasLoader from "../Loader";

const Computers = ({ isMobile }) => {
  const computer = useGLTF("https://d1rz0mlg9ltl84.cloudfront.net/desktop_pc/voxel/scene.gltf");
const onHoverStart = () => (document.body.style.cursor = 'grab');

  // Function to revert cursor to default
  const onHoverEnd = () => (document.body.style.cursor = 'default');

  return (
    <mesh 
    onPointerOver={onHoverStart} 
    onPointerOut={onHoverEnd}  >
      <hemisphereLight intesity={0.15}
      groundColor="white" />
      <pointLight intensity={5} />
      <spotLight
        position={[-20, 50, 10]}
        angle={-0.12}
        penumbra={1}
        intensity={1}
        castShadow
        shadow-mapSize={1024}
        />
      <primitive
        object={computer.scene}
        scale={isMobile ? 0.35 : 0.9}
        position={isMobile ? [0, -2, 1] : [0, -2, -1.5]}
        rotation={[0, -0, -0.1]}
      />
    </mesh>
  );
};

const ComputersCanvas = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Add a listener for changes to the screen size
    const mediaQuery = window.matchMedia("(max-width: 500px)");

    // Set the initial value of the `isMobile` state variable
    setIsMobile(mediaQuery.matches);

    // Define a callback function to handle changes to the media query
    const handleMediaQueryChange = (event) => {
      setIsMobile(event.matches);
    };

    // Add the callback function as a listener for changes to the media query
    mediaQuery.addEventListener("change", handleMediaQueryChange);

    // Remove the listener when the component is unmounted
    return () => {
      mediaQuery.removeEventListener("change", handleMediaQueryChange);
    };
  }, []);

  return (
    <Canvas
      frameloop='demand'
      shadows
      dpr={[1, 2]}
      camera={{ position: [20, 3, 5], fov: 25 }}
      gl={{ preserveDrawingBuffer: true }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <Computers isMobile={isMobile} />
      </Suspense>

      <Preload all />
    </Canvas>
  );
};

export default ComputersCanvas;
