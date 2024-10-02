import { useThree } from '@react-three/fiber'
import { useEffect, useMemo } from 'react'
import { useRecoilValue } from 'recoil'
import { Object3D } from 'three'
import { isStartScene } from './atom'

export default function useFollowCam() {
  const { scene, camera } = useThree()
  const isStart = useRecoilValue(isStartScene)
  const pivot = useMemo(() => new Object3D(), [])

  const makeCamera = ()=>{
    camera.position.set(1,2,3.5)
    camera.rotation.x = -0.5

    pivot.add(camera)
    scene.add(pivot)
  }

  useEffect(() => {
    if(isStart){
      makeCamera()
    }
  }, [isStart])

  return { pivot }
}
