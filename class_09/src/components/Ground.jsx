import { usePlane } from "@react-three/cannon";
import { useRef } from "react";
import { ColliderBox } from "./ColliderBox";

export function Ground() {
  const [ref] = usePlane(
    () => ({ 
      type: 'Static', 
      rotation: [-Math.PI / 2, 0, 0] }
    ), 
    useRef(null)
  );

  return (
    <>
      {/* 앞 */}
      <ColliderBox position={[0, 0.5, 5]} scale={[7, 1, 0.3]}/>
      {/* 뒤 */}
      <ColliderBox position={[0, 0.5, -5]} scale={[7, 1, 0.3]}/>
      {/* 좌 */}
      <ColliderBox position={[3.5, 0.5, 0]} scale={[0.3, 1, 10]}/>
      {/* 우 */}
      <ColliderBox position={[-3.5, 0.5, 0]} scale={[0.3, 1, 10]}/>

    </>
  );
}
