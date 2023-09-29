import { Text3D } from "@react-three/drei";
import { motion } from "framer-motion-3d";
import { useRecoilState } from "recoil";
import { onStartScene } from "../utils/atom";

export function Description (){
    const fontUrl = process.env.PUBLIC_URL + '/assets/fonts/Pretendard.json'
    const [isStart, setStart ] = useRecoilState(onStartScene)
    const onComplete = ()=>{
        setStart(!isStart)
    }

    return(
        <motion.group 
            position={[0.5,-2, 1.2]} 
            rotation={[-Math.PI/2,0, 0]}
            animate={{y: [-2, 0], scale: [0,1]}}
            transition={{duration: 0.3, delay: 3}}
            onAnimationComplete={onComplete}
            >
            <Text3D 
                letterSpacing={0.01} 
                size={0.15} 
                castShadow
                font={fontUrl} 
                height={0.02}
                lineHeight={0.5} 
                fontSize={0.1} 
                characters="abcdefghijklmnopqrstuvwxyz0123456789!">
                How to Play
                <meshStandardMaterial color="white"  />
            </Text3D>
        </motion.group>

    )
}