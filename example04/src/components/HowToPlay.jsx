import { Text, Text3D } from "@react-three/drei";

const HowToPlay = () => {

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
        <group position={[0.3,0,1]} rotation={[-Math.PI/2, 0, 0]}>
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
        </group>
    )
}

export default HowToPlay;