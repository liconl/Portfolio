//not used but the concept might be used later on
import React, { useRef, useState, useEffect } from "react";
import { useFrame } from "react-three-fiber";
import { a } from "react-spring/three";
import { Sphere, HTML } from "drei";

function Background() {
  const [number, setNumber] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => setNumber(Math.random() * 0.02), 2000);
    return () => {
      clearInterval(interval);
    };
  }, []);

  const ref = useRef();

  useFrame(
    () =>
      (ref.current.rotation.y = ref.current.rotation.y = ref.current.rotation.z += number)
  );

  return (
    <a.mesh>
      <group ref={ref}>
        <Sphere ref={ref} args={[20, 20, 20]} position={[4, 1000, 2]}>
          <meshBasicMaterial attach="material" color="#404057" />
        </Sphere>
        <Sphere ref={ref} args={[20, 20, 20]} position={[4, 1000, 2]}>
          <meshBasicMaterial attach="material" color="#404057" />
        </Sphere>
        <Sphere ref={ref} args={[20, 20, 20]} position={[4, 1000, 2]}>
          <meshBasicMaterial attach="material" color="#404057" />
        </Sphere>
        <Sphere ref={ref} args={[20, 20, 20]} position={[4, 1000, 2]}>
          <meshBasicMaterial attach="material" color="#404057" />
        </Sphere>
        <Sphere ref={ref} args={[20, 20, 20]} position={[4, 1000, 2]}>
          <meshBasicMaterial attach="material" color="#404057" />
        </Sphere>
        <Sphere ref={ref} args={[20, 20, 20]} position={[4, 1000, 2]}>
          <meshBasicMaterial attach="material" color="#404057" />
        </Sphere>
      </group>
    </a.mesh>
  );
}

export default Background;
