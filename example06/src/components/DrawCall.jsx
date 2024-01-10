import { Html } from "@react-three/drei";
import { useFrame, useThree } from "@react-three/fiber";
import { useState } from "react";

export default function DrawCall() {
    const { gl } = useThree()
    const [ count, setCount] = useState(0)
    gl.info.autoReset = false;
    
    useFrame(() => {
        setCount(gl.info.render.calls)
        gl.info.reset();
    });

    return <Html><div className="calls">Calls :{count}</div></Html>
  }