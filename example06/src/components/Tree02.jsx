import { useBox } from "@react-three/cannon";
import { Html, useGLTF } from "@react-three/drei";
import { motion } from "framer-motion-3d";
import React, {useEffect, useRef, useState } from "react";

useGLTF.preload(`/assets/models/treepack.glb`)

const Tree02 = React.memo(({ position, scale }) => {
    const { nodes, materials } = useGLTF(`/assets/models/treepack.glb`)
    const [info, setInfo] = useState(false)
    const [ref] = useBox(() => ({
        args: scale,
        position,
        type: "Static",
        mass: 5,
        onCollide: handleCollision
    }),useRef(null));
    

    const handleCollision = (e) => {
        const { body } = e;
        // console.log(body)
        if (body.name === "chassisBody") {
            setInfo(true);
        }
    };

    useEffect(() => {
        let timeout;
        if (info) {
          timeout = setTimeout(() => {
            setInfo(false)
        }, 500);
        }
        return () => clearTimeout(timeout);
    }, [info]);

    return(
        <group ref={ref}>
           <motion.mesh
            animate={{ scale: [0, 1], y: [-1, -0.4]}}
            transition={{ delay: 2, duration: 0.3,}}
            geometry={nodes.tree_1.geometry} material={materials['Material.003']} scale={0}
            castShadow  />
            {info ? <Html center><div className="information">나무...</div></Html>  : null}
        </group>
    )
})

export default Tree02;
