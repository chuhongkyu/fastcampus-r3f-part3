import { useBox } from "@react-three/cannon";
import { Html, useTexture } from "@react-three/drei";
import { useEffect, useState } from "react";

export function Banner({ onCollide, position, mass = 1, size = [5, 2, 2], isTrigger = false}) {
    const texture = useTexture(`${process.env.PUBLIC_URL}/assets/images/fastcampus.webp`);
    const [info, setInfo] = useState(false)
    const [ref] = useBox(() => ({
        isTrigger,
        mass,
        args: size,
        position,
        onCollide,
        type: "Static",
        onCollide: ()=> setInfo(true)
    }));

    const onHandleHistory = () => {
        const url = 'https://fastcampus.co.kr/'
        window.open(url, "_blank")
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
                ref={ref} position={position}
                castShadow
                onClick={onHandleHistory}
            >
                <boxGeometry args={size} />
                <meshStandardMaterial map={texture} transparent />
                {info ? <Html center><div className="information">마우스로 클릭 해보세요!</div></Html>  : null}
            </mesh>

    );
}
