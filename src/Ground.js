import React from 'react';

const Ground = ()=> {
  return (
    <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -1, 0]}>
      <planeGeometry args={[32, 32]}/>
      <meshBasicMaterial color="#FF7F50" />
    </mesh>
  );
}

export default Ground