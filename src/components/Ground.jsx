import { usePlane } from "@react-three/cannon";
import { useRef } from "react";
import { ColliderBox } from "./ColliderBox";
import { DummyBox } from "./DummyBox";

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
      <ColliderBox position={[1.75, 0, 0.5]} scale={[0.3, 1, 0.3]}/>
      <ColliderBox position={[0, 0, 0]} scale={[0.3, 1, 0.3]}/>
      <ColliderBox position={[-1.75, 0, 0]} scale={[1, 1, 0.3]}/>
      <DummyBox position={[-0.75, 0, 2]} scale={[0.2, 0.2, 0.2]} />
    </>
  );
}
