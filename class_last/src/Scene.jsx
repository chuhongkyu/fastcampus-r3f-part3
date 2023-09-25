import { OrbitControls, Stats } from "@react-three/drei";
import { Suspense } from "react";
import { Ground } from "./components/Ground";
import { Car } from "./Car";
import { Lights } from "./components/Lights";
import { Loading } from "./components/Loading";

export function Scene() {

  return (
    <Suspense fallback={<Loading/>}>
      {/* <Stats/> */}
      <Lights color="#fad6a1"/>
      <OrbitControls enableZoom={false} enableRotate={false} target={[0,0.5,0]}/>
      <Ground />
      <Car /> 
    </Suspense>
  );
}
