import {Suspense, useEffect, useState }from 'react'
import { Canvas } from '@react-three/fiber';
import { OrbitControls, useGLTF } from '@react-three/drei'
import CanvasLoader from '../Loader';

const Earth = ({ isMobile }) => {

  const earth =useGLTF('https://d1rz0mlg9ltl84.cloudfront.net/desktop_pc/me V3.glb')
  
  const onHoverStart = () => (document.body.style.cursor = 'pointer');

  // Function to revert cursor to default
  const onHoverEnd = () => (document.body.style.cursor = 'default');

  return (
    <mesh 
    onPointerOver={onHoverStart} 
    onPointerOut={onHoverEnd}  >
       <hemisphereLight intesity={0.1}
      groundColor="white" />
      
      <spotLight
        position={[-20, 50, 10]}
        angle={0.12}
        penumbra={1}
        intensity={5}
        castShadow
        shadow-mapSize={1024}
        />
    
    <primitive
    object={earth.scene}
    scale={isMobile ? 1.5 : 1.15}
    position-y={isMobile ? -5 : -3.8}
    rotation-y={2}
    >
      </primitive>
      </mesh>
  )
}

const EarthCanvas = () => {
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
  
  return(
    <Canvas
    shadows
    frameloop="demand"
    gl={{ preserveDrawingBuffer: true }}
    camera={{fov: 45, near: 0.1, far: 200, position: [4, 5, 6  ]}}
    >
      <Suspense fallback={<CanvasLoader/>}>
        <OrbitControls
        autoRotate
        autoRotateSpeed={-0.5}
        enableZoom={false}
        enablePan={false}
        maxPolarAngle={Math.PI / 2}
        minPolarAngle={Math.PI / 2}
        maxAzimuthAngle={Math.PI / 1.5}
        minAzimuthAngle={Math.PI / 40}
        />
  
        <Earth isMobile={isMobile}/>
      </Suspense>
    </Canvas>
   
  )
}

export default EarthCanvas;
