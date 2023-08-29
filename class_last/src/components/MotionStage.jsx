import { motion } from "framer-motion-3d";
import { useRecoilState } from "recoil";
import { stage1 } from "../utils/atom";

export const MotionStage = ({position}) => {
    const [stage] = useRecoilState(stage1);

    return(
        <motion.mesh
            position={position} rotation={[0, 0, 0]}
            animate={stage ? {opacity: 0.5, y: 0.1, scaleY: 2} : {opacity: 0.1, y: 0 ,scaleY: 1}}
            transition={{
                duration: 0.3,
                ease:"easeInOut"
            }}
            >
            <boxGeometry args={[1, 0.01, 1]}/>
            <meshBasicMaterial transparent color="white" opacity={0.5}/>
        </motion.mesh>
    )
}
