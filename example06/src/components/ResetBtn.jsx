import { useEffect } from "react";
import { useRecoilState } from "recoil";
import { onResetCar } from "../utils/atom";

const ResetBtn = () => {
    const [isCar, setCar ] = useRecoilState(onResetCar)

    const onClick = () => {
        setCar(false)
    }

    useEffect(()=>{
        let time
        if(!isCar){
            time = setTimeout(()=> {setCar(true)},500)
        }
        return ()=> clearTimeout(time)
    },[isCar])
    return(
        <>
        {isCar ?
            <div className="reset-btn" onClick={onClick}>
                <p>Reset</p>
                <img src={`/assets/images/icon.jpg`} alt="icon"/>
            </div>: null}
        </>
    )
}

export default ResetBtn;