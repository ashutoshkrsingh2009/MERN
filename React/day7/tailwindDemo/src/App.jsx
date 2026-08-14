
// function App() {
//   return (
//     <div className="bg-red-700">jhgfds</div>
//   )
// }

// export default App

// conditional rendering


// import { useState } from "react"
// function App() {
//   const [show,setshow]=useState(true)
//   const [bg,setbg]=useState(true)
//   return (

//     <div>
//       <button onClick={()=>{
//         setshow(!show)
//         setbg(!bg)
//       }} className="border bg-amber-600"> SHOW / HIDE</button>
//       {
//         show && (
//        <main>hello my name is ashutosh kr singh </main> )
        
//       }

//       {    
//       bg ? <h1 className="border bg-amber-200">apple</h1> : <h1>apple</h1>

//       }
      
//     </div>
//   )
// }

// export default App

import { useState } from "react"
import Apple from "./component/apple"

function App() {
  const [showapple,setshowapple]=useState(true)
  return (
    <div>
      <button onClick={()=>{
        setshowapple(!showapple)
      }}   className="border bg-amber-200">show aple / unshow apple</button>
      {showapple &&       <Apple/>  
 }
    </div>
  )
}

export default App