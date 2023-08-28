import { useBox } from "@react-three/cannon";
import { useGLTF } from "@react-three/drei"

export function Tree({position, scale}) {
    const [ref] = useBox(() => ({
        args: scale,
        position,
        type: "Static",
        mass: 0.1,
    }));
    const { nodes, materials } = useGLTF(`${process.env.PUBLIC_URL}/assets/models/tree.glb`)
    return(
        <mesh ref={ref}>
            <mesh geometry={nodes.tree.geometry} material={materials['Material.003']} position={[0, 0.5, 0.1]} rotation={[-1.555, 0, 0]} scale={0.2} />
        </mesh>
    )
}