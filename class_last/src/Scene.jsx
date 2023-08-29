import {
  Environment,
  OrbitControls,
  Stats,
} from "@react-three/drei";
import { Suspense, useEffect, useState } from "react";
import { Ground } from "./components/Ground";
import { Car } from "./Car";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { useLoader } from "@react-three/fiber";

export function Scene() {
  const [isLoading, setLoading] = useState(false);

  const carModelUrl = process.env.PUBLIC_URL + "/assets/models/body.glb";
  useLoader.preload(GLTFLoader, carModelUrl);

  useEffect(() => {
    const timer = setTimeout(()=> setLoading(!isLoading),2400)
    return () => clearTimeout(timer);
  }, [])

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
      {isLoading ? <Car carModel={carModelUrl} /> : null}  
    </Suspense>
  );
}
