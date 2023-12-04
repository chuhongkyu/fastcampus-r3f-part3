import { useBox, useSphere } from '@react-three/cannon'
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
        position: [x,y,z],
        color: randomColor,
        args: [0.2,0.2,0.2]
        }
    }

    const [boxs, setBoxs] = useState([])
    const addRandomBox = () => {
      if (boxs.length < MAX_BOX_COUNT) {
        setBoxs((currBoxs) => [...currBoxs, generateRandomBox()]);
      }
    }
    const [ flood ] = useRecoilState(stage2);

    useEffect(()=>{
      if(flood) addRandomBox()
    },[flood])
    
    useFrame(({ clock }) => {
        const elapsedTime = clock.getElapsedTime()
        if (flood && Math.floor(elapsedTime) % 5 === 0){
          addRandomBox()
        }
    })
    return boxs.map((boxInfo, i) => <Box key={i} {...boxInfo} />)
}

function Box({ position = [0, 1, 0], color, args }) {
  const [ref] = useBox(() => ({ mass: 1, args: args, position }))
  return (
    <mesh castShadow ref={ref}>
      <boxGeometry args={args} />
      <meshStandardMaterial color={color} />
    </mesh>
  )
}
