import { useBox } from "@react-three/cannon";
import { Html, PositionalAudio, useGLTF } from "@react-three/drei";
import { motion } from "framer-motion-3d";
import React, { useRef, useState, useEffect } from "react";

useGLTF.preload(`/assets/models/treepack.glb`)

const Tree03 = React.memo(({ position, scale }) => {
    const { nodes, materials } = useGLTF(`/assets/models/treepack.glb`)
    const [info, setInfo] = useState(false)
    const AudioRef = useRef(null)
    const [ref] = useBox(() => ({
        args: scale,
        position,
        type: "Static",
        mass: 5,
        onCollide: handleCollision
    }));

    const handleCollision = (e) => {
        const { body } = e;
        // console.log(body)
        if (body.name === "chassisBody") {
            setInfo(true);
            AudioRef.current.play()
        }
    };

    useEffect(() => {
        let timeout;
        if (info) {
          timeout = setTimeout(() => {
            setInfo(false)
            AudioRef.current.stop()
        }, 500);
        }
        return () => clearTimeout(timeout);
    }, [info]);

    return(
        <group ref={ref}>
           <motion.mesh
            animate={{ scale: [0, 1], y: [-1, -0.4]}}
            transition={{ delay: 2, duration: 0.3,}}
            geometry={nodes.tree_2.geometry} material={materials['Material.009']} scale={0}
            castShadow  />
            {info ? <Html center><div className="information">나무 입니다!</div></Html>  : null}
            <PositionalAudio
             url="/assets/sounds/wood.mp3"
             distance={1}
             loop={false}
             rolloffFactor={1}
             ref={AudioRef}
             />
        </group>
    )
})

export default Tree03;
