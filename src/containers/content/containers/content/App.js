import Iphone from "./iphone/Iphone"

import Xiaomi from "./xiaomi/Xiaomi"
import Samsung from "./samsung/Samsung"
import Oppo from "./oppo/Oppo"


import { BrowserRouter, Route, Link, Routes } from "react-router-dom"
function App() {
    return (
        <>
            <BrowserRouter>
                <div className="container ">
                    <div className="d-flex justify-content-around py-2 py-lg-3 ">
                        <Link className="btn-big text-center bg-danger" to="/"><button className="btn   p-1 p-lg-2 p-xl-3 ">iphone</button></Link>
                        <Link className="btn-big text-center bg-danger" to="/samsung"><button className="btn   p-1 p-lg-2 p-xl-3 ">samsung</button></Link>
                        <Link className="btn-big text-center bg-danger" to="/xiaomi"><button className="btn   p-1 p-lg-2 p-xl-3 ">xiaomi</button></Link>
                       <Link className="btn-big text-center bg-danger" to="/oppo"><button className="btn   p-1 p-lg-2 p-xl-3 ">oppo</button></Link>
                </div>
                    </div>
                <Routes>
                    <Route index element={<Iphone />}></Route>
                    <Route path="/samsung" element={<Samsung />}></Route>
                    <Route path="/xiaomi" element={<Xiaomi />}></Route>
                    <Route path="/oppo" element={<Oppo />}></Route>
                </Routes>
            </BrowserRouter>
        </>
    )
}
export default App