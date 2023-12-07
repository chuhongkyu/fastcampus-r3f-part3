import React, { useState } from 'react'
import { useSphere } from "@react-three/cannon";

export function Sphere(props) {

  const [meshRef, api] = useSphere(
    () => ({ args: [0.5], mass: 1, ...props }),
  )

  const [hovered, setHover] = useState(false)

  return (
    <mesh
      {...props}
      ref={meshRef}
      onPointerOver={() => setHover(true)}
      onPointerOut={() => setHover(false)}
      onPointerDown={() => api.velocity.set(0, 5, 0)}
      >
      <sphereGeometry args={[0.5]} />
      <meshStandardMaterial color={hovered ? 'hotpink' : 'orange'} />
    </mesh>
  )
}