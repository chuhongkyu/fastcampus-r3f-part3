import { Stats } from "@react-three/drei";
import { Suspense } from "react";
import { Ground } from "./components/Ground";
import { Car } from "./Car";
import { Lights } from "./components/Lights";
import { Loading } from "./components/Loading";
import { useRecoilValue } from "recoil";
import { onResetCar } from "./utils/atom";

export function Scene() {
  const onReset = useRecoilValue(onResetCar);

  return (
    <Suspense fallback={<Loading/>}>
      {/* <Stats/> */}
      <Lights color="#fad6a1"/>
      <Ground />
      {onReset ? <Car /> : null}
    </Suspense>
  );
}
