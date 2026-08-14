import { useRef } from "react"
import { useDispatch } from "react-redux"
import { additem } from "../utils/store"

function Form() {
    const ipRef=useRef()
   const dispatch= useDispatch()
  return (
    <div>
        <input ref={ipRef} type="text" />
        <button onClick={()=>{
          dispatch(additem(ipRef.current.value))
          ipRef.current.value=""
        }}>Add item</button>
    </div>
  )
}

export default Form