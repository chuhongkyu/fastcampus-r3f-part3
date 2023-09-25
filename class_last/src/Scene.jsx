import { Stats } from "@react-three/drei";
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
      <Ground />
      <Car /> 
    </Suspense>
  );
}
