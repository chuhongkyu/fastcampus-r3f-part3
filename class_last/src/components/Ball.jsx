import React from 'react';
import { useGLTF } from '@react-three/drei';
import { useSphere } from '@react-three/cannon';
import { motion } from 'framer-motion-3d';

useGLTF.preload('/ball.glb');

export function Ball({ position }) {
  const { nodes, materials } = useGLTF(`${process.env.PUBLIC_URL}/assets/models/ball.glb`);

  const [ref] = useSphere(() => ({
    position,
    args: [0.1],
    mass: 0.001,
  }));

  return (
    <motion.group
      initial={{scale:0}}
      animate={{ scale: [0, 0.135]}}
      transition={{
          delay: 3,
          duration: 0.3,
      }}
      ref={ref} scale={0.135}>
      <group position={[0.85,0.5,-0.3]}>
        <mesh castShadow geometry={nodes.beach_ball_blue_0.geometry} material={materials.blue} />
        <mesh castShadow geometry={nodes.beach_ball_red_0.geometry} material={materials.material} />
        <mesh castShadow geometry={nodes.beach_ball_white_0.geometry} material={materials.white} />
        <mesh castShadow geometry={nodes.beach_ball_yellow_0.geometry} material={materials.yellow} />
      </group>
     
    </motion.group>
    
  );
}
