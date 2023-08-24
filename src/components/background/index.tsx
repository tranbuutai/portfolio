"use client";

import React, { Suspense } from "react";
import { Canvas } from "@/lib/reactThreeFiber";
import { OrbitControls, PerspectiveCamera } from "@/lib/reactThreeDrei";

import Boxes from "./boxes";

type Props = {};

const StarFieldBackGround = (props: Props) => {
  const ItemShow = () => {
    return (
      <>
        <OrbitControls
          target={[0, 0.5, 0]}
          maxPolarAngle={1.45}
          maxDistance={15}
          enableZoom={false}
        />
        <PerspectiveCamera makeDefault fov={40} position={[3, 2, 5]} />
        {/* args = color (value between 0 and 1) */}
        <color args={["#111112"]} attach="background" />

        <ambientLight intensity={0.4} />
        <spotLight
          color={"#0BFFFF"}
          intensity={3}
          angle={0.8}
          penumbra={0.5}
          position={[5, 5, 0]}
          castShadow
          shadow-bias={-0.0001}
        />
        <spotLight
          color={"#FF0000"}
          intensity={3}
          angle={0.8}
          penumbra={0.5}
          position={[-5, 5, 0]}
          castShadow
          shadow-bias={-0.0001}
        />
        <Boxes />
      </>
    );
  };
  return (
    <div className="absolute inset-0 z-0">
      <Suspense fallback={null}>
        <Canvas shadows>
          <ItemShow />
        </Canvas>
      </Suspense>
    </div>
  );
};

export default StarFieldBackGround;
