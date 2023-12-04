import { useBox } from "@react-three/cannon";
import { Html, PositionalAudio, useGLTF } from "@react-three/drei";
import { motion } from "framer-motion-3d";
import React, {useEffect, useRef, useState } from "react";

useGLTF.preload(`/assets/models/treepack.glb`)

const Tree02 = React.memo(({ position, scale }) => {
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
            animate={{ scale: [0, 0.2], y: [0,0.55]}}
            transition={{ delay: 2, duration: 0.3,}}
            geometry={nodes.tree_1.geometry} material={materials['Material.003']} position={[-0.019, 0.554, 0]} rotation={[-1.674, 0.004, 0.424]} scale={0}
            castShadow  />
            {info ? <Html center><div className="information">나무...</div></Html>  : null}
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

export default Tree02;
