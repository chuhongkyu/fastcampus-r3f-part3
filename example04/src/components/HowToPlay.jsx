import { Text3D } from "@react-three/drei";

const HowToPlay = () => {
    const fontUrl = '/assets/fonts/Pretendard.json'

    const fontStyle = {
        letterSpacing: 0.01,
        size: 0.15, 
        font: fontUrl,
        height: 0.02,
        lineHeight: 1,
        fontSize: 1,
    }

    return(
        <group  
            position={[0.5, 0, 1.2]} 
            rotation={[-Math.PI/2,0, 0]}>
            <Text3D 
                {...fontStyle}>
                How to Play
                <meshBasicMaterial color="gray"/>
            </Text3D>
            <group position={[0.3, -0.5, 0]}>
                <Text3D
                    position={[0.2,0.1,0]}
                    {...fontStyle}>
                    ↑
                    <meshBasicMaterial color="gray"/>
                </Text3D>
                <Text3D 
                    position={[0,-0.1,0]}
                    {...fontStyle}>
                        ←↓→
                        <meshBasicMaterial color="gray"/>
                </Text3D>
            </group>
            
        </group>
    )
}

export default HowToPlay;


