const DummyWheel = ({ wheelRef, radius }) => {
  return(
    <group ref={wheelRef} scale={0.5}>
        <mesh>
            <cylinderGeometry args={[radius]} />
            <meshBasicMaterial color="black"/>
        </mesh>           
    </group>
  );
};

export default DummyWheel;
