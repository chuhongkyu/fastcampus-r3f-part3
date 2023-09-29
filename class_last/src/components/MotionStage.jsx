import { useBox } from "@react-three/cannon";
import { useFrame, useThree } from "@react-three/fiber";
import { Html, useGLTF, useTexture } from "@react-three/drei";
import { motion } from "framer-motion-3d";
import { useRecoilState } from "recoil";
import { openPopup, stage1 } from "../utils/atom";

export const MotionStage = ({position}) => {
    const texture = useTexture(`${process.env.PUBLIC_URL}/assets/images/github.webp`);
    const { camera } = useThree();
    const [ref] = useBox(()=>({
        args: [1,1,0.3],
        position,
        type: "Static",
        mass: 5,
    }))
    const [stage] = useRecoilState(stage1);
    const [ isPopup, setPopup ] = useRecoilState(openPopup);
    const { nodes, materials } = useGLTF(`${process.env.PUBLIC_URL}/assets/models/popup.glb`)

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
                position={[x,y+0.1,z+1]}
                rotation-x={-Math.PI/2}
                scale={0.5}
                >
                <circleGeometry args={[1, 32]}/>
                <meshBasicMaterial transparent color="white" opacity={0.8}/>
            </mesh>
            
            <group ref={ref} scale={0.3}>
                <mesh castShadow geometry={nodes.body.geometry} material={materials.Material} position={[0.004, 1.908, 0.065]} scale={[1.957, -1.036, 0.135]} />
                <mesh castShadow geometry={nodes.picture.geometry} material={nodes.picture.material} position={[0.013, 1.92, 0.21]} rotation={[1.57, Math.PI, 0]} scale={[-1.755, 0.528, 0.911]}>
                    <meshBasicMaterial map={texture} />
                </mesh>
                {stage ? <Html center><div className="information black">ENTER</div></Html>  : null}
            </group>
        </group>
    )
}
