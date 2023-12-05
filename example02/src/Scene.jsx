import { Canvas } from "@react-three/fiber";
import { Box } from "./Box";
import { Ground } from "./Ground";
import { Physics, Debug } from "@react-three/cannon";

function Scene() {
  return (
    <>
      <Canvas camera={{ position: [0, 2, 4] }}>
        <ambientLight/>
        <directionalLight position={[0, 5, 5]} />
        <Physics>
          <Debug>
            <Box position={[0,2,0]}/>
            <Ground rotation={[-Math.PI/2,0,0]}/>
          </Debug>
        </Physics>
      </Canvas>
    </>
  );
}

export default Scene;
