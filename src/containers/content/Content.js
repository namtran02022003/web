import Slide from "./containers/slide/Slide"
import App from "./containers/content/App.js"

function Content(){
    return(
        <>
        <div className="container-fluid p-0">
            <div className="container my-3 ">
                <Slide />
            </div>
            <App />
            
        </div>
        </>
    )
}
export default Content