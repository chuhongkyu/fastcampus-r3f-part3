import { Text3D } from "@react-three/drei";
import { motion } from "framer-motion-3d";
import { useRecoilState } from "recoil";
import { isStartScene } from "../utils/atom";
import { useMemo } from "react";
import { TextureLoader } from "three";

export function Description (){
    const fontUrl = '/assets/fonts/Pretendard.json'
    const matcapTexture = useMemo(() => {
        const textureLoader = new TextureLoader();
        const matcapTexture = textureLoader.load(`/assets/matcap/white.png`);
        return matcapTexture;
      }, []);
    const [isStart, setStart ] = useRecoilState(isStartScene)
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
                <meshMatcapMaterial matcap={matcapTexture} />
            </Text3D>
        </motion.group>

    )
}