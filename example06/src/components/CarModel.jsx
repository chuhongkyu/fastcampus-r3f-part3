import { useGLTF } from "@react-three/drei";

useGLTF.preload(`/assets/models/car_taxi.glb`)
   
export const CarModel = () => {
    const { nodes, materials } = useGLTF(`/assets/models/car_taxi.glb`)
    return(
        <>  
            <group rotation={[0, Math.PI, 0]} scale={[0.34,0.32,0.46]} position={[0,-0.12,-0.02]}>   
                <group position={[-0.001, 0.246, -0.031]} rotation={[-1.576, 0, 0]} scale={0.32}>
                    <mesh castShadow geometry={nodes.Car01_2_DL1002_0.geometry} material={materials.mt_PalleteBR} position={[1.183, -0.742, 0.304]} />
                    <mesh castShadow geometry={nodes.Car01_2_DL1002_1.geometry} material={materials.mt_Pallete_Yellow} position={[1.183, -0.742, 0.304]} />
                    <mesh castShadow geometry={nodes.Car01_2_DL1002_2.geometry} material={materials.mt_Pallete_Black} position={[1.183, -0.742, 0.304]} />
                    <mesh castShadow geometry={nodes.Car01_2_DL1002_3.geometry} material={materials.mt_PalleteBR_Glass} position={[1.183, -0.742, 0.304]} />
                </group>
                <group position={[-0.001, 0.246, -0.031]} rotation={[-1.576, 0, 0]} scale={0.32}>
                    <mesh castShadow geometry={nodes.Car01_2_DL2002_0.geometry} material={materials.mt_PalleteBR} position={[1.183, 0.186, 0.311]} />
                    <mesh castShadow geometry={nodes.Car01_2_DL2002_1.geometry} material={materials.mt_Pallete_Yellow} position={[1.183, 0.186, 0.311]} />
                    <mesh castShadow geometry={nodes.Car01_2_DL2002_2.geometry} material={materials.mt_Pallete_Black} position={[1.183, 0.186, 0.311]} />
                    <mesh castShadow geometry={nodes.Car01_2_DL2002_3.geometry} material={materials.mt_PalleteBR_Glass} position={[1.183, 0.186, 0.311]} />
                </group>
                <group position={[-0.001, 0.246, -0.031]} rotation={[-1.576, 0, 0]} scale={0.32}>
                    <mesh castShadow geometry={nodes.Car01_2_DR1002_0.geometry} material={materials.mt_PalleteBR} position={[-1.183, -0.742, 0.304]} />
                    <mesh castShadow geometry={nodes.Car01_2_DR1002_1.geometry} material={materials.mt_Pallete_Yellow} position={[-1.183, -0.742, 0.304]} />
                    <mesh castShadow geometry={nodes.Car01_2_DR1002_2.geometry} material={materials.mt_Pallete_Black} position={[-1.183, -0.742, 0.304]} />
                    <mesh castShadow geometry={nodes.Car01_2_DR1002_3.geometry} material={materials.mt_PalleteBR_Glass} position={[-1.183, -0.742, 0.304]} />
                </group>
                <group position={[-0.001, 0.246, -0.031]} rotation={[-1.576, 0, 0]} scale={0.32}>
                    <mesh castShadow geometry={nodes.Car01_2_DR2002_0.geometry} material={materials.mt_PalleteBR} position={[-1.183, 0.186, 0.311]} />
                    <mesh castShadow geometry={nodes.Car01_2_DR2002_1.geometry} material={materials.mt_Pallete_Yellow} position={[-1.183, 0.186, 0.311]} />
                    <mesh castShadow geometry={nodes.Car01_2_DR2002_2.geometry} material={materials.mt_Pallete_Black} position={[-1.183, 0.186, 0.311]} />
                    <mesh castShadow geometry={nodes.Car01_2_DR2002_3.geometry} material={materials.mt_PalleteBR_Glass} position={[-1.183, 0.186, 0.311]} />
                </group>
                <group position={[-0.001, 0.246, -0.031]} rotation={[-1.576, 0, 0]} scale={0.32}>
                    <mesh castShadow geometry={nodes.Car01_2_Taxi_AdT_0.geometry} material={materials.mt_Pallete_Yellow} />
                    <mesh castShadow geometry={nodes.Car01_2_Taxi_AdT_1.geometry} material={materials.mt_Pallete_Black} />
                    <mesh castShadow geometry={nodes.Car01_2_Taxi_AdT_2.geometry} material={materials.mt_Pallete_White} />
                </group>
                <mesh castShadow geometry={nodes.Car01_2_Taxi_0.geometry} material={materials.mt_PalleteBR} position={[-0.001, 0.246, -0.031]} rotation={[-1.576, 0, 0]} scale={0.32} />
                <mesh castShadow geometry={nodes.Car01_2_Taxi_1.geometry} material={materials.mt_Pallete_Yellow} position={[-0.001, 0.246, -0.031]} rotation={[-1.576, 0, 0]} scale={0.32} />
                <mesh castShadow geometry={nodes.Car01_2_Taxi_2.geometry} material={materials.mt_PalleteBR_Glass} position={[-0.001, 0.246, -0.031]} rotation={[-1.576, 0, 0]} scale={0.32} />
                <mesh castShadow geometry={nodes.Car01_2_Taxi_3.geometry} material={materials.mt_Pallete_Black} position={[-0.001, 0.246, -0.031]} rotation={[-1.576, 0, 0]} scale={0.32} />
                <mesh castShadow geometry={nodes.Car01_2_AdF002_0.geometry} material={materials.mt_PalleteBR} position={[-0.001, 0.246, -0.031]} rotation={[-1.576, 0, 0]} scale={0.32} />         
            </group>     
        </>
      );
};