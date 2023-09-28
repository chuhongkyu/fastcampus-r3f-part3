import { useThree } from '@react-three/fiber'
import { useEffect, useMemo } from 'react'
import { Object3D } from 'three'

export default function useFollowCam() {
  const { scene, camera } = useThree()

  const pivot = useMemo(() => new Object3D(), [])
  const followCam = useMemo(() => {
    const o = new Object3D()
    o.position.set(0, 0, 0)
    return o
  }, [])


  useEffect(() => {
    camera.position.set(1.5, 2, 4)
    followCam.add(camera)
    pivot.add(followCam)
    scene.add(pivot)
  })

  return { pivot }
}
