import { useEffect, useState } from "react"

function Apple() {
       const [count,setcount]=useState(0)

    useEffect(()=>{
        console.log("apple mounted");  
              const id=setInterval(()=>{
        console.log("ad");
        
      },3000)
           return()=>{
      clearInterval(id)
      console.log("apple unmounted");
      
     }

    },[count])

      


  return (
  

    <div>
        <div>apple</div>
        <button onClick={()=>{
            setcount(count +1)
        }} >+</button>
        <h1>{count}</h1>
    </div>
  )
}

export default Apple