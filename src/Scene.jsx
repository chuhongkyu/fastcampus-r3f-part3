import {
  AccumulativeShadows,
  Environment,
  OrbitControls,
  PerspectiveCamera,
  RandomizedLight,
} from "@react-three/drei";
import { Suspense } from "react";
import { Ground } from "./components/Ground";
import { Car } from "./Car";
import { Perf } from "r3f-perf";

export function Scene() {

  return (
    <Suspense fallback={null}>
      <Perf position="top-left" />
      <Environment preset="city"/>
      {/* <directionalLight intensity={6} castShadow /> */}
      <PerspectiveCamera
          makeDefault 
          rotation={[-0.5, 0, 0]}
          position={[0, 5.5, 10]} 
          fov={15} 
        />
      <OrbitControls target={[0,0.5,0]}/>
      <Ground />
      <Car />
    </Suspense>
  );
}
