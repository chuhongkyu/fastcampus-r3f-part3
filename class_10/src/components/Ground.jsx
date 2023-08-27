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
      {/* <mesh ref={ref} receiveShadow>
        <planeGeometry args={[24, 24]} />
        <meshBasicMaterial
          opacity={1}
          transparent={true}
          color={0xFFFF00}
        />
      </mesh> */}
      {/* 앞 */}
      <ColliderBox position={[0, 0.5, 5]} scale={[7, 1, 0.3]}/>
      {/* 뒤 */}
      <ColliderBox position={[0, 0.5, -5]} scale={[7, 1, 0.3]}/>
      {/* 좌 */}
      <ColliderBox position={[3.5, 0.5, 0]} scale={[0.3, 1, 10]}/>
      {/* 우 */}
      <ColliderBox position={[-3.5, 0.5, 0]} scale={[0.3, 1, 10]}/>
      <DummyBox position={[-0.75, 0.5, 2]} scale={[0.2, 0.2, 0.2]} />
      <DummyBox position={[0.75, 0.5, -2]} scale={[0.2, 0.2, 0.2]} />
      <DummyBox position={[1, 0.5, 3]} scale={[0.2, 0.2, 0.2]} />
    </>
  );
}
