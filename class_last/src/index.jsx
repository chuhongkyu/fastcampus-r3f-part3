import "./index.css";
import { createRoot } from "react-dom/client";
import { Canvas } from "@react-three/fiber";
import { Scene } from "./Scene";
import { Physics } from "@react-three/cannon";
import { RecoilRoot } from "recoil";
import ResetBtn from "./components/ResetBtn";

createRoot(document.getElementById("root")).render(
  <RecoilRoot>
    <Canvas 
      shadows 
      camera={{ fov:45, position:[1.5, 2, 6]}}>
      <Physics broadphase="SAP" gravity={[0, -2.6, 0]}>
        <Scene />
      </Physics>
    </Canvas>
    <ResetBtn/>
  </RecoilRoot>
);
