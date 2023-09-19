import { useBox } from "@react-three/cannon";
import { useGLTF } from "@react-three/drei";
import { motion } from "framer-motion-3d";

export function Tree({position, scale}) {
    const [ref] = useBox(() => ({
        args: scale,
        position,
        type: "Static",
        mass: 5,
    }));

    const { nodes, materials } = useGLTF(`${process.env.PUBLIC_URL}/assets/models/tree.glb`)
    return(
        <group ref={ref}>
            
           <motion.mesh 
                animate={{ scale: [0, 0.2], y: [0,0.5]}}
                transition={{
                    delay: 2,
                    duration: 0.3,
                }}
            castShadow geometry={nodes.tree.geometry} material={materials['Material.003']} position={[0, 0.5, 0.1]} rotation={[-1.555, 0, 0]} scale={0} />

        </group>
    )
}