import { useEffect } from "react";
import { useState } from "react";
  export default function usecustomhook(val=0)
  {
    const [count,setCount]= useState(val)

    const increment=()=>{
        setCount(count+1)}
    const decrement=()=>{
        setCount(count-1) } 
    const reset=()=>{
        setCount(val)              
    }
    useEffect(()=>{
        alert(`New updated count is ${count}`)
    })
    return{
        count,increment,decrement,reset
    }
 }