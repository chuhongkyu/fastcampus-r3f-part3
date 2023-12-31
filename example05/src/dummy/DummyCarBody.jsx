const DummyCarBody = (props) => {
    const { width, height, front } = props;
    
    return(
        <mesh>
            <boxGeometry args={[width, height, front]}/>
            <meshBasicMaterial color={"rgba(254,0,63)"}/>
        </mesh>
    )
}

export default DummyCarBody;