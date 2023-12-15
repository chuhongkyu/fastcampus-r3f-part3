import { useBox } from "@react-three/cannon";

const DummyBox = (props) => {
    const { args } = props;
    const [ref] = useBox(()=> ({
        args: args,
        mass: 10,
        ...props
    }))

    return(
        <mesh ref={ref}>
            <boxGeometry args={args}/>
            <meshBasicMaterial color={"blue"} transparent opacity={0.5}/>
        </mesh>
    )
}

export default DummyBox;