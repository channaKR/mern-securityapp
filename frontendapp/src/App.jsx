import { BrowserRouter , Route , Routes } from "react-router-dom"
import About from "./Pages/About"
import SigIn from "./Pages/SigIn"
import SignUp from "./Pages/SignUp"


export default function App(){
  return(
     <BrowserRouter>
      <Routes>
        <Route path="/about" element={<About/>}/>
        <Route path="/sigin" element={<SigIn/>}/>
        <Route path="/signup" element={<SignUp/>}/>
      
      
      </Routes>
     
     
     </BrowserRouter>

  )
}