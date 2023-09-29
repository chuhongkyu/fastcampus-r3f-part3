import { Environment, useHelper } from "@react-three/drei";
import { useRef } from "react";
import { DirectionalLightHelper, SpotLightHelper } from "three";

export const Lights = ({ color }) => {
  const ambientLightRef = useRef();
  const directionalLightRef = useRef();
  const spotLightRef = useRef();

  // useHelper(ambientLightRef, 'cyan');
  // useHelper(directionalLightRef, DirectionalLightHelper, 'red');
  useHelper(spotLightRef, SpotLightHelper, 'cyan');

  return (
    <group>
      <Environment preset="city"/>
      <ambientLight intensity={0.1} color="white" />
      <directionalLight 
          castShadow
          intensity={0.8}
          shadow-mapSize-height={1024}
          shadow-mapSize-width={1024}
          position={[2, 5, -2]}
          color="white"
        />
    </group>
  );
};
