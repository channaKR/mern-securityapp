import { BrowserRouter , Route , Routes } from "react-router-dom"
import About from "./Pages/About"
import SigIn from "./Pages/SigIn"
import SignUp from "./Pages/SignUp"
import Home from "./Pages/Home"
import Profile from "./Pages/Profile"
import Navbar from "./Components/Navbar/Navbar"


export default function App(){
  return(
     <BrowserRouter>
     <Navbar/>
      <Routes>

        <Route path="/" element={<Home />}/>
        <Route path="/sigin" element={<SigIn />}/>
        <Route path="/signup" element={<SignUp />}/>
        <Route path="/about" element={<About />}/>
        <Route path="/profile" element={<Profile />}/>
      </Routes>
     
     
     </BrowserRouter>

  )
}