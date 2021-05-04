//Not needed but may need in the future
import React, { useRef, useState } from "react";
import { a, useSpring } from "react-spring/three";
import { useFrame } from "react-three-fiber";
import { MeshWobbleMaterial } from "drei";

const Mesh = ({ position, color, speed, args, image }) => {
  const mesh = useRef();
  useFrame(() => (mesh.current.rotation.y = 0.001));
  const [expand, setExpand] = useState(false);

  const props = useSpring({
    scale: expand ? [1.3, 1.3, 1.3] : [1, 1, 1],
  });
  return (
    <a.mesh
      position={position}
      ref={mesh}
      onClick={() => setExpand(!expand)}
      scale={props.scale}
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

export default Mesh;
