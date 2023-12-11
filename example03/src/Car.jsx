import { useBox } from "@react-three/cannon";
import { useRef } from "react";
import DummyCarBody from "./dummy/DummyCarBody";
import DummyWheel from "./dummy/DummyWheel";
import { useControls } from "leva";

const Car = () => {
    const chassisBodyValue = useControls('chassisBody', {
      width: { value: 0.16, min: 0, max: 1,},
      height:  { value: 0.12, min: 0, max: 1,},
      front: { value: 0.17 * 2, min: 0, max: 1,},
    })
    const position = [0, 0.5, 0];

    let width, height, front, mass, wheelRadius;

    width = 0.16;
    height = 0.12;
    front = 0.17 * 2;
    wheelRadius = 0.05;
    mass = 150;
    
    const chassisBodyArgs = [width, height, front];
  
    const [chassisBody, chassisApi] = useBox(
      () => ({
        args: chassisBodyArgs,
        position,
        mass: mass,
      }),
      useRef(null)
    );

    return(
        <group>
            <group ref={chassisBody}>
                <DummyCarBody width={chassisBodyValue.width} height={chassisBodyValue.height} front={chassisBodyValue.front}/>
            </group>
            {/* <DummyWheel/> */}

        </group>
    )
}

export default Car