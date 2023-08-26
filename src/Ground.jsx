import { usePlane } from "@react-three/cannon";
import { MeshReflectorMaterial } from "@react-three/drei";
import { useLoader } from "@react-three/fiber";
import { useEffect, useRef } from "react";

export function Ground() {
  const [ref] = usePlane(
    () => ({ 
      type: 'Static', 
      rotation: [-Math.PI / 2, 0, 0] }
    ), 
    useRef(null)
  );

  return (
    <>
      <mesh ref={ref}>
        <planeGeometry args={[24, 24]} />
        <meshBasicMaterial
          opacity={1}
          transparent={true}
          color={0xFFFF00}
        />
      </mesh>
    </>
  );
}
