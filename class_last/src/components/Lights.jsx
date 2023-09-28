import { Environment } from "@react-three/drei";


export const Lights = ({ color }) => {
  
    return (
      <>
        <Environment preset="city"/>
        <ambientLight intensity={0.5}/>
        <directionalLight 
          castShadow
          intensity={0.8}
          shadow-mapSize-height={1024}
          shadow-mapSize-width={1024}
          position={[2, 5, -2]}
          color={color}/>
      </>
    );
  };