import { useBox } from "@react-three/cannon";

const debug = true;

export function ColliderBox({ position, scale }) {
  const [ref] = useBox(() => ({
    args: scale,
    position,
    type: "Static",
    mass: 1,
  }));

  if(debug){
    return(
      <mesh ref={ref} position={position}>
        <boxGeometry args={scale} />
        <meshBasicMaterial color="#1DDB16" opacity={0.8} />
      </mesh>
    )
  }
}