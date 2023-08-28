import { useBox } from "@react-three/cannon";
import { useEffect, useState } from "react";

const debug = true;

export function DummyBox({ position, scale }) {
  const [start, setStart] = useState(false)
  useEffect(()=>{
    setStart(!start)
  },[])
  const [ref, api] = useBox(() => ({
    args: scale,
    position,
    type: "Dynamic",
    mass: 0.05,
  }));

  const handleCollision = (e) => {
    const newPosition = [position[0], position[1], position[2] + 0.1];
    api.position.set(...newPosition);
  };

  return (
    debug && (
      <mesh
        ref={ref} position={position} onCollision={handleCollision}>
        <boxGeometry args={scale} />
        <meshBasicMaterial color="#5869ff" opacity={0.25} />
      </mesh>
    )
  );
}