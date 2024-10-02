const Picture = ({nodes, texture}) => {
    return(
        <mesh
            castShadow 
            geometry={nodes.picture.geometry} 
            material={nodes.picture.material} 
            position={[0.013, 0.15, 0.21]}
            scale={[-1.755, 0.528, 0.911]}
            rotation={[1.57, Math.PI, 0]} 
            >
            <meshBasicMaterial map={texture} />
        </mesh>
    )
}

export default Picture;