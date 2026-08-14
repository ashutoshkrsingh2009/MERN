// import { Route,Routes } from "react-router-dom"
// import A from "./component/a"
// import B from "./component/b"
// import C from "./component/c"
// import Nav from "./component/nav"
// import Error from "./component/error"
// function App() {
//   return (
//     <div>
//     <Nav/>
//     <Routes>
//       <Route path="/a" element={<A/>}/>
//       <Route path="/b" element={<B/>}/>
//       <Route path="/c" element={<C/>}/>
//       <Route path="*" element={<Error/>} /> 

// import { useState } from "react"

//     </Routes>
//     </div>
//   )
// }

// export default App

// import { useState } from "react"

// function App() {
//   const [count,setcount]= useState(0)
//   return (
    
//     <div>
//       <button onClick={()=>{
//         setcount(count+1)
//       }}>[+]</button>
//       <button onClick={()=>{
//         setcount(0)
//       }}>reset</button>
//       <button onClick={()=>{
//         setcount(count-1)
//       }}>[-]</button>
//       <h1>{count}</h1>
//     </div>
//   )
// }

// export default App

// ----------UseRef hook-------------- 

import Input from "./component/Input"

function App() {
  return (
    <div>
        <Input/>
    </div>
  )
}

export default App