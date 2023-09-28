import { useBox, useRaycastVehicle } from "@react-three/cannon";
import { useFrame, useLoader, useThree } from "@react-three/fiber";
import { useEffect, useRef, useState } from "react";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { useWheels } from "./utils/useWheels";
import { useControls } from "./utils/useControls";
import { Vector3 } from "three";
import { Wheel } from "./components/Wheel";
import { useRecoilState, useRecoilValue } from "recoil";
import { onStartScene, stage1 } from "./utils/atom";
import { useGLTF } from "@react-three/drei";
import { motion } from "framer-motion-3d";

const carModelUrl = process.env.PUBLIC_URL + "/assets/models/body.glb";
useGLTF.preload(carModelUrl)

export function Car() {
  const [stage, setStage] = useRecoilState(stage1);
  const isStart = useRecoilValue(onStartScene);
  const camera = useThree(state => state.camera);

  let result = useLoader(
    GLTFLoader,
    carModelUrl,
  ).scene;
  


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

  useEffect(() => {
    if (!result) return;

    let mesh = result;
    mesh?.scale.set(0.1, 0.13, 0.15);
    mesh?.children[0].rotation.set(0, Math.PI/2, 0);
    mesh?.children[0].position.set(0, 0.5, 0.4);
    mesh?.children[0].children.map((el)=>{
      el.children[0].castShadow = true;
    })
  }, [result]);

  useFrame(() =>{
    makeCamera()
  })

  function makeCamera(){
    if(isStart){
      const offset = new Vector3(1.5, 2, 3);
      const chassisPosition = new Vector3().setFromMatrixPosition(chassisBody?.current?.matrixWorld);
      const targetPosition = chassisPosition?.clone();
      if(camera){
        camera.lookAt(chassisPosition);
        camera.position.x = offset.x + targetPosition?.x;
        camera.position.z = offset.z + targetPosition?.z;
      }
      
      
      if ( Math.abs(4.5 - chassisPosition.x) < 2 && Math.abs(4.5 - chassisPosition.z) < 2){
        setStage(true);
      }else{
        setStage(false);
      }
    }
  }

  return (
    <>
        <motion.group
          initial={{scale: 0, y: 0.5}}
          animate={isStart ? {scale: 1, y: 0}: {scale: 0, y: 0.5}}
          ref={vehicle} 
          name="vehicle">
          <group ref={chassisBody} name="chassisBody">
            <primitive object={result}/>
          </group>
          <Wheel wheelRef={wheels[0]}/>
          <Wheel wheelRef={wheels[1]} lefSide={true}/>
          <Wheel wheelRef={wheels[2]}/>
          <Wheel wheelRef={wheels[3]} lefSide={true}/>
        </motion.group>
    </>
  );
}
