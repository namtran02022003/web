import { useState } from "react"
import AppLogin from "./Applogin"

function Login(){
    const [login, setLogin] = useState(false)
    const handleDisplay = ()=>{
        setLogin(!login)
    }
    return(
        <>
      <button onClick={handleDisplay} type="button" className="btn mx-2 btn-info">login</button>
      {login && <AppLogin onSetDisplay={handleDisplay}/>}
       </>
    )
}
export default Login