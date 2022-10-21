import App from "./App"
import { useState } from "react"

function Giohang(){
    const[display, setDisplay] = useState(false)
    const handleDisplay = ()=>{
        setDisplay(!display)
    }
    return(
        <>
        <button onClick={handleDisplay} type="button" className="btn mx-3 btn-info">gio gang</button>
        {display && <App onSetDisplay={handleDisplay}/>}
        </>
    )
}
export default Giohang