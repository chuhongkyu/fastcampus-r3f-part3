import { useBox } from "@react-three/cannon";
import { Html, useGLTF } from "@react-three/drei";
import { motion } from "framer-motion-3d";
import React, { useState } from "react";
import { useEffect } from "react";

const Tree03 = React.memo(({ position, scale }) => {
    const { nodes, materials } = useGLTF(`${process.env.PUBLIC_URL}/assets/models/treepack.glb`)
    const [info, setInfo] = useState(false)
    const [ref] = useBox(() => ({
        args: scale,
        position,
        type: "Static",
        mass: 5,
        onCollide: ()=> setInfo(true)
    }));

    useEffect(() => {
        let timeout;
        if (info) {
          timeout = setTimeout(() => setInfo(false), 1000);
        }
        return () => clearTimeout(timeout);
    }, [info]);

    return(
        <group ref={ref}>
           <motion.mesh
            animate={{ scale: [0, 0.2], y: [0,0.5]}}
            transition={{ delay: 2, duration: 0.3,}}
            geometry={nodes.tree_2.geometry} material={materials['Material.009']} position={[-0.223, 0.459, 0]} rotation={[-1.559, 0, 0]} scale={0}
            castShadow  />
            {info ? <Html center><div className="information">나무 입니다!</div></Html>  : null}
        </group>
    )
})

export default Tree03;
