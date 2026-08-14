import { useState } from "react"
import { useRef } from "react"
function Input() {
  const inputref=useRef()
  const [text,settext]=useState("")
  return (
    <div>
        <input ref={inputref} onInput={()=>{
        
        }} type="text" />
        <button onClick={()=>{
          
         settext(inputref.current.value)            
          
        }}>Submit</button>
        <h1>{text}</h1>
    </div>
  )
}

export default Input