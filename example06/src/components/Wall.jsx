import { Brick } from "./Brick"

const Wall = ({position}) => {
    const height = 0.5;
    
    const x = position[0];
    const y = position[1];
    const z = position[2];
    const rotation = [0,-Math.PI/2,0];
    return(
        <>
        <Brick position={[x, y, z - height]} rotation={rotation}/>
        <Brick position={[x,y,z]} rotation={rotation}/>
        <Brick position={[x, y, z - height/2]} rotation={rotation}/>

        <Brick position={[x, y+0.4, z -0.1]} rotation={rotation}/>
        <Brick position={[x, y+0.4, z - 0.4]} rotation={rotation}/>

        <Brick position={[x,y+0.8,z - height/2]} rotation={rotation}/>
        </>
    )
}

export default Wall;