import { Environment } from "@react-three/drei";

export const Lights = ({ color }) => {
  
    return (
      <group>
        <Environment preset="city"/>
        <directionalLight position={[2,10,0]} intensity={1.2} color={color} castShadow />
      </group>
    );
  };