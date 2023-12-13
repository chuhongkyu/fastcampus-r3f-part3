import { useSphere } from "@react-three/cannon";

const DummyBall = (props) => {

    const [ref] = useSphere(()=> ({
        args: [0.15],
        mass: 1,
        type : "Dynamic",
        ...props
    }))

    return(
        <mesh ref={ref}>
            <sphereGeometry args={[0.15]}/>
            <meshBasicMaterial color={"yellow"}/>
        </mesh>
    )
}

export default DummyBall;