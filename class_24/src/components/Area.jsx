import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export function Area({position}) {
  const { nodes, materials } = useGLTF(`${process.env.PUBLIC_URL}/assets/models/popup.glb`)
  return ( 
    <group>
      <mesh geometry={nodes.body.geometry} material={materials.Material} position={[0.004, 1.908, 0.065]} scale={[1.957, -1.036, 0.135]} />
      <mesh geometry={nodes.picture.geometry} material={nodes.picture.material} position={[0.013, 1.92, 0.21]} rotation={[1.57, 0, 0]} scale={[1.755, 0.528, 0.911]} />
    </group>
  )
}

