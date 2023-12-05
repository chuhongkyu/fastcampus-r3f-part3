import { useBox } from "@react-three/cannon";
import { Html, useGLTF, PositionalAudio } from "@react-three/drei";
import { motion } from "framer-motion-3d";
import React, { useRef, useState } from "react";
import { useEffect } from "react";

useGLTF.preload(`/assets/models/treepack.glb`)

const Tree01 = React.memo(({ position, scale }) => {
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
            AudioRef.current.stop()
            setInfo(false)
        }, 500);
        }
        return () => clearTimeout(timeout);
    }, [info]);

    return(
        <group ref={ref} >
           <motion.mesh
            animate={{ scale: [0, 1], y: [-1, -0.4]}}
            transition={{ delay: 2, duration: 0.3,}}
            geometry={nodes.tree_0.geometry} material={materials['Material.005']} scale={0}
            castShadow receiveShadow/>
            {info ? <Html center><div className="information">이건 그저 나무야...</div></Html>  : null}
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

export default Tree01;