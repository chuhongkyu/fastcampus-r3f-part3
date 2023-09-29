import "./index.css";
import { createRoot } from "react-dom/client";
import { Scene } from "./Scene";
import { RecoilRoot } from "recoil";

createRoot(document.getElementById("root")).render(
  <RecoilRoot>
    <Scene />
  </RecoilRoot>
);
