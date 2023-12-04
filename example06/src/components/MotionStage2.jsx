import { useBox } from "@react-three/cannon";
import { Html, useGLTF, useTexture } from "@react-three/drei";
import { motion } from "framer-motion-3d";
import { useRecoilState } from "recoil";
import { stage2 } from "../utils/atom";
import { AnimatePresence } from "framer-motion";
import { BoxDrop } from "./BoxDrop";

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

    const [stage] = useRecoilState(stage2);
    const { nodes, materials } = useGLTF(`/assets/models/popup.glb`)

    return(
        <group>
            <motion.group 
                ref={ref} 
                scale={0.3}
                position={position} rotation-y={Math.PI/2}>
                <mesh castShadow geometry={nodes.body.geometry} material={materials.Material} position={[0.004, 1.908, 0.065]} scale={[1.957, -1.036, 0.135]} />
                <mesh
                    castShadow 
                    geometry={nodes.picture.geometry} 
                    material={nodes.picture.material} 
                    position={[0.013, 1.92, 0.21]}
                    scale={[-1.755, 0.528, 0.911]}
                    rotation={[1.57, Math.PI, 0]} 
                    >
                    <meshBasicMaterial map={texture} />
                </mesh>
            </motion.group>
            <mesh position={[x+1,y+0.01,z]} rotation-x={-Math.PI/2}>
                <planeGeometry args={[1,1]}/>
                <meshStandardMaterial color="hotpink" opacity={0.2}/>
            </mesh>
            <BoxDrop />
        </group>
    )
}
