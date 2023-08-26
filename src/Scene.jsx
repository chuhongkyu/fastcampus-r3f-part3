import {
  Environment,
  PerspectiveCamera,
} from "@react-three/drei";
import { Suspense } from "react";
import { Ground } from "./components/Ground";
import { Car } from "./Car";

export function Scene() {
  return (
    <Suspense fallback={null}>
      <Environment preset="city"/>
      <PerspectiveCamera 
          makeDefault 
          rotation={[-1.2, 0, 0]}
          position={[0, 6, 4]} 
          fov={40} 
      />
      <Ground />
      <Car />
    </Suspense>
  );
}
