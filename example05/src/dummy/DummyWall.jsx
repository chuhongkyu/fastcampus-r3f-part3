import { useBox } from "@react-three/cannon";

const DummyWall = (props) => {
    const { args } = props;
    const [ref] = useBox(()=> ({
        args: args,
        mass: 1,
        type : "Static",
        ...props
    }))

    return(
        <mesh ref={ref}>
            <boxGeometry args={args}/>
            <meshBasicMaterial color="white" transparent opacity={0}/>
        </mesh>
    )
}

export default DummyWall;