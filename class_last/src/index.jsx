import "./index.css";
import { createRoot } from "react-dom/client";
import { Canvas } from "@react-three/fiber";
import { Scene } from "./Scene";
import { Physics } from "@react-three/cannon";

createRoot(document.getElementById("root")).render(
  <Canvas 
    shadows 
    camera={
      {
        fov:40,
        position:[0, 2, 5]
      }}>
    <Physics broadphase="SAP" gravity={[0, -2.6, 0]}>
      <Scene />
    </Physics>
  </Canvas>
);
