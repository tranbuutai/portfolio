import { OrbitControls } from "@react-three/drei";
import { Canvas, useFrame } from "@react-three/fiber";
import React, { useRef, useState } from "react";
import { Mesh, Vector3 } from "three";

const colors = [
  "rgb(255, 0, 0)",
  "rgb(0, 255, 255)",
  "rgb(0, 255, 0)",
  "rgb(255, 255, 0)",
  "rgb(255, 0, 255)",
  "rgb(0, 0, 255)",
  "rgb(128, 128, 128)",
  // Add more colors here
];

const Box = ({ color }: { color: string }) => {
  const meshRef = useRef<Mesh>(null);
  const [xRotSpeed] = useState(() => Math.random());
  const [yRotSpeed] = useState(() => Math.random());
  const [scale] = useState(() => Math.random() * 0.035);
  const [position] = useState<Vector3>(() => resetPosition());

  function resetPosition() {
    let pos = new Vector3(
      (Math.random() * 2 - 1) * 3,
      Math.random() * 3.5 + 0.1,
      (Math.random() * 2 - 1) * 15,
    );
    if (pos.x > 0) {
      pos.x += 1.75;
    }
    if (pos.x < 0) {
      pos.x -= 1.75;
    }
    return pos;
  }

  useFrame((_, delta) => {
    meshRef.current!.position.set(position.x, position.y, position.z);
    meshRef.current!.rotation.x += delta * xRotSpeed;
    meshRef.current!.rotation.y += delta * yRotSpeed;
  });

  return (
    <mesh ref={meshRef} scale={scale} position={position}>
      <octahedronGeometry args={[1, 0]} />
      <meshStandardMaterial color={color} envMapIntensity={0.15} />
    </mesh>
  );
};

const Boxes = () => {
  return (
    <>
      {Array.from({ length: 100 }, (_, i) => (
        <Box key={i} color={colors[i % colors.length]} />
      ))}
    </>
  );
};

export default Boxes;
