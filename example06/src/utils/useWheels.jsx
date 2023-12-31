import { useCompoundBody } from "@react-three/cannon";
import { useRef } from "react";

export const useWheels = (width, height, front, radius ) => {
  
  const wheels = [useRef(null), useRef(null), useRef(null), useRef(null)];

  const wheelPosition = height * -0.05
  const wheelDampingRelaxation = 1;
  const wheelDampingCompression = 1;

  const wheelInfo = {
    radius,
    directionLocal: [0, -1, 0],
    axleLocal: [1, 0, 0],
    suspensionStiffness: 25,
    suspensionRestLength: 0.1,
    frictionSlip: 5,
    dampingRelaxation: wheelDampingRelaxation,
    dampingCompression: wheelDampingCompression,
    maxSuspensionForce: 100000,
    rollInfluence: 0.01,
    maxSuspensionTravel: 0.3,
    customSlidingRotationalSpeed: -30,
    useCustomSlidingRotationalSpeed: true,
    sleepSpeedLimit: 0.01,
  };

  const wheelInfos = [
    {
      ...wheelInfo,
      chassisConnectionPointLocal: [-width * 0.65, wheelPosition, front],
      isFrontWheel: true,
    },
    {
      ...wheelInfo,
      chassisConnectionPointLocal: [width * 0.65, wheelPosition, front],
      isFrontWheel: true,
    },
    {
      ...wheelInfo,
      chassisConnectionPointLocal: [-width * 0.65, wheelPosition, -front],
      isFrontWheel: false,
    },
    {
      ...wheelInfo,
      chassisConnectionPointLocal: [width * 0.65, wheelPosition, -front],
      isFrontWheel: false,
    },
  ];

  const wheelFunc = () => ({
    collisionFilterGroup: 0,
    mass: 50,
    shapes: [
      {
        args: [wheelInfo.radius, wheelInfo.radius, 0.025, 16],
        rotation: [0, 0, -Math.PI / 2],
        type: "Cylinder",
      },
    ],
    type: "Kinematic",
  });

  useCompoundBody(wheelFunc, wheels[0]);
  useCompoundBody(wheelFunc, wheels[1]);
  useCompoundBody(wheelFunc, wheels[2]);
  useCompoundBody(wheelFunc, wheels[3]);

  return [wheels, wheelInfos];
};
