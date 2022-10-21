
import { useEffect, useState } from "react"
import './iphone.css'
import CallApi from "../CallApi"
export var AddArr = []
const API = "http://localhost:3000/value"
function App(props) {
    const [values, setValue] = useState([])
    useEffect(() => {
       CallApi(API,(valueApis)=>{
        setValue(valueApis)
       })
    }, [])
    const AddItem=(id)=>{
        const arr = values.filter((item)=>{
            return item.id == id
        })
      AddArr.push(...arr)
     
    }
   
    return (
        <div  className="container-fluid list-item bg-success p-0">
            <h2 className="text-center">{props.tenmuc}</h2>
                <div className="row m-0  ">   
                    {values.map((value, index) => {
                        return (
                            <div key={index} className="col-4 col-sm-3 col-lg-2 py-2 ">
                                <div onClick={()=>{AddItem(value.id)}} className="p-2 bg-white rounded-3">
                                    <div className="p-2 d-flex justify-content-center  ">
                                        <img className="img-item" alt="img" src={value.img} width="70%" />
                                    </div>
                                    <div>
                                        <p>{value.name}</p>
                                        <p><b>price: </b> {value.price}</p>
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                </div>
        </div>
    )
}
export default App