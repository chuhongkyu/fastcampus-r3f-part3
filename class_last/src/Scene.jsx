import { OrbitControls, Stats } from "@react-three/drei";
import { Suspense } from "react";
import { Ground } from "./components/Ground";
import { Car } from "./Car";
import { Lights } from "./components/Lights";
import { Loading } from "./components/Loading";
import { useRecoilValue } from "recoil";
import { onResetCar, onStartScene } from "./utils/atom";
import { Canvas } from "@react-three/fiber";
import { Physics } from "@react-three/cannon";
import ResetBtn from "./components/ResetBtn";
import { AccumulativeShadows, RandomizedLight} from '@react-three/drei'

export function Scene() {
  const onReset = useRecoilValue(onResetCar);
  const onStart = useRecoilValue(onStartScene);

  return (
    <>
      <Canvas 
        mode="concurrent"
        shadows 
        camera={{ fov:45, position:[1.5, 2, 6]}}>
          <fog attach="fog" args={['#FFB344', 10, 50]} />
          <color attach="background" args={['rgb(250, 220, 123)']} />
          <Lights/>
          <Physics broadphase="SAP" gravity={[0, -2.6, 0]}>
            <Suspense fallback={<Loading/>}>
              {/* <Stats/> */}
              <Ground />
              {onReset ? <Car /> : null}
            </Suspense>
          </Physics>
      </Canvas>
      <ResetBtn/>
    </>
  )
}
