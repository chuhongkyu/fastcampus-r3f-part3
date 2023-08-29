import { motion } from "framer-motion-3d";

const positions = [
  [0,0,0],
  [-0.35,0,0.5],
  [-0.7,0,1],
  [-1.05,0,1.5],
  [-1.40,0,2]
]

export function Tile({position}) {

    return(
      <motion.group
          position={position}
          animate={{ y: [10, 0] }}
          transition={{ delay: 1, duration: 0.3 }}
        >
          {positions.map((pos, index) => (
            <motion.mesh
              key={index}
              position={pos}
              castShadow
              rotation={[0, 1, 0]}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1 + index * 0.1, duration: 0.3 }}
            >
              <boxGeometry args={[0.2, 0.01, 0.2]} />
              <meshStandardMaterial color="white" />
            </motion.mesh>
          ))}
      </motion.group>
    )
}
