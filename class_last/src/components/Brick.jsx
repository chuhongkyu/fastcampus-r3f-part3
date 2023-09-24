import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { useBox } from '@react-three/cannon';

export function Brick({position,rotation}) {
  const { nodes, materials } = useGLTF(`${process.env.PUBLIC_URL}/assets/models/brick.glb`);

  const [ref] = useBox(() => ({ 
    mass: 0.01,
    position: position,
    args:[0.322,0.18,0.16],
    rotation: rotation,
  }));

  return (
    <group ref={ref}>
      <group scale={0.003} position={[0.02,0.02, 0,]} >
        <mesh castShadow geometry={nodes.Brick_2_standardSurface9_0.geometry} material={materials['standardSurface9.001']} position={[-2.22, 0, 0.154]} />
      </group>
    </group>
  );
}
