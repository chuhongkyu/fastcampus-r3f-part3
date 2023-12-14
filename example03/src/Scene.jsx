import { Canvas } from "@react-three/fiber";
import { Ground } from "./Ground";
import { Physics, Debug } from "@react-three/cannon";
import Car from "./Car";
import DummyBall from "./dummy/DummyBall";
import DummyBox from "./dummy/DummyBox";
import DummyWall from "./dummy/DummyWall";

function Scene() {

  return (
    <>
      <Canvas camera={{ fov:45, position:[1.5, 2, 3]}}>
        <ambientLight/>
        <directionalLight position={[0, 5, 5]} />
        <Physics gravity={[0, -2.6, 0]}>
          <Debug>
            <Car/>
            <DummyBall position={[0,0.2,-2]} args={[0.15]}/>
            <DummyBox position={[1,0.2,-2]} args={[0.2,0.2,0.2]}/>
            <DummyBox position={[-1,0.2,1.5]} args={[0.2,0.4,0.2]}/>
            <DummyWall position={[5,0,0]} args={[1,1,7]} />
            <DummyWall position={[0,0,5]} args={[7,1,1]} />
            <DummyWall position={[0,0,-5]} args={[7,1,1]} />
            <DummyWall position={[-5,0,0]} args={[1,1,7]} />
            <Ground rotation={[-Math.PI/2,0,0]}/>
          </Debug>
        </Physics>
      </Canvas>
    </>
  );
}

export default Scene;
