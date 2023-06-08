import { OrbitControls, PerspectiveCamera } from "@react-three/drei";
import { Canvas, useFrame } from "@react-three/fiber";
import React, { Ref, useRef, useState } from "react";
import { BufferGeometry, Material, Mesh, Vector3 } from "three";

interface BoxProps {
  color: string;
}

const Box = ({ color }: BoxProps) => {
  const meshRef: Ref<Mesh> = useRef(null);
  const [xRotSpeed] = useState(() => Math.random());
  const [yRotSpeed] = useState(() => Math.random());
  const [scale] = useState(() => Math.random() * 0.035);
  const [position] = useState<Vector3 | void>(resetPosition());

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
    meshRef.current?.position.set(position!.x, position!.y, position!.z);
    meshRef.current!.rotation.x += delta * xRotSpeed;
    meshRef.current!.rotation.y += delta * yRotSpeed;
  });

  return (
    <mesh ref={meshRef} scale={scale} position={position as Vector3}>
      <octahedronGeometry args={[1, 0]} />
      <meshStandardMaterial color={color} envMapIntensity={0.15} />
    </mesh>
  );
};

const Boxes = () => {
  const [arr] = useState<Number[]>(() => {
    let a: Number[] = [];
    for (let i = 0; i < 50; i++) {
      a.push(0);
    }
    return a;
  });
  return (
    <>
      {arr.map((e, i) => (
        <Box
          key={i}
          color={i % 2 === 1 ? "rgb(255, 0, 0)" : "rgb(0, 255, 255)"}
        />
      ))}
    </>
  );
};

export default Boxes;
