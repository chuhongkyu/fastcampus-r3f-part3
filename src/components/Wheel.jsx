export const Wheel = ({ wheelRef }) => {
const { nodes, materials } = useGLTF(`${process.env.PUBLIC_URL}/assets/lowpoly_car.glb`)
  return(
    <group ref={wheelRef}>
        <group rotation={[0, 0, Math.PI / 2]}>
            <mesh geometry={nodes.Object_10.geometry} material={materials.Tyre} />
            <mesh geometry={nodes.Object_11.geometry} material={materials['Silver.001']} />
        </group>
    </group>
  );
};
