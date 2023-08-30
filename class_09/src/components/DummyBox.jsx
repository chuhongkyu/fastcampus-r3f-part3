import { useBox } from "@react-three/cannon";

const debug = true;

export function DummyBox({ position, scale }) {
  const [ref] = useBox(() => ({
    args: scale,
    position,
    type: "Dynamic",
    mass: 0.05,
  }));

  return (
    debug && (
      <mesh
        ref={ref} position={position}>
        <boxGeometry args={scale} />
        <meshBasicMaterial color="#5869ff" opacity={0.25} />
      </mesh>
    )
  );
}
