import { Canvas } from "@react-three/fiber";
import { Ground } from "./Ground";
import { Physics, Debug } from "@react-three/cannon";
import { useControls } from "leva"


function Scene() {
  const gravity = useControls('Gravity', {
    x: { value: 0, min: -10, max: 10, step: 0.1 },
    y: { value: -9.8, min: -10, max: 10, step: 0.1 },
    z: { value: 0, min: -10, max: 10, step: 0.1 },
  })
  
  const bgValue = useControls('background',{ bgColor: '#fff', })

  return (
    <>
      <Canvas camera={{ position: [0, 2, 4] }}>
        <color attach="background" args={[bgValue.bgColor]}/>
        <ambientLight/>
        <directionalLight position={[0, 5, 5]} />
        <Physics gravity={[gravity.x, gravity.y, gravity.z]}>
          <Debug>
            {/* <Cylinder position={[-2,2,0]}/>
            <Box position={[0,2,0]}/>
            <Sphere  position={[2,2,0]}/>
            <Torus position={[-1,2,2]}/>
            <Icosahedron position={[1,2,2]}/> */}
            <Ground rotation={[-Math.PI/2,0,0]}/>
          </Debug>
        </Physics>
      </Canvas>
    </>
  );
}

export default Scene;
