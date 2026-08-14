import React from 'react'
import { Routes,Route,Link } from 'react-router-dom'
import Home from "./component/Home"
import Experience from "./component/Experience"
import Service from "./component/Service"
import Error from './component/Error'



function App() {
  return (
    <div>
      <nav>
        <Link to="/Home">HOME</Link>
        <Link to="/Experience">EXPERIENCE</Link>
         <Link to="/Service">SERVICE</Link>
      </nav>

      <Routes>
        <Route path="/Service" element={<Service/>}/>
        <Route path="/Home" element={<Home/>}/>
        <Route path="/Experience" element={<Experience/>}/>
        <Route path="*" element={<Error/>}/>



      </Routes>
    </div>
  )
}

export default App