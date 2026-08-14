// import { useState } from 'react'


// function App() {
//   const [count,setCount]=useState(0)
//   return (
//     <div>
//       <h1>{count}</h1>

//       <button onClick={()=>{
//         setCount(count+1)
//       }} >+</button>
//       <button onClick={()=>{
//        setCount(0)
//       }} >r</button>
//       <button onClick={()=>{
//        setCount(count-1)
//       }} >-</button>
//     </div>
//   )
// }

// export default App


// import { useState } from 'react'


// function App() {
//   const [count,setCount]=useState(0)
//   return (
//     <div>
//       <h1>{count}</h1>

//       <button onClick={()=>{
//         setCount(count+1)
//         setCount(count+1)
//         setCount(count+1)
//         setCount(count+1)
//       }} >+</button>
//       <button onClick={()=>{
//        setCount(0)
//       }} >r</button>
//       <button onClick={()=>{
//        setCount(count-1)
//       }} >-</button>
//     </div>
//   )
// }

// export default App


// solve this problem

// import { useState } from 'react'


// function App() {
//   const [count,setCount]=useState(0)
//   return (
//     <div>
//       <h1>{count}</h1>

// <button
//   onClick={() => {
//     setCount(prev => prev + 1);
//     setCount(prev => prev + 1);
//   }}
// >
//   +
// </button>
//       <button onClick={()=>{
//        setCount(0)
//       }} >r</button>
//       <button onClick={()=>{
//        setCount(count-1)
//       }} >-</button>
//     </div>
//   )
// }

// export default App


// by own revision usestate

import React, { useState } from 'react'

function App() {
  const[count,setCount]=useState(0)
  return (
    <div>
      <div>
      <input type="text" value={count} />
      </div>
      <div>
        <button onClick={()=>{
          // setCount(count +1)
          // setCount(count +1)
             setCount((prev)=>{
               return prev +1
             })
             setCount((prev)=>{
               return prev +1
             })


        }} >+</button>
        <button onClick={()=>{
          setCount(0)
        }} >0</button>
        <button onClick={()=>{
          setCount(count -1)
        }} >-</button>
      </div>
    </div>
  )
}

export default App