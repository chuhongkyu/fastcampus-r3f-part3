import { useBox } from "@react-three/cannon";
import { Html, useGLTF } from "@react-three/drei";
import { motion } from "framer-motion-3d";
import React, { useState } from "react";
import { useEffect } from "react";

const Tree = React.memo(({ position, scale }) => {
    const { nodes, materials } = useGLTF(`${process.env.PUBLIC_URL}/assets/models/tree.glb`)
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
            castShadow geometry={nodes.tree.geometry} material={materials['Material.003']} position={[0, 0.5, 0.1]} rotation={[-1.555, 0, 0]} scale={0} />
            {info ? <Html center><div className="information">이건 그저 나무야...</div></Html>  : null}
        </group>
    )
})

export default Tree;