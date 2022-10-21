import AppDangky from "./AppDangky"
import { useState } from "react"

function Dangky(){
    const[display,setDisplay] = useState(false)
    function handleSetDisplay(){
        setDisplay(!display)
    }
    return(
        <>
       <button onClick={handleSetDisplay} type="button" className="btn mx-2 btn-info">dangky</button> 
            {display && <AppDangky onSetDisplay={handleSetDisplay}/>}
            </>
    )
}
export default Dangky