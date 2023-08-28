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
      <mesh ref={ref} receiveShadow>
        <planeGeometry args={[24, 24]} />
        <meshBasicMaterial
          opacity={0}
          transparent={true}
        />
      </mesh>
      <Tree position={[-1.3,0,-0.7]} scale={[1,1,1]} />
      <Tile position={[0,0,0]} scale={[0.2,0.01,0.2]}/>
      <Tile position={[-2,-1,0]} scale={[0.2,0.01,0.2]}/>
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
    </group>
  );
}
