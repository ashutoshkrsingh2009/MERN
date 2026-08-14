// import { useEffect,useState } from "react"
// const api="https://hp-api.onrender.com/api/characters"

import { useEffect } from "react"
import { useState } from "react"

// const Harry=()=>{
      
//   const[data,setData]=useState([])

// useEffect(()=>{
//   fetch(api)
//   .then((res)=>{
//     return res.json()
//   }).then((d)=>{
//     setData(d)
//   })
// },[])

// return(
// <>

// <h1>HARRY POTTER CHARACTERIST</h1>

// <div>
// {data.map((item)=>{
//   return <h1>{item.name}</h1>
// })}
// </div>

// </>
// )

// }

// export default Harry


// ---------by own useeffect............//

// import { useState,useEffect } from 'react'

// function App() {
//   const[data,setdata]=useState([])
//   useEffect(()=>{
//     fetch("https://hp-api.onrender.com/api/characters"
// ).then((res)=>{
// return res.json()
// }).then((d)=>{
//   setdata(d)
// })
//   },[])
  
//   return (
//     <div>
//       {data.map((item)=>{
//      return <h1>{item.name}</h1>
//       })}
//     </div>
//   )
// }

// export default App


//------ three case of use effect------//

//----------without depedency array---------//

// function App() {
//   useEffect(()=>{
//     console.log("uc chala");
    
//   })
//   const[count,setcount]=useState(0)
//   console.log(count);
  
//   return (
//     <div>
//       <input type="text" value={count} />
//       <button onClick={()=>{
//         setcount(count+1)
//       }}>+</button>
//     </div>
//   )
// }

// export default App




//----------with depedency array---------//

// function App() {
//   useEffect(()=>{
//     console.log("uc chala");
    
//   },[])
//   const[count,setcount]=useState(0)
//   console.log(count);
  
//   return (
//     <div>
//       <input type="text" value={count} />
//       <button onClick={()=>{
//         setcount(count+1)
//       }}>+</button>
//     </div>
//   )
// }

// export default App



//------ three case of use effect------//

//----------with extra state depedency array---------//

// function App() {

//   const[count,setcount]=useState(0)
//   const[text,settext]=useState("")
//   console.log(count);
//   console.log(text);

//     useEffect(()=>{
//     console.log("uc chala");
    
//   },[text])
  
  
//   return (
//     <div>
//       <input type="text" value={count} />
//       <button onClick={()=>{
//         setcount(count+1)
//       }}>+</button>

// <h1>{text}</h1>
//       <input type="text" onInput={(e)=>{
//        settext(e.target.value)
//       }} />
//     </div>
//   )
// }

// export default App






















import Product from "./product"

function App() {
  return (
    <Product/>
  )
}

export default App  