import { useBox } from "@react-three/cannon";
import { useGLTF } from "@react-three/drei";

const debug = false;

export function Tree({ position, rotation, scale }) {
  const { nodes, materials } = useGLTF(`${process.env.PUBLIC_URL}/assets/models/assets.glb`)
  const [ref] = useBox(() => ({
    args: scale,
    position,
    rotation,
    type: "Static",
    mass: 1,
  }));

    return(
        <group scale={scale} position={position} rotation={rotation} >
            <mesh 
                ref={ref} 
                geometry={nodes.Plane002_Material003_0.geometry} 
                material={materials['Material.003']} 
                position={[0,0,0]}
                scale={0.5}
             />
        </group>
    )
}
