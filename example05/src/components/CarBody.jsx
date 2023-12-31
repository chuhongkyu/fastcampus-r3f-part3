import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

useGLTF.preload('/assets/models/car_taxi.glb')

export function CarBody() {
  const { nodes, materials } = useGLTF('/assets/models/car_taxi.glb')
  return (
    <group scale={[0.34,0.32,0.46]} position={[0,-0.06,-0.02]} rotation-y={Math.PI} >
      <group position={[-0.001, 0.246, -0.031]} rotation={[-1.576, 0, 0]} scale={0.32}>
        <mesh geometry={nodes.Car01_2_DL1002_0.geometry} material={materials.mt_PalleteBR} position={[1.183, -0.742, 0.304]} />
        <mesh geometry={nodes.Car01_2_DL1002_1.geometry} material={materials.mt_Pallete_Yellow} position={[1.183, -0.742, 0.304]} />
        <mesh geometry={nodes.Car01_2_DL1002_2.geometry} material={materials.mt_Pallete_Black} position={[1.183, -0.742, 0.304]} />
        <mesh geometry={nodes.Car01_2_DL1002_3.geometry} material={materials.mt_PalleteBR_Glass} position={[1.183, -0.742, 0.304]} />
      </group>
      <group position={[-0.001, 0.246, -0.031]} rotation={[-1.576, 0, 0]} scale={0.32}>
        <mesh geometry={nodes.Car01_2_DL2002_0.geometry} material={materials.mt_PalleteBR} position={[1.183, 0.186, 0.311]} />
        <mesh geometry={nodes.Car01_2_DL2002_1.geometry} material={materials.mt_Pallete_Yellow} position={[1.183, 0.186, 0.311]} />
        <mesh geometry={nodes.Car01_2_DL2002_2.geometry} material={materials.mt_Pallete_Black} position={[1.183, 0.186, 0.311]} />
        <mesh geometry={nodes.Car01_2_DL2002_3.geometry} material={materials.mt_PalleteBR_Glass} position={[1.183, 0.186, 0.311]} />
      </group>
      <group position={[-0.001, 0.246, -0.031]} rotation={[-1.576, 0, 0]} scale={0.32}>
        <mesh geometry={nodes.Car01_2_DR1002_0.geometry} material={materials.mt_PalleteBR} position={[-1.183, -0.742, 0.304]} />
        <mesh geometry={nodes.Car01_2_DR1002_1.geometry} material={materials.mt_Pallete_Yellow} position={[-1.183, -0.742, 0.304]} />
        <mesh geometry={nodes.Car01_2_DR1002_2.geometry} material={materials.mt_Pallete_Black} position={[-1.183, -0.742, 0.304]} />
        <mesh geometry={nodes.Car01_2_DR1002_3.geometry} material={materials.mt_PalleteBR_Glass} position={[-1.183, -0.742, 0.304]} />
      </group>
      <group position={[-0.001, 0.246, -0.031]} rotation={[-1.576, 0, 0]} scale={0.32}>
        <mesh geometry={nodes.Car01_2_DR2002_0.geometry} material={materials.mt_PalleteBR} position={[-1.183, 0.186, 0.311]} />
        <mesh geometry={nodes.Car01_2_DR2002_1.geometry} material={materials.mt_Pallete_Yellow} position={[-1.183, 0.186, 0.311]} />
        <mesh geometry={nodes.Car01_2_DR2002_2.geometry} material={materials.mt_Pallete_Black} position={[-1.183, 0.186, 0.311]} />
        <mesh geometry={nodes.Car01_2_DR2002_3.geometry} material={materials.mt_PalleteBR_Glass} position={[-1.183, 0.186, 0.311]} />
      </group>
      <group position={[-0.001, 0.246, -0.031]} rotation={[-1.576, 0, 0]} scale={0.32}>
        <mesh geometry={nodes.Car01_2_Taxi_AdT_0.geometry} material={materials.mt_Pallete_Yellow} />
        <mesh geometry={nodes.Car01_2_Taxi_AdT_1.geometry} material={materials.mt_Pallete_Black} />
        <mesh geometry={nodes.Car01_2_Taxi_AdT_2.geometry} material={materials.mt_Pallete_White} />
      </group>
      <mesh geometry={nodes.Car01_2_Taxi_0.geometry} material={materials.mt_PalleteBR} position={[-0.001, 0.246, -0.031]} rotation={[-1.576, 0, 0]} scale={0.32} />
      <mesh geometry={nodes.Car01_2_Taxi_1.geometry} material={materials.mt_Pallete_Yellow} position={[-0.001, 0.246, -0.031]} rotation={[-1.576, 0, 0]} scale={0.32} />
      <mesh geometry={nodes.Car01_2_Taxi_2.geometry} material={materials.mt_PalleteBR_Glass} position={[-0.001, 0.246, -0.031]} rotation={[-1.576, 0, 0]} scale={0.32} />
      <mesh geometry={nodes.Car01_2_Taxi_3.geometry} material={materials.mt_Pallete_Black} position={[-0.001, 0.246, -0.031]} rotation={[-1.576, 0, 0]} scale={0.32} />
      <mesh geometry={nodes.Car01_2_AdF002_0.geometry} material={materials.mt_PalleteBR} position={[-0.001, 0.246, -0.031]} rotation={[-1.576, 0, 0]} scale={0.32} />
      {/* <mesh geometry={nodes.Car01_2_WhBL002_0.geometry} material={materials.mt_PalleteBR} position={[0.322, 0.109, -0.434]} rotation={[-1.576, 0, 0]} scale={0.32} />
      <mesh geometry={nodes.Car01_2_WhBR002_0.geometry} material={materials.mt_PalleteBR} position={[-0.324, 0.109, -0.434]} rotation={[-1.576, 0, 0]} scale={0.32} />
      <mesh geometry={nodes.Car01_2_WhFL002_0.geometry} material={materials.mt_PalleteBR} position={[0.322, 0.113, 0.307]} rotation={[-1.576, 0, 0]} scale={0.32} />
      <mesh geometry={nodes.Car01_2_WhFR002_0.geometry} material={materials.mt_PalleteBR} position={[-0.324, 0.113, 0.307]} rotation={[-1.576, 0, 0]} scale={0.32} /> */}
    </group>
  )
}
