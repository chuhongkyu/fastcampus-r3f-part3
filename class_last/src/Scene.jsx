import {
  Environment,
  OrbitControls,
  Stats,
} from "@react-three/drei";
import { Suspense } from "react";
import { Ground } from "./components/Ground";
import { Car } from "./Car";


export function Scene() {

  return (
    <Suspense fallback={null}>
      {/* <Stats/> */}
      <Environment preset="city"/>
      <directionalLight 
        position={[-0.5,10,0]}
        shadow-mapSize-height={512}
        shadow-mapSize-width={512}
        intensity={1}
        castShadow />
      <OrbitControls enableZoom={false} enableRotate={false} target={[0,0.5,0]}/>
      <Ground />
      <Car /> 
    </Suspense>
  );
}
