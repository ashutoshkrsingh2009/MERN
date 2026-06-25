// function Counter() {
//     let count=0
//   return (
//     <div style={{display:"flex", flexDirection:"column", alignItems:"center",textAlign:"right"}} >

//         <div style={{height:"5vh", width:"15vw", border:"1px solid black"}} >{count}</div>

//         <div style={{height:"10vh",width:"15vw",border:"1px solid black",display:"flex",flexDirection:"row",justifyContent:"space-evenly",alignItems:"center"}} >
//             <button onClick={()=>{
//                 count++
//                 console.log(count);
                
//             }}
//              style={{borderRadius:"50%",
//              height:"5vh"}} 
//              > + 
//              </button>

//             <button onClick={()=>{
//                 count=0
//                  console.log(count);
//             }}
//             style={{borderRadius:"50%"
//             ,height:"5vh"}}
//             > R 
//             </button>

//             <button onClick={()=>{
//                 count--
//                  console.log(count);
//             }}
//             style={{borderRadius:"50%",
//             height:"5vh"}}
//             > - 
//             </button>
//         </div>
//     </div>
    
//   )
// }

// export default Counter



// now by using hook that is useState() to solve counter problem


import { useState } from "react";

function Counter() {
    const [count,setCount] = useState(0);
  return (
    <div style={{display:"flex", flexDirection:"column", alignItems:"center",textAlign:"center",backgroundColor:"lightsteelblue"}} >

        <div style={{height:"5vh", width:"15vw", border:"1px solid black",fontSize:"25px"}} >{count}</div>

        <div style={{height:"10vh",width:"15vw",border:"1px solid black",display:"flex",flexDirection:"row",justifyContent:"space-evenly",alignItems:"center",backgroundColor:"lightcoral"}} >
            <button onClick={()=>{
                // count++
                setCount(count + 1); 
            }}
             style={{borderRadius:"50%",
             height:"7vh",
             backgroundColor:"green",
             width:"3vw",
             fontSize:"35px"
            }} 
             > + 
             </button>

            <button onClick={()=>{
                setCount(0);
            }}
            style={{borderRadius:"50%",
                height:"7vh",
                backgroundColor:"yellow",
                width:"3vw",
                fontSize:"25px"

             }}
            > R 
            </button>

            <button onClick={()=>{
                setCount(count -1)
            }}
            style={{borderRadius:"50%",
            height:"7vh",
            backgroundColor:"red",
            width:"3vw",
            fontSize:"35px"
            }}
            > - 
            </button>
        </div>
    </div>
    
  )
}



export default Counter