import { Text3D } from "@react-three/drei";
import { motion } from "framer-motion-3d"
import { useSetRecoilState } from "recoil";
import { isStartScene } from "../utils/atom";

const HowToPlay = () => {
    const setIsStart = useSetRecoilState(isStartScene)
    const fontUrl = '/assets/fonts/Pretendard.json'

    const fontStyle = {
        font: fontUrl,
        size: 0.15,
        letterSpacing: 0.01,
        height: 0.02,
        lineHeight: 1, 
        fontSize: 1
    }

    return(
        <motion.group 
            position={[0.3,0,1]} 
            rotation={[-Math.PI/2, 0, 0]}
            animate={{y: [-2, 0], scale: [0,1]}}
            transition={{delay: 1.5, duration: 0.3}}
            onAnimationComplete={()=> setIsStart(true)}
            >
            <Text3D
                {...fontStyle}
                >
                How to Play
                <meshNormalMaterial/>
            </Text3D>
            <group position={[0.3, -0.5, 0]}>
                <Text3D
                    position={[0.2, 0.1, 0]}
                    {...fontStyle}
                    >
                    ↑
                    <meshNormalMaterial/>
                </Text3D>
                <Text3D
                    position={[0,-0.1,0]}
                    {...fontStyle}
                    >
                    ←↓→
                    <meshNormalMaterial/>
                </Text3D>
            </group>
        </motion.group>
    )
}

export default HowToPlay;