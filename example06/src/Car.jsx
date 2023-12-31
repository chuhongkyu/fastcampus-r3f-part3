import { useBox, useRaycastVehicle } from "@react-three/cannon";
import { useFrame } from "@react-three/fiber";
import { useEffect, useMemo, useRef } from "react";
import { useWheels } from "./utils/useWheels";
import { useVehicleControls } from "./utils/useVehicleControls";
import { Vector3 } from "three";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { isStartScene, stage1, stage2 } from "./utils/atom";
import { motion } from "framer-motion-3d";
import useFollowCam from "./utils/useFollowCam"
import { CarModel } from "./components/CarModel";
import { Wheel } from "./components/Wheel";

const FORWARD_BOUNDARY = 5.5;
const BACKWARD_BOUNDARY = -6;

export function Car() {
  const { pivot } = useFollowCam();
  const worldPosition = useMemo(() => new Vector3(), [])
  const setStage1 = useSetRecoilState(stage1);
  const setStage2 = useSetRecoilState(stage2);
  const isStart = useRecoilValue(isStartScene);

  const position = [0, 0.1, 0];
  let width, height, front, wheelRadius, mass;

  width = 0.16;
  height = 0.18;
  front = 0.17;
  wheelRadius = 0.05;
  mass = 150;
  
  const chassisBodyArgs = [width, height, front * 2];

  const [chassisBody, chassisApi] = useBox(
    () => ({
      args: chassisBodyArgs,
      position,
      allowSleep: false,
      rotation: [0, Math.PI, 0],
      mass: mass,
    }),
    useRef(null),
  );

  const vehiclePos = useRef([0, 0, 0]);

  const [wheels, wheelInfos] = useWheels(width, height, front, wheelRadius);

  const [vehicle, vehicleApi] = useRaycastVehicle(
    () => ({
      chassisBody,
      wheelInfos,
      wheels,
    }),
    useRef(null),
  );

  useEffect(() => {
    chassisApi.velocity.subscribe((v) => (vehiclePos.current = v))
  }, [chassisApi]);

  useVehicleControls(vehicleApi, chassisApi);

  useFrame(() => {
    if (vehiclePos.current[2] > FORWARD_BOUNDARY) {
      chassisApi.position.set(0, 0.2, 0);
      chassisApi.velocity.set(0, 0, 0);
      chassisApi.angularVelocity.set(0, 0.5, 0);
      return;
    }
    if (vehiclePos.current[2] < BACKWARD_BOUNDARY) {
      chassisApi.position.set(0, 0.2, 0);
      chassisApi.velocity.set(0, 0, 0);
      chassisApi.angularVelocity.set(0, 0.5, 0);
      return;
    }
  });

  useFrame(() => {
    if (isStart) {
      makeFollowCam();
      makeStage1();
      makeStage2();
    }
  });

  function makeFollowCam(){
      chassisBody?.current.getWorldPosition(worldPosition)
      pivot.position.lerp(worldPosition, 0.9)
  }
  
  function makeStage1(){
    const chassisPosition = new Vector3().setFromMatrixPosition(chassisBody.current.matrixWorld);
    if ( Math.abs(3.1 - chassisPosition.x) < 0.7 && Math.abs(5.1 - chassisPosition.z) < 0.6){
      setStage1(true);
    }else{
      setStage1(false);
    }
  }

  function makeStage2(){
    const chassisPosition = new Vector3().setFromMatrixPosition(chassisBody.current.matrixWorld);
    if ( Math.abs(-3 - chassisPosition.x) < 0.8 && Math.abs(5.5 - chassisPosition.z) < 0.8){
      setStage2(true);
    }else{
      setStage2(false);
    }
  }

  return (
    <>
        <motion.group
          initial={{scale: 0 }}
          animate={isStart ? {scale: 1}: {scale: 0}}
          ref={vehicle}
          name="vehicle"
          >
          <group ref={chassisBody} position={[0,0.2,0]} name="chassisBody">
            <CarModel/>
          </group>
          <Wheel castShadow wheelRef={wheels[0]} radius={wheelRadius} />
          <Wheel castShadow wheelRef={wheels[1]} radius={wheelRadius} lefSide={true}/>
          <Wheel castShadow wheelRef={wheels[2]} radius={wheelRadius}/>
          <Wheel castShadow wheelRef={wheels[3]} radius={wheelRadius} lefSide={true}/>
        </motion.group>
    </>
  );
}
