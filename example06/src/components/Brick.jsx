import React, { useEffect, useMemo, useRef } from 'react'
import { PositionalAudio, useGLTF } from '@react-three/drei'
import { useBox } from '@react-three/cannon';
import { TextureLoader } from 'three';
import { useRecoilValue } from 'recoil';
import { onStartScene } from '../utils/atom';

useGLTF.preload(`/assets/models/brick.glb`)

export function Brick(props) {
  const { nodes } = useGLTF(`/assets/models/brick.glb`);
  const AudioRef = useRef(null);
  const isStart = useRecoilValue(onStartScene);
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
    onCollide: handleCollision
  }));

  const handleCollision = (e) => {
    const { body } = e;
      if (body.name === "chassisBody") {
        AudioRef.current.play()
      }
  };

  return (
    <group ref={ref}>
      <mesh scale={0.3} position-y={-0.055} rotation-y={Math.PI/2} castShadow geometry={nodes.brick.geometry}>
        <meshMatcapMaterial matcap={matcapTexture} />
      </mesh>
      <PositionalAudio
        url="/assets/sounds/brick-1.mp3"
        distance={0.6}
        loop={false}
        rolloffFactor={1}
        ref={AudioRef}
        />
      {/* <mesh>
        <boxGeometry args={scale}/>
        <meshBasicMaterial color="black"/>
      </mesh> */}
    </group>
  );
}
