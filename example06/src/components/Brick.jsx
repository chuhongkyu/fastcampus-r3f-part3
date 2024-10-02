import React, { useMemo, useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { useBox } from '@react-three/cannon';
import { TextureLoader } from 'three';

useGLTF.preload(`/assets/models/brick.glb`)

export function Brick(props) {
  const { nodes } = useGLTF(`/assets/models/brick.glb`);

  const matcapTexture = useMemo(() => {
    const textureLoader = new TextureLoader();
    const matcapTexture = textureLoader.load(`/assets/matcap/white.png`);
    return matcapTexture;
  }, []);
  
  const scale = [0.26,0.12,0.1]
  const [ref] = useBox(() => ({ 
    mass: 1,
    args: scale,
    ...props,
  }),useRef(null));

  return (
    <group ref={ref}>
      <mesh scale={0.3} position-y={-0.055} rotation-y={Math.PI/2} castShadow geometry={nodes.brick.geometry}>
        <meshMatcapMaterial matcap={matcapTexture} />
      </mesh>
    </group>
  );
}
