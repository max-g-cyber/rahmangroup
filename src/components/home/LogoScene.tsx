"use client";

import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, useGLTF, Center } from "@react-three/drei";

/**
 * This component handles the loading of the actual 3D model.
 * It assumes the model is located at "/models/logo.glb" in the public folder.
 */
function Model() {
  const { scene } = useGLTF("/models/logo.glb");
  
  // Rule 3 (Styling Parameter): You can adjust the 'scale' value below to 
  // make the logo bigger or smaller in the scene.
  return <primitive object={scene} scale={1.2} />;
}

/**
 * This component sets up the 3D Canvas, lighting, and interactive controls.
 */
export default function LogoScene() {
  return (
    <Canvas camera={{ position: [0, 0, 5], fov: 45 }}>
      {/* Lights: We must add lights, otherwise the red shader will render as black. */}
      <ambientLight intensity={1.5} />
      <directionalLight position={[3, 5, 2]} intensity={4.0} />

      <Suspense fallback={null}>
  <Center>
    <Model />
  </Center>
</Suspense>

      <OrbitControls
  autoRotate={true}
  autoRotateSpeed={10.0} // Adjustable speed
  enableZoom={false}
  enablePan={false}
  
  // === FIX (Your Request) === 
  // These two lines lock the vertical (polar) angle, preventing tumbling
  // while still allowing horizontal (azimuthal) rotation.
  minPolarAngle={Math.PI / 2}
  maxPolarAngle={Math.PI / 2}
/>
    </Canvas>
  );
}