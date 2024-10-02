import { Merged, useGLTF } from "@react-three/drei"
import { useMemo } from "react"
import Tree01 from "./Tree01"
import Tree02 from "./Tree02"
import Tree03 from "./Tree03"

const AllTree = () => {
    const { nodes, materials } = useGLTF(`/assets/models/treepack.glb`)
    const meshes = useMemo(() => (
        { Tree01: nodes.tree_0, Tree02: nodes.tree_1, Tree03: nodes.tree_2 }), [nodes])
    return(
        <Merged castShadow meshes={meshes}>
            {(model) => (
                <>
                    <Tree01 position={[-6, 0.4,  0]} model={model} material={materials['Material.005']} />
                    <Tree01 position={[-6, 0.4, -2]} model={model} material={materials['Material.005']} />
                    <Tree01 position={[-6, 0.4, -4]} model={model} material={materials['Material.005']} />
                    <Tree01 position={[-6, 0.4, -6]} model={model} material={materials['Material.005']} />
                    <Tree01 position={[-6, 0.4, -8]} model={model} material={materials['Material.005']} />
                    <Tree01 position={[-6, 0.4, -10]} model={model} material={materials['Material.005']}/>

                    <Tree01 position={[-1, 0.4, -0.4]} model={model} material={materials['Material.005']} />
                    <Tree01 position={[1, 0.4, -0.4]}  model={model} material={materials['Material.005']} />
                    <Tree02 position={[-3, 0.4, -0.4]} model={model} material={materials['Material.003']} />
                    <Tree02 position={[3, 0.4, -0.4]} model={model} material={materials['Material.003']} />
                    <Tree03 position={[-1, 0.4, 5]} model={model} material={materials['Material.009']} />
                    <Tree03 position={[1, 0.4, 5]} model={model} material={materials['Material.009']} />
                </>
                )
            }
        </Merged>
    )
}

export default AllTree;