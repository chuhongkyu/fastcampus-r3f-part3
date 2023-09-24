import {
  Environment,
  OrbitControls,
  Stats,
} from "@react-three/drei";
import { Suspense } from "react";
import { Ground } from "./components/Ground";
import { Car } from "./Car";
import { Lights } from "./components/Lights";

export function Scene() {

  return (
    <Suspense fallback={null}>
      {/* <Stats/> */}
      <Lights color="#fad6a1"/>
      <OrbitControls enableZoom={false} enableRotate={false} target={[0,0.5,0]}/>
      <Ground />
      <Car /> 
    </Suspense>
  );
}
