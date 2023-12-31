import { useBox } from '@react-three/cannon'
import { useFrame } from '@react-three/fiber'
import React, { useEffect, useState } from 'react'
import { useRecoilState } from 'recoil'
import { stage2 } from '../utils/atom'

const colors = ['#0802A3', '#FF4B91','#FFCD4B', '#FF7676', '#445D48'];
const MAX_BOX_COUNT = 200;

export function BoxDrop() {
    function generateRandomBox() {
        const randomColor = colors[Math.floor(Math.random() * colors.length)];
        const x = -6 - Math.random() * 5;
        const y = 4 + Math.random() * 5;
        const z = -7 + Math.random() * 14;

        return {
            position: [x, y, z],
            color: randomColor,
            args: [0.2, 0.2, 0.2],
            isVisible: true,
        };
    }

    const [boxs, setBoxs] = useState([]);
    const addRandomBox = () => {
        if (boxs.length < MAX_BOX_COUNT) {
            setBoxs((prevBoxs) => [...prevBoxs, generateRandomBox()]);
        }
    };
    const [flood] = useRecoilState(stage2);

    useEffect(() => {
        if (flood) addRandomBox();
    }, [flood]);

    useFrame(({ clock }) => {
        const elapsedTime = clock.getElapsedTime();
        if (flood && Math.floor(elapsedTime) % 5 === 0) {
            addRandomBox();
        }
    });

    const handleCollision = (index) => {
        setBoxs((prevBoxs) =>
            prevBoxs.map((box, i) => (i === index ? { ...box, isVisible: false } : box))
        );
    };

    return boxs.map((boxInfo, i) => (
        boxInfo.isVisible && (
            <Box key={i} index={i} onCollision={() => handleCollision(i)} {...boxInfo} />
        )
    ));
}

function Box({ index, position = [0, 1, 0], color, args, onCollision }) {
    const [ref] = useBox(() => ({
        mass: 1,
        args,
        position,
        onCollide: () => onCollision(index),
    }));

    return (
        <mesh ref={ref}>
            <boxGeometry args={args} />
            <meshStandardMaterial color={color} />
        </mesh>
    );
}