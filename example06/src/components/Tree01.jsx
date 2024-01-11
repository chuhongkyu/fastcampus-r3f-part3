import { useBox } from "@react-three/cannon";
import { Html } from "@react-three/drei";
import { motion } from "framer-motion-3d";
import React, { useRef, useState } from "react";
import { useEffect } from "react";


const Tree01 = React.memo(({ model, material, position }) => {
    const [info, setInfo] = useState(false)
    const [ref] = useBox(() => ({
        args: [0.3, 0.8, 0.3],
        position,
        type: "Static",
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
        <group ref={ref} >
            <motion.group
                animate={{ scale: [0, 1], y: [-1, -0.4]}}
                transition={{ delay: 2, duration: 0.3,}}
                scale={0}
            >
                <model.Tree01 material={material} />
            </motion.group>
            {info ? <Html center><div className="information">이건 그저 나무야...</div></Html>  : null}
        </group>
    )
})

export default Tree01;