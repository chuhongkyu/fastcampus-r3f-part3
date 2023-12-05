import React, { useRef, useState } from 'react'
// import { useBox } from "@react-three/cannon";

export function Box(props) {

  // const [meshRef] = useBox(
  //   () => ({ args: [1, 1, 1], mass: 1, ...props }),
  //   useRef()
  // )

  const [hovered, setHover] = useState(false)

  return (
    <mesh
      {...props}
      // ref={meshRef}
      onPointerOver={() => setHover(true)}
      onPointerOut={() => setHover(false)}>
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color={hovered ? 'hotpink' : 'orange'} />
    </mesh>
  )
}