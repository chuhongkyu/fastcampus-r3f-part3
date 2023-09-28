import { Stats } from "@react-three/drei";
import { Suspense } from "react";
import { Ground } from "./components/Ground";
import { Car } from "./Car";
import { Lights } from "./components/Lights";
import { Loading } from "./components/Loading";
import { useRecoilValue } from "recoil";
import { onResetCar, onStartScene } from "./utils/atom";
import { AccumulativeShadows, RandomizedLight} from '@react-three/drei'

export function Scene() {
  const onReset = useRecoilValue(onResetCar);
  const onStart = useRecoilValue(onStartScene);

  return (
    <Suspense fallback={<Loading/>}>
      <Stats/>
      <Lights color={0xff9900}/>

      {/* <AccumulativeShadows temporal frames={60} color="orange" colorBlend={2} toneMapped={true} alphaTest={0.75} opacity={2} scale={12}>
        <RandomizedLight intensity={Math.PI} amount={8} radius={10} ambient={0.5} position={[2, 4, -6]} bias={0.001} />
      </AccumulativeShadows> */}
      <Ground />
      {onReset ? <Car /> : null}
    </Suspense>
  );
}
