import './App.css';
import { Canvas  } from '@react-three/fiber'
import Box from './Box';
import { Environment, PerspectiveCamera } from '@react-three/drei';
import Car from "./Car"
import Ground from './Ground';
import { Suspense } from 'react';
import { Physics } from '@react-three/cannon';

function App() {
  return (
      <Canvas>
        <PerspectiveCamera position={[0, 1, -8]} rotation={[0.5,10,0]}>
        <ambientLight />
        <pointLight position={[10, 10, 10]} />
        <Environment preset="city"/>
        <Suspense>
          <Physics>
            <Car />
            <Ground rotation={[-Math.PI / 2, 0, 0]} position={[0, -1, 0]}/>
          </Physics>
        </Suspense>
        </PerspectiveCamera>
      </Canvas>
  );
}

export default App;
