import { useBox } from "@react-three/cannon";
import { Html, useGLTF, useTexture } from "@react-three/drei";
import { motion } from "framer-motion-3d";
import { useRecoilValue } from "recoil";
import { stage1 } from "../utils/atom";
import Picture from "./Picture";

useGLTF.preload(`/assets/models/popup.glb`)

export const MotionStage = ({position}) => {
    const texture = useTexture(`/assets/images/github.webp`);
    const [ref ] = useBox(()=>({
        args: [1,1,0.3],
        position,
        type: "Static",
        mass: 5,
    }))

    const stage = useRecoilValue(stage1);
    const { nodes, materials } = useGLTF(`/assets/models/popup.glb`)

    const x = position[0];
    const y = position[1];
    const z = position[2];

    return(
        <group>
            <motion.mesh
                position={[x,y,z+1]}
                rotation-x={-Math.PI/2}
                initial={{scale: 0.5}}
                animate={stage ? {
                    opacity: 0.5, 
                    y: [0.05, 0.5, 0.05],
                    transition:{
                        duration: 2,
                        ease:"easeInOut",
                        delay: 0.3,
                        repeat: Infinity,
                    }} : {
                    opacity: 0.1, 
                    y: 0.05,
                    transition:{
                        duration: 0.3,
                        ease:"easeInOut"
                    }}}
                >
                <circleGeometry args={[1, 32]}/>
                <meshBasicMaterial transparent color="white" opacity={0.3}/>
            </motion.mesh>
            <mesh
                position={[x,y-0.5,z+1]}
                rotation-x={-Math.PI/2}
                scale={0.5}
                >
                <circleGeometry args={[1, 32]}/>
                <meshBasicMaterial transparent color="white" opacity={0.8}/>
            </mesh>
            
            <group ref={ref} scale={0.3}>
                <mesh castShadow geometry={nodes.body.geometry} material={materials.Material} position={[0.004, 0.15, 0.065]} scale={[1.957, -1.036, 0.135]} />
                <Picture nodes={nodes} texture={texture}/>   
                
                {stage ? <Html center><div className="information enter"><img src={`/assets/images/enter.webp`} alt="enter"/><p>Enter</p></div></Html>  : null}
            </group>
        </group>
    )
}
