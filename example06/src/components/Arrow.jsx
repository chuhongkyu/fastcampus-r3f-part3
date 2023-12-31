import { Text3D } from "@react-three/drei";
import { motion } from "framer-motion-3d";
import { useMemo } from "react";
import { TextureLoader } from "three";

export function Arrow (){
    const fontUrl = '/assets/fonts/Pretendard.json'
    const matcapTexture = useMemo(() => {
        const textureLoader = new TextureLoader();
        const matcapTexture = textureLoader.load('/assets/matcap/white.png');
        return matcapTexture;
      }, []);
    return(
        <motion.group 
            position={[0.7,-2, 1.6]} 
            rotation={[-Math.PI/2,0, 0]}
            animate={{y: [-2, 0], scale: [0,1]}}
            transition={{duration: 0.3, delay: 2.5}}
            >
            <Text3D
            position={[0.27,0.1,0]}
            letterSpacing={0.02} 
            size={0.2} 
            castShadow
            font={fontUrl} 
            height={0.02}
            lineHeight={0.5} 
            fontSize={0.1} 
            characters="abcdefghijklmnopqrstuvwxyz0123456789!">
                ↑
                <meshMatcapMaterial matcap={matcapTexture} />
            </Text3D>
            <Text3D 
            position={[0,-0.2,0]}
            letterSpacing={0.02} 
            size={0.2} 
            castShadow
            font={fontUrl} 
            height={0.02}
            lineHeight={0.5} 
            fontSize={0.1} 
            characters="abcdefghijklmnopqrstuvwxyz0123456789!">
                ←↓→
                <meshStandardMaterial color="white"  />
                <meshMatcapMaterial matcap={matcapTexture} />
            </Text3D>
        </motion.group>

    )
}