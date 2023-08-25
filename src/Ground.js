import { usePlane } from '@react-three/cannon';
import React, { useRef } from 'react';

const Ground = (props)=> {
  const [ref] = usePlane(() => ({ mass: 0, ...props }), useRef())
  return (
    <mesh ref={ref} receiveShadow>
      <planeGeometry args={[25, 25]} />
      <meshStandardMaterial color="#FF7F50"/>
    </mesh>
  );
}

export default Ground