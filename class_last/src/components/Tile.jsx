export function Tile({position, scale}) {
    return(
      <mesh position={position} castShadow receiveShadow rotation={[0, 1, 0]}>
        <boxGeometry args={scale} />
        <meshStandardMaterial color="white"/>
      </mesh>
    )
}
