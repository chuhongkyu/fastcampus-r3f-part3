import {
  Environment,
  OrbitControls,
  PerspectiveCamera,
} from "@react-three/drei";
import { Suspense } from "react";
import { Ground } from "./components/Ground";
import { Car } from "./Car";
import { Perf } from "r3f-perf";

export function Scene() {

  return (
    <Suspense fallback={null}>
      {/* <Perf position="top-left" /> */}
      <Environment preset="city"/>
      <directionalLight intensity={6} />
      
      <PerspectiveCamera
          makeDefault 
          fov={40}
          position={[0, 2, 5]} 
        />
      <OrbitControls enableZoom={false} enableRotate={false} target={[0,0.5,0]}/>
      <Ground />
      <Car />
    </Suspense>
  );
}
