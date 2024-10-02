import { useBox } from "@react-three/cannon";
import { useGLTF, useTexture } from "@react-three/drei";
import { motion } from "framer-motion-3d";
import { BoxDrop } from "./BoxDrop";
import Picture from "./Picture";

useGLTF.preload(`/assets/models/popup.glb`)

export const MotionStage2 = ({position}) => {
    const texture = useTexture(`/assets/images/info.jpg`);
    
    const x = position[0];
    const y = position[1];
    const z = position[2];
    
    const [ref] = useBox(()=>({
        args: [1,1,0.3],
        position,
        type: "Static",
        mass: 5,
        rotation: [0,Math.PI/2,0]
    }))

    const { nodes, materials } = useGLTF(`/assets/models/popup.glb`)

    return(
        <group>
            <motion.group 
                ref={ref} 
                scale={0.3}
                position={position} rotation-y={Math.PI/2}>
                <mesh castShadow geometry={nodes.body.geometry} material={materials.Material} position={[0.004, 0.15, 0.065]} scale={[1.957, -1.036, 0.135]} />
                <Picture nodes={nodes} texture={texture}/>   
            </motion.group>
            <mesh position={[x+1,y-0.6,z]} rotation-x={-Math.PI/2}>
                <planeGeometry args={[1,1]}/>
                <meshStandardMaterial color="hotpink" opacity={0.2}/>
            </mesh>
            <BoxDrop />
        </group>
    )
}
