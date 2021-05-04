import React, { useRef, useState } from "react";
import { a } from "react-spring/three";
import { useFrame } from "react-three-fiber";
import { MeshWobbleMaterial } from "drei";

const SpinningMesh = ({ position, color, speed, args, image, url }) => {
  const mesh = useRef();

  useFrame(() => (mesh.current.rotation.y = 0.001));

  return (
    <a.mesh
      position={position}
      ref={mesh}
      onClick={() => {
        window.open(url);
      }}
      castShadow
    >
      <boxBufferGeometry attach="geometry" args={args} />
      <MeshWobbleMaterial
        color={color}
        speed={speed}
        attach="material"
        factor={0.6}
        map={image}
      />
    </a.mesh>
  );
};

export default SpinningMesh;
