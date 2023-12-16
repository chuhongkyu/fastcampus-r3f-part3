import { useThree } from '@react-three/fiber'
import { useEffect, useMemo } from 'react'
import { Object3D } from 'three'

const useFollowCam = () => {
  // 현재 scene과 camera를 얻기 위해 useThree 훅을 사용합니다.
  const { scene, camera } = useThree()
  // Object3D 인스턴스를 memoize하여 pivot 포인트를 만듭니다.
  const pivot = useMemo(() => new Object3D(), [])

  const makeCamera = ()=>{
    camera.position.set(1,2,3.5)
    camera.rotation.x = -0.5

    pivot.add(camera)
    scene.add(pivot)
  }

  useEffect(() => {
    makeCamera()
  }, [])

  return { pivot }
}


export default useFollowCam;