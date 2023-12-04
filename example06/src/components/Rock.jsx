import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { useTrimesh } from '@react-three/cannon'


useGLTF.preload(`/assets/models/rock.glb`)

export function Rock(props) {
  const { nodes, materials } = useGLTF(`/assets/models/rock.glb`)
  const [ref, api] = useTrimesh(
    () => ({
      args: [
        nodes.rock.geometry.attributes.position.array,
        nodes.rock.geometry.index.array
      ],
      mass: 1,
      ...props
    }),
    useRef(null)
  )
  return (
    <group>
      <mesh ref={ref} geometry={nodes.rock.geometry} material={materials.Material_52} />
    </group>
  )
}

