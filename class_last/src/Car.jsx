import { useBox, useRaycastVehicle } from "@react-three/cannon";
import { useFrame, useLoader, useThree } from "@react-three/fiber";
import { useEffect, useMemo, useRef, useState } from "react";
import { useWheels } from "./utils/useWheels";
import { useControls } from "./utils/useControls";
import { Vector3 } from "three";
import { Wheel } from "./components/Wheel";
import { useRecoilState, useRecoilValue } from "recoil";
import { onStartScene, openPopup, stage1 } from "./utils/atom";
import { motion } from "framer-motion-3d";
import useFollowCam from "./utils/useFollowCam"
import { CarBody } from "./components/CarBody";

export function Car() {
  const { pivot } = useFollowCam();
  const [ stage, setStage ] = useRecoilState(stage1);
  const [ isPopup, setPopup ] = useRecoilState(openPopup);
  const isStart = useRecoilValue(onStartScene);

  const position = [0, 1, 0];
  const width = 0.15;
  const height = 0.1;
  const front = 0.16;
  const wheelRadius = 0.05;

  const chassisBodyArgs = [width, height, front * 2];
  const [chassisBody, chassisApi] = useBox(
    () => ({
      args: chassisBodyArgs,
      position,
      type: "Dynamic",
      rotation: [0, Math.PI, 0],
      mass: 200,
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

  useFrame(() =>{
    if(isStart) makeFollowCam()
    makeStage()
  })

  function makeFollowCam(){
      const chassisPosition = new Vector3().setFromMatrixPosition(chassisBody.current.matrixWorld);
      pivot.position.lerp(chassisPosition,0.5)
  }
  
  function makeStage(){
    const chassisPosition = new Vector3().setFromMatrixPosition(chassisBody.current.matrixWorld);
    if ( Math.abs(3.1 - chassisPosition.x) < 0.7 && Math.abs(5.3 - chassisPosition.z) < 0.6){
      setStage(true);
    }else{
      setStage(false);
      setPopup(false)
    }
  }

  return (
    <>
        <motion.group
          initial={{scale: 0, y: 0.5}}
          animate={isStart ? {scale: 1, y: 0}: {scale: 0, y: 0.5}}
          ref={vehicle} 
          name="vehicle"
          >
          <group ref={chassisBody} name="chassisBody">
            <CarBody/>
          </group>
          <Wheel castShadow wheelRef={wheels[0]}/>
          <Wheel castShadow wheelRef={wheels[1]} lefSide={true}/>
          <Wheel castShadow wheelRef={wheels[2]}/>
          <Wheel castShadow wheelRef={wheels[3]} lefSide={true}/>
        </motion.group>
    </>
  );
}
