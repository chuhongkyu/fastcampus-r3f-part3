import { motion } from "framer-motion-3d";
import { Fragment, useMemo } from "react";
import { TextureLoader } from "three";

export function Tile({position, rotation}) {
    const positions = [0,1,2,3,4,5,6,7,8,9]

    const x = position[0]
    const y = position[1]
    const z = position[2]

    const matcapTexture = useMemo(() => {
      const textureLoader = new TextureLoader();
      const matcapTexture = textureLoader.load(`/assets/matcap/white.png`);
      return matcapTexture;
    }, []);

    return(
      <motion.group
          position={position}
          rotation={rotation}
          animate={{ y: [10, 0] }}
          transition={{ delay: 1, duration: 0.3 }}
        >
          {positions.map((index) => {
            const newX = x + (index % 2 === 0 ? 0.08 : -0.08);
            return(
                <motion.mesh
                  key={index}
                  position={[newX, y , z + index/2]}
                  receiveShadow
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1 + index * 0.1, duration: 0.3 }}
                >
                  <boxGeometry args={[0.2, 0.02, 0.2]} />
                  <meshMatcapMaterial matcap={matcapTexture} />
                </motion.mesh>
            )
          })}
      </motion.group>
    )
}
