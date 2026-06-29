// import { useEffect,useState } from "react"
// const api="https://hp-api.onrender.com/api/characters"

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

import Product from "./product"

function App() {
  return (
    <Product/>
  )
}

export default App