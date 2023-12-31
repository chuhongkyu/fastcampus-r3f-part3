import { useBox } from "@react-three/cannon";

const debug = false;

export function DummyBox({ position, scale }) {
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
