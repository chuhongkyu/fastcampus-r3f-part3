import { Canvas } from "@react-three/fiber";
import { Box } from "./Box";
import { Ground } from "./Ground";

function Scene() {
  return (
    <>
      <Canvas camera={{ position: [0, 2, 4] }}>
        <ambientLight/>
        <directionalLight position={[0, 5, 5]} />
        <Box position={[0,1,0]}/>
        <Ground rotation={[-Math.PI/2,0,0]}/>
      </Canvas>
    </>
  );
}

export default Scene;
