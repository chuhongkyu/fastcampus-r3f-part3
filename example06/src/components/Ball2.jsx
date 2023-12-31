import { useSphere } from '@react-three/cannon';
import { useMemo } from 'react';
import { TextureLoader } from 'three';

export function Ball2({ position }) {
  const matcapTexture = useMemo(() => {
    const textureLoader = new TextureLoader();
    const matcapTexture = textureLoader.load(`/assets/matcap/gold.png`);
    return matcapTexture;
  }, []);
  
  const [ref, api] = useSphere(() => ({
    position,
    args: [0.1],
    mass: 1,
    onCollide: handleCollision
  }));

  const handleCollision = (e) => {
    const { body } = e;
    if (body.name == "chassisBody") {
      api.velocity.set(0, 4, 0)
    }
  }

  return (
    <mesh ref={ref} castShadow receiveShadow>
        <sphereGeometry args={[0.1]}/>
        <meshMatcapMaterial matcap={matcapTexture} />
    </mesh>
  );
}
