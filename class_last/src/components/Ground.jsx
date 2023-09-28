import { usePlane } from "@react-three/cannon";
import { useEffect, useRef, useState } from "react";
import { Tile } from "./Tile";
import { ColliderBox } from "./ColliderBox";
import Tree01 from "./Tree01";
import Tree02 from "./Tree02";
import Tree03 from "./Tree03";
import { MotionStage } from "./MotionStage";
import { Brick } from "./Brick";
import { Welcome } from "./Welcome";
import { Description } from "./Description"
import { Arrow } from "./Arrow"
import { Ball } from "./Ball";
import Wall from "./Wall";
import { Banner } from "./Banner";
import { TextGroup } from "./TextGroup";

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
        <planeGeometry args={[100, 100]} />
        <shadowMaterial attach='material' opacity={0.3} />
      </mesh>
      <Tile position={[0,0,0.4]}/>
      <Tree01 position={[-1, 0, -0.4]} scale={[0.3, 1, 0.3]}/>
      <Tree01 position={[1, 0, -0.4]} scale={[0.3, 1, 0.3]} />
      <Tree02 position={[-3, 0, -0.4]} scale={[0.3, 1, 0.3]}/>
      <Tree02 position={[3, 0, -0.4]} scale={[0.3, 1, 0.3]} />
      <Tree03 position={[-1, 0, 5]} scale={[0.3, 1, 0.3]}/>
      <Tree03 position={[1, 0, 5]} scale={[0.3, 1, 0.3]} />

      <Description/>
      <Arrow />

      <Wall position={[-1.5, 0.1, 2.5]} />
      <Wall position={[1.5, 0.1, 3]} />
      <Ball position={[-1, 0.5, 2.3]} />

      <MotionStage position={[3,0,4]}/>
      <Banner position={[0,1,-5]}/>
      {/* 

      <Banner position={[5,0.2,-5]} scale={[10,2,1]}/>

      <MotionStage position={[3,0,4]}/>

       */}

      {/* <TextGroup/> */}
    </group>
  );
}
