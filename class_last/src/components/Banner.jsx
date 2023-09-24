import { useBox } from "@react-three/cannon";
import { useTexture } from "@react-three/drei";
import { motion } from "framer-motion";

export function Banner({ position, scale }) {
    const [ref] = useBox(() => ({
        args: scale,
        position,
        type: "Static",
        mass: 1,
        rotation: [0,-0.8,0]
    }));

    const texture = useTexture(`${process.env.PUBLIC_URL}/assets/images/fastcampus.webp`);

    return(
        <mesh 
            castShadow 
            ref={ref}>
            <boxGeometry args={scale} />
            <meshStandardMaterial color="white" map={texture} />
        </mesh>
    )
}
