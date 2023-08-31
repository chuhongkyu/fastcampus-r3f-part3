import { Text3D } from "@react-three/drei";
import { motion } from "framer-motion-3d";

export function Description (){
    const fontUrl = process.env.PUBLIC_URL + '/assets/fonts/Pretendard.json'

    return(
        <motion.group 
            position={[0,-2,1.2]} 
            rotation={[-Math.PI/2,0,-0.6]}
            animate={{y: [-2, 0], scale: [0,1]}}
            transition={{duration: 0.3, delay: 2.5}}
            >
            <Text3D 
            letterSpacing={0.02} 
            size={0.2} 
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