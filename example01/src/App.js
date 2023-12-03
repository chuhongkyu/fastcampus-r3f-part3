import { Canvas } from "@react-three/fiber";
import { Box } from "./Box";

function App() {
  return (
    <>
      <Canvas>
        <ambientLight />
        <pointLight position={[10, 10, 10]} />
        <Box/>
      </Canvas>
    </>
  );
}

export default App;
