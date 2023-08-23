import './App.css';
import { Canvas  } from '@react-three/fiber'
import Box from './Box';
import { Environment, PerspectiveCamera } from '@react-three/drei';
import Car from "./Car"
import Ground from './Ground';

function App() {
  return (
      <Canvas>
        <PerspectiveCamera position={[0, 1, -8]} rotation={[0.5,10,0]}>
        <ambientLight />
        <pointLight position={[10, 10, 10]} />
        <Car />
        <Environment preset="city"/>
        <Ground/>
        </PerspectiveCamera>
      </Canvas>
  );
}

export default App;
