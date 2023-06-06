"use client";

import React, { useRef } from "react";
import * as THREE from "three";
import { useFrame } from "@/lib/reactThreeFiber";

interface StarProps {
  count: number;
}

const StarField: React.FC<StarProps> = ({ count }) => {
  const particlesRef = useRef<THREE.Points>(null);

  const positions = React.useMemo(() => {
    let positions = [];
    for (let i = 0; i < count; i++) {
      positions.push((Math.random() - 0.5) * 10);
      positions.push((Math.random() - 0.5) * 10);
      positions.push((Math.random() - 0.5) * 10);
    }
    return new Float32Array(positions);
  }, [count]);

  useFrame(() => {
    if (particlesRef.current) {
      particlesRef.current.rotation.z += 0.001;
    }
  });

  const colors = React.useMemo(() => {
    const color = new THREE.Color();
    let colors = [];
    for (let i = 0; i < count; i++) {
      color.set(Math.random() * 0xffffff);
      colors.push(color.r, color.g, color.b);
    }
    return new Float32Array(colors);
  }, [count]);

  return (
    <points ref={particlesRef}>
      <bufferGeometry attach="geometry">
        <bufferAttribute attach="position" args={[positions, 3]} />
        <bufferAttribute attach="color" args={[colors, 3]} normalized />
      </bufferGeometry>
      <pointsMaterial attach="material" size={0.005} vertexColors />
    </points>
  );
};

export default StarField;
