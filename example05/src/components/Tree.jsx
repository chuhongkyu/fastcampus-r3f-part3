import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { useBox } from '@react-three/cannon'
import { motion } from "framer-motion-3d"

useGLTF.preload('/assets/models/tree.glb')

export function Tree(props) {
  const { nodes, materials } = useGLTF('/assets/models/tree.glb')

  const [ref] = useBox(()=> ({
    args: [0.3,1,0.3],
    type: "Static",
    ...props
}),useRef(null))

  return (
    <group ref={ref}>
      <motion.mesh 
        animate={{ scale: [0, 0.2], y: [-1, 0]}}
        transition={{ delay: 1, duration: 0.3,}}
        scale={0.2} geometry={nodes.tree.geometry} material={materials['Material.003']} position={[0, 0, 0]} rotation={[-1.555, 0, 0]} />
    </group>
  )
}

