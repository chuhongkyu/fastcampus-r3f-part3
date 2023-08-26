import { useBox } from "@react-three/cannon";

const debug = true;

export function ColliderBox({ position, scale }) {
  useBox(() => ({
    args: scale,
    position,
    type: "Static",
    mass: 1,
  }));

  return (
    debug && (
      <mesh position={position}>
        <boxGeometry args={scale} />
        <meshBasicMaterial color="#1DDB16" opacity={0.25} />
      </mesh>
    )
  );
}
