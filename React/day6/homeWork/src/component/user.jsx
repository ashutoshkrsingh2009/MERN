import React from 'react'
import { useState, useEffect } from 'react'

const User=()=>{
  const [users,setUsers]=useState([])

  useEffect(()=>{
    fetch("https://jsonplaceholder.typicode.com/users")
    .then((res)=>{
       return res.json()
    })
    .then((d)=>{
        setUsers(d)
        
    })
  },[])

    return (
         <>
         
         <div style={{display:"grid",gridTemplateColumns:"1fr 1fr 1fr"}}>
           {users.map((item)=>{
               return(
                <div style={{ display:"flex", flexDirection:"column", border:"1px solid black",height:"300px",width:"300px",boxSizing:"border-box",overflowWrap:"breakWord"}}>
                <h1>{item.name}</h1>
                <h1>{item.username}</h1>
                <h1>{item.email}</h1>
                <h1>{item.address.city}</h1>
                <h1>{item.address.zipcode}</h1>


                </div>
                

               )
           })}
         </div>
         
         
         </>
    )
}

export default User