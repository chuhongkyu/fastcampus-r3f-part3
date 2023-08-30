import { useBox, useRaycastVehicle } from "@react-three/cannon";
import { useFrame, useLoader } from "@react-three/fiber";
import { useEffect, useRef } from "react";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { useWheels } from "./utils/useWheels";
import { useControls } from "./utils/useControls";
import { Vector3 } from "three";
import { WheelDebug } from "./components/WheelDebug";

export function Car() {
  
  const position = [0, 0.5, 0];
  const width = 0.15;
  const height = 0.07;
  const front = 0.15;
  const wheelRadius = 0.05;

  const chassisBodyArgs = [width, height, front * 2];
  const [chassisBody, chassisApi] = useBox(
    () => ({
      args: chassisBodyArgs,
      mass: 200,
      position,
      rotation: [0,Math.PI/2 + 1,0]
    }),
    useRef(null),
  );

  const [wheels, wheelInfos] = useWheels(width, height, front, wheelRadius);

  const [vehicle, vehicleApi] = useRaycastVehicle(
    () => ({
      chassisBody,
      wheelInfos,
      wheels,
    }),
    useRef(null),
  );

  useControls(vehicleApi, chassisApi);

  useFrame((state) =>{
    let position = new Vector3(0,0.5,10);
    position.setFromMatrixPosition(chassisBody.current.matrixWorld);
    state.camera.lookAt(position);
  })

  return (
    <>
        <group ref={vehicle} name="vehicle">
          <mesh ref={chassisBody}>
            <meshBasicMaterial color="#1DDB16" transparent={true} opacity={1} />
            <boxGeometry args={chassisBodyArgs} />
          </mesh>
          <WheelDebug wheelRef={wheels[0]} radius={wheelRadius} />
          <WheelDebug wheelRef={wheels[1]} radius={wheelRadius} />
          <WheelDebug wheelRef={wheels[2]} radius={wheelRadius} />
          <WheelDebug wheelRef={wheels[3]} radius={wheelRadius} />
        </group>
    </>
  );
}
