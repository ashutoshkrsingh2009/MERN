import { useState } from "react";

function Sidebar() {
    const [isMouseInSidebar,setisMouseInsidebar] = useState(false)
  return (
    <aside
        onMouseEnter={()=>{
        setisMouseInsidebar(true)
    }}
        onMouseLeave={()=>{
        setisMouseInsidebar(false)
            
   }}

   
    style={{height:"100vh",
        width: isMouseInSidebar ? "10vw":"5vw",
        border:"2px solid ",
        backgroundColor:"lightblue"

    }} >Sasdfgh
    </aside>
  )
}

export default Sidebar