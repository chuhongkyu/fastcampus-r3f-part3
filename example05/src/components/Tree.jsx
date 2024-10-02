import React, { useEffect, useRef, useState } from 'react'
import { Html, useGLTF } from '@react-three/drei'
import { useBox } from '@react-three/cannon'
import { motion } from "framer-motion-3d"

useGLTF.preload('/assets/models/tree.glb')

export function Tree(props) {
  const { nodes, materials } = useGLTF('/assets/models/tree.glb')
  const [info, setInfo] = useState(false)

  const [ref] = useBox(()=> ({
    args: [0.3,1,0.3],
    type: "Static",
    onCollide: handleCollision,
    ...props
  }),useRef(null))

  const handleCollision = (e) => {
    if(e.collisionFilters.bodyFilterGroup == 5 ){
      setInfo(true)
    }
  }

  useEffect(() => {
      let timeout;
      if (info) {
        timeout = setTimeout(() => setInfo(false), 1000);
      }
      return () => clearTimeout(timeout);
  }, [info]);


  return (
    <group ref={ref}>
      <motion.mesh 
        animate={{ scale: [0, 0.2], y: [-1, 0]}}
        transition={{ delay: 1, duration: 0.3,}}
        scale={0.2} geometry={nodes.tree.geometry} material={materials['Material.003']} position={[0, 0, 0]} rotation={[-1.555, 0, 0]} />
      {info && <Html center><div className="information">이것은 나무 입니다!</div></Html>}
    </group>
  )
}

