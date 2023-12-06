import React, { useRef, useState } from 'react'
import { useSphere } from "@react-three/cannon";

export function Sphere(props) {

  const [meshRef] = useSphere(
    () => ({ args: [0.5], mass: 1, ...props }),
    useRef()
  )

  const [hovered, setHover] = useState(false)

  return (
    <mesh
      {...props}
      ref={meshRef}
      onPointerOver={() => setHover(true)}
      onPointerOut={() => setHover(false)}>
      <sphereGeometry args={[0.5]} />
      <meshStandardMaterial color={hovered ? 'hotpink' : 'orange'} />
    </mesh>
  )
}