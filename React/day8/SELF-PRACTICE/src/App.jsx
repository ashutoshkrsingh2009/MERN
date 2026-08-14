import {Routes,Route,Link} from "react-router-dom"
import Home from "./component/home"
import Experience from "./component/experience"
import Services from "./component/services"
import Error from "./component/error"

function App() {
  
  return (

    <>
<nav>
  <Link to="/Home">HOME</Link>
  <Link to="/Experience">EXPERIENCE</Link>
  <Link to="/Services">SERVICES</Link>

</nav>
  
<Routes>
  <Route path="/home" element={<Home/>}/>
  <Route path="/services" element={<Services/>}/>
  <Route path="/experience" element={<Experience/>}/>
  <Route path="*" element={<Error/>} />

</Routes>
    </>

  )
}

export default App