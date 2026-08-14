import { useSelector, useDispatch } from "react-redux"
import { buycake } from "../utils/redux/store"

import { restockcake } from "../utils/redux/store"
import { useState } from "react"

function Cake() {
    const [q,setQ]=useState(0)
    const dispatch=useDispatch()
    const val=useSelector((store)=>{
     return store.numberofcake
    })
  return (
    <div>
        <h1>number of cake:{val}</h1>

     <input type="number" onChange={(e)=>{
         setQ(e.target.value)
         
     }} />


        <button onClick={()=>{
            dispatch(buycake(q))
        }}>buy cake</button>
     
     <button onClick={()=>{
        dispatch(restockcake())
     }}>
        Restock cake
     </button>



    </div>
  )
}

export default Cake