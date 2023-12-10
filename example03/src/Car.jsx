import { useBox } from "@react-three/cannon";
import { useRef } from "react";
import DummyCarBody from "./dummy/DummyCarBody";

const Car = () => {
    const position = [0, 0.5, 0];
    let width, height, front, wheelRadius, mass;

    width = 0.16;
    height = 0.15;
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
                <DummyCarBody width={width} height={height} front={front}/>
            </group>
        </group>
    )
}

export default Car