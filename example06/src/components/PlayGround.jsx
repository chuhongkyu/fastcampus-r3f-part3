import React, { useMemo, useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { useTrimesh } from '@react-three/cannon'
import { TextureLoader } from 'three'

useGLTF.preload(`/assets/models/play_el.glb`)

export function PlayGround({position}) {
  const { nodes, materials } = useGLTF(`/assets/models/play_el.glb`)
  const matcapTexture = useMemo(() => {
    const textureLoader = new TextureLoader();
    const matcapTexture = textureLoader.load(`/assets/matcap/red.png`);
    return matcapTexture;
  }, []);
  
  const [ref] = useTrimesh(
    () => ({
      args: [
        nodes.play.geometry.attributes.position.array,
        nodes.play.geometry.index.array
      ],
      type: 'Static',
      rotation: [0,Math.PI/2, 0],
      position
    }),
    useRef(null)
  )

  return (
      <mesh castShadow ref={ref} geometry={nodes.play.geometry} material={materials['Material.001']}>
        <meshMatcapMaterial matcap={matcapTexture} />
      </mesh>
  )
}


