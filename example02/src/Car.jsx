import DummyCarBody from "./dummy/DummyCarBody"

const Car = () => {
    return(
        <group>
            <group>
                <DummyCarBody 
                    width={1}
                    height={1}
                    front={1}
                />
            </group>
        </group>
    )
}

export default Car