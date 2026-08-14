
// import Calculator from "./component/calculator"

// function App() {
//   return (
//     <Calculator/>
//   )
// }

// export default App








// import Form from "./component/form"
// function App() {
//   return (
//     <Form/>
  
//   )
// }

// export default App




// import { useState } from "react"
// import Left from "./component/left"
// import Right from "./component/right"
// function App() {
//   const[val,setval]=useState("")
//   return (
//     <div style={{display:"flex",gap:"20px"}}>
//       <Left val={val} setval={setval} />
//       <Right val={val} setval={setval} />
//     </div>
     
//   ) 
// }

// export default App

import { useState } from "react"
import Navbar from "./component/Dark/light/Navbar"
import Main from "./component/Dark/light/main"

function App() {
  const[mode,setmode]=useState(false)
  return (
    <div>
       <Navbar mode={mode} setmode={setmode} />
       <Main mode={mode} setmode={setmode}/>
    </div>
  )
}

export default App