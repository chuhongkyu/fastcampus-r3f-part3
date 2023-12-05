import { usePlane } from "@react-three/cannon";
import { useRef } from "react";
import { Tile } from "./Tile";
import Tree01 from "./Tree01";
import Tree02 from "./Tree02";
import Tree03 from "./Tree03";
import { MotionStage } from "./MotionStage";
import { Description } from "./Description"
import { Arrow } from "./Arrow"
import { Ball } from "./Ball";
import Wall from "./Wall";
import { Banner } from "./Banner";
import { Brick } from "./Brick";
import { MotionStage2 } from "./MotionStage2";
import { RoadSign } from "./Road_sign";
import { Road } from "./Road";
import { PlayGround } from "./PlayGround";
import { Knot } from "./Knot";
import { MotionStage3 } from "./MotionStage3";
import { Ball2 } from "./Ball2";


export function Ground() {
  const [ref] = usePlane(
    () => ({ 
      type: 'Static', 
      material: 'ground',
      rotation: [-Math.PI / 2, 0, 0],
    }), 
    useRef(null)
  );

  return (
    <>
       <group>
        <group ref={ref}>
          <mesh castShadow receiveShadow>
            <planeGeometry args={[100, 100]} />  
            <shadowMaterial attach='material' color="#aa7d39" />
          </mesh>
        </group>
        <Tile position={[0,0,0.4]}/>
        <Tile position={[0,0,0.4]} rotation={[0,Math.PI/2,0]}/>
        <Tile position={[0,0,0.4]} rotation={[0,-Math.PI/2,0]}/>
        <Tile position={[2.5,0,0.4]}/>
        <Tile position={[-2.5,0,0.4]}/>
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

        <Wall position={[10, 0.1, 0.5]} />

        <Brick position={[-2.7, 2, 2]} />
        <Ball position={[-1, 0.5, 2.3]} />

        <MotionStage position={[3,0,4]}/>
        <MotionStage2 position={[-4,0,5.5]}/>
        <Road position={[-8.8,-0.06,1]} scale={0.04} rotation-y={Math.PI/2}/>
        <Road position={[-8.8,-0.06,-10]} scale={0.04} rotation-y={Math.PI/2}/>
        <Tree01 position={[-6, 0,  0]} scale={[0.3, 1, 0.3]}/>
        <Tree01 position={[-6, 0, -2]} scale={[0.3, 1, 0.3]} />
        <Tree01 position={[-6, 0, -4]} scale={[0.3, 1, 0.3]} />
        <Tree01 position={[-6, 0, -6]} scale={[0.3, 1, 0.3]} />
        <Tree01 position={[-6, 0, -8]} scale={[0.3, 1, 0.3]} />
        <Tree01 position={[-6, 0, -10]} scale={[0.3, 1, 0.3]} />
        <Banner position={[1,1,-5]}/>
        
        <RoadSign position={[-0.1,0.1,6.5]}/>
        <Ball2 position={[1,0.1,6]}/>

        <PlayGround position={[7, 0, 0.5]}/>
        <Knot
              args={[0.6, 0.07]}
              position={[9, 1.5, 0.3]}
              rotation={[0, Math.PI / 2, 0]}
        />
        <MotionStage3 position={[7, 0, -1]}/>
      </group>
    </>
   
  );
}
