import { useState,useEffect } from "react"

function Todo() {
const [todo,settodo]=useState([])

useEffect(()=>{
    fetch("https://jsonplaceholder.typicode.com/todos/")
    .then((res)=>{
    return res.json()
    })
    .then((data)=>{
 settodo(data)
    })
},[])

  return (
    <div className="grid grid-cols-4 gap-4">
    {todo.map((item)=>{
        return(
         <div className="border bg-red-100">
         <h1>{item.title}</h1>
         <p>{String(item.completed)}</p>
        </div>
         
        )
    })}
    </div>
  )
}

export default Todo