export function Tile({position, scale}) {
    return(
      <mesh position={position} receiveShadow rotation={[0, 1, 0]}>
        <boxGeometry args={scale} />
        <meshStandardMaterial color="white"/>
      </mesh>
    )
}
