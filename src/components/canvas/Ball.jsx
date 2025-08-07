import { Suspense, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Decal, Float, OrbitControls, Preload, useTexture } from "@react-three/drei";

import CanvasLoader from "../Loader";

const Ball = (props) => {
  const [decal] = useTexture([props.imgUrl]);
  const [isJiggling, setJiggling] = useState(false);

  const handlePointerOver = () => {
    setJiggling(true);

    setTimeout(() => {
      setJiggling(false);
    }, 1500);
  };

  const handlePointerOut = () => {
    setJiggling(false);
  };

  // Use the useFrame hook to animate the jiggle effect
  useFrame(({ clock }) => {
    if (isJiggling) {
      const time = clock.getElapsedTime();
      // Adjust the rotation values to control the jiggle intensity
      props.setRotation([Math.sin(time * 10) * 0.2, Math.cos(time * 10) * 0.2, 6.25]);
    }
    
  }); 
const onHoverStart = () => (document.body.style.cursor = 'grab');

  // Function to revert cursor to default
  const onHoverEnd = () => (document.body.style.cursor = 'default');


  return (
    <Float speed={0.75} rotationIntensity={1} floatIntensity={2}
      onPointerOver={handlePointerOver} onClick={handlePointerOver} onPointerOut={handlePointerOut}>
      <ambientLight intensity={0.25}></ambientLight>
      <directionalLight position={[0, 0, 0.05]} />
      <mesh 
         onPointerOver={onHoverStart} 
        onPointerOut={onHoverEnd} 
        castShadow receiveShadow scale={2.75} rotation={props.rotation}>
        <icosahedronGeometry args={[1, 1]} />
        <meshStandardMaterial color="#fff" polygonOffset polygonOffsetFactor={-5} flatShading />

        <Decal
          position={[0, 0, 1]}
          rotation={[2 * Math.PI, 0, 6.25]}
          flatShading
          map={decal}
        />
      </mesh>
    </Float>
  );
};

const BallCanvas = ({ icon }) => {
  const [rotation, setRotation] = useState([0, 0, 0]);

  return (
    <Canvas frameloop="demand" gl={{ preserveDrawingBuffer: true }}>
      <Suspense fallback={<CanvasLoader />}>
         <OrbitControls enableZoom={false} />
        <Ball imgUrl={icon} setRotation={setRotation} rotation={rotation} />
      </Suspense>
      <Preload all />
    </Canvas>
  );
};

export default BallCanvas;
