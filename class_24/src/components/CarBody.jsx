import { useGLTF } from "@react-three/drei";

export const CarBody = ({ ref, name }) => {
const { nodes, materials } = useGLTF(`${process.env.PUBLIC_URL}/assets/models/car.glb`)
  return(
    <>
        <group rotation={[0, Math.PI/2, 0]} scale={[0.15, 0.15, 0.1]} position={[0, 0.1, 0.07]}>
          <group position={[1.211, -0.188, 1.095]} rotation={[-0.229, -0.304, 0.23]} scale={[0.027, 0.117, 0.117]}>
            <mesh castShadow geometry={nodes.Object_26.geometry} material={materials['Material.002']} />
            <mesh castShadow geometry={nodes.Object_27.geometry} material={materials.Mirror} />
          </group>
          <group position={[1.211, -0.188, -1.095]} rotation={[0.229, 0.304, 0.23]} scale={[0.027, 0.117, 0.117]}>
            <mesh castShadow geometry={nodes.Object_29.geometry} material={materials.Mirror} />
            <mesh castShadow geometry={nodes.Object_30.geometry} material={materials['Material.002']} />
          </group>
          <mesh castShadow geometry={nodes.Object_6.geometry} material={materials.Silver} position={[2.082, -0.783, 0]} rotation={[0, 0, 0.136]} scale={[0.122, 0.074, 1.056]} />
          <mesh castShadow geometry={nodes.Object_8.geometry} material={materials.Silver} position={[-1.075, -0.816, 0]} rotation={[0, 0, 0.136]} scale={[0.122, 0.074, 1.056]} />
          <mesh castShadow geometry={nodes.Object_22.geometry} material={materials.Silver} position={[0.107, 0.945, 0.644]} rotation={[0, 0, -0.119]} scale={[0.664, 0.029, 0.029]} />
          <mesh castShadow geometry={nodes.Object_24.geometry} material={materials.Silver} position={[0.107, 0.945, -0.644]} rotation={[0, 0, -0.119]} scale={[0.664, 0.029, 0.029]} />
          <mesh castShadow geometry={nodes.Object_32.geometry} material={materials['Material.003']} position={[2.062, -0.61, 0]} rotation={[0, 0, 0.136]} scale={[0.103, 0.049, 0.529]} />
          <mesh castShadow geometry={nodes.Object_34.geometry} material={materials['Material.007']} position={[0.574, 0.014, 0.427]} rotation={[0, 0, 0.051]} scale={[0.631, 0.631, 0.369]} />
          <mesh castShadow geometry={nodes.Object_36.geometry} material={materials['Material.007']} position={[0.574, 0.014, -0.427]} rotation={[0, 0, 0.051]} scale={[0.631, 0.631, 0.369]} />
          <mesh castShadow geometry={nodes.Object_38.geometry} material={materials['Material.007']} position={[-0.469, 0.026, 0.427]} rotation={[0, 0, 0.051]} scale={[0.631, 0.631, 0.369]} />
          <mesh castShadow geometry={nodes.Object_40.geometry} material={materials['Material.007']} position={[-0.469, 0.026, -0.427]} rotation={[0, 0, 0.051]} scale={[0.631, 0.631, 0.369]} />
          <mesh castShadow geometry={nodes.Object_4.geometry} material={materials['Material.001']} position={[0.055, -0.042, 0]} rotation={[0, 0, -0.053]} />
          <mesh castShadow geometry={nodes.Object_46.geometry} material={materials['Material.005']} position={[-0.786, -0.791, 0.739]} rotation={[0, 0, -0.053]} scale={[0.04, 0.053, 0.04]} />
          <mesh castShadow geometry={nodes.Object_44.geometry} material={materials['Material.004']} position={[2.054, -0.577, -0.78]} rotation={[0, 0, -1.624]} scale={0.115} />
          <mesh castShadow geometry={nodes.Object_42.geometry} material={materials['Material.004']} position={[2.054, -0.577, 0.78]} rotation={[0, 0, -1.624]} scale={0.115} />
          <mesh castShadow geometry={nodes.Object_52.geometry} material={materials['Material.008']} position={[0.145, 0.095, 0.44]} rotation={[-0.481, 0.024, -1.618]} scale={[1, 1, 0.028]} />
          <mesh castShadow geometry={nodes.Object_54.geometry} material={materials['Material.009']} position={[0.199, 0.04, -0.392]} rotation={[0.94, 0.401, -1.605]} scale={0.297} />
          <mesh castShadow geometry={nodes.Object_56.geometry} material={materials['Material.009']} position={[0.186, 0.041, 0.425]} rotation={[0.89, 0.341, -1.607]} scale={0.297} />
          <mesh castShadow geometry={nodes.Object_50.geometry} material={materials['Material.008']} position={[0.145, 0.095, -0.384]} rotation={[-0.481, 0.024, -1.618]} scale={[1, 1, 0.028]} />
          <mesh castShadow geometry={nodes.Object_48.geometry} material={materials['Material.006']} position={[1.11, -0.256, -0.427]} rotation={[-Math.PI, 0, -1.009]} scale={0.151} />
        </group>
    </>
  );
};
