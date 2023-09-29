import { Text3D } from "@react-three/drei";
import { motion } from "framer-motion-3d";

export function Welcome ({position}){
    const fontUrl = process.env.PUBLIC_URL + '/assets/fonts/Pretendard.json'
    return(
        <motion.group
            animate={{y: [5, 0], scale: [0,1]}}
            transition={{duration: 0.5, delay: 2.3}}
            position={position}
            rotation-y={-0.6}
            >
            <Text3D
            font={fontUrl}
            bevelThickness={0.005} bevelEnabled
            bevelSize={0.01} letterSpacing={0.02} size={0.2} castShadow>
                환영
                <meshStandardMaterial color="white"  />
            </Text3D>
        </motion.group>
    )
}