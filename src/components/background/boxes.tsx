import { useFrame } from "@react-three/fiber";
import React, { useRef } from "react";
import { Mesh, Vector3 } from "three";

const colors: string[] = [
  "rgb(255, 0, 0)",
  "rgb(0, 255, 255)",
  "rgb(0, 255, 0)",
  "rgb(255, 255, 0)",
  "rgb(255, 0, 255)",
  "rgb(0, 0, 255)",
  "rgb(128, 128, 128)",
];

function getRandomValue(min: number, max: number): number {
  return Math.random() * (max - min) + min;
}

const Box: React.FC<{ color: string }> = ({ color }) => {
  const meshRef = useRef<Mesh>(null);
  const xRotSpeed = getRandomValue(0.1, 0.5);
  const yRotSpeed = getRandomValue(0.1, 0.5);
  const scale = getRandomValue(0.015, 0.035);
  const position = new Vector3(
    getRandomValue(-3, 3),
    getRandomValue(0.1, 3.6),
    getRandomValue(-15, 15),
  );

  useFrame((_, delta) => {
    if (meshRef.current) {
      meshRef.current.position.set(position.x, position.y, position.z);
      meshRef.current.rotation.x += delta * xRotSpeed;
      meshRef.current.rotation.y += delta * yRotSpeed;
    }
  });

  return (
    <mesh ref={meshRef} scale={scale} position={position}>
      <octahedronGeometry args={[1, 0]} />
      <meshStandardMaterial color={color} envMapIntensity={0.15} />
    </mesh>
  );
};

const Boxes: React.FC = () => {
  return (
    <>
      {Array.from({ length: 50 }, (_, i) => (
        <Box key={i} color={colors[i % colors.length]} />
      ))}
    </>
  );
};

export default Boxes;
