import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export function Model(props) {
  const { nodes, materials } = useGLTF('/assets.glb')
  return (
    <group {...props} dispose={null}>
      <group scale={0.01}>
        <mesh geometry={nodes.Plane002_Material003_0.geometry} material={materials['Material.003']} position={[-282.244, 249.559, 805.287]} rotation={[-Math.PI / 2, 0, -0.755]} scale={100} />
        <mesh geometry={nodes.Plane006_Material003_0.geometry} material={materials['Material.003']} position={[376.987, 280.099, 792.862]} rotation={[-Math.PI / 2, 0, 0]} scale={100} />
        <mesh geometry={nodes.Cone002_Material007_0.geometry} material={materials['Material.007']} position={[-836.639, 217.298, 811.29]} rotation={[-1.572, -0.049, 3.125]} scale={[75.995, 75.897, 108.932]} />
        <mesh geometry={nodes.Plane009_Material008_0.geometry} material={materials['Material.008']} position={[-1139.309, 238.084, 805.473]} rotation={[-Math.PI / 2, 0, 0]} scale={64.057} />
        <mesh geometry={nodes.Plane011_Material007_0.geometry} material={materials['Material.007']} position={[-573.515, 140.811, 811.935]} rotation={[-Math.PI / 2, 0, 2.444]} scale={100} />
        <mesh geometry={nodes.Plane012_Material009_0.geometry} material={materials['Material.009']} position={[-1498.189, 226.467, 803.058]} rotation={[-Math.PI / 2, 0, 0]} scale={100} />
        <mesh geometry={nodes.Plane013_Material011_0.geometry} material={materials['Material.011']} position={[343.349, 241.443, 29.564]} rotation={[-Math.PI / 2, 0, 0]} scale={113.423} />
        <mesh geometry={nodes.Icosphere001_Material018_0.geometry} material={materials['Material.018']} position={[-4.394, 291.431, -3.112]} rotation={[-1.547, -0.173, 0.137]} scale={[73.414, 65.566, 99.699]} />
        <mesh geometry={nodes.Icosphere003_Material004_0.geometry} material={materials['Material.004']} position={[-301.742, 184.538, 29.531]} rotation={[Math.PI / 2, 0, Math.PI]} scale={[58.172, 58.172, 94.202]} />
        <mesh geometry={nodes.Icosphere011_Material016_0.geometry} material={materials['Material.016']} position={[-568.319, 207.263, 20.776]} rotation={[-1.534, -0.185, -0.09]} scale={[50.402, 50.402, 72.003]} />
        <mesh geometry={nodes.Cube002_Material001_0.geometry} material={materials['Material.001']} position={[-839.455, 212.265, -11.831]} rotation={[-Math.PI / 2, 0, 0]} scale={42.829} />
        <mesh geometry={nodes.Cube004_Material020_0.geometry} material={materials['Material.020']} position={[-1097.76, 217.692, 1.593]} rotation={[-Math.PI / 2, 0, Math.PI / 2]} scale={42.829} />
        <mesh geometry={nodes.Icosphere012_Material002_0.geometry} material={materials['Material.002']} position={[127.362, 26.642, 1244.432]} rotation={[-Math.PI / 2, 0, 0]} scale={52.074} />
        <mesh geometry={nodes.Icosphere014_Material002_0.geometry} material={materials['Material.002']} position={[-24.003, 28.022, 1244.135]} rotation={[-Math.PI / 2, 0, 0]} scale={52.074} />
        <mesh geometry={nodes.Icosphere016_Material002_0.geometry} material={materials['Material.002']} position={[-271.858, 28.022, 1248.447]} rotation={[-Math.PI / 2, 0, 0]} scale={52.074} />
        <mesh geometry={nodes.Icosphere017_Material002_0.geometry} material={materials['Material.002']} position={[-410.827, 26.642, 1248.656]} rotation={[-Math.PI / 2, 0, 0]} scale={52.074} />
        <mesh geometry={nodes.Icosphere018_Material002_0.geometry} material={materials['Material.002']} position={[-562.193, 28.022, 1248.359]} rotation={[-Math.PI / 2, 0, 0]} scale={52.074} />
        <mesh geometry={nodes.Icosphere019_Material012_0.geometry} material={materials['Material.012']} position={[-148.051, 38.388, 1243.521]} rotation={[-Math.PI / 2, 0, 1.552]} scale={41.163} />
        <mesh geometry={nodes.Icosphere020_Material006_0.geometry} material={materials['Material.006']} position={[391.049, 38.952, 1243.285]} rotation={[1.658, 0.002, 1.59]} scale={41.163} />
        <mesh geometry={nodes.Plane014_Material004_0.geometry} material={materials['Material.004']} position={[45.7, 251.121, 793.723]} rotation={[-Math.PI / 2, 0, 2.444]} scale={118.714} />
        <mesh geometry={nodes.Circle001_Material015_0.geometry} material={materials['Material.015']} position={[-1335.632, 179.605, 5.136]} rotation={[-Math.PI / 2, 0.04, 2.009]} scale={[50.901, 47.9, 99.27]} />
        <mesh geometry={nodes.Icosphere021_Material002_0.geometry} material={materials['Material.002']} position={[265.325, 28.022, 1247.001]} rotation={[-Math.PI / 2, 0, 0]} scale={52.074} />
        <mesh geometry={nodes.Plane015_Material023_0.geometry} material={materials['Material.023']} position={[-1564.588, 279.703, 18.148]} rotation={[-Math.PI / 2, 0, 0]} scale={100} />
        <mesh geometry={nodes.Icosphere004_Material028_0.geometry} material={materials['Material.028']} position={[-562.55, 28.335, 1042.271]} rotation={[1.658, 0.002, 1.59]} scale={41.163} />
        <mesh geometry={nodes.Icosphere005_Material012_0.geometry} material={materials['Material.012']} position={[-562.193, 28.022, 1042.189]} rotation={[1.658, 0.002, 1.59]} scale={41.163} />
        <mesh geometry={nodes.Icosphere006_Material028_0.geometry} material={materials['Material.028']} position={[-410.821, 26.552, 1042.597]} rotation={[1.658, 0.002, 1.59]} scale={41.163} />
        <mesh geometry={nodes.Icosphere007_Material012_0.geometry} material={materials['Material.012']} position={[-410.828, 26.642, 1042.486]} rotation={[1.658, 0.002, 1.59]} scale={41.163} />
        <mesh geometry={nodes.Icosphere008_Material028_0.geometry} material={materials['Material.028']} position={[-272.22, 27.831, 1042.373]} rotation={[1.658, 0.002, 1.59]} scale={41.163} />
        <mesh geometry={nodes.Icosphere010_Material012_0.geometry} material={materials['Material.012']} position={[-271.859, 28.022, 1042.277]} rotation={[1.658, 0.002, 1.59]} scale={41.163} />
        <mesh geometry={nodes.Icosphere013_Material028_0.geometry} material={materials['Material.028']} position={[-148.006, 38.701, 1037.275]} rotation={[1.658, 0.002, 1.59]} scale={41.163} />
        <mesh geometry={nodes.Icosphere015_Material012_0.geometry} material={materials['Material.012']} position={[-148.051, 38.388, 1037.351]} rotation={[1.658, 0.002, 1.59]} scale={41.163} />
        <mesh geometry={nodes.Icosphere022_Material028_0.geometry} material={materials['Material.028']} position={[-24.36, 28.335, 1038.047]} rotation={[1.658, 0.002, 1.59]} scale={41.163} />
        <mesh geometry={nodes.Icosphere023_Material012_0.geometry} material={materials['Material.012']} position={[-24.003, 28.022, 1037.965]} rotation={[1.658, 0.002, 1.59]} scale={41.163} />
        <mesh geometry={nodes.Icosphere024_Material028_0.geometry} material={materials['Material.028']} position={[127.369, 26.552, 1038.372]} rotation={[1.658, 0.002, 1.59]} scale={41.163} />
        <mesh geometry={nodes.Icosphere025_Material012_0.geometry} material={materials['Material.012']} position={[127.362, 26.642, 1038.261]} rotation={[1.658, 0.002, 1.59]} scale={41.163} />
        <mesh geometry={nodes.Icosphere026_Material028_0.geometry} material={materials['Material.028']} position={[264.963, 27.831, 1040.928]} rotation={[1.658, 0.002, 1.59]} scale={41.163} />
        <mesh geometry={nodes.Icosphere027_Material012_0.geometry} material={materials['Material.012']} position={[265.325, 28.022, 1040.831]} rotation={[1.658, 0.002, 1.59]} scale={41.163} />
        <mesh geometry={nodes.Icosphere028_Material028_0.geometry} material={materials['Material.028']} position={[391.083, 39.518, 1037.239]} rotation={[1.658, 0.002, 1.59]} scale={41.163} />
        <mesh geometry={nodes.Icosphere029_Material012_0.geometry} material={materials['Material.012']} position={[391.049, 38.952, 1037.115]} rotation={[1.658, 0.002, 1.59]} scale={41.163} />
      </group>
    </group>
  )
}

useGLTF.preload('/assets.glb')
