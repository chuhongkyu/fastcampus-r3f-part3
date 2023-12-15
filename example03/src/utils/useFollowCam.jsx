import { useThree } from '@react-three/fiber'
import { useEffect, useMemo } from 'react'
import { Object3D } from 'three'

const useFollowCam = () => {
  // 현재 scene과 camera를 얻기 위해 useThree 훅을 사용합니다.
  const { scene, camera } = useThree()
  // Object3D 인스턴스를 memoize하여 pivot 포인트를 만듭니다.
  const pivot = useMemo(() => new Object3D(), [])
  
  // 초기 위치가 (0, 0, 0)인 팔로잉 카메라를 만듭니다.
  const followCam = useMemo(() => {
    const o = new Object3D()
    o.position.set(0, 0, 0)
    return o
  }, [])

  const makeCamera = ()=>{
    camera.position.set(1,2,3.5)
    camera.rotation.x = -0.5
    // 메인 카메라를 팔로잉 카메라에 추가합니다.
    followCam.add(camera)
    // 팔로잉 카메라를 pivot 포인트에 추가합니다.
    pivot.add(followCam)
    // pivot 포인트를 scene에 추가합니다.
    scene.add(pivot)
  }

  useEffect(() => {
    makeCamera()
  }, [])

  // 외부에서 pivot 포인트를 사용할 수 있도록 반환합니다.
  return { pivot }
}


export default useFollowCam;