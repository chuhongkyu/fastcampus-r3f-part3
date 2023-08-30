import { Canvas } from "@react-three/fiber";
import { Box } from "./Box";

function App() {
  return (
    <>
      <Canvas>
        <ambientLight />
        <pointLight position={[10, 10, 10]} />
        <mesh>
          <boxGeometry args={[1, 1, 1]} />
          <meshStandardMaterial color='orange' />
        </mesh>
        {/* <Box/> */}
      </Canvas>
    </>
  );
}

export default App;
