import { useBox } from "@react-three/cannon";
import { useGLTF } from "@react-three/drei";

export function Rock({ position, scale }) {
  const { nodes, materials } = useGLTF(`${process.env.PUBLIC_URL}/assets/models/assets2.glb`)
  const [ref, api] = useBox(() => ({
    args: scale,
    position,
    rotation: [0, 0, Math.PI / 2],
    type: "Dynamic",
    mass: 0.01,
  }));

  const handleCollision = (e) => {
    const newPosition = [position[0], position[1], position[2] + 0.1];
    api.position.set(...newPosition);
  };

  return (
       <mesh 
       castShadow
       ref={ref} 
       position={position} 
       onCollision={handleCollision} 
       geometry={nodes.Icosphere018_Material002_0.geometry} 
       material={materials['Material.002']}
       scale={0.1}
       position={[0, 3.786, 0]} 
     />
  );
}
