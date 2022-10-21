import Logo from "./containers/logo/Logo"
import Input from "./containers/Input/Input"
import Giohang from "./containers/Giohang/Giohang"
import Login from "./containers/Login/Login"
import Dangky from "./containers/Dangky/Dangky"
import './header.css'

function Header(){
    return(
        <>
        <div className="header bg-warning">
        <div className="container">
            <div className="navbar">
                <div className="">
                <Logo />
                </div>
                <div  className="search_header">
                <Input />
                </div>
                <div className="">
             <Giohang />
             <Dangky />
             <Login />           
                </div>
            </div>
        </div>
        </div>
        </>
       
    )
}   
export default Header