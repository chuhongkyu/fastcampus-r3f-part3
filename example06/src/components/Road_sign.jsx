import React, { useEffect, useRef, useState } from 'react'
import { useGLTF } from '@react-three/drei'
import { useCylinder } from '@react-three/cannon'
import { motion } from "framer-motion-3d";

useGLTF.preload(`/assets/models/road_sign.glb`)

export function RoadSign({position}) {
  const { nodes, materials } = useGLTF(`/assets/models/road_sign.glb`)
  const [active, setActive] = useState(false);
  const [ref] = useCylinder(
    () => ({
      args: [0.1, 0.1, 1, 8], 
      type: "Static", 
      mass: 1, 
      position,
      onCollide: handleCollision
     }),
    useRef(null)
  )

  const handleCollision = (e) => {
    const { body } = e;
    // console.log(body)
    if (body.name === "chassisBody") {
      setActive(true)
    }
  };


  useEffect(()=>{
    let time
    if(active){
      time = setTimeout(()=> setActive(false), 1500)
    }
    return ()=> clearTimeout(time)
  },[active])

  return (
    <group ref={ref}>
      <mesh castShadow position={[0,-0.45,0]} scale={0.2} geometry={nodes.Object_1_1.geometry} material={materials.Wood} />
      <motion.group
      scale={0.2}
      position={[0,-0.48,0]}
      animate={active? {rotateY: 4}: {rotateY: -1}}
      transition={{duration: 0.5, type: "spring"}}
      >
        <mesh castShadow geometry={nodes.Object_1.geometry} material={materials['WoodLight.001']} />
        <mesh castShadow geometry={nodes.Object_1_2.geometry} material={materials['WoodLight.002']} />
        <mesh castShadow geometry={nodes.Object_1_3.geometry} material={materials['WoodLight.003']} />
      </motion.group>
    </group>
  )
}
