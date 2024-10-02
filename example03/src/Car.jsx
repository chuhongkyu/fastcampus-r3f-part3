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

const Car = () => {
    const { pivot } = useFollowCam();
    const worldPosition = useMemo(() => new Vector3(), [])

    const chassisBodyValue = useControls('chassisBody', {
      width: { value: 0.16, min: 0, max: 1,},
      height:  { value: 0.12, min: 0, max: 1,},
      front: { value: 0.17, min: 0, max: 1,},
    })
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

    useFrame(()=>{
      makeFollowCam()
    })

    return(
        <group ref={vehicle}>
            <group ref={chassisBody}>
                <DummyCarBody width={chassisBodyValue.width} height={chassisBodyValue.height} front={chassisBodyValue.front * 2}/>
            </group>
            <DummyWheel wheelRef={wheels[0]} radius={wheelRadius}/>
            <DummyWheel wheelRef={wheels[1]} radius={wheelRadius}/>
            <DummyWheel wheelRef={wheels[2]} radius={wheelRadius}/>
            <DummyWheel wheelRef={wheels[3]} radius={wheelRadius}/>
        </group>
    )
}

export default Car