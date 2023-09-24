import { usePlane } from "@react-three/cannon";
import { useEffect, useRef, useState } from "react";
import { Tile } from "./Tile";
import { ColliderBox } from "./ColliderBox";
import { Tree } from "./Tree";
import { MotionStage } from "./MotionStage";
import { Brick } from "./Brick";
import { Welcome } from "./Welcome";
import { Description } from "./Description"
import { Arrow } from "./Arrow"
import { Ball } from "./Ball";
import Wall from "./Wall";

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

      <Tile position={[0,0,0]}/>

      <MotionStage position={[3,0,4]}/>
      {/* <Brick position={[-2,0.5,3]}/> */}
      {/* <Welcome position={[1.5,0,-3]}/> */}
      <Wall position={[-3.5, 0.1, -0.2]} />
      <Ball position={[-3, 0.5, 0]} />
      <Description/>
      <Arrow />
    </group>
  );
}
