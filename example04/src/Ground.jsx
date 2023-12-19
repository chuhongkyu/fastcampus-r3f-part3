import React from 'react'
import { usePlane } from "@react-three/cannon";
import DummyBall from './dummy/DummyBall';
import DummyBox from './dummy/DummyBox';
import DummyWall from './dummy/DummyWall';
import { Tree } from './components/Tree';
import { Ball } from './components/Ball';
import HowToPlay from './components/HowToPlay';

export function Ground() {

  const [meshRef] = usePlane(
    () => ({ args: [15, 15], mass: 1, type: 'Static', rotation: [-Math.PI/2,0,0]}),
  )

  return (
    <group>
      <mesh ref={meshRef} receiveShadow>
        <planeGeometry args={[15, 15]} />
        <meshStandardMaterial color="white" opacity={0} transparent/>
      </mesh>

      {/* 나무 */}
      <Tree position={[1,0.5,-1]}/>
      <Tree position={[-1,0.5,-1]}/>
      <Tree position={[3,0.5,-1]}/>
      <Tree position={[-3,0.5,-1]}/>

      <Ball position={[0,0.2,-2]}/>

      <HowToPlay/>
      <DummyWall position={[5,0.5,0]} args={[1,1,10]} />
      <DummyWall position={[0,0.5,5]} args={[10,1,1]} />
      <DummyWall position={[0,0.5,-5]} args={[10,1,1]} />
      <DummyWall position={[-5,0.5,0]} args={[1,1,10]} />
    </group>
  )
}