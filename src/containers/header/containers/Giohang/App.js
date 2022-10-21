import { AddArr } from "../../../content/containers/content/iphone/App"
import { useState } from "react"

function App({ onSetDisplay }) {
    console.log(AddArr)
    const [a,setA] = useState(AddArr)
   function deleteItem(index){
   AddArr.splice(index,1)
   setA(a)
   }
   
    return (
        <>
            <div className=" positionfixed">
                <div className="container position-relative p-5 bg-white">
                    <h2>gio hang</h2>
                    <hr></hr>
                    <div className="row m-0">
                        <div className="col-5">
                            <h4 className="text-center"> ten san pham</h4><hr /></div>
                        <div className="col-3">
                            <h4 className="text-center">gia san pham</h4><hr /></div>
                        <div className="col-4">
                            <h4 className="text-center">so luong</h4><hr /></div>
                    </div>
                    <>
                        {a.map((item,index) => {
                            return (
                                <div key={index}>
                                    <div  className="row m-0 align-items-center my-2 ">
                                        <div  className="col-5">
                                            <div className="d-flex align-items-center justify-content-center ">
                                                <img width="20%" src={item.img} alt="img"></img>
                                                <p>{item.name}</p>
                                            </div>
                                        </div>
                                        <div className="col-3">
                                            <div className="navbar justify-content-center  ">
                                                <p>{item.price}</p>
                                            </div>
                                        </div>
                                        <div className="col-4">
                                            <div className="nav align-items-center justify-content-around">
                                                <p className="m-0">1</p>
                                                <button onClick={()=>deleteItem(index)} className="btn btn-info">xoa</button>
                                            </div>
                                        </div>
                                    </div>
                                    <hr />
                                    </div>
                            )
                        })}

                    </>
                    <button onClick={onSetDisplay} className="btn-close"></button>
                </div>
            </div>
        </>
    )
}
export default App