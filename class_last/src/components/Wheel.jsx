import { useGLTF } from "@react-three/drei";

export const Wheel = ({ wheelRef , lefSide }) => {
const { nodes, materials } = useGLTF(`${process.env.PUBLIC_URL}/assets/models/car.glb`)
  return(
    <group ref={wheelRef}>
        <group rotation={lefSide ? [0, 0, -Math.PI / 2] :[ 0, 0, Math.PI / 2] } scale={0.04}>
            <mesh geometry={nodes.Object_10.geometry} material={materials.Tyre} />
            <mesh geometry={nodes.Object_11.geometry} material={materials['Silver.001']} />
        </group>
    </group>
  );
};
