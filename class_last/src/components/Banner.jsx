import { useBox } from "@react-three/cannon";
import { useTexture } from "@react-three/drei";

export function Banner({ position }) {
    const [ref] = useBox(() => ({
        args: [10,2,1],
        position,
        type: "Static",
        mass: 1,
    }));

    const texture = useTexture(`${process.env.PUBLIC_URL}/assets/images/fastcampus.webp`);

    return(
        <mesh ref={ref} castShadow>
            <boxGeometry args={[10,1,1]} />
            <meshStandardMaterial color="white" map={texture} />
        </mesh>
    )
}
