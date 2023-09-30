import { useEffect, useState } from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import { openPopup, stage1 } from "./atom";


export const useControls = (vehicleApi, chassisApi) => {
  const motionStage = useRecoilValue(stage1);
  const [isPopup, setPopup] = useRecoilState(openPopup);
  let [controls, setControls] = useState({
  });

  useEffect(() => {
    const keyDownPressHandler = (e) => {
      setControls((controls) => ({ 
        ...controls, 
        [e.key]: true 
      }));
      console.log('down',e);
    }

    const keyUpPressHandler = (e) => {
      setControls((controls) => ({ 
        ...controls, 
        [e.key]: false 
      }));
      console.log('프레스',e);
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

  }, [controls, vehicleApi, chassisApi]);

  const onHandleHistory = () => {
    const url = 'https://github.com/chuhongkyu'
    window.open(url, "_blank")
  }

  useEffect(() => {
    if (controls.Enter && motionStage) {
      onHandleHistory();
      setControls((prevControls) => ({
        ...prevControls,
        Enter: false,
      }));
    }
  }, [controls, motionStage]);


  return controls;
}
