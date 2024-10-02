import { useEffect, useState } from "react";
import { stage1 } from "./atom";
import { useRecoilValue } from "recoil";

export const useVehicleControls = (vehicleApi, chassisApi) => {
    const [controls, setControls] = useState({});
    const motionStage = useRecoilValue(stage1);

    useEffect(()=>{
        const KeDownPressHandler = (e) => {
            setControls((controls) => ({ 
                ...controls, [e.key]: true 
            }));
            // console.log('Down',e)
        }
        const KeUpPressHandler = (e) => {
            setControls((controls) => ({ 
                ...controls, [e.key]: false,
            }));
            // console.log('Up',e)
        }

        window.addEventListener('keydown', KeDownPressHandler);
        window.addEventListener('keyup', KeUpPressHandler);

        return () => {
            window.removeEventListener('keydown', KeDownPressHandler);
            window.removeEventListener('keyup', KeUpPressHandler);
        }
    },[])

    useEffect(() => {
        if (controls.ArrowUp) {
            vehicleApi.applyEngineForce(120, 2);
            vehicleApi.applyEngineForce(120, 3);
        } else if (controls.ArrowDown) {
            vehicleApi.applyEngineForce(-120, 2);
            vehicleApi.applyEngineForce(-120, 3);
        } else {
            vehicleApi.applyEngineForce(0, 2);
            vehicleApi.applyEngineForce(0, 3);
        }

        if (controls.ArrowLeft) {
            vehicleApi.setSteeringValue(-0.1, 0);
            vehicleApi.setSteeringValue(-0.1, 1);
            vehicleApi.setSteeringValue(0.35, 2);
            vehicleApi.setSteeringValue(0.35, 3);
           
        } else if (controls.ArrowRight) {
            vehicleApi.setSteeringValue(0.1, 0);
            vehicleApi.setSteeringValue(0.1, 1);
            vehicleApi.setSteeringValue(-0.35, 2);
            vehicleApi.setSteeringValue(-0.35, 3);
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