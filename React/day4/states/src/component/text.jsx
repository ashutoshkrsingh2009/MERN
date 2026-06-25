
import { useState } from "react"

function Text() {
    const [str,setstr]= useState("")
  return (
    <div style={{height:"100px",width:"100vw",border:"2px solid black",backgroundColor:"lavender",display:"flex",justifyContent:"center",flexDirection:"column",alignItems:"center"}}>

    <input style={{height:"30px",width:"30vw"}} onInput={(e)=>{
        setstr(e.target.value )
    }}
    type="text" placeholder="Enter your name"/>

    <h1 style={{height:"40px",width:"30vw",border:"1px solid black"}}>{str}</h1>

    </div>


     
  )
}

export default Text