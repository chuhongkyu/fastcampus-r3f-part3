import { useBox, useCompoundBody, useRaycastVehicle } from "@react-three/cannon";
import { useMemo, useRef } from "react";
import DummyCarBody from "./dummy/DummyCarBody";
import DummyWheel from "./dummy/DummyWheel";
import { useControls } from "leva";
import { useWheels } from "./utils/useWheels";
import { useVehicleControls} from "./utils/useVehicleControls";
import { useFrame } from "@react-three/fiber";
import useFollowCam from "./utils/useFollowCam";
import { Vector3 } from "three";
import { CarBody } from "./components/CarBody";
import { Wheel } from "./components/Wheel";
import { useSetRecoilState } from "recoil"
import { stage1, stage2 } from "./utils/atom";

const Car = () => {
    const { pivot } = useFollowCam();
    const worldPosition = useMemo(() => new Vector3(), [])
    const setStage1 = useSetRecoilState(stage1);
    const setStage2 = useSetRecoilState(stage2);

    const position = [0, 0.5, 0];

    let width, height, front, mass, wheelRadius;

    width = 0.16;
    height = 0.12;
    front = 0.17;
    wheelRadius = 0.05;
    mass = 150;
    
    const chassisBodyArgs = [width, height, front * 2];
  
    const [chassisBody, chassisApi] = useCompoundBody(
      () => ({
        position,
        mass: mass,
        rotation: [0,Math.PI,0],
        collisionFilterGroup: 5,
        shapes: [
          {
            args: chassisBodyArgs,
            position: [0,0,0],
            type: "Box"
          },
          {
            args: [width, height, front],
            position: [0,height,0],
            type: "Box",
          },
      ],
      }),
      useRef(null)
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

    useVehicleControls(vehicleApi, chassisApi)

    const makeFollowCam = ()=> {
      chassisBody?.current.getWorldPosition(worldPosition)
      pivot.position.lerp(worldPosition, 0.9)
    }

    const makeStage1 = () => {
      const chassisPosition = new Vector3().setFromMatrixPosition(chassisBody.current.matrixWorld);
      if ( Math.abs(3 - chassisPosition.x) < 0.7 && Math.abs(4.9 - chassisPosition.z) < 0.7){
        setStage1(true);
      }else{
        setStage1(false);
      }
    }

    const makeStage2 = () => {
      const chassisPosition = new Vector3().setFromMatrixPosition(chassisBody.current.matrixWorld);
      if ( Math.abs(-3 - chassisPosition.x) < 0.8 && Math.abs(5.5 - chassisPosition.z) < 0.8){
        setStage2(true);
      }else{
        setStage2(false);
      }
    }

    useFrame(()=>{
      makeFollowCam()
      makeStage1()
      makeStage2()
    })

    return(
        <group ref={vehicle}>
            <group ref={chassisBody} name="chassisBody">
                <CarBody />
            </group>
            <Wheel wheelRef={wheels[0]} radius={wheelRadius}/>
            <Wheel wheelRef={wheels[1]} radius={wheelRadius} rightSide={true}/>
            <Wheel wheelRef={wheels[2]} radius={wheelRadius}/>
            <Wheel wheelRef={wheels[3]} radius={wheelRadius} rightSide={true}/>
        </group>
    )
}

export default Car