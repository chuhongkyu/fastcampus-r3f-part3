import { usePlane } from "@react-three/cannon";
import { useRef } from "react";
import { Tile } from "./Tile";
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
    // <group rotation={[0, Math.PI / 2 + 30, 0]}>
    <group>
      <mesh ref={ref} receiveShadow castShadow>
        <planeGeometry args={[24, 24]} />
        <shadowMaterial attach='material' opacity={0.3} />
      </mesh>
      <Tree position={[-1.3, 0, -0.7]} scale={[0.3, 1, 0.3]} />
      <Tree position={[1.3, 0, 0.7]} scale={[0.3, 1, 0.3]} />

      <Tile position={[0,0,0]} scale={[0.2, 0.01, 0.2]}/>
      <Tile position={[-0.3,0,0.5]} scale={[0.2, 0.01, 0.2]}/>
      <Tile position={[-0.6,0,1]} scale={[0.2, 0.01, 0.2]}/>
      <Tile position={[-0.9,0,1.5]} scale={[0.2, 0.01, 0.2]}/>
      <Tile position={[-1.2,0,2]} scale={[0.2, 0.01, 0.2]}/>
      {/* 앞 */}
      <ColliderBox position={[0, 0.5, 5]} scale={[7, 1, 0.3]}/>
      {/* 뒤 */}
      <ColliderBox position={[0, 0.5, -5]} scale={[7, 1, 0.3]}/>
      {/* 좌 */}
      <ColliderBox position={[3.5, 0.5, 0]} scale={[0.3, 1, 10]}/>
      {/* 우 */}
      <ColliderBox position={[-3.5, 0.5, 0]} scale={[0.3, 1, 10]}/>
    </group>
  );
}
