import { useEffect, useState } from "react"
import './iphone.css'
import CallApi from "../CallApi"

export var CartItem = []


function App(props) {
    const API = props.API
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
      CartItem.push(...arr)
      console.log(CartItem)
     alert('da them thanh cong')
    }
    
  
    return (
        <div  className="container-fluid list-item bg-success p-0">
            <h2 className="text-center">{props.tenmuc}</h2>
                <div className="row m-0  ">   
                    {values.map((value, index) => {
                        return (
                            <div key={index} className="col-4 col-sm-3 col-lg-2 py-2 ">
                                <div  className="p-2 bg-white rounded-3">
                                    <div className="p-2 d-flex justify-content-center  ">
                                        <img className="img-item" alt="img" src={value.img} width="70%" />
                                    </div>
                                    <div>
                                        <p>{value.name}</p>
                                        <p><b>price: </b> {value.price}</p>
                                        <button onClick={()=>{AddItem(value.id)}} className="btn btn-info">them </button>
                                       
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
