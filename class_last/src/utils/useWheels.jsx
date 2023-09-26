import { useCompoundBody } from "@react-three/cannon";
import { useRef } from "react";

export const useWheels = (width, height, front, radius) => {
  const wheels = [useRef(null), useRef(null), useRef(null), useRef(null)];

  const wheelInfo = {
    radius,
    directionLocal: [0, -1, 0],
    axleLocal: [1, 0, 0],
    suspensionStiffness: 25,
    suspensionRestLength: 0.1,
    frictionSlip: 5,
    dampingRelaxation: 1.8,
    dampingCompression: 1.5,
    maxSuspensionForce: 10000,
    rollInfluence: 0.01,
    maxSuspensionTravel: 0.3,
    customSlidingRotationalSpeed: -30,
    useCustomSlidingRotationalSpeed: true,
  };

  const wheelInfos = [
    {
      ...wheelInfo,
      chassisConnectionPointLocal: [-width * 0.65, height * 0.4, front],
      isFrontWheel: true,
    },
    {
      ...wheelInfo,
      chassisConnectionPointLocal: [width * 0.65, height * 0.4, front],
      isFrontWheel: true,
    },
    {
      ...wheelInfo,
      chassisConnectionPointLocal: [-width * 0.65, height * 0.4, -front],
      isFrontWheel: false,
    },
    {
      ...wheelInfo,
      chassisConnectionPointLocal: [width * 0.65, height * 0.4, -front],
      isFrontWheel: false,
    },
  ];

  const propsFunc = () => ({
    collisionFilterGroup: 0,
    mass: 50,
    shapes: [
      {
        args: [wheelInfo.radius, wheelInfo.radius, 0.015, 16],
        rotation: [0, 0, -Math.PI / 2],
        type: "Cylinder",
      },
    ],
    type: "Kinematic",
  });

  useCompoundBody(propsFunc, wheels[0]);
  useCompoundBody(propsFunc, wheels[1]);
  useCompoundBody(propsFunc, wheels[2]);
  useCompoundBody(propsFunc, wheels[3]);

  return [wheels, wheelInfos];
};
