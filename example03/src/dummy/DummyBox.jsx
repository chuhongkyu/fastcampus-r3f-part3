import { useBox } from "@react-three/cannon";

const DummyBox = (props) => {

    const [ref] = useBox(()=> ({
        args: [0.2,0.2,0.2],
        mass: 5,
        type : "Dynamic",
        ...props
    }))

    return(
        <mesh ref={ref}>
            <boxGeometry args={[0.2,0.2,0.2]}/>
            <meshBasicMaterial color={"blue"}/>
        </mesh>
    )
}

export default DummyBox;