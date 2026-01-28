"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { useRef } from "react";

function PulsingKnot() {
  const meshRef = useRef(null);

  useFrame(({ clock }) => {
    if (!meshRef.current) return;
    const t = clock.getElapsedTime();
    meshRef.current.rotation.x = t * 0.3;
    meshRef.current.rotation.y = t * 0.5;
    meshRef.current.scale.setScalar(1 + Math.sin(t * 1.5) * 0.05);
  });

  return (
    <mesh ref={meshRef}>
      <torusKnotGeometry args={[1.2, 0.4, 220, 32]} />
      <meshStandardMaterial color="#9b5cff" emissive="#2a0b4f" metalness={0.6} roughness={0.2} />
    </mesh>
  );
}

export default function Scene() {
  return (
    <Canvas camera={{ position: [0, 0, 5], fov: 50 }}>
      <color attach="background" args={["#0c0c1a"]} />
      <ambientLight intensity={0.4} />
      <directionalLight position={[3, 5, 2]} intensity={1.4} />
      <pointLight position={[-3, -2, 4]} intensity={0.8} color="#9b5cff" />
      <PulsingKnot />
    </Canvas>
  );
}
