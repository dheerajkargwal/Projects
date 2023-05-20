import { Routes,Route } from "react-router"
import Home from "./components/Home"
import Header from "./components/Header";
function PublicRouter()
{
    return(
        <Routes>
         <Route path = "/" element = {<Home/>}/>
         <Route path = "/header" element = {<Header/>}/>
        </Routes>
    )
}
export default PublicRouter;