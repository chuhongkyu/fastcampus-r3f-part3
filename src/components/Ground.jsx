import { usePlane } from "@react-three/cannon";
import { useRef } from "react";
import { ColliderBox } from "./ColliderBox";
import { DummyBox } from "./DummyBox";
import { Tree } from "./Tree";

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
      {/* <mesh ref={ref} receiveShadow>
        <planeGeometry args={[24, 24]} />
        <meshBasicMaterial
          opacity={1}
          transparent={true}
          color={0xFFFF00}
        />
      </mesh> */}
      {/* <Tree position={[1.75, 2, 0.5]} scale={[1, 1, 1]} rotation={[-Math.PI/2,0,0]}/> */}
      <ColliderBox position={[1.75, 0.5, 0.5]} scale={[0.3, 1, 1]}/>
      <DummyBox position={[-0.75, 0.5, 2]} scale={[0.2, 0.2, 0.2]} />
    </>
  );
}
