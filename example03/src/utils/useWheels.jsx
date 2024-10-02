//useWheel 커스텀 훅은 props로 넓이, 높이, 차체 앞, 원 반지름을 가집니다.
//그리고 배열을 반환 할껀데요. wheels 라는 wheel 4개의 배열과, wheelInfos라는 객체 입니다.

import { useCompoundBody } from "@react-three/cannon";
import { useEffect, useRef } from "react";

export const useWheels = (width, height, front, radius) => {

    //리액트에 useRef를 4개 가진 배열 wheels를 만듭니다. 이것은 바퀴 1~4가 될 예정입니다.
    const wheels = [useRef(null), useRef(null), useRef(null), useRef(null)];

    const wheelPosition = height * 0.3

    const wheelInfo = {
        radius,
        directionLocal: [0, -1, 0], // 바퀴의 로컬 방향 벡터 (세계 좌표계 기준)
        axleLocal: [1, 0, 0], // 바퀴의 로컬 회전 축 벡터 (세계 좌표계 기준)
        suspensionStiffness: 25, // 서스펜션 강성 (낮을수록 부드럽고 높을수록 강하게)
        suspensionRestLength: 0.1,  // 서스펜션 초기 길이 (미터)
        frictionSlip: 5, // 마찰력
        dampingRelaxation: 1,
        dampingCompression: 1, // 댐핑 관련 매개변수 (낮을수록 진동이 심하게, 높을수록 안정적)
        maxSuspensionForce: 100000, // 최대 서스펜션 힘 (넘어지지 않도록 하는데 사용)
        rollInfluence: 0.01, // 차량의 기울기에 따른 바퀴의 롤링 영향 (낮을수록 안정적, 높을수록 미끄러움)
        maxSuspensionTravel: 0.3, // 최대 서스펜션 이동 거리 (미터)
        customSlidingRotationalSpeed: -30, // 사용자 정의 슬라이딩 회전 속도 (라디안/초, 음수 값은 반시계 방향 회전)
        useCustomSlidingRotationalSpeed: true, // 사용자 정의 슬라이딩 회전 속도 사용 여부
        sleepSpeedLimit: 0.01, // 슬립 상태에서 자동으로 차량을 꺼냄 (낮을수록 민감, 높을수록 허용)
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
        type : 'Kinematic',
        shapes: [
            {
            args: [wheelInfo.radius, wheelInfo.radius, 0.025, 16],
            rotation: [0, 0, -Math.PI / 2],
            type: "Cylinder",
            },
        ],
    });

    useCompoundBody(wheelFunc, wheels[0]);
    useCompoundBody(wheelFunc, wheels[1]);
    useCompoundBody(wheelFunc, wheels[2]);
    useCompoundBody(wheelFunc, wheels[3]);

    return [wheels, wheelInfos]
}