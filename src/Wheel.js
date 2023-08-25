import { useGLTF } from "@react-three/drei";
import { useCylinder } from '@react-three/cannon'
import { useEffect, useRef} from "react";

const env = process.env;
env.PUBLIC_URL = env.PUBLIC_URL || "";

const Wheel = (props) => {
    const { nodes, materials } = useGLTF(`${env.PUBLIC_URL}/assets/lowpoly_car.glb`)

    return(
        <group position={[1.545, -0.788, 1.03]} rotation={[Math.PI / 2, -0.053, 0]} scale={[0.267, 1.023, 0.267]}>
            <mesh geometry={nodes.Object_10.geometry} material={materials.Tyre} />
            <mesh geometry={nodes.Object_11.geometry} material={materials['Silver.001']} />
        </group>
    )
}

export default Wheel;