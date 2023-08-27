import { useBox } from "@react-three/cannon";
import { useGLTF } from "@react-three/drei";

export function Tree() {
  const { nodes, materials } = useGLTF(`${process.env.PUBLIC_URL}/assets/models/assets2.glb`)
  const [ref] = useBox(() => ({
    type: "Static",
    args : [1,1,1],
    rotation: [-Math.PI / 2, 0, 0],
    position: [-2, 0.5, 1],
    mass: 1,
  }));

    return(
      <mesh ref={ref} geometry={nodes.Plane002_Material003_0.geometry} material={materials['Material.003']} scale={0.1} position={[0, 2.516, 0]} rotation={[-1.589, 0, 0]} />    
    )
}
