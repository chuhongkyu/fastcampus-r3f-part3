import { useEffect, useState } from "react";
import { useRecoilValue } from "recoil";
import { stage1 } from "./atom";


export const useControls = (vehicleApi, chassisApi) => {
  const motionStage = useRecoilValue(stage1);
  let [controls, setControls] = useState({
  });

  useEffect(() => {
    const keyDownPressHandler = (e) => {
      setControls((controls) => ({ 
        ...controls, 
        [e.key]: true 
      }));
    }

    const keyUpPressHandler = (e) => {
      setControls((controls) => ({ 
        ...controls, 
        [e.key]: false 
      }));
    }
  
    window.addEventListener("keydown", keyDownPressHandler);
    window.addEventListener("keyup", keyUpPressHandler);
    return () => {
      window.removeEventListener("keydown", keyDownPressHandler);
      window.removeEventListener("keyup", keyUpPressHandler);
    }
  }, []);


  useEffect(() => {
    if (controls.ArrowUp) {
      vehicleApi.applyEngineForce(150, 2);
      vehicleApi.applyEngineForce(150, 3);
    } else if (controls.ArrowDown) {
      vehicleApi.applyEngineForce(-150, 2);
      vehicleApi.applyEngineForce(-150, 3);
    } else {
      vehicleApi.applyEngineForce(0, 2);
      vehicleApi.applyEngineForce(0, 3);
    }

    if (controls.ArrowLeft) {
      vehicleApi.setSteeringValue(0.35, 2);
      vehicleApi.setSteeringValue(0.35, 3);
      vehicleApi.setSteeringValue(-0.1, 0);
      vehicleApi.setSteeringValue(-0.1, 1);
    } else if (controls.ArrowRight) {
      vehicleApi.setSteeringValue(-0.35, 2);
      vehicleApi.setSteeringValue(-0.35, 3);
      vehicleApi.setSteeringValue(0.1, 0);
      vehicleApi.setSteeringValue(0.1, 1);
    } else {
      for (let i = 0; i < 4; i++) {
        vehicleApi.setSteeringValue(0, i);
      }
    }

    if (controls.Enter && motionStage) {
      vehicleApi.setBrake(160, 0);
      vehicleApi.setBrake(160, 1);
      vehicleApi.setBrake(160, 2);
      vehicleApi.setBrake(160, 3);
    }else{
      vehicleApi.setBrake(0, 0);
      vehicleApi.setBrake(0, 1);
      vehicleApi.setBrake(0, 2);
      vehicleApi.setBrake(0, 3);
    }
  }, [controls, vehicleApi, chassisApi]);

  return controls;
}
