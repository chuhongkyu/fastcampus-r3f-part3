import { useBox } from "@react-three/cannon";
import { Html, useTexture } from "@react-three/drei";
import { motion } from "framer-motion-3d";
import { useEffect, useState } from "react";

export function Banner({ position, mass = 1, size = [5, 2, 2], isTrigger = false}) {
    const texture = useTexture(`/assets/images/fastcampus.webp`);
    const [info, setInfo] = useState(false)
    const [ref] = useBox(() => ({
        isTrigger,
        mass,
        args: size,
        position,
        type: "Static",
        onCollide: handleCollision
    }));

    const onHandleHistory = () => {
        const url = 'https://fastcampus.co.kr/'
        window.open(url, "_blank")
    }

    const handleCollision = () => {
        setInfo(true)
    }

    useEffect(() => {
        let timeout;
        if (info) {
          timeout = setTimeout(() => setInfo(false), 1000);
        }
        return () => clearTimeout(timeout);
    }, [info]);
    
    return (
            <mesh
                ref={ref} 
                castShadow
                onClick={onHandleHistory}
            >
                <boxGeometry args={size} />
                <meshStandardMaterial map={texture} transparent />
                {info ? <Html center><div className="information">마우스로 클릭 해보세요!</div></Html>  : null}
            </mesh>

    );
}
