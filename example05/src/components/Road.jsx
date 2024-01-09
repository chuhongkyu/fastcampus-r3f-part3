import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { motion } from "framer-motion-3d";

useGLTF.preload('/assets/models/road.glb')

export function Road(props) {
  const { nodes, materials } = useGLTF('/assets/models/road.glb')
  return (
    <motion.group
      initial={{scale: 0}}
      animate={{scale: 0.04}}
      transition={{delay: 1.2}}
      {...props}>
      <mesh receiveShadow geometry={nodes.Box002_RoadRim_0.geometry} material={materials.RoadRim} />
      <mesh receiveShadow geometry={nodes.Box002_RoadRim_0_1.geometry} material={materials['RoadRim.001']} />
      <mesh receiveShadow geometry={nodes.Box002_RoadRim_0_2.geometry} material={materials['RoadRim.002']} />
      <mesh receiveShadow geometry={nodes.Box002_RoadRim_0_3.geometry} material={materials.RoadBase} />
      <mesh receiveShadow geometry={nodes.Box002_RoadRim_0_4.geometry} material={materials['RoadRim.005']} />
      <mesh receiveShadow geometry={nodes.Box002_RoadRim_0_5.geometry} material={materials['RoadRim.004']} />
      <mesh receiveShadow geometry={nodes.Box002_RoadRim_0_6.geometry} material={materials['RoadRim.003']} />
      <mesh receiveShadow geometry={nodes.Box002_RoadRim_0_7.geometry} material={materials['RoadBase.001']} />
    </motion.group>
  )
}