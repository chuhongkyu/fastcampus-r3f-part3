import React, { useEffect, useRef, useState } from 'react';
import { Html, useGLTF } from '@react-three/drei';
import { useSphere } from '@react-three/cannon';
import { motion } from 'framer-motion-3d';

useGLTF.preload(`/assets/models/ball.glb`);

export function Ball({ position }) {
  const { nodes, materials } = useGLTF(`/assets/models/ball.glb`);
  const [info, setInfo] = useState(false)
  const [ref, api] = useSphere(() => ({
    position,
    args: [0.15],
    mass: 1,
    onCollide: handleCollision
  }),useRef(null));

  const handleCollision = (e) => {
    const { body } = e;
    // console.log(body)
    if (body.name === "chassisBody") {
      setInfo(true);
      api.velocity.set(0, 3, 0)
    }
  }

  useEffect(() => {
    let timeout;
    if (info) {
      timeout = setTimeout(() => {
        setInfo(false)
      }, 600);
    }
    return () => clearTimeout(timeout);
  }, [info]);

  return (
    <motion.group
      initial={{scale:0}}
      animate={{scale: 1}}
      transition={{
          delay: 3,
          duration: 0.3,
      }}
      ref={ref}>
      <group scale={0.15} position={[0,-0.153,-0.004]}>
        <mesh castShadow geometry={nodes.beach_ball_red_0_1.geometry} material={materials.material} />
        <mesh castShadow geometry={nodes.beach_ball_red_0_2.geometry} material={materials.blue} />
        <mesh castShadow geometry={nodes.beach_ball_red_0_3.geometry} material={materials.white} />
        <mesh castShadow geometry={nodes.beach_ball_red_0_4.geometry} material={materials.yellow} />
      </group>
      {info ? <Html center><div className="information">데구르르...</div></Html>  : null}
    </motion.group>
    
  );
}
