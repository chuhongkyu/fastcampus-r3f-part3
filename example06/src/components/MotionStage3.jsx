import { useBox } from "@react-three/cannon";
import { useGLTF, useTexture } from "@react-three/drei";
import { motion } from "framer-motion-3d";

useGLTF.preload(`/assets/models/popup.glb`)

export const MotionStage3 = ({position}) => {
    const texture = useTexture(`/assets/images/motion_3.jpg`);

    const [ref] = useBox(()=>({
        args: [1,1,0.3],
        position,
        type: "Static",
        mass: 5,
        rotation: [0,0,0]
    }))
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
        </group>
    )
}
