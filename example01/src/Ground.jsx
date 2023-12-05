import React, { useRef } from 'react'

export function Ground(props) {

  const meshRef = useRef()
  return (
    <mesh
    {...props}
    rotation-x={-Math.PI/2}
    ref={meshRef} 
    receiveShadow
    >
    <planeGeometry args={[15, 15]} />
    <meshStandardMaterial color="black" wireframe/>
  </mesh>
  )
}