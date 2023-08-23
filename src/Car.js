import React, { useEffect, useRef, useState } from 'react'
import { useGLTF } from '@react-three/drei'
import { useFrame } from '@react-three/fiber';

const env = process.env;
env.PUBLIC_URL = env.PUBLIC_URL || "";

const moveSpeed = 0.1; // 움직임 속도 조절

export default function Car() {
  const { nodes, materials } = useGLTF(`${env.PUBLIC_URL}/assets/lowpoly_car.glb`)

  const carRef = useRef();
  const speed = 0.1;
  const keys = { ArrowUp: false, ArrowDown: false, ArrowLeft: false, ArrowRight: false };

  useEffect(() => {
    const handleKeyDown = (event) => {
      keys[event.key] = true;
    };

    const handleKeyUp = (event) => {
      keys[event.key] = false;
    };

    window.addEventListener('keydown', handleKeyDown);
    window.addEventListener('keyup', handleKeyUp);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      window.removeEventListener('keyup', handleKeyUp);
    };
  }, []);

  useFrame(() => {
    const car = carRef.current;

    if (keys.ArrowUp) {
      car.position.z -= speed;
    }
    if (keys.ArrowDown) {
      car.position.z += speed;
    }
    if (keys.ArrowLeft) {
      car.rotation.y += 0.01;
    }
    if (keys.ArrowRight) {
      car.rotation.y -= 0.01;
    }
  });

  return (
    <group ref={carRef}>
      <group position={[0.013, 0.007, 0]} rotation={[-Math.PI / 2, 0, 0]}>
        <group rotation={[Math.PI / 2, 0, 0]}>
          <group position={[1.545, -0.788, 1.03]} rotation={[Math.PI / 2, -0.053, 0]} scale={[0.267, 1.023, 0.267]}>
            <mesh geometry={nodes.Object_10.geometry} material={materials.Tyre} />
            <mesh geometry={nodes.Object_11.geometry} material={materials['Silver.001']} />
          </group>
          <group position={[-0.642, -0.791, 1.03]} rotation={[Math.PI / 2, -0.053, 0]} scale={[0.275, 1.055, 0.275]}>
            <mesh geometry={nodes.Object_13.geometry} material={materials.Tyre} />
            <mesh geometry={nodes.Object_14.geometry} material={materials['Silver.001']} />
          </group>
          <group position={[1.545, -0.788, -1.03]} rotation={[Math.PI / 2, -0.053, Math.PI]} scale={[0.267, 1.023, 0.267]}>
            <mesh geometry={nodes.Object_16.geometry} material={materials.Tyre} />
            <mesh geometry={nodes.Object_17.geometry} material={materials['Silver.001']} />
          </group>
          <group position={[-0.642, -0.791, -1.03]} rotation={[Math.PI / 2, -0.053, Math.PI]} scale={[0.275, 1.055, 0.275]}>
            <mesh geometry={nodes.Object_19.geometry} material={materials.Tyre} />
            <mesh geometry={nodes.Object_20.geometry} material={materials['Silver.001']} />
          </group>
          <group position={[1.211, -0.188, 1.095]} rotation={[-0.229, -0.304, 0.23]} scale={[0.027, 0.117, 0.117]}>
            <mesh geometry={nodes.Object_26.geometry} material={materials['Material.001']} />
            <mesh geometry={nodes.Object_27.geometry} material={materials.Mirror} />
          </group>
          <group position={[1.211, -0.188, -1.095]} rotation={[0.229, 0.304, 0.23]} scale={[0.027, 0.117, 0.117]}>
            <mesh geometry={nodes.Object_29.geometry} material={materials.Mirror} />
            <mesh geometry={nodes.Object_30.geometry} material={materials['Material.001']} />
          </group>
          <mesh geometry={nodes.Object_4.geometry} material={materials.Material} position={[0.055, -0.042, 0]} rotation={[0, 0, -0.053]} />
          <mesh geometry={nodes.Object_6.geometry} material={materials.Silver} position={[2.082, -0.783, 0]} rotation={[0, 0, 0.136]} scale={[0.122, 0.074, 1.056]} />
          <mesh geometry={nodes.Object_8.geometry} material={materials.Silver} position={[-1.075, -0.816, 0]} rotation={[0, 0, 0.136]} scale={[0.122, 0.074, 1.056]} />
          <mesh geometry={nodes.Object_22.geometry} material={materials.Silver} position={[0.107, 0.945, 0.644]} rotation={[0, 0, -0.119]} scale={[0.664, 0.029, 0.029]} />
          <mesh geometry={nodes.Object_24.geometry} material={materials.Silver} position={[0.107, 0.945, -0.644]} rotation={[0, 0, -0.119]} scale={[0.664, 0.029, 0.029]} />
          <mesh geometry={nodes.Object_32.geometry} material={materials['Material.002']} position={[2.062, -0.61, 0]} rotation={[0, 0, 0.136]} scale={[0.103, 0.049, 0.529]} />
          <mesh geometry={nodes.Object_34.geometry} material={materials['Material.007']} position={[0.574, 0.014, 0.427]} rotation={[0, 0, 0.051]} scale={[0.631, 0.631, 0.369]} />
          <mesh geometry={nodes.Object_36.geometry} material={materials['Material.007']} position={[0.574, 0.014, -0.427]} rotation={[0, 0, 0.051]} scale={[0.631, 0.631, 0.369]} />
          <mesh geometry={nodes.Object_38.geometry} material={materials['Material.007']} position={[-0.469, 0.026, 0.427]} rotation={[0, 0, 0.051]} scale={[0.631, 0.631, 0.369]} />
          <mesh geometry={nodes.Object_40.geometry} material={materials['Material.007']} position={[-0.469, 0.026, -0.427]} rotation={[0, 0, 0.051]} scale={[0.631, 0.631, 0.369]} />
          <mesh geometry={nodes.Object_42.geometry} material={materials['Material.003']} position={[2.054, -0.577, 0.78]} rotation={[0, 0, -1.624]} scale={0.115} />
          <mesh geometry={nodes.Object_44.geometry} material={materials['Material.003']} position={[2.054, -0.577, -0.78]} rotation={[0, 0, -1.624]} scale={0.115} />
          <mesh geometry={nodes.Object_46.geometry} material={materials['Material.005']} position={[-0.786, -0.791, 0.739]} rotation={[0, 0, -0.053]} scale={[0.04, 0.053, 0.04]} />
          <mesh geometry={nodes.Object_48.geometry} material={materials['Material.004']} position={[1.11, -0.256, -0.427]} rotation={[-Math.PI, 0, -1.009]} scale={0.151} />
          <mesh geometry={nodes.Object_50.geometry} material={materials['Material.006']} position={[0.145, 0.095, -0.384]} rotation={[-0.481, 0.024, -1.618]} scale={[1, 1, 0.028]} />
          <mesh geometry={nodes.Object_52.geometry} material={materials['Material.006']} position={[0.145, 0.095, 0.44]} rotation={[-0.481, 0.024, -1.618]} scale={[1, 1, 0.028]} />
          <mesh geometry={nodes.Object_54.geometry} material={materials['Material.008']} position={[0.199, 0.04, -0.392]} rotation={[0.94, 0.401, -1.605]} scale={0.297} />
          <mesh geometry={nodes.Object_56.geometry} material={materials['Material.008']} position={[0.186, 0.041, 0.425]} rotation={[0.89, 0.341, -1.607]} scale={0.297} />
        </group>
      </group>
    </group>
  )
}
