import { useState,useEffect } from "react"

function Users() {
  const [user,setuser]=useState([])
  useEffect(()=>{
    fetch("https://jsonplaceholder.typicode.com/users")
    .then((res)=>{
  return res.json()
    })
    .then((data)=>{
      setuser(data)
    })
  })
  return (

    <div className="grid grid-cols-4 gap-4">
     {user.map((item)=>{
       return(
      <div className="border bg-red-100">
         <h1>{item.name}</h1>
         <p>{item.username}</p>
      </div>
       )

     })}
    </div>
  )
}

export default Users