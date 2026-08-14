import { useEffect,useState } from "react"

function Harrypoter() {
    const [ch,setch]=useState([])
        useEffect(()=>{
        fetch("https://hp-api.onrender.com/api/characters")
        .then((res)=>{
         return res.json()
        })
        .then((item)=>{
          setch(item)
          
        })
    },[])
  return (

    <div className="grid grid-cols-4 gap-4">
        {ch.map((data)=>{
         return(
            <h1 className="border bg-red-100">{data.name}</h1>
        )
        })}
    </div>
  )
}

export default Harrypoter