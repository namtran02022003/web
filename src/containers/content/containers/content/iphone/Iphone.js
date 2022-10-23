import App from "./App";
function Iphone(){
    return(
        <>
        <App 
        tenmuc="các sản phảm nổi bật"
        API="http://localhost:3000/value" />
        <App 
        tenmuc="các sản phảm mới" 
        API="http://localhost:3000/value2"
        />
        </>
    )
}
export default Iphone