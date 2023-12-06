import React, { useRef, useState } from 'react'
import { useCylinder } from "@react-three/cannon";

export function Cylinder(props) {

  const [meshRef] = useCylinder(
    () => ({ args:[0.5, 0.5, 1, 8], mass: 1, ...props }),
    useRef()
  )

  const [hovered, setHover] = useState(false)

  return (
    <mesh
      {...props}
      ref={meshRef}
      onPointerOver={() => setHover(true)}
      onPointerOut={() => setHover(false)}>
      <cylinderGeometry args={[0.5, 0.5, 1, 8]} />
      <meshStandardMaterial color={hovered ? 'hotpink' : 'orange'} />
    </mesh>
  )
}