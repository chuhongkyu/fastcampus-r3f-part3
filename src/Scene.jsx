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

export function Scene() {

  return (
    <Suspense fallback={null}>
      <Environment preset="city"/>
      {/* <directionalLight intensity={6} castShadow /> */}
      <PerspectiveCamera
          makeDefault 
          rotation={[-0.5, 0, 0]}
          position={[0, 5.5, 10]} 
          fov={15} 
        />
      <OrbitControls target={[0,0.5,0]}/>
      <AccumulativeShadows 
        temporal 
        frames={100} 
        color="white" 
        colorBlend={2} 
        toneMapped={true} 
        alphaTest={0.9} opacity={0.5} scale={10}>
        <RandomizedLight amount={8} radius={4} ambient={0.5} intensity={1} position={[-5, 10, 10]} bias={0.001} />
      </AccumulativeShadows>
      <Ground />
      <Car/>
    </Suspense>
  );
}
