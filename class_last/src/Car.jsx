import { useBox, useRaycastVehicle } from "@react-three/cannon";
import { useFrame, useLoader } from "@react-three/fiber";
import { useEffect, useRef } from "react";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { useWheels } from "./utils/useWheels";
import { useControls } from "./utils/useControls";
import { Vector3 } from "three";
import { Wheel } from "./components/Wheel";

export function Car() {
  let result = useLoader(
    GLTFLoader,
    process.env.PUBLIC_URL + "/assets/models/body.glb",
  ).scene;
  
  const position = [0, 0.5, 0];
  const width = 0.15;
  const height = 0.07;
  const front = 0.15;
  const wheelRadius = 0.05;

  const chassisBodyArgs = [width, height, front * 2];
  const [chassisBody, chassisApi] = useBox(
    () => ({
      args: chassisBodyArgs,
      mass: 150,
      position,
      rotation: [0,Math.PI/2 + 1,0]
    }),
    useRef(null),
  );

  const [wheels, wheelInfos] = useWheels(width, height, front, wheelRadius);

  const [vehicle, vehicleApi] = useRaycastVehicle(
    () => ({
      chassisBody,
      wheelInfos,
      wheels,
    }),
    useRef(null),
  );

  useControls(vehicleApi, chassisApi);

  useEffect(() => {
    if (!result) return;

    let mesh = result;
    mesh.scale.set(0.1, 0.13, 0.14);
    mesh.children[0].rotation.set(0, -Math.PI/2, 0);
    mesh.children[0].position.set(0, 1, -0.5);
  }, [result]);

  useFrame(({camera}) =>{
    // let position = new Vector3(0,0,0);
    // position.setFromMatrixPosition(chassisBody.current.matrixWorld);
    // state.camera.lookAt(position);

    const offset = new Vector3(0, 2, 5); // 원하는 거리와 높이 지정
    const chassisPosition = new Vector3().setFromMatrixPosition(chassisBody.current.matrixWorld);
    const targetPosition = chassisPosition.clone().add(offset);

    // 보간을 사용하여 부드러운 이동 효과를 생성
    const smoothFactor = 0.1;
    camera.position.lerp(targetPosition, smoothFactor);

    // 카메라가 물체를 바라보도록 설정
    camera.lookAt(chassisPosition);
  })

  return (
    <>
        <group ref={vehicle} name="vehicle">
          <group ref={chassisBody} name="chassisBody">
            <primitive object={result} rotation-y={Math.PI} position={[0, -0.08, 0]} castShadow
          receiveShadow/>
          </group>
          <Wheel wheelRef={wheels[0]}/>
          <Wheel wheelRef={wheels[1]} lefSide={true}/>
          <Wheel wheelRef={wheels[2]}/>
          <Wheel wheelRef={wheels[3]} lefSide={true}/>
        </group>
    </>
  );
}
