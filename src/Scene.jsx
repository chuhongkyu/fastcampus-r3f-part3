import {
  Environment,
  OrbitControls,
  PerspectiveCamera,
} from "@react-three/drei";
import { Suspense } from "react";
import { Car } from "./Car";
import { ColliderBox } from "./ColliderBox";
import { Ground } from "./Ground";
export function Scene() {
  return (
    <Suspense fallback={null}>
      <Environment preset="city"/>
      <PerspectiveCamera makeDefault position={[-6, 5, 6.21]} rotate={[0, 0, 0]} fov={40} />
      <OrbitControls target={[-2.64, -0.71, 0.03]} />
      <ColliderBox position={[1.75, 0, 0.5]} scale={[0.3, 1, 0.3]}/>
      <ColliderBox position={[0, 0, 0]} scale={[0.3, 1, 0.3]}/>
      <ColliderBox/>
      <Ground />
      <Car />
    </Suspense>
  );
}
