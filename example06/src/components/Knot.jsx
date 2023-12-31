import { useTrimesh } from "@react-three/cannon"
import { useMemo } from "react"
import { TextureLoader, TorusGeometry } from "three"

export function Knot({ args, ...props }) {
    const geometry = useMemo(() => new TorusGeometry(...args), [args])
    const matcapTexture = useMemo(() => {
        const textureLoader = new TextureLoader();
        const matcapTexture = textureLoader.load(`/assets/matcap/black.png`);
        return matcapTexture;
    }, []);

    const [ref] = useTrimesh(() => ({
      args: [geometry.attributes.position.array, geometry.index.array],
      material: 'ring',
      ...props
    }))
  
    return (
      <mesh ref={ref} castShadow>
        <torusGeometry args={args} />
        <meshMatcapMaterial matcap={matcapTexture} />
      </mesh>
    )
  }