import { useThree } from '@react-three/fiber'
import { useEffect, useMemo } from 'react'
import { useRecoilValue } from 'recoil'
import { Object3D } from 'three'
import { onStartScene } from './atom'

export default function useFollowCam() {
  const { scene, camera } = useThree()
  const isStart = useRecoilValue(onStartScene)
  const pivot = useMemo(() => new Object3D(), [])
  const followCam = useMemo(() => {
    const o = new Object3D()
    o.position.set(0, 0, 0)
    return o
  }, [])


  useEffect(() => {
    if(isStart){
        camera.position.set(1.5, 2, 3)
        followCam.add(camera)
        pivot.add(followCam)
        scene.add(pivot)
    }
  }, [isStart])

  return { pivot }
}
